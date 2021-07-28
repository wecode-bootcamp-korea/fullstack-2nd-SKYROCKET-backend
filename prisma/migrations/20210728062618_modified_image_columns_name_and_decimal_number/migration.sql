/*
  Warnings:

  - You are about to drop the column `detail_image` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `project_thumbnail` on the `images` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `options` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,0)` to `Decimal(8,0)`.
  - You are about to alter the column `achieved_amount` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,0)` to `Decimal(10,0)`.
  - You are about to alter the column `goal_amount` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `Decimal(18,0)` to `Decimal(10,0)`.
  - You are about to drop the column `profile_image` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `social_login` on the `users` table. All the data in the column will be lost.
  - Added the required column `detail_image_url` to the `images` table without a default value. This is not possible if the table is not empty.
  - Added the required column `project_thumbnail_url` to the `images` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `images` DROP COLUMN `detail_image`,
    DROP COLUMN `project_thumbnail`,
    ADD COLUMN `detail_image_url` VARCHAR(2000) NOT NULL,
    ADD COLUMN `project_thumbnail_url` VARCHAR(2000) NOT NULL;

-- AlterTable
ALTER TABLE `options` MODIFY `price` DECIMAL(8, 0) NOT NULL;

-- AlterTable
ALTER TABLE `projects` MODIFY `achieved_amount` DECIMAL(10, 0) NOT NULL,
    MODIFY `goal_amount` DECIMAL(10, 0) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `profile_image`,
    DROP COLUMN `social_login`,
    ADD COLUMN `profile_image_url` VARCHAR(2000),
    ADD COLUMN `social_platform` VARCHAR(45);
