/*
  Warnings:

  - You are about to drop the `creators_projects` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `creators_projects` DROP FOREIGN KEY `creators_projects_ibfk_2`;

-- DropForeignKey
ALTER TABLE `projects` DROP FOREIGN KEY `projects_ibfk_2`;

-- DropTable
DROP TABLE `creators_projects`;

-- CreateTable
CREATE TABLE `creators` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NOT NULL,
    `account_number` VARCHAR(45) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD FOREIGN KEY (`creator_id`) REFERENCES `creators`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `creators` ADD FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
