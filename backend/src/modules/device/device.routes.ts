import { FastifyInstance } from "fastify";
import {
  createDeviceHandler,
  getDevicesHandler,
  getDevicesByRoomIdHandler,
  updateDeviceStatusHandler,
  deleteDeviceHandler,
} from "./device.controller";
import { $ref } from "./device.schema";

async function deviceRoutes(server: FastifyInstance) {
  server.get("/", getDevicesHandler);

  server.get("/room/:roomId", getDevicesByRoomIdHandler);

  server.post("/", createDeviceHandler);

  server.patch("/:deviceId/status", updateDeviceStatusHandler);

  server.delete("/:deviceId", deleteDeviceHandler);
}

export default deviceRoutes;
