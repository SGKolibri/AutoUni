import { number, z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const roomSchema = z.object({
  id: z.string(),
  name: z.string(),
  floorId: z.string(),
  floor: z.object({
    id: z.string(),
    number: z.number().int(),
    buildingId: z.string(),
  }),
  devices: z
    .array(
      z.object({
        id: z.string(),
        name: z.string(),
        status: z.string(),
      })
    )
    .optional(),
});

const roomInputSchema = z.object({
  name: z.string(),
  floorId: z.string(),
});

export type RoomInput = z.infer<typeof roomInputSchema>;

export const { schemas: roomSchemas, $ref } = buildJsonSchemas(
  {
    roomSchema,
    roomInputSchema,
  },
  {
    $id: "roomSchema",
  }
);
