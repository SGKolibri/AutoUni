import useApi from "../hooks/useApi";
import type {
  Building,
  Floor,
  Room,
  Device,
  DeviceRoom,
  Automation,
} from "../types/index";
import { ScheduleDays } from "../types/index";

// Building endpoints
export const getBuildings = async (): Promise<Building[]> => {
  try {
    const { get } = useApi();
    const buildings = await get<Building[]>("/api/building/");
    return buildings;
  } catch (error) {
    throw new Error("Failed to fetch buildings");
  }
};

export const createBuilding = async (
  buildingData: Omit<Building, "id">
): Promise<Building> => {
  try {
    const { post } = useApi();
    const building = await post<Building>("/api/building/", buildingData);
    return building;
  } catch (error) {
    throw new Error("Failed to create building");
  }
};

// Floor endpoints
export const getFloors = async (): Promise<Floor[]> => {
  try {
    const { get } = useApi();
    const floors = await get<Floor[]>("/api/floor/");
    return floors;
  } catch (error) {
    throw new Error("Failed to fetch floors");
  }
};

export const createFloor = async (
  floorData: Omit<Floor, "id">
): Promise<Floor> => {
  try {
    const { post } = useApi();
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
