/*
  Warnings:

  - Added the required column `nombre` to the `Producto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `producto` ADD COLUMN `nombre` VARCHAR(191) NOT NULL;
