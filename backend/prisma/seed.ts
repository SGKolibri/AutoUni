import prisma from "../src/utils/prisma";
import { BuildingInput } from "../src/modules/building/building.schema";
import buildingsJson from "../src/data/building.json";
import { DeviceInput } from "../src/modules/device/device.schema";
import devicesJson from "../src/data/device.json";

async function seed() {
  await register();
}

const register = async () => {
  try {
    await createBuildings(buildingsJson as BuildingInput[]);
    await createFloors();
    await createRooms();
    await createDevices(devicesJson as DeviceInput[]);
    await addDevicesToRooms();
    await createAutomations();
    console.log("Seeding completed successfully.");
  } catch (e) {
    console.error("Error during seeding:", e);
    throw new Error(`Error during seeding: ${e}`);
  }
};

async function createBuildings(buildings: BuildingInput[]) {
  const existingBuildings = await prisma.building.findMany({
    where: {
      name: {
        in: buildings.map((building) => building.name),
      },
    },
  });

  if (existingBuildings.length > 0) {
    console.log("Buildings already exist, skipping creation.");
    return;
  }

  const createdBuildings = await prisma.building.createMany({
    data: buildings,
  });
  return createdBuildings;
}

async function createFloors(numberOfFloors: number = 3) {
  const existingFloors = await prisma.floor.findMany({
    take: 1,
  });

  if (existingFloors.length > 0) {
    console.log("Floors already exist, skipping creation.");
    return;
  }

  const buildingIds = await prisma.building.findMany({
    select: { id: true },
  });

  const floors = buildingIds.flatMap((building) => {
    return Array.from({ length: numberOfFloors }, (_, index) => ({
      number: index + 1,
      buildingId: building.id,
    }));
  });

  const createdFloors = await prisma.floor.createMany({
    data: floors,
  });

  return createdFloors;
}

const createRooms = async (numberOfRooms: number = 10) => {
  const existingRooms = await prisma.room.findMany({
    take: 1,
  });

  if (existingRooms.length > 0) {
    console.log("Rooms already exist, skipping creation.");
    return;
  }

  const floorIds = await prisma.floor.findMany({
    select: { id: true },
  });

  if (floorIds.length === 0) {
    console.log("No floor found, skipping room creation.");
    return;
  }

  const rooms = floorIds.flatMap((floor) => {
    return Array.from({ length: numberOfRooms }, (_, index) => ({
      name: `Sala ${index + 1}`,
      floorId: floor.id,
    }));
  });

  console.log("Creating rooms:", rooms);

  const createdRooms = await prisma.room.createMany({
    data: rooms,
  });

  console.log("Created rooms:", createdRooms);

  return createdRooms;
};

const createDevices = async (devices: DeviceInput[]) => {
  const existingDevices = await prisma.device.findMany({
    where: {
      name: {
        in: devices.map((device) => device.name),
      },
    },
  });

  if (existingDevices.length > 0) {
    console.log("Devices already exist, skipping creation.");
    return;
  }

  const createdDevices = await prisma.device.createMany({
    data: devices,
  });

  console.log("Created devices:", createdDevices);
  return createdDevices;
};

// Add devices to rooms at random (2 to 5 devices per room, all rooms)
const addDevicesToRooms = async () => {
  const existingDeviceRooms = await prisma.deviceRoom.findMany({
    take: 1,
  });

  if (existingDeviceRooms.length > 0) {
    console.log("Device assignments already exist, skipping assignment.");
    return;
  }

  const rooms = await prisma.room.findMany({
    select: { id: true },
  });

  const devices = await prisma.device.findMany({
    select: { id: true },
  });

  if (rooms.length === 0 || devices.length === 0) {
    console.log("No rooms or devices found, skipping device assignment.");
    return;
  }

  for (const room of rooms) {
    const randomDeviceCount = Math.floor(Math.random() * 4) + 2; // Random number between 2 and 5
    const randomDevices = devices
      .sort(() => 0.5 - Math.random())
      .slice(0, randomDeviceCount);

    const deviceAssignments = randomDevices.map((device) => ({
      roomId: room.id,
      deviceId: device.id,
    }));

    await prisma.deviceRoom.createMany({
      data: deviceAssignments,
    });
  }
};

seed()
  .then(() => {
    console.log("Database seeded successfully");
  })
  .catch((error) => {
    console.error("Error seeding database:", error);
    process.exit(1);
  });

