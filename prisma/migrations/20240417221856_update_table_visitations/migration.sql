/*
  Warnings:

  - Added the required column `amostra` to the `visitations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deposito` to the `visitations` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tratamento` to the `visitations` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "visitations" ADD COLUMN     "amostra" JSONB NOT NULL,
ADD COLUMN     "deposito" JSONB NOT NULL,
ADD COLUMN     "tratamento" JSONB NOT NULL;
