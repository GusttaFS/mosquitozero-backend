/*
  Warnings:

  - You are about to drop the column `is_completed` on the `visitation_areas` table. All the data in the column will be lost.
  - Added the required column `completed_visitations` to the `visitation_areas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `num_visitations` to the `visitation_areas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "visitation_areas" DROP COLUMN "is_completed",
ADD COLUMN     "completed_visitations" INTEGER NOT NULL,
ADD COLUMN     "num_visitations" INTEGER NOT NULL;
