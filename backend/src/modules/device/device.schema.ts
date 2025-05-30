import { z } from "zod";
import { buildJsonSchemas } from "fastify-zod";

export const DevicesEnum = z.enum([
  "LIGHT",
  "THERMOSTAT",
  "SENSOR",
  "SWITCH",
  "CAMERA",
  "PLUG",
  "PRINTER",
  "FAN",
  "OUTLET",
  "PROJECTOR",
  "SPEAKER",
  "ROUTER",
  "WORKSTATION",
  "COMPUTER",
  "AIR",
  "OTHER",
]);

export const deviceSchema = z.object({
  name: z.string(),
  status: z.string(),
  type: DevicesEnum.default("OTHER"),
});

// For connecting a device to a room
export const deviceRoomSchema = z.object({
  deviceId: z.string(),
  roomId: z.string(),
});

export type DeviceInput = z.infer<typeof deviceSchema>;
export type DeviceRoomInput = z.infer<typeof deviceRoomSchema>;

export const { schemas: deviceSchemas, $ref } = buildJsonSchemas(
  {
    deviceSchema,
    deviceRoomSchema,
  },
  {
    $id: "deviceSchema",
  }
);
