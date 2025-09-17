import type {
  Building,
  Floor,
  Room,
  Device,
  DeviceRoom,
  Automation,
  Scene,
} from "../types/index";
import { deviceStatus } from "../types/index";

// Import JSON data
import buildingsData from "../data/building.json";
import floorsData from "../data/floors.json";
import roomsData from "../data/rooms.json";
import devicesData from "../data/devices.json";
import deviceRoomsData from "../data/device-rooms.json";
import automationsData from "../data/automation.json";
import scenesData from "../data/scenes.json";

// Convert JSON data to typed data
const buildings: Building[] = buildingsData.map((building, index) => ({
  id: (index + 1).toString(),
  name: building.name,
}));

const floors: Floor[] = floorsData.map((floor, index) => ({
  id: (index + 1).toString(),
  number: floor.number,
  buildingId: "1", // Default to first building for simplicity
}));

const rooms: Room[] = roomsData.map((room, index) => ({
  id: (index + 1).toString(),
  name: room.name,
  floorId: "1", // Default to first floor for simplicity
}));

const devices: Device[] = devicesData.map((device, index) => ({
  id: (index + 1).toString(),
  name: device.name,
  status: device.status === "available" ? deviceStatus.AVAILABLE : 
          device.status === "in_use" ? deviceStatus.IN_USE : deviceStatus.ACTIVE,
}));

// DeviceRoom has no id, so we'll create an interface that extends it
interface DeviceRoomWithId extends DeviceRoom {
  id: string;
}

const deviceRooms: DeviceRoomWithId[] = Array.isArray(deviceRoomsData) 
  ? deviceRoomsData.map((deviceRoom, index) => ({
      id: (index + 1).toString(),
      deviceId: deviceRoom.deviceId || "1",
      roomId: deviceRoom.roomId || "1",
    }))
  : [];

const automations: Automation[] = Array.isArray(automationsData)
  ? automationsData.map((automation, index) => ({
      id: (index + 1).toString(),
      name: automation.name,
      enabled: automation.enabled,
      trigger: {
        type: automation.trigger.type as "time" | "device" | "scene",
        config: automation.trigger.config,
      },
      actions: automation.actions.map(action => ({
        type: action.type as "device" | "scene",
        targetId: action.targetId,
        state: action.state,
        properties: action.properties,
      })),
    }))
  : [];

const scenes: Scene[] = Array.isArray(scenesData) && scenesData.length > 0
  ? scenesData.map((scene, index) => ({
      id: (index + 1).toString(),
      name: scene.name || `Scene ${index + 1}`,
      description: scene.description || "",
      roomId: "1", // Default to first room for simplicity
      deviceSettings: scene.deviceSettings || [],
    }))
  : [
      {
        id: "1",
        name: "Sala de Aula - Modo Apresentação",
        description: "Configuração otimizada para apresentações",
        roomId: "1", 
        deviceSettings: [],
      },
      {
        id: "2", 
        name: "Laboratório - Modo Prático",
        description: "Configuração para atividades práticas",
        roomId: "1",
        deviceSettings: [],
      }
    ];

// Simulate async operations with delay
const delay = (ms: number = 100) => new Promise(resolve => setTimeout(resolve, ms));

// Building services
export const getBuildings = async (): Promise<Building[]> => {
  await delay();
  return buildings;
};

export const createBuilding = async (buildingData: Omit<Building, "id">): Promise<Building> => {
  await delay();
  const newBuilding: Building = {
    id: (buildings.length + 1).toString(),
    ...buildingData,
  };
  buildings.push(newBuilding);
  return newBuilding;
};

export const updateBuilding = async (id: string, buildingData: Partial<Building>): Promise<Building> => {
  await delay();
  const index = buildings.findIndex(b => b.id === id);
  if (index === -1) throw new Error("Building not found");
  buildings[index] = { ...buildings[index], ...buildingData };
  return buildings[index];
};

export const deleteBuilding = async (id: string): Promise<void> => {
  await delay();
  const index = buildings.findIndex(b => b.id === id);
  if (index === -1) throw new Error("Building not found");
  buildings.splice(index, 1);
};

// Floor services
export const getFloors = async (): Promise<Floor[]> => {
  await delay();
  return floors;
};

export const createFloor = async (floorData: Omit<Floor, "id">): Promise<Floor> => {
  await delay();
  const newFloor: Floor = {
    id: (floors.length + 1).toString(),
    ...floorData,
  };
  floors.push(newFloor);
  return newFloor;
};

export const updateFloor = async (id: string, floorData: Partial<Floor>): Promise<Floor> => {
  await delay();
  const index = floors.findIndex(f => f.id === id);
  if (index === -1) throw new Error("Floor not found");
  floors[index] = { ...floors[index], ...floorData };
  return floors[index];
};

export const deleteFloor = async (id: string): Promise<void> => {
  await delay();
  const index = floors.findIndex(f => f.id === id);
  if (index === -1) throw new Error("Floor not found");
  floors.splice(index, 1);
};

// Room services
export const getRooms = async (): Promise<Room[]> => {
  await delay();
  return rooms;
};

export const createRoom = async (roomData: Omit<Room, "id">): Promise<Room> => {
  await delay();
  const newRoom: Room = {
    id: (rooms.length + 1).toString(),
    ...roomData,
  };
  rooms.push(newRoom);
  return newRoom;
};

