/*
  Warnings:

  - You are about to drop the `forms` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `orders` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "forms" DROP CONSTRAINT "forms_order_id_fkey";

-- DropForeignKey
ALTER TABLE "orders" DROP CONSTRAINT "orders_user_id_fkey";

-- DropTable
DROP TABLE "forms";

-- DropTable
DROP TABLE "orders";

-- CreateTable
CREATE TABLE "visit_order" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "visit_order_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visitations" (
    "id" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "visit_order_id" TEXT NOT NULL,

    CONSTRAINT "visitations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "visit_order" ADD CONSTRAINT "visit_order_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "visitations" ADD CONSTRAINT "visitations_visit_order_id_fkey" FOREIGN KEY ("visit_order_id") REFERENCES "visit_order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
