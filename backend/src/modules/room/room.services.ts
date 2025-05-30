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
      devices: {
        include: {
          device: true,
        },
      },
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
      devices: {
        include: {
          device: true,
        },
      },
    },
  });

  return rooms;
}

export async function getRoom(roomId: string) {
  const room = await prisma.room.findUnique({
    where: {
      id: roomId,
    },
    include: {
      floor: true,
      devices: {
        include: {
          device: true,
        },
      },
    },
  });

  return room;
}

export async function updateRoom(roomId: string, input: Partial<RoomInput>) {
  const { name, floorId } = input;

  const room = await prisma.room.update({
    where: {
      id: roomId,
    },
    data: {
      name,
      floorId,
    },
    include: {
      floor: true,
      devices: {
        include: {
          device: true,
        },
      },
    },
  });

  return room;
}

export async function deleteRoom(roomId: string) {
  await prisma.deviceRoom.deleteMany({
    where: {
      roomId,
    },
  });

  const room = await prisma.room.delete({
    where: {
      id: roomId,
    },
  });

  return room;
}
