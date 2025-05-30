import { FastifyInstance } from "fastify";
import {
  createRoomHandler,
  getRoomsHandler,
  getRoomsByFloorIdHandler,
  getRoomHandler,
  updateRoomHandler,
  deleteRoomHandler,
} from "./room.controller";

async function roomRoutes(server: FastifyInstance) {
  server.get("/", getRoomsHandler);

  server.get("/floor/:floorId", getRoomsByFloorIdHandler);

  server.get("/:roomId", getRoomHandler);

  server.post("/", createRoomHandler);

  server.put("/:roomId", updateRoomHandler);

  server.delete("/:roomId", deleteRoomHandler);
}

export default roomRoutes;
