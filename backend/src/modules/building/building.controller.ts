import { FastifyReply, FastifyRequest } from "fastify";
import { BuildingInput } from "./building.schema";
import {
  addFloorToBuilding,
  createBuilding,
  getBuildings,
} from "./building.services";

export async function createBuildingHandler(
  request: FastifyRequest<{ Body: BuildingInput }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const building = await createBuilding(body);
    return reply.status(201).send(building);
  } catch (error) {
    console.error("Error creating building:", error);
    return reply.status(500).send({ error: "Internal Server Error" });
  }
}

export async function getBuildingsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const buildings = await getBuildings();
    return reply.status(200).send(buildings);
  } catch (error) {
    console.error("Error fetching buildings:", error);
    return reply.status(500).send({ error: "Internal Server Error" });
  }
}

export async function addFloorToBuildingHandler(
  request: FastifyRequest<{ Params: { buildingId: string; floorId: string } }>,
  reply: FastifyReply
) {
  const { buildingId, floorId } = request.params;

  try {
    const building = await addFloorToBuilding(buildingId, floorId);
    return reply.status(200).send(building);
  } catch (error) {
    console.error("Error adding floor to building:", error);
    return reply.status(500).send({ error: "Internal Server Error" });
  }
}
