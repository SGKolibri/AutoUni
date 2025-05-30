-- CreateTable
CREATE TABLE "Automation" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "enabled" BOOLEAN NOT NULL DEFAULT true,
    "triggerId" TEXT,
    "scheduleId" TEXT,

    CONSTRAINT "Automation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trigger" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Trigger_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriggerTime" (
    "id" TEXT NOT NULL,
    "time" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,

    CONSTRAINT "TriggerTime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriggerDevice" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "deviceState" BOOLEAN NOT NULL,
    "triggerId" TEXT NOT NULL,

    CONSTRAINT "TriggerDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TriggerScene" (
    "id" TEXT NOT NULL,
    "sceneId" TEXT NOT NULL,
    "triggerId" TEXT NOT NULL,

    CONSTRAINT "TriggerScene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Action" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "automationId" TEXT NOT NULL,

    CONSTRAINT "Action_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionDevice" (
    "id" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "state" BOOLEAN,
    "brightness" INTEGER,
    "temperature" INTEGER,
    "level" INTEGER,
    "actionId" TEXT NOT NULL,

    CONSTRAINT "ActionDevice_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ActionScene" (
    "id" TEXT NOT NULL,
    "targetId" TEXT NOT NULL,
    "actionId" TEXT NOT NULL,

    CONSTRAINT "ActionScene_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Schedule" (
    "id" TEXT NOT NULL,
    "repeat" TEXT NOT NULL,
    "time" TEXT NOT NULL,

    CONSTRAINT "Schedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ScheduleDay" (
    "id" TEXT NOT NULL,
    "day" INTEGER NOT NULL,
    "scheduleId" TEXT NOT NULL,

    CONSTRAINT "ScheduleDay_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Automation_triggerId_key" ON "Automation"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "Automation_scheduleId_key" ON "Automation"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "TriggerTime_triggerId_key" ON "TriggerTime"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "TriggerDevice_triggerId_key" ON "TriggerDevice"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "TriggerScene_triggerId_key" ON "TriggerScene"("triggerId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionDevice_actionId_key" ON "ActionDevice"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "ActionScene_actionId_key" ON "ActionScene"("actionId");

-- CreateIndex
CREATE UNIQUE INDEX "ScheduleDay_scheduleId_day_key" ON "ScheduleDay"("scheduleId", "day");

-- AddForeignKey
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Automation" ADD CONSTRAINT "Automation_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerTime" ADD CONSTRAINT "TriggerTime_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerDevice" ADD CONSTRAINT "TriggerDevice_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerDevice" ADD CONSTRAINT "TriggerDevice_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TriggerScene" ADD CONSTRAINT "TriggerScene_triggerId_fkey" FOREIGN KEY ("triggerId") REFERENCES "Trigger"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Action" ADD CONSTRAINT "Action_automationId_fkey" FOREIGN KEY ("automationId") REFERENCES "Automation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionDevice" ADD CONSTRAINT "ActionDevice_targetId_fkey" FOREIGN KEY ("targetId") REFERENCES "Device"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionDevice" ADD CONSTRAINT "ActionDevice_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActionScene" ADD CONSTRAINT "ActionScene_actionId_fkey" FOREIGN KEY ("actionId") REFERENCES "Action"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ScheduleDay" ADD CONSTRAINT "ScheduleDay_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "Schedule"("id") ON DELETE CASCADE ON UPDATE CASCADE;
