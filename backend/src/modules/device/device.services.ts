import prisma from "../../utils/prisma";
import { DeviceInput } from "./device.schema";

export async function createDevice(input: DeviceInput) {
  const { name, roomId, status } = input;

  const device = await prisma.device.create({
    data: {
      name,
      roomId,
      status,
    },
  });

  return device;
}

export async function getDevices() {
  const devices = await prisma.device.findMany({
    include: {
      room: {
        include: {
          floor: {
            include: {
              building: true,
            },
          },
        },
      },
    },
  });

  return devices;
}

export async function getDevicesByRoomId(roomId: string) {
  const devices = await prisma.device.findMany({
    where: {
      roomId,
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
