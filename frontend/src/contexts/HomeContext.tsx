import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import * as api from "../services/api";
import { Building, Device, Floor, Room } from "../types";

// Define a Scene interface since it's not provided in the types file
interface Scene {
  id: string;
  name: string;
  roomId: string;
  deviceSettings: any[];
}

interface HomeContextType {
  buildings: Building[];
  floors: Floor[];
  rooms: Room[];
  selectedBuilding: Building | null;
  selectedFloor: Floor | null;
  selectedRoom: Room | null;
  scenes: Scene[];
  isLoading: boolean;
  error: string | null;
  selectBuilding: (buildingId: string) => void;
  selectFloor: (floorId: string) => void;
  selectRoom: (roomId: string) => void;
  toggleDevice: (deviceId: string, currentStatus: string) => Promise<void>;
  updateDeviceProperty: (
    deviceId: string,
    property: string,
    value: any
  ) => Promise<void>;
  activateScene: (sceneId: string) => Promise<void>;
  resetSelection: () => void;
}

/*
{
  buildings,            // List of all buildings
  selectedBuilding,     // Current selected building
  selectedFloor,        // Current selected floor
  selectedRoom,         // Current selected room
  scenes,               // Available scenes for the selected room
  isLoading,            // Loading state indicator
  error,                // Error messages
  selectBuilding,       // Function to select a building
  selectFloor,          // Function to select a floor
  selectRoom,           // Function to select a room
  toggleDevice,         // Function to toggle a device on/off
  updateDeviceProperty, // Function to update a device property
  activateScene,        // Function to activate a scene
  resetSelection        // Function to reset the selection
}
*/

const HomeContext = createContext<HomeContextType | undefined>(undefined);

