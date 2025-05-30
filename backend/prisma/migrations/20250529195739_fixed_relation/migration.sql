-- DropForeignKey
ALTER TABLE "DeviceRoom" DROP CONSTRAINT "DeviceRoom_roomId_fkey";

-- AddForeignKey
ALTER TABLE "DeviceRoom" ADD CONSTRAINT "DeviceRoom_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Room"("id") ON DELETE CASCADE ON UPDATE CASCADE;