export const updateRoom = async (id: string, roomData: Partial<Room>): Promise<Room> => {
  await delay();
  const index = rooms.findIndex(r => r.id === id);
  if (index === -1) throw new Error("Room not found");
  rooms[index] = { ...rooms[index], ...roomData };
  return rooms[index];
};

export const deleteRoom = async (id: string): Promise<void> => {
  await delay();
  const index = rooms.findIndex(r => r.id === id);
  if (index === -1) throw new Error("Room not found");
  rooms.splice(index, 1);
};

// Device services
export const getDevices = async (): Promise<Device[]> => {
  await delay();
  return devices;
};

export const createDevice = async (deviceData: Omit<Device, "id">): Promise<Device> => {
  await delay();
  const newDevice: Device = {
    id: (devices.length + 1).toString(),
    ...deviceData,
  };
  devices.push(newDevice);
  return newDevice;
};

export const updateDevice = async (id: string, deviceData: Partial<Device>): Promise<Device> => {
  await delay();
  const index = devices.findIndex(d => d.id === id);
  if (index === -1) throw new Error("Device not found");
  devices[index] = { ...devices[index], ...deviceData };
  return devices[index];
};

export const deleteDevice = async (id: string): Promise<void> => {
  await delay();
  const index = devices.findIndex(d => d.id === id);
  if (index === -1) throw new Error("Device not found");
  devices.splice(index, 1);
};

// Device Room services
export const getDeviceRooms = async (): Promise<DeviceRoom[]> => {
  await delay();
  return deviceRooms.map(dr => ({ deviceId: dr.deviceId, roomId: dr.roomId }));
};

export const createDeviceRoom = async (deviceRoomData: Omit<DeviceRoom, "id">): Promise<DeviceRoom> => {
  await delay();
  const newDeviceRoom: DeviceRoomWithId = {
    id: (deviceRooms.length + 1).toString(),
    ...deviceRoomData,
  };
  deviceRooms.push(newDeviceRoom);
  return { deviceId: newDeviceRoom.deviceId, roomId: newDeviceRoom.roomId };
};

export const deleteDeviceRoom = async (deviceId: string, roomId: string): Promise<void> => {
  await delay();
  const index = deviceRooms.findIndex(dr => dr.deviceId === deviceId && dr.roomId === roomId);
  if (index === -1) throw new Error("DeviceRoom not found");
  deviceRooms.splice(index, 1);
};

// Automation services
export const getAutomations = async (): Promise<Automation[]> => {
  await delay();
  return automations;
};

export const createAutomation = async (automationData: Omit<Automation, "id">): Promise<Automation> => {
  await delay();
  const newAutomation: Automation = {
    id: (automations.length + 1).toString(),
    ...automationData,
  };
  automations.push(newAutomation);
  return newAutomation;
};

export const updateAutomation = async (id: string, automationData: Partial<Automation>): Promise<Automation> => {
  await delay();
  const index = automations.findIndex(a => a.id === id);
  if (index === -1) throw new Error("Automation not found");
  automations[index] = { ...automations[index], ...automationData };
  return automations[index];
};

export const deleteAutomation = async (id: string): Promise<void> => {
  await delay();
  const index = automations.findIndex(a => a.id === id);
  if (index === -1) throw new Error("Automation not found");
  automations.splice(index, 1);
};

export const toggleAutomation = async (id: string): Promise<Automation> => {
  await delay();
  const index = automations.findIndex(a => a.id === id);
  if (index === -1) throw new Error("Automation not found");
  automations[index].enabled = !automations[index].enabled;
  return automations[index];
};

// Scene services
export const getScenes = async (): Promise<Scene[]> => {
  await delay();
  return scenes;
};

export const createScene = async (sceneData: Omit<Scene, "id">): Promise<Scene> => {
  await delay();
  const newScene: Scene = {
    id: (scenes.length + 1).toString(),
    ...sceneData,
  };
  scenes.push(newScene);
  return newScene;
};

export const updateScene = async (id: string, sceneData: Partial<Scene>): Promise<Scene> => {
  await delay();
  const index = scenes.findIndex(s => s.id === id);
  if (index === -1) throw new Error("Scene not found");
  scenes[index] = { ...scenes[index], ...sceneData };
  return scenes[index];
};

export const deleteScene = async (id: string): Promise<void> => {
  await delay();
  const index = scenes.findIndex(s => s.id === id);
  if (index === -1) throw new Error("Scene not found");
  scenes.splice(index, 1);
};

export const activateScene = async (id: string): Promise<void> => {
  await delay();
  const scene = scenes.find(s => s.id === id);
  if (!scene) throw new Error("Scene not found");
  // Simulate scene activation
  console.log(`Activating scene: ${scene.name}`);
};

// Additional helper functions
export const getRoomsByFloorId = async (floorId: string): Promise<Room[]> => {
  await delay();
  return rooms.filter(room => room.floorId === floorId);
};

export const getDevicesByRoomId = async (roomId: string): Promise<Device[]> => {
  await delay();
  const deviceRoomRelations = deviceRooms.filter(dr => dr.roomId === roomId);
  const deviceIds = deviceRoomRelations.map(dr => dr.deviceId);
  return devices.filter(device => deviceIds.includes(device.id));
};

export const getFloorsByBuildingId = async (buildingId: string): Promise<Floor[]> => {
  await delay();
  return floors.filter(floor => floor.buildingId === buildingId);
};
