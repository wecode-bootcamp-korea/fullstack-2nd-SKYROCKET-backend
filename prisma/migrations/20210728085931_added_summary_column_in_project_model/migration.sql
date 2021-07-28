/*
  Warnings:

  - Added the required column `summary` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `projects` ADD COLUMN `summary` VARCHAR(300) NOT NULL;
