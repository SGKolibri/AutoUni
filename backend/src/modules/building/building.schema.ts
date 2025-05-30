import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

const buildingSchema = z.object({
  id: z.string(),
  name: z.string(),
  floors: z
    .array(
      z.object({
        id: z.string(),
        number: z.number().int(),
      })
    )
    .optional(),
});

const buildingInputSchema = z.object({
  name: z.string(),
});

export type BuildingInput = z.infer<typeof buildingInputSchema>;
export const { schemas: buildingSchemas, $ref } = buildJsonSchemas(
  {
    buildingSchema,
    buildingInputSchema,
  },
  {
    $id: "buildingSchema",
  }
);
