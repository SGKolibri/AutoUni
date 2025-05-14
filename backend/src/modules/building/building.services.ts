import prisma from "../../utils/prisma";
import { BuildingInput } from "./building.schema";

export async function createBuilding(input: BuildingInput) {
  const { name } = input;
  const building = await prisma.building.create({
    data: {
      name,
    },
  });
  return building;
}

export async function getBuildings() {
  const buildings = await prisma.building.findMany({
    include: {
      floors: true,
    },
  });
  return buildings;
}

export async function addFloorToBuilding(buildingId: string, floorId: string) {
  const building = await prisma.building.update({
    where: { id: buildingId },
    data: {
      floors: {
        connect: { id: floorId },
      },
    },
  });
  return building;
}
