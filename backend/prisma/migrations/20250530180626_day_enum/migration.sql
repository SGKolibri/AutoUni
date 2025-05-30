/*
  Warnings:

  - Changed the type of `day` on the `ScheduleDay` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "scheduleDays" AS ENUM ('DOMINGO', 'SEGUNDA', 'TERÇA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO');

-- AlterTable
ALTER TABLE "ScheduleDay" DROP COLUMN "day",
ADD COLUMN     "day" "scheduleDays" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ScheduleDay_scheduleId_day_key" ON "ScheduleDay"("scheduleId", "day");
