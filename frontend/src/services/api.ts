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