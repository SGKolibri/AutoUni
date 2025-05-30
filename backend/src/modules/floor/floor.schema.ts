import { number, z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const floorSchema = z.object({
  id: z.string(),
  number: z.number().int(),
  buildingId: z.string(),
  building: z
    .object({
      id: z.string(),
      name: z.string(),
    })
    .optional(),
});

const floorInputSchema = z.object({
  number: z.number().int(),
  buildingId: z.string(),
});

export type FloorInput = z.infer<typeof floorInputSchema>;

export const { schemas: floorSchemas, $ref } = buildJsonSchemas(
  {
    floorSchema,
    floorInputSchema,
  },
  {
    $id: "floorSchema",
  }
);
