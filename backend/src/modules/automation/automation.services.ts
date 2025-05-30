import prisma from "../../utils/prisma";
import { AutomationInput } from "./automation.schema";

export async function createAutomation(input: AutomationInput) {
  const { name, enabled, trigger, actions, schedule } = input;

  return prisma.$transaction(async (tx) => {
    // Create the base automation
    const automation = await tx.automation.create({
      data: {
        name,
        enabled,
      },
    });

    // Create trigger
    const createdTrigger = await tx.trigger.create({
      data: {
        type: trigger.type,
        automation: {
          connect: { id: automation.id },
        },
      },
    });

    // Create specific trigger type (time, device, or scene)
    switch (trigger.type) {
      case "time":
        if (!trigger.config.time) {
          throw new Error("Time trigger requires a time property");
        }
        await tx.triggerTime.create({
          data: {
            time: trigger.config.time,
            trigger: {
              connect: { id: createdTrigger.id },
            },
          },
        });
        break;
      case "device":
        if (
          !trigger.config.deviceId ||
          trigger.config.deviceState === undefined
        ) {
          throw new Error(
            "Device trigger requires deviceId and deviceState properties"
          );
        }
        await tx.triggerDevice.create({
          data: {
            deviceId: trigger.config.deviceId,
            deviceState: trigger.config.deviceState,
            triggerId: createdTrigger.id,
          },
        });
        break;
      case "scene":
        if (!trigger.config.sceneId) {
          throw new Error("Scene trigger requires a sceneId property");
        }
        await tx.triggerScene.create({
          data: {
            sceneId: trigger.config.sceneId,
            trigger: {
              connect: { id: createdTrigger.id },
            },
          },
        });
        break;
    }

    // Create schedule if provided
    if (schedule) {
      const createdSchedule = await tx.schedule.create({
        data: {
          repeat: schedule.repeat,
          time: schedule.time,
          automation: {
            connect: { id: automation.id },
          },
        },
      });

      // Add schedule days for weekly repeats
      if (
        schedule.repeat === "weekly" &&
        schedule.days &&
        schedule.days.length > 0
      ) {
        await tx.scheduleDay.createMany({
          data: schedule.days.map((day) => ({
            day,
            scheduleId: createdSchedule.id,
          })),
        });
      }
    }

    // Create actions
    for (const action of actions) {
      const createdAction = await tx.action.create({
        data: {
          type: action.type,
          automationId: automation.id,
        },
      });

      // Create specific action type (device or scene)
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
      } else if (action.type === "scene") {
        await tx.actionScene.create({
          data: {
            targetId: action.targetId,
            action: {
              connect: { id: createdAction.id },
            },
          },
        });
      }
    }

    // Return the complete automation with all related data
    return getAutomationById(automation.id);
  });
}

export async function getAutomations() {
  return prisma.automation.findMany({
    include: {
      trigger: {
        include: {
          timeTrigger: true,
          deviceTrigger: {
            include: {
              device: true,
            },
          },
          sceneTrigger: true,
        },
      },
      actions: {
        include: {
          deviceAction: {
            include: {
              device: true,
            },
          },
          sceneAction: true,
        },
      },
      schedule: {
        include: {
          scheduleDays: true,
        },
      },
    },
  });
}

export async function getAutomationById(id: string) {
  return prisma.automation.findUnique({
    where: { id },
    include: {
      trigger: {
        include: {
          timeTrigger: true,
          deviceTrigger: {
            include: {
              device: true,
            },
          },
          sceneTrigger: true,
        },
      },
      actions: {
        include: {
          deviceAction: {
            include: {
              device: true,
            },
          },
          sceneAction: true,
        },
      },
      schedule: {
        include: {
          scheduleDays: true,
        },
      },
    },
  });
}

