/*
  Warnings:

  - You are about to drop the column `time` on the `Event` table. All the data in the column will be lost.
  - Added the required column `start` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_time` to the `Event` table without a default value. This is not possible if the table is not empty.
  - Added the required column `is_all_day` to the `Event` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "time",
ADD COLUMN     "start" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "end_time" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "is_all_day" BOOLEAN NOT NULL;
