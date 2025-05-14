import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const deviceSchema = z.object({
  id: z.string(),
  name: z.string(),
  roomId: z.string(),
  status: z.string(),
  room: z.object({
    id: z.string(),
    name: z.string(),
    floorId: z.string(),
  }),
});

const deviceInputSchema = z.object({
  name: z.string(),
  roomId: z.string(),
  status: z.string(),
});

export type DeviceInput = z.infer<typeof deviceInputSchema>;

export const { schemas: deviceSchemas, $ref } = buildJsonSchemas(
  {
    deviceSchema,
    deviceInputSchema,
  },
  {
    $id: "deviceSchema",
  }
);
