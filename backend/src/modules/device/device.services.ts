import { DEVICETYPE } from "../../generated/prisma";
import prisma from "../../utils/prisma";
import { DeviceInput, DeviceRoomInput } from "./device.schema";

export async function createDevice(input: DeviceInput) {
  const { name, status, type } = input;

  const device = await prisma.device.create({
    data: {
      name,
      status,
      type,
    },
  });

  return device;
}

export async function getDevices() {
  const devices = await prisma.device.findMany({
    include: {
      rooms: {
        include: {
          room: true,
        },
      },
    },
  });

  return devices;
}

export async function getDevicesByRoomId(roomId: string) {
  const devices = await prisma.device.findMany({
    where: {
      rooms: {
        some: {
          roomId,
        },
      },
    },
    include: {
      rooms: {
        include: {
          room: true,
        },
      },
    },
  });

  return devices;
}

export async function updateDeviceStatus(deviceId: string, status: string) {
  const device = await prisma.device.update({
    where: {
      id: deviceId,
    },
    data: {
      status,
    },
  });

  return device;
}

export async function deleteDevice(deviceId: string) {
  const device = await prisma.device.delete({
    where: {
      id: deviceId,
    },
  });

  return device;
}

export async function connectDeviceToRoom(input: DeviceRoomInput) {
  const { deviceId, roomId } = input;

  const deviceRoom = await prisma.deviceRoom.create({
    data: {
      deviceId,
      roomId,
    },
    include: {
      device: true,
      room: true,
    },
  });

  return deviceRoom;
}

export async function disconnectDeviceFromRoom(
  deviceId: string,
  roomId: string
) {
  const deviceRoom = await prisma.deviceRoom.delete({
    where: {
      deviceId_roomId: {
        deviceId,
        roomId,
      },
    },
  });

  return deviceRoom;
}

export async function getDevicesByType(type: DEVICETYPE) {
  const devices = await prisma.device.findMany({
    where: {
      type,
    },
    include: {
      rooms: {
        include: {
          room: true,
        },
      },
    },
  });

  return devices;
}

export async function setLightBrightness(deviceId: string, brightness: number) {
  // First check if device is a light
  const device = await prisma.device.findUnique({
    where: { id: deviceId },
  });

  if (!device || device.type !== "LIGHT") {
    throw new Error("Device is not a light");
  }

  // Update light status with brightness information
  // This might involve parsing and updating your status field
  // or adding dedicated properties fields
  return prisma.device.update({
    where: { id: deviceId },
    data: {
      status: JSON.stringify({
        ...JSON.parse(device.status || "{}"),
        brightness,
      }),
    },
  });
}

// For thermostats
export async function setTemperature(deviceId: string, temperature: number) {
  const device = await prisma.device.findUnique({
    where: { id: deviceId },
  });

  if (!device || device.type !== "THERMOSTAT") {
    throw new Error("Device is not a thermostat");
  }

  return prisma.device.update({
    where: { id: deviceId },
    data: {
      status: JSON.stringify({
        ...JSON.parse(device.status || "{}"),
        temperature,
      }),
    },
  });
}