export async function updateAutomation(id: string, input: AutomationInput) {
  // First check if the automation exists
  const existing = await prisma.automation.findUnique({
    where: { id },
    include: {
      trigger: {
        include: {
          timeTrigger: true,
          deviceTrigger: true,
          sceneTrigger: true,
        },
      },
      actions: true,
      schedule: {
        include: {
          scheduleDays: true,
        },
      },
    },
  });

  if (!existing) {
    throw new Error(`Automation with ID ${id} not found`);
  }

  // This is a complex update that requires deleting and recreating related entities
  return prisma.$transaction(async (tx) => {
    // Update basic automation info
    await tx.automation.update({
      where: { id },
      data: {
        name: input.name,
        enabled: input.enabled,
      },
    });

    // Handle trigger: delete old trigger and create new one
    if (existing.trigger) {
      await tx.trigger.delete({
        where: { id: existing.trigger.id },
      });
    }

    // Create new trigger
    const newTrigger = await tx.trigger.create({
      data: {
        type: input.trigger.type,
        automation: {
          connect: { id },
        },
      },
    });

    // Create specific trigger type
    switch (input.trigger.type) {
      case "time":
        if (!input.trigger.config.time) {
          throw new Error("Time trigger requires a time property");
        }
        await tx.triggerTime.create({
          data: {
            time: input.trigger.config.time,
            trigger: {
              connect: { id: newTrigger.id },
            },
          },
        });
        break;
      case "device":
        if (
          !input.trigger.config.deviceId ||
          input.trigger.config.deviceState === undefined
        ) {
          throw new Error(
            "Device trigger requires deviceId and deviceState properties"
          );
        }
        await tx.triggerDevice.create({
          data: {
            deviceId: input.trigger.config.deviceId,
            deviceState: input.trigger.config.deviceState,
            triggerId: newTrigger.id,
          },
        });
        break;
      case "scene":
        if (!input.trigger.config.sceneId) {
          throw new Error("Scene trigger requires a sceneId property");
        }
        await tx.triggerScene.create({
          data: {
            sceneId: input.trigger.config.sceneId,
            trigger: {
              connect: { id: newTrigger.id },
            },
          },
        });
        break;
    }

    // Delete existing actions
    for (const action of existing.actions) {
      await tx.action.delete({
        where: { id: action.id },
      });
    }

    // Create new actions
    for (const action of input.actions) {
      const newAction = await tx.action.create({
        data: {
          type: action.type,
          automationId: id,
        },
      });

      // Create specific action type
      if (action.type === "device") {
        await tx.actionDevice.create({
          data: {
            targetId: action.targetId,
            state: action.state,
            brightness: action.properties?.brightness,
            temperature: action.properties?.temperature,
            level: action.properties?.level,
            actionId: newAction.id,
          },
        });
      } else if (action.type === "scene") {
        await tx.actionScene.create({
          data: {
            targetId: action.targetId,
            action: {
              connect: { id: newAction.id },
            },
          },
        });
      }
    }

    // Handle schedule
    if (existing.schedule) {
      await tx.schedule.delete({
        where: { id: existing.schedule.id },
      });
    }

    // Create new schedule if provided
    if (input.schedule) {
      const newSchedule = await tx.schedule.create({
        data: {
          repeat: input.schedule.repeat,
          time: input.schedule.time,
          automation: {
            connect: { id },
          },
        },
      });

      // Add schedule days for weekly repeats
      if (
        input.schedule.repeat === "weekly" &&
        input.schedule.days &&
        input.schedule.days.length > 0
      ) {
        await tx.scheduleDay.createMany({
          data: input.schedule.days.map((day) => ({
            day,
            scheduleId: newSchedule.id,
          })),
        });
      }
    }

    // Return updated automation
    return getAutomationById(id);
  });
}

export async function deleteAutomation(id: string) {
  return prisma.automation.delete({
    where: { id },
  });
}

export async function toggleAutomation(id: string, enabled: boolean) {
  return prisma.automation.update({
    where: { id },
    data: { enabled },
  });
}
