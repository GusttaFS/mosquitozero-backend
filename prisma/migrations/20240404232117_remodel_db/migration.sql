/*
  Warnings:

  - You are about to drop the column `visit_order_id` on the `visitations` table. All the data in the column will be lost.
  - You are about to drop the `visit_order` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `visitation_area_id` to the `visitations` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "visit_order" DROP CONSTRAINT "visit_order_user_id_fkey";

-- DropForeignKey
ALTER TABLE "visitations" DROP CONSTRAINT "visitations_visit_order_id_fkey";

-- AlterTable
ALTER TABLE "visitations" DROP COLUMN "visit_order_id",
ADD COLUMN     "visitation_area_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "visit_order";

-- CreateTable
CREATE TABLE "cycles" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cycles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitation_areas" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "is_completed" BOOLEAN NOT NULL DEFAULT false,
    "user_id" TEXT NOT NULL,
    "cycle_id" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "visitation_areas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "visitation_areas" ADD CONSTRAINT "visitation_areas_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitation_areas" ADD CONSTRAINT "visitation_areas_cycle_id_fkey" FOREIGN KEY ("cycle_id") REFERENCES "cycles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitations" ADD CONSTRAINT "visitations_visitation_area_id_fkey" FOREIGN KEY ("visitation_area_id") REFERENCES "visitation_areas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
