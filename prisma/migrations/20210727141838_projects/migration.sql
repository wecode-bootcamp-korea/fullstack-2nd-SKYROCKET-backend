-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,
    `open_date` DATETIME(3) NOT NULL,
    `end_date` DATETIME(3) NOT NULL,
    `achieved_amount` DECIMAL(18, 0) NOT NULL,
    `goal_amount` DECIMAL(18, 0) NOT NULL,
    `payment_date` DATETIME(3) NOT NULL,
    `description` MEDIUMTEXT NOT NULL,
    `sub_category_id` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `projects` ADD FOREIGN KEY (`sub_category_id`) REFERENCES `sub_categories`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
