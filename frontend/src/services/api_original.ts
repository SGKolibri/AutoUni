// OFFLINE VERSION - Using mock data instead of HTTP calls
import * as offlineService from "./offlineService";
import type {
  Building,
  Floor,
  Room,
  Device,
  DeviceRoom,
  Automation,
  Scene,
} from "../types/index";

// Building endpoints
export const getBuildings = async (): Promise<Building[]> => {
  return offlineService.getBuildings();
};

export const createBuilding = async (
  buildingData: Omit<Building, "id">
): Promise<Building> => {
  return offlineService.createBuilding(buildingData);
};

export const updateBuilding = async (
  id: string,
  buildingData: Partial<Building>
): Promise<Building> => {
  return offlineService.updateBuilding(id, buildingData);
};

export const deleteBuilding = async (id: string): Promise<void> => {
  return offlineService.deleteBuilding(id);
};

// Floor endpoints
export const getFloors = async (): Promise<Floor[]> => {
  return offlineService.getFloors();
};

export const createFloor = async (
  floorData: Omit<Floor, "id">
): Promise<Floor> => {
  return offlineService.createFloor(floorData);
};

export const updateFloor = async (
  id: string,
  floorData: Partial<Floor>
): Promise<Floor> => {
  return offlineService.updateFloor(id, floorData);
};

export const deleteFloor = async (id: string): Promise<void> => {
  return offlineService.deleteFloor(id);
};

export const getFloorsByBuildingId = async (buildingId: string): Promise<Floor[]> => {
  return offlineService.getFloorsByBuildingId(buildingId);
};

// Room endpoints  
export const getRooms = async (): Promise<Room[]> => {
  return offlineService.getRooms();
};

export const createRoom = async (
  roomData: Omit<Room, "id">
): Promise<Room> => {
  return offlineService.createRoom(roomData);
};

export const updateRoom = async (
  id: string,
  roomData: Partial<Room>
): Promise<Room> => {
  return offlineService.updateRoom(id, roomData);
};

export const deleteRoom = async (id: string): Promise<void> => {
  return offlineService.deleteRoom(id);
};

export const getRoomsByFloorId = async (floorId: string): Promise<Room[]> => {
  return offlineService.getRoomsByFloorId(floorId);
};

// Device endpoints
export const getDevices = async (): Promise<Device[]> => {
  return offlineService.getDevices();
};

export const createDevice = async (
  deviceData: Omit<Device, "id">
): Promise<Device> => {
  return offlineService.createDevice(deviceData);
};

export const updateDevice = async (
  id: string,
  deviceData: Partial<Device>
): Promise<Device> => {
  return offlineService.updateDevice(id, deviceData);
};

export const deleteDevice = async (id: string): Promise<void> => {
  return offlineService.deleteDevice(id);
};

export const getDevicesByRoomId = async (roomId: string): Promise<Device[]> => {
  return offlineService.getDevicesByRoomId(roomId);
};

// Device Room endpoints
export const getDeviceRooms = async (): Promise<DeviceRoom[]> => {
  return offlineService.getDeviceRooms();
};

export const createDeviceRoom = async (
  deviceRoomData: DeviceRoom
): Promise<DeviceRoom> => {
  return offlineService.createDeviceRoom(deviceRoomData);
};

export const deleteDeviceRoom = async (deviceId: string, roomId: string): Promise<void> => {
  return offlineService.deleteDeviceRoom(deviceId, roomId);
};

// Automation endpoints
export const getAutomations = async (): Promise<Automation[]> => {
  return offlineService.getAutomations();
};

export const createAutomation = async (
  automationData: Omit<Automation, "id">
): Promise<Automation> => {
  return offlineService.createAutomation(automationData);
};

export const updateAutomation = async (
  id: string,
  automationData: Partial<Automation>
): Promise<Automation> => {
  return offlineService.updateAutomation(id, automationData);
};

export const deleteAutomation = async (id: string): Promise<void> => {
  return offlineService.deleteAutomation(id);
};

export const toggleAutomation = async (id: string): Promise<Automation> => {
  return offlineService.toggleAutomation(id);
};

// Scene endpoints  
export const getScenes = async (): Promise<Scene[]> => {
  return offlineService.getScenes();
};

export const createScene = async (
  sceneData: Omit<Scene, "id">
): Promise<Scene> => {
  return offlineService.createScene(sceneData);
};

export const updateScene = async (
  id: string,
  sceneData: Partial<Scene>
): Promise<Scene> => {
  return offlineService.updateScene(id, sceneData);
};

export const deleteScene = async (id: string): Promise<void> => {
  return offlineService.deleteScene(id);
};

export const activateScene = async (id: string): Promise<void> => {
  return offlineService.activateScene(id);
};
    const floor = await post<Floor>("/api/floor/", floorData);
    return floor;
  } catch (error) {
    throw new Error("Failed to create floor");
  }
};

// Room endpoints
export const getRooms = async (): Promise<Room[]> => {
  try {
    const { get } = useApi();
    const rooms = await get<Room[]>("/api/room/");
    return rooms;
  } catch (error) {
    throw new Error("Failed to fetch rooms");
  }
};

export const createRoom = async (roomData: Omit<Room, "id">): Promise<Room> => {
  try {
    const { post } = useApi();
    const room = await post<Room>("/api/room/", roomData);
    return room;
  } catch (error) {
    throw new Error("Failed to create room");
  }
};

export const getRoomsByFloor = async (floorId: string): Promise<Room[]> => {
  try {
    const { get } = useApi();
    const rooms = await get<Room[]>(`/api/room/floor/${floorId}`);
    return rooms;
  } catch (error) {
    throw new Error(`Failed to fetch rooms for floor ${floorId}`);
  }
};

