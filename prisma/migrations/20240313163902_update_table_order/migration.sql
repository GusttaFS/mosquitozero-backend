/*
  Warnings:

  - You are about to drop the column `email` on the `orders` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `orders` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "orders" DROP COLUMN "email",
DROP COLUMN "password";
