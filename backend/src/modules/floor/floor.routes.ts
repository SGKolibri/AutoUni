import { FastifyInstance } from "fastify";
import { createFloorHandler, getFloorsHandler } from "./floor.controller";

async function floorRoutes(server: FastifyInstance) {
  server.post("/", createFloorHandler);
  server.get("/", getFloorsHandler);
}

export default floorRoutes;
