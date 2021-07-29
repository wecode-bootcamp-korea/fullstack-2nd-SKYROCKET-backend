/*
  Warnings:

  - You are about to drop the column `stock` on the `options` table. All the data in the column will be lost.
  - You are about to drop the `users_projects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `project_id` to the `options` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `users_projects` DROP FOREIGN KEY `users_projects_ibfk_3`;

-- DropForeignKey
ALTER TABLE `users_projects` DROP FOREIGN KEY `users_projects_ibfk_1`;

-- DropForeignKey
ALTER TABLE `users_projects` DROP FOREIGN KEY `users_projects_ibfk_2`;

-- AlterTable
ALTER TABLE `options` DROP COLUMN `stock`,
    ADD COLUMN `project_id` INTEGER NOT NULL;

-- DropTable
DROP TABLE `users_projects`;

-- CreateTable
CREATE TABLE `creators` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `project_id` INTEGER NOT NULL,
    `account_number` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pledges` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `option_id` INTEGER NOT NULL,
    `pledge_date` DATETIME(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `options` ADD FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `creators` ADD FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `creators` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pledges` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pledges` ADD FOREIGN KEY (`option_id`) REFERENCES `options`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
