import { FastifyRequest, FastifyReply } from "fastify";
import { RoomInput } from "./room.schema";
import { createRoom, getRooms, getRoomsByFloorId } from "./room.services";

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
