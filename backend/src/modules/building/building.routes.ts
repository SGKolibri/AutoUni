import { FastifyInstance } from "fastify";
import {
  createBuildingHandler,
  getBuildingsHandler,
} from "./building.controller";

async function buildingRoutes(server: FastifyInstance) {
  server.get("/", getBuildingsHandler);

  server.post("/", createBuildingHandler);
}

export default buildingRoutes;
