import { createContext, useState, useContext } from "react";
import roomsData from "../data/rooms.json";

interface Device {
  name: string;
  status: "online" | "offline";
}

interface Room {
  room_number: string;
  devices: string[];
}

interface Floor {
  number: number;
  rooms: Room[];
}

interface Building {
  name: string;
  floors: Floor[];
}

interface RoomContextValue {
  buildings: Building[];
  selectedBuilding: string;
  selectedFloor: number;
  selectedRoom: string;
  selectBuilding: (buildingName: string) => void;
  selectFloor: (floorNumber: number) => void;
  selectRoom: (roomNumber: string) => void;
  getCurrentRoom: () => Room | undefined;
  getAvailableBuildings: () => string[];
  getAvailableFloors: (buildingName: string) => number[];
  getAvailableRooms: (buildingName: string, floorNumber: number) => string[];
}

const RoomContext = createContext<RoomContextValue | undefined>(undefined);

export const RoomProvider = ({ children }: { children: any }) => {
  const buildings = roomsData.building as Building[];

  const [selectedBuilding, setSelectedBuilding] = useState<string>(
    buildings.length > 0 ? buildings[0].name : ""
  );

  const [selectedFloor, setSelectedFloor] = useState<number>(
    buildings.length > 0 && buildings[0].floors.length > 0
      ? buildings[0].floors[0].number
      : 1
  );

  const [selectedRoom, setSelectedRoom] = useState<string>(
    buildings.length > 0 &&
      buildings[0].floors.length > 0 &&
      buildings[0].floors[0].rooms.length > 0
      ? buildings[0].floors[0].rooms[0].room_number
      : ""
  );

  const getAvailableBuildings = (): string[] => {
    return buildings.map((building) => building.name);
  };

  const getAvailableFloors = (buildingName: string): number[] => {
    const building = buildings.find((b) => b.name === buildingName);
    return building ? building.floors.map((floor) => floor.number) : [];
  };

  const getAvailableRooms = (
    buildingName: string,
    floorNumber: number
  ): string[] => {
    const building = buildings.find((b) => b.name === buildingName);
    if (!building) return [];

    const floor = building.floors.find((f) => f.number === floorNumber);
    return floor ? floor.rooms.map((room) => room.room_number) : [];
  };

  const selectBuilding = (buildingName: string) => {
    setSelectedBuilding(buildingName);

    const building = buildings.find((b) => b.name === buildingName);
    if (building && building.floors.length > 0) {
      const newFloor = building.floors[0].number;
      setSelectedFloor(newFloor);

      if (building.floors[0].rooms.length > 0) {
        setSelectedRoom(building.floors[0].rooms[0].room_number);
      } else {
        setSelectedRoom("");
      }
    } else {
      setSelectedFloor(1);
      setSelectedRoom("");
    }
  };

  const selectFloor = (floorNumber: number) => {
    setSelectedFloor(floorNumber);

    const building = buildings.find((b) => b.name === selectedBuilding);
    if (building) {
      const floor = building.floors.find((f) => f.number === floorNumber);
      if (floor && floor.rooms.length > 0) {
        setSelectedRoom(floor.rooms[0].room_number);
      } else {
        setSelectedRoom("");
      }
    } else {
      setSelectedRoom("");
    }
  };

  const selectRoom = (roomNumber: string) => {
    setSelectedRoom(roomNumber);
  };

  const getCurrentRoom = (): Room | undefined => {
    const building = buildings.find((b) => b.name === selectedBuilding);
    if (!building) return undefined;

    const floor = building.floors.find((f) => f.number === selectedFloor);
    if (!floor) return undefined;

    return floor.rooms.find((r) => r.room_number === selectedRoom);
  };

  const value: RoomContextValue = {
    buildings,
    selectedBuilding,
    selectedFloor,
    selectedRoom,
    selectBuilding,
    selectFloor,
    selectRoom,
    getCurrentRoom,
    getAvailableBuildings,
    getAvailableFloors,
    getAvailableRooms,
  };

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};

export const useRoom = () => {
  const context = useContext(RoomContext);
  if (context === undefined) {
    throw new Error("useRoom must be used within a RoomProvider");
  }
  return context;
};
