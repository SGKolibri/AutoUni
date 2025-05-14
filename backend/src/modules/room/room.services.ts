import prisma from "../../utils/prisma";
import { RoomInput } from "./room.schema";

export async function createRoom(input: RoomInput) {
  const { name, floorId } = input;

  const room = await prisma.room.create({
    data: {
      name,
      floorId,
    },
  });

  return room;
}

export async function getRooms() {
  const rooms = await prisma.room.findMany({
    include: {
      floor: true,
      devices: true,
    },
  });

  return rooms;
}

export async function getRoomsByFloorId(floorId: string) {
  const rooms = await prisma.room.findMany({
    where: {
      floorId,
    },
    include: {
      devices: true,
    },
  });

  return rooms;
}
