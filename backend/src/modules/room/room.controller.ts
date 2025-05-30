import { FastifyRequest, FastifyReply } from "fastify";
import { RoomInput } from "./room.schema";
import {
  createRoom,
  getRooms,
  getRoomsByFloorId,
  getRoom,
  updateRoom,
  deleteRoom,
} from "./room.services";

export async function createRoomHandler(
  request: FastifyRequest<{ Body: RoomInput }>,
  reply: FastifyReply
) {
  const body = request.body;

  try {
    const room = await createRoom(body);
    return reply.code(201).send(room);
  } catch (error) {
    console.error("Error creating room:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function getRoomsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const rooms = await getRooms();
    return reply.code(200).send(rooms);
  } catch (error) {
    console.error("Error fetching rooms:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function getRoomsByFloorIdHandler(
  request: FastifyRequest<{ Params: { floorId: string } }>,
  reply: FastifyReply
) {
  const { floorId } = request.params;

  try {
    const rooms = await getRoomsByFloorId(floorId);
    return reply.code(200).send(rooms);
  } catch (error) {
    console.error("Error fetching rooms by floor ID:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function getRoomHandler(
  request: FastifyRequest<{ Params: { roomId: string } }>,
  reply: FastifyReply
) {
  const { roomId } = request.params;

  try {
    const room = await getRoom(roomId);

    if (!room) {
      return reply.code(404).send({ error: "Room not found" });
    }

    return reply.code(200).send(room);
  } catch (error) {
    console.error("Error fetching room:", error);
    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function updateRoomHandler(
  request: FastifyRequest<{
    Params: { roomId: string };
    Body: Partial<RoomInput>;
  }>,
  reply: FastifyReply
) {
  const { roomId } = request.params;
  const body = request.body;

  try {
    const updatedRoom = await updateRoom(roomId, body);
    return reply.code(200).send(updatedRoom);
  } catch (error) {
    console.error("Error updating room:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Room not found" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}

export async function deleteRoomHandler(
  request: FastifyRequest<{ Params: { roomId: string } }>,
  reply: FastifyReply
) {
  const { roomId } = request.params;

  try {
    await deleteRoom(roomId);
    return reply.code(204).send();
  } catch (error) {
    console.error("Error deleting room:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Room not found" });
    }

    return reply.code(500).send({ error: "Internal server error" });
  }
}
