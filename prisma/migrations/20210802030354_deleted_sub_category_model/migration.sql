/*
  Warnings:

  - You are about to drop the column `sub_category_id` on the `projects` table. All the data in the column will be lost.
  - You are about to drop the `sub_categories` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `category_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_ibfk_1`;

-- DropForeignKey
ALTER TABLE `sub_categories` DROP FOREIGN KEY `sub_categories_ibfk_1`;

-- AlterTable
ALTER TABLE `projects` DROP COLUMN `sub_category_id`,
    ADD COLUMN `category_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `sub_categories`;

-- AddForeignKey
ALTER TABLE `projects` ADD FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
