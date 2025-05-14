import { FastifyRequest, FastifyReply } from "fastify";
import {
  createDevice,
  getDevices,
  getDevicesByRoomId,
  updateDeviceStatus,
  deleteDevice,
} from "./device.services";
import { DeviceInput } from "./device.schema";

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
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function deleteDeviceHandler(
  request: FastifyRequest<{ Params: { deviceId: string } }>,
  reply: FastifyReply
) {
  const { deviceId } = request.params;

  try {
    const device = await deleteDevice(deviceId);
    return reply.code(200).send(device);
  } catch (error) {
    console.error("Error deleting device:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}
