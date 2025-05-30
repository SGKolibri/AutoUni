import { FastifyRequest, FastifyReply } from "fastify";
import { FloorInput } from "./floor.schema";
import { createFloor, getFloors } from "./floor.services";

export async function createFloorHandler(
  request: FastifyRequest<{ Body: FloorInput }>,
  reply: FastifyReply
) {
  const body = request.body;

  // Validate the input
  if (!body.number || !body.buildingId) {
    return reply
      .status(400)
      .send({ error: "Número e ID do bloco são obrigatórios" });
  }

  try {
    // Call the service to create the floor
    const floor = await createFloor(body);
    return reply.status(201).send(floor);
  } catch (error) {
    return reply.status(500).send({ error: "Erro ao criar o andar" });
  }
}

export async function getFloorsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    // Call the service to get all floors
    const floors = await getFloors();
    return reply.status(200).send(floors);
  } catch (error) {
    return reply.status(500).send({ error: "Erro ao obter andares" });
  }
}
