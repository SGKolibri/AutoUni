export enum DeviceType {
  LIGHT = "light",
  THERMOSTAT = "thermostat",
  LOCK = "lock",
  CAMERA = "camera",
  SPEAKER = "speaker",
  FAN = "fan",
  OUTLET = "outlet",
  PRINTER = "printer",
  SENSOR = "sensor",
  WORKSTATION = "workstation",
  PROJECTOR = "projector",
  SWITCH = "switch",
  PLUG = "plug",
  AIR = "air", // For air conditioning or air purifiers
  ROUTER = "router", // For network devices
  COMPUTER = "computer", // For general computers
  OTHER = "other",
}

export interface DeviceSetting {
  deviceId: string;
  property: string;
  value: any;
}

export enum deviceStatus {
  AVAILABLE = "available",
  IN_USE = "in_use",
  ACTIVE = "active",
}

export interface Device {
  id: string;
  name: string;
  status: deviceStatus; // Changed from boolean to string to match schema
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

export enum ScheduleDays {
  SUNDAY = "DOMINGO",
  MONDAY = "SEGUNDA",
  TUESDAY = "TERCA",
  WEDNESDAY = "QUARTA",
  THURSDAY = "QUINTA",
  FRIDAY = "SEXTA",
  SATURDAY = "SABADO",
}

export interface Automation {
  id: string;
  name: string;
  enabled: boolean;
  trigger: {
    type: "time" | "device" | "scene";
    config: {
      time?: string; // HH:mm format for time triggers
      deviceId?: string; // For device state triggers
      deviceState?: boolean;
      sceneId?: string; // For scene activation triggers
    };
  };
  actions: Array<{
    type: "device" | "scene";
    targetId: string; // Device ID or Scene ID, no caso só device por enquanto
    state?: boolean;
    properties?: {
      brightness?: number;
      temperature?: number;
      level?: number;
    };
  }>;
  schedule?: {
    repeat: "daily" | "weekly" | "once";
    // days?: ScheduleDays[];
    scheduleDays?: Array<{
      id?: string; // Optional mas fica
      day: ScheduleDays;
      scheduleId?: string; // Optional mas fica tbm
    }>;
    time: string; // HH:mm format
  };
}
