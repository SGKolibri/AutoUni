import prisma from "../../utils/prisma";
import { FloorInput } from "./floor.schema";

export async function createFloor(input: FloorInput) {
  const { number, buildingId } = input;

  const building = await prisma.building.findUnique({
    where: { id: buildingId },
  });
  if (!building) {
    throw new Error("Bloco não encontrado");
  }

  const floor = await prisma.floor.create({
    data: {
      number,
      buildingId,
    },
  });

  return floor;
}

export async function getFloors() {
  const floors = await prisma.floor.findMany({
    include: {
      building: true,
    },
  });
  return floors;
}

export async function createFloorsAtBulk(
  buildingId: string,
  numberOfFloors: number
) {
  const building = await prisma.building.findUnique({
    where: { id: buildingId },
  });
  if (!building) {
    throw new Error("Bloco não encontrado");
  }

  const floors = await prisma.floor.createMany({
    data: Array.from({ length: numberOfFloors }, (_, i) => ({
      number: i + 1,
      buildingId,
    })),
  });

  return floors;
}