export const getRoomById = async (roomId: string): Promise<Room> => {
  try {
    const { get } = useApi();
    const room = await get<Room>(`/api/room/${roomId}`);
    return room;
  } catch (error) {
    throw new Error(`Failed to fetch room with id ${roomId}`);
  }
};

export const updateRoom = async (
  roomId: string,
  roomData: Partial<Room>
): Promise<Room> => {
  try {
    const { patch } = useApi();
    const room = await patch<Room>(`/api/room/${roomId}`, roomData);
    return room;
  } catch (error) {
    throw new Error(`Failed to update room with id ${roomId}`);
  }
};

export const deleteRoom = async (roomId: string): Promise<void> => {
  try {
    const { del } = useApi();
    await del(`/api/room/${roomId}`);
  } catch (error) {
    throw new Error(`Failed to delete room with id ${roomId}`);
  }
};

// Device endpoints
export const getDevices = async (): Promise<Device[]> => {
  try {
    const { get } = useApi();
    const devices = await get<Device[]>("/api/device/");
    console.log("Fetched devices:", devices);
    return devices;
  } catch (error) {
    throw new Error("Failed to fetch devices");
  }
};

export const createDevice = async (
  deviceData: Omit<Device, "id">
): Promise<Device> => {
  try {
    const { post } = useApi();
    const device = await post<Device>("/api/device/", deviceData);
    return device;
  } catch (error) {
    throw new Error("Failed to create device");
  }
};

export const getDevicesByRoom = async (roomId: string): Promise<Device[]> => {
  try {
    const { get } = useApi();
    const devices = await get<Device[]>(`/api/device/room/${roomId}`);
    return devices;
  } catch (error) {
    throw new Error(`Failed to fetch devices for room ${roomId}`);
  }
};

export const updateDeviceStatus = async (
  deviceId: string,
  status: string
): Promise<Device> => {
  try {
    console.log("Updating device status:", deviceId, status);
    const { put } = useApi();
    const device = await put<Device>(`/api/device/${deviceId}/status`, {
      status: status,
    });
    console.log("Updated device status:", device);
    return device;
  } catch (error) {
    throw new Error(`Failed to update status for device ${deviceId}`);
  }
};

export const deleteDevice = async (deviceId: string): Promise<void> => {
  try {
    const { del } = useApi();
    await del(`/api/device/${deviceId}`);
  } catch (error) {
    throw new Error(`Failed to delete device with id ${deviceId}`);
  }
};

export const connectDeviceToRoom = async (
  deviceId: string,
  roomId: string
): Promise<DeviceRoom> => {
  try {
    const { post } = useApi();
    const connection = await post<DeviceRoom>("/api/device/connect", {
      deviceId,
      roomId,
    });
    return connection;
  } catch (error) {
    throw new Error(`Failed to connect device ${deviceId} to room ${roomId}`);
  }
};

export const disconnectDeviceFromRoom = async (
  deviceId: string,
  roomId: string
): Promise<void> => {
  try {
    const { del } = useApi();
    await del(`/api/device/disconnect/${deviceId}/${roomId}`);
  } catch (error) {
    throw new Error(
      `Failed to disconnect device ${deviceId} from room ${roomId}`
    );
  }
};

const mockAutomations: Automation[] = [
  {
    id: "1",
    name: "Morning Routine",
    enabled: true,
    trigger: {
      type: "time",
      config: {
        time: "07:00",
      },
    },
    actions: [
      {
        type: "scene",
        targetId: "2", // Morning scene
      },
    ],
    schedule: {
      repeat: "weekly",
      scheduleDays: [
        { day: ScheduleDays.MONDAY }, // SEGUNDA
        { day: ScheduleDays.TUESDAY }, // TERCA
        { day: ScheduleDays.WEDNESDAY }, // QUARTA
        { day: ScheduleDays.THURSDAY }, // QUINTA
        { day: ScheduleDays.FRIDAY }, // SEXTA
      ],
      time: "07:00",
    },
  },
];

export const getAutomations = async (): Promise<Automation[]> => {
  try {
    // Simulate API call
    const { get } = useApi();
    const automations = await get<Automation[]>("/api/automation/");
    console.log("Fetched automations:", automations);
    if (automations && automations.length > 0) {
      return automations;
    }
    // If no automations are found, return mock data
    return mockAutomations;
  } catch (error) {
    throw new Error("Failed to fetch automations");
  }
};

export const createAutomation = (
  automation: Omit<Automation, "id">
): Promise<Automation> => {
  const newAutomation = {
    ...automation,
    id: (mockAutomations.length + 1).toString(),
  };
  mockAutomations.push(newAutomation);
  return Promise.resolve(newAutomation);
};

export const createAutomationBackend = async (
  automation: Omit<Automation, "id">
): Promise<Automation> => {
  try {
    const { post } = useApi();
    const createdAutomation = await post<Automation>(
      "/api/automation/",
      automation
    );
    return createdAutomation;
  } catch (error) {
    throw new Error("Failed to create automation");
  }
};

export const updateAutomation = (
  id: string,
  updates: Partial<Automation>
): Promise<Automation> => {
  const automation = mockAutomations.find((a) => a.id === id);
  if (!automation) {
    return Promise.reject(new Error("Automation not found"));
  }

  Object.assign(automation, updates);
  return Promise.resolve(automation);
};

export const deleteAutomation = (id: string): Promise<boolean> => {
  const index = mockAutomations.findIndex((a) => a.id === id);
  if (index === -1) {
    return Promise.resolve(false);
  }

  mockAutomations.splice(index, 1);
  return Promise.resolve(true);
};
