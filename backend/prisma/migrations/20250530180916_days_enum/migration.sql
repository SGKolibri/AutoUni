/*
  Warnings:

  - The values [TERÇA] on the enum `scheduleDays` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "scheduleDays_new" AS ENUM ('DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO');
ALTER TABLE "ScheduleDay" ALTER COLUMN "day" TYPE "scheduleDays_new" USING ("day"::text::"scheduleDays_new");
ALTER TYPE "scheduleDays" RENAME TO "scheduleDays_old";
ALTER TYPE "scheduleDays_new" RENAME TO "scheduleDays";
DROP TYPE "scheduleDays_old";
COMMIT;
