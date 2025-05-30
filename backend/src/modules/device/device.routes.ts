import { FastifyInstance } from "fastify";
import {
  createDeviceHandler,
  getDevicesHandler,
  getDevicesByRoomIdHandler,
  updateDeviceStatusHandler,
  deleteDeviceHandler,
  connectDeviceToRoomHandler,
  disconnectDeviceFromRoomHandler,
} from "./device.controller";

async function deviceRoutes(server: FastifyInstance) {
  server.get("/", getDevicesHandler);

  server.get("/room/:roomId", getDevicesByRoomIdHandler);

  server.post("/", createDeviceHandler);

  server.put("/:deviceId/status", updateDeviceStatusHandler);

  server.delete("/:deviceId", deleteDeviceHandler);

  server.post("/connect", connectDeviceToRoomHandler);

  server.delete(
    "/disconnect/:deviceId/:roomId",
    disconnectDeviceFromRoomHandler
  );
}

export default deviceRoutes;
