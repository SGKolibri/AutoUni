import { FastifyRequest, FastifyReply } from "fastify";
import { AutomationInput } from "./automation.schema";
import {
  createAutomation,
  getAutomations,
  getAutomationById,
  updateAutomation,
  deleteAutomation,
  toggleAutomation,
} from "./automation.services";

export async function createAutomationHandler(
  request: FastifyRequest<{ Body: AutomationInput }>,
  reply: FastifyReply
) {
  try {
    const automation = await createAutomation(request.body);
    return reply.code(201).send(automation);
  } catch (error) {
    console.error("Error creating automation:", error);
    return reply.code(500).send({
      error: "Failed to create automation",
      message: (error as Error).message,
    });
  }
}

export async function getAutomationsHandler(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const automations = await getAutomations();
    return reply.code(200).send(automations);
  } catch (error) {
    console.error("Error fetching automations:", error);
    return reply.code(500).send({ error: "Failed to fetch automations" });
  }
}

export async function getAutomationHandler(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const automation = await getAutomationById(id);

    if (!automation) {
      return reply.code(404).send({ error: "Automation not found" });
    }

    return reply.code(200).send(automation);
  } catch (error) {
    console.error("Error fetching automation:", error);
    return reply.code(500).send({ error: "Failed to fetch automation" });
  }
}

export async function updateAutomationHandler(
  request: FastifyRequest<{ Params: { id: string }; Body: AutomationInput }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const automation = await updateAutomation(id, request.body);
    return reply.code(200).send(automation);
  } catch (error) {
    console.error("Error updating automation:", error);

    if ((error as Error).message.includes("not found")) {
      return reply.code(404).send({ error: "Automation not found" });
    }

    return reply.code(500).send({
      error: "Failed to update automation",
      message: (error as Error).message,
    });
  }
}

export async function deleteAutomationHandler(
  request: FastifyRequest<{ Params: { id: string } }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    await deleteAutomation(id);
    return reply.code(204).send();
  } catch (error) {
    console.error("Error deleting automation:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Automation not found" });
    }

    return reply.code(500).send({ error: "Failed to delete automation" });
  }
}

export async function toggleAutomationHandler(
  request: FastifyRequest<{
    Params: { id: string };
    Body: { enabled: boolean };
  }>,
  reply: FastifyReply
) {
  try {
    const { id } = request.params;
    const { enabled } = request.body;

    const automation = await toggleAutomation(id, enabled);
    return reply.code(200).send(automation);
  } catch (error) {
    console.error("Error toggling automation:", error);

    if ((error as any).code === "P2025") {
      return reply.code(404).send({ error: "Automation not found" });
    }

    return reply.code(500).send({ error: "Failed to toggle automation" });
  }
}