const createAutomations = async () => {
  // get device wich name is ar-condicionado
  const devices = await prisma.device.findMany({
    where: {
      name: "Ar-condicionado",
    },
    select: { id: true },
  });

  // const scenes = await prisma.scene.findMany({
  //   select: { id: true },
  // });

  //|| scenes.length === 0

  console.log("Devices found:", devices);
  if (devices.length === 0) {
    console.log("No devices or scenes found, skipping automation creation.");
    return;
  }

  // const randomSceneId = scenes[Math.floor(Math.random() * scenes.length)].id;

  const existingAutomations = await prisma.automation.findMany({
    where: {
      name: {
        in: [
          "Ligar ar-condicionado da sala H201",
          "Desligar ar-condicionado da sala H201",
        ],
      },
    },
  });

  const automationData = [
    {
      name: "Ligar ar-condicionado da sala H201",
      enabled: true,
      trigger: {
        type: "time",
        config: {
          time: "18:00",
          deviceId: devices[0].id,
          deviceState: true,
          sceneId: "scene-id-1",
        },
      },
      actions: [
        {
          type: "device",
          targetId: devices[0].id,
          state: true,
          properties: {
            brightness: 100,
            temperature: 0,
            level: 0,
          },
        },
      ],
      schedule: {
        repeat: "weekly", // Alterado de "daily" para "weekly"
        days: ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA"],
        time: "23:20",
      },
    },
    {
      name: "Desligar ar-condicionado da sala H201",
      enabled: true,
      trigger: {
        type: "time",
        config: {
          time: "22:30",
          deviceId: devices[0].id,
          deviceState: true,
          sceneId: "scene-id-1",
        },
      },
      actions: [
        {
          type: "device",
          targetId: devices[0].id,
          state: true,
          properties: {
            brightness: 100,
            temperature: 0,
            level: 0,
          },
        },
      ],
      schedule: {
        repeat: "weekly", // Alterado de "daily" para "weekly"
        days: ["SEGUNDA", "TERCA", "QUARTA", "QUINTA", "SEXTA"],
        time: "23:15",
      },
    },
  ];

  if (existingAutomations.length > 0) {
    console.log("Automations already exist, skipping creation.");
    return;
  }

  for (const data of automationData) {
    await prisma.$transaction(async (tx) => {
      // Create the base automation
      const automation = await tx.automation.create({
        data: {
          name: data.name,
          enabled: data.enabled,
        },
      });

      // Create trigger
      const createdTrigger = await tx.trigger.create({
        data: {
          type: data.trigger.type,
          automation: {
            connect: { id: automation.id },
          },
        },
      });

      // Create specific trigger type
      if (data.trigger.type === "time") {
        await tx.triggerTime.create({
          data: {
            time: data.trigger.config.time,
            triggerId: createdTrigger.id,
          },
        });
      } else if (data.trigger.type === "device") {
        await tx.triggerDevice.create({
          data: {
            deviceId: data.trigger.config.deviceId!,
            deviceState: data.trigger.config.deviceState!,
            triggerId: createdTrigger.id,
          },
        });
      }

      // Create schedule if provided
      if (data.schedule) {
        const createdSchedule = await tx.schedule.create({
          data: {
            repeat: data.schedule.repeat,
            time: data.schedule.time,
            automation: {
              connect: { id: automation.id },
            },
          },
        });

        // Add schedule days for weekly repeats
        if (
          data.schedule.repeat === "weekly" &&
          data.schedule.days &&
          data.schedule.days.length > 0
        ) {
          await tx.scheduleDay.createMany({
            data: data.schedule.days.map((day) => ({
              day: day as any,
              scheduleId: createdSchedule.id,
            })),
          });
        }
      }

      // Create actions
      for (const action of data.actions) {
        const createdAction = await tx.action.create({
          data: {
            type: action.type,
            automationId: automation.id,
          },
        });

        if (action.type === "device") {
          await tx.actionDevice.create({
            data: {
              targetId: action.targetId,
              state: action.state,
              brightness: action.properties?.brightness,
              temperature: action.properties?.temperature,
              level: action.properties?.level,
              actionId: createdAction.id,
            },
          });
        }
      }
    });

    console.log(`Created automation: ${data.name}`);
  }

  console.log("Created automations successfully");
};
