import { FastifyRequest, FastifyReply } from "fastify";
import { DeviceInput, DeviceRoomInput } from "./device.schema";
import {
  createDevice,
  getDevices,
  getDevicesByRoomId,
  updateDeviceStatus,
  deleteDevice,
  connectDeviceToRoom,
  disconnectDeviceFromRoom,
  setTemperature,
  setLightBrightness,
  getDevicesByType,
} from "./device.services";
import { DEVICETYPE } from "../../generated/prisma";

export async function createDeviceHandler(
  request: FastifyRequest<{ Body: DeviceInput }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const device = await createDevice(body);
    return reply.code(201).send(device);
  } catch (error) {
    console.error("Error creating device:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function getDevicesHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const devices = await getDevices();
    return reply.code(200).send(devices);
  } catch (error) {
    console.error("Error fetching devices:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function getDevicesByRoomIdHandler(
  request: FastifyRequest<{ Params: { roomId: string } }>,
  reply: FastifyReply
) {
  const { roomId } = request.params;

  try {
    const devices = await getDevicesByRoomId(roomId);
    return reply.code(200).send(devices);
  } catch (error) {
    console.error("Error fetching devices by room ID:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function updateDeviceStatusHandler(
  request: FastifyRequest<{
    Params: { deviceId: string };
    Body: { status: string };
  }>,
  reply: FastifyReply
) {
  const { deviceId } = request.params;
  const { status } = request.body;

  try {
    const device = await updateDeviceStatus(deviceId, status);
    return reply.code(200).send(device);
  } catch (error) {
    console.error("Error updating device status:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Device not found" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function deleteDeviceHandler(
  request: FastifyRequest<{ Params: { deviceId: string } }>,
  reply: FastifyReply
) {
  const { deviceId } = request.params;

  try {
    await deleteDevice(deviceId);
    return reply.code(204).send();
  } catch (error) {
    console.error("Error deleting device:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Device not found" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function connectDeviceToRoomHandler(
  request: FastifyRequest<{ Body: DeviceRoomInput }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const connection = await connectDeviceToRoom(body);
    return reply.code(201).send(connection);
  } catch (error) {
    console.error("Error connecting device to room:", error);

    if ((error as any).code === "P2002") {
      return reply
        .code(409)
        .send({ error: "Device is already connected to this room" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function disconnectDeviceFromRoomHandler(
  request: FastifyRequest<{ Params: { deviceId: string; roomId: string } }>,
  reply: FastifyReply
) {
  const { deviceId, roomId } = request.params;

  try {
    await disconnectDeviceFromRoom(deviceId, roomId);
    return reply.code(204).send();
  } catch (error) {
    console.error("Error disconnecting device from room:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Connection not found" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function getDevicesByTypeHandler(
  request: FastifyRequest<{ Params: { type: DEVICETYPE } }>,
  reply: FastifyReply
) {
  const { type } = request.params;

  try {
    const devices = await getDevicesByType(type);
    return reply.code(200).send(devices);
  } catch (error) {
    console.error("Error fetching devices by type:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function setLightBrightnessHandler(
  request: FastifyRequest<{
    Params: { deviceId: string };
    Body: { brightness: number };
  }>,
  reply: FastifyReply
) {
  const { deviceId } = request.params;
  const { brightness } = request.body;

  try {
    const device = await setLightBrightness(deviceId, brightness);
    return reply.code(200).send(device);
  } catch (error) {
    console.error("Error setting light brightness:", error);

    if ((error as Error).message === "Device is not a light") {
      return reply.code(400).send({ error: "Device is not a light" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function setTemperatureHandler(
  request: FastifyRequest<{
    Params: { deviceId: string };
    Body: { temperature: number };
  }>,
  reply: FastifyReply
) {
  const { deviceId } = request.params;
  const { temperature } = request.body;

  try {
    const device = await setTemperature(deviceId, temperature);
    return reply.code(200).send(device);
  } catch (error) {
    console.error("Error setting thermostat temperature:", error);

    if ((error as Error).message === "Device is not a thermostat") {
      return reply.code(400).send({ error: "Device is not a thermostat" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}
