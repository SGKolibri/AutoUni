import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

// Base schemas for nested objects
const triggerConfigSchema = z.object({
  time: z
    .string()
    .regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/)
    .optional(),
  deviceId: z.string().optional(),
  deviceState: z.boolean().optional(),
  sceneId: z.string().optional(),
});

const actionPropertiesSchema = z.object({
  brightness: z.number().min(0).max(100).optional(),
  temperature: z.number().optional(),
  level: z.number().optional(),
});

const actionSchema = z.object({
  type: z.enum(["device", "scene"]),
  targetId: z.string(),
  state: z.boolean().optional(),
  properties: actionPropertiesSchema.optional(),
});

const scheduleSchema = z.object({
  repeat: z.enum(["daily", "weekly", "once"]),
  days: z.array(z.number().min(0).max(6)).optional(),
  time: z.string().regex(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/),
});

// Input schema for creating an automation
export const automationInputSchema = z.object({
  name: z.string().min(1),
  enabled: z.boolean().default(true),
  trigger: z.object({
    type: z.enum(["time", "device", "scene"]),
    config: triggerConfigSchema,
  }),
  actions: z.array(actionSchema).min(1),
  schedule: scheduleSchema.optional(),
});

// Complete automation schema (with ID)
export const automationSchema = automationInputSchema.extend({
  id: z.string(),
});

export type AutomationInput = z.infer<typeof automationInputSchema>;
export type Automation = z.infer<typeof automationSchema>;

export const { schemas: automationSchemas, $ref } = buildJsonSchemas(
  {
    automationInputSchema,
    automationSchema,
  },
  { $id: "automationSchema" }
);
