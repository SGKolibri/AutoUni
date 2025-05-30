import { FastifyInstance } from "fastify";
import {
  createAutomationHandler,
  getAutomationsHandler,
  getAutomationHandler,
  updateAutomationHandler,
  deleteAutomationHandler,
  toggleAutomationHandler,
} from "./automation.controller";
import { $ref } from "./automation.schema";

async function automationRoutes(server: FastifyInstance) {
  // Get all automations
  server.get("/", getAutomationsHandler);

  // Get automation by ID
  server.get("/:id", getAutomationHandler);

  // Create new automation
  server.post(
    "/",
    {
      schema: {
        body: $ref("automationInputSchema"),
        response: {
          201: $ref("automationSchema"),
        },
      },
    },
    createAutomationHandler
  );

  // Update automation
  server.put(
    "/:id",
    {
      schema: {
        body: $ref("automationInputSchema"),
        response: {
          200: $ref("automationSchema"),
        },
      },
    },
    updateAutomationHandler
  );

  // Delete automation
  server.delete("/:id", deleteAutomationHandler);

  // Toggle automation enable/disable
  server.patch("/:id/toggle", toggleAutomationHandler);
}

export default automationRoutes;
