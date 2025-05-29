export enum DeviceType {
  LIGHT = "light",
  THERMOSTAT = "thermostat",
  LOCK = "lock",
  CAMERA = "camera",
  SPEAKER = "speaker",
  BLINDS = "blinds",
  FAN = "fan",
  OUTLET = "outlet",
  OTHER = "other",
  // Add more device types as needed
}

export interface DeviceSetting {
  deviceId: string;
  property: string;
  value: any;
}

export interface Device {
  id: string;
  name: string;
  status: string; // Changed from boolean to string to match schema
  // Note: many-to-many relationship with rooms
  rooms?: DeviceRoom[]; // Optional field for populated relations

  // These don't exist in the schema:
  type?: DeviceType; // Make optional or remove if not needed
  additionalProperties?: {
    brightness?: number;
    temperature?: number;
    color?: string;
    level?: number;
  };
}

export interface DeviceRoom {
  deviceId: string;
  roomId: string;
  device?: Device; // Optional for populated relation
  room?: Room; // Optional for populated relation
}

export interface Scene {
  id: string;
  name: string;
  roomId: string;
  deviceSettings: DeviceSetting[];
  icon?: string; // Optional icon name for the scene
  description?: string; // Optional description
}

export interface Room {
  id: string;
  name: string;
  floorId: string;
  floor?: Floor; // Optional for populated relation
  devices?: DeviceRoom[]; // Changed to match many-to-many schema
}

export interface Floor {
  id: string;
  number: number; // Changed from name to number to match schema
  buildingId: string;
  building?: Building; // Optional for populated relation
  rooms?: Room[]; // Optional for populated relation
}

export interface Building {
  id: string;
  name: string;
  floors?: Floor[]; // Optional for populated relation
}

// Keep your other interfaces like Scene and enums
