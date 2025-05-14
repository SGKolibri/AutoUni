import { FastifyInstance } from "fastify";
import {
  createRoomHandler,
  getRoomsHandler,
  getRoomsByFloorIdHandler,
} from "./room.controller";
import { $ref } from "./room.schema";

async function roomRoutes(server: FastifyInstance) {
  server.get("/", getRoomsHandler);

  server.get("/:floorId", getRoomsByFloorIdHandler);

  server.post("/", createRoomHandler);
}

export default roomRoutes;
