/*
  Warnings:

  - You are about to drop the column `achievement_rate` on the `projects` table. All the data in the column will be lost.
  - Added the required column `creator_id` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `creators_projects` DROP FOREIGN KEY `creators_projects_ibfk_1`;

-- AlterTable
ALTER TABLE `projects` DROP COLUMN `achievement_rate`,
    ADD COLUMN `creator_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `projects` ADD FOREIGN KEY (`creator_id`) REFERENCES `creators_projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