export const HomeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [buildings, setBuildings] = useState<Building[]>([]);
  const [floors, setFloors] = useState<Floor[]>([]);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [selectedBuilding, setSelectedBuilding] = useState<Building | null>(
    null
  );
  const [selectedFloor, setSelectedFloor] = useState<Floor | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [scenes, setScenes] = useState<Scene[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [buildingsWithRelations, setBuildingsWithRelations] = useState<
    Building[]
  >([]);

  // Load buildings on initial render
  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        setIsLoading(true);
        const data = await api.getBuildings();
        console.log("Fetched buildings:", data);
        setBuildings(data);
        setIsLoading(false);
      } catch (err) {
        setError("Falha ao carregar prédios");
        setIsLoading(false);
      }
    };

    const fetchFloors = async () => {
      try {
        const data = await api.getFloors();
        setFloors(data);
        console.log("Fetched floors:", data);
      } catch (err) {
        setError("Falha ao carregar andares");
      }
    };

    const fetchRooms = async () => {
      try {
        const data = await api.getRooms();
        setRooms(data);
        console.log("Fetched rooms:", data);
      } catch (err) {
        setError("Falha ao carregar salas");
      }
    };

    fetchBuildings();
    fetchFloors();
    fetchRooms();
  }, []);

  useEffect(() => {
    // Skip if any data is missing
    if (buildings.length === 0 || floors.length === 0 || rooms.length === 0)
      return;

    // Create a deep copy of buildings to safely modify
    const enrichedBuildings = buildings.map((building) => ({
      ...building,
      floors: floors
        .filter((floor) => floor.buildingId === building.id)
        .map((floor) => ({
          ...floor,
          rooms: rooms.filter((room) => room.floorId === floor.id),
        })),
    }));

    setBuildingsWithRelations(enrichedBuildings);
    console.log("Buildings with relations:", enrichedBuildings);
  }, [buildings, floors, rooms]);

  // const getScenes = async (roomId: string): Promise<Scene[]> => {
  //   return [];
  // };

  // Load scenes when a room is selected
  useEffect(() => {
    if (selectedRoom) {
      const fetchScenes = async () => {
        try {
          // const data = await getScenes(selectedRoom.id);
          // setScenes(data);
          console.log("Fetching scenes for room:", selectedRoom.id);
        } catch (err) {
          setError("Falha ao carregar cenas");
        }
      };

      fetchScenes();
    } else {
      setScenes([]);
    }
  }, [selectedRoom]);

  const selectBuilding = async (buildingId: string) => {
    try {
      const building =
        buildingsWithRelations.find((b) => b.id === buildingId) || null;
      setSelectedBuilding(building);
      setSelectedFloor(null);
      setSelectedRoom(null);
    } catch (err) {
      setError("Failed to select building");
    }
  };

  const selectFloor = async (floorId: string) => {
    try {
      // Find the floor directly from the floors state
      const floor = floors.find((f) => f.id === floorId) || null;

      // If we have the floor, set it and find its rooms
      if (floor) {
        setSelectedFloor(floor);

        // Add the rooms to the floor if they're not already there
        if (!floor.rooms) {
          floor.rooms = rooms.filter((room) => room.floorId === floor.id);
        }
      }

      setSelectedRoom(null);
    } catch (err) {
      setError("Failed to select floor");
    }
  };

  const selectRoom = async (roomId: string) => {
    try {
      // First check if we already have this room in our state
      let room = rooms.find((r) => r.id === roomId);

      if (!room) {
        // If not found locally, fetch it from the API
        room = await api.getRoomById(roomId);
      }

      // Get devices for this room
      const devices = await api.getDevicesByRoom(roomId);

      // Transform the devices into DeviceRoom structure
      const deviceRooms = devices.map((device) => ({
        deviceId: device.id,
        roomId: roomId,
        device: device,
      }));

      // Set the selected room with the devices
      setSelectedRoom({
        ...room,
        devices: deviceRooms,
      });
    } catch (err) {
      setError(
        `Failed to select room: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  };

  const toggleDevice = async (deviceId: string) => {
    try {
      // Find the device in the selected room
      const deviceRoom = selectedRoom?.devices?.find(
        (d) => d.deviceId === deviceId
      );
      if (!deviceRoom || !deviceRoom.device) {
        throw new Error("Device not found");
      }

      const currentStatus = deviceRoom.device.status;
      const newStatus = currentStatus === "on" ? "off" : "on";

      await api.updateDeviceStatus(deviceId, newStatus);

      // Update local state as before
      if (selectedRoom && selectedRoom.devices) {
        const updatedDevices = selectedRoom.devices.map((dr) => {
          if (dr.deviceId === deviceId && dr.device) {
            return {
              ...dr,
              device: {
                ...dr.device,
                status: newStatus,
              },
            };
          }
          return dr;
        });

        setSelectedRoom({
          ...selectedRoom,
          devices: updatedDevices,
        });
      }
    } catch (err) {
      setError(
        `Failed to toggle device: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  };

  const updateDeviceProperty = async (
    deviceId: string,
    property: string,
    value: any
  ) => {
    try {
      // The api.ts doesn't have an updateDeviceProperty function directly
      // For status updates we can use the existing function:
      if (property === "status") {
        await api.updateDeviceStatus(deviceId, value);
      } else {
        // For other properties, you might need to add an endpoint or handle differently
        // This is just a placeholder
        throw new Error(
          "Updating properties other than status is not implemented"
        );
      }

      // Update the local state
      if (selectedRoom && selectedRoom.devices) {
        const updatedDevices = selectedRoom.devices.map((deviceRoom) => {
          if (deviceRoom.deviceId === deviceId && deviceRoom.device) {
            if (property === "status") {
              return {
                ...deviceRoom,
                device: {
                  ...deviceRoom.device,
                  status: value,
                },
              };
            } else if (deviceRoom.device.additionalProperties) {
              return {
                ...deviceRoom,
                device: {
                  ...deviceRoom.device,
                  additionalProperties: {
                    ...deviceRoom.device.additionalProperties,
                    [property]: value,
                  },
                },
              };
            }
          }
          return deviceRoom;
        });

        setSelectedRoom({
          ...selectedRoom,
          devices: updatedDevices,
        });
      }
    } catch (err) {
      setError(
        `Failed to update device property: ${
          err instanceof Error ? err.message : String(err)
        }`
      );
    }
  };

  // This would need to be implemented based on your scene activation logic
  const activateScene = async (sceneId: string) => {
    try {
      // Placeholder for scene activation
      // You would need to implement this API endpoint

      // Refresh the room to get updated device states
      if (selectedRoom) {
        const room = await api.getRoomById(selectedRoom.id);
        setSelectedRoom(room);
      }
    } catch (err) {
      setError("Failed to activate scene");
    }
  };

  const resetSelection = () => {
    setSelectedBuilding(null);
    setSelectedFloor(null);
    setSelectedRoom(null);
  };

  const value = {
    buildings: buildingsWithRelations,
    floors,
    rooms,
    selectedBuilding,
    selectedFloor,
    selectedRoom,
    scenes,
    isLoading,
    error,
    selectBuilding,
    selectFloor,
    selectRoom,
    toggleDevice,
    updateDeviceProperty,
    activateScene,
    resetSelection,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};

export const useHome = (): HomeContextType => {
  const context = useContext(HomeContext);
  if (context === undefined) {
    throw new Error("useHome must be used within a HomeProvider");
  }
  return context;
};
