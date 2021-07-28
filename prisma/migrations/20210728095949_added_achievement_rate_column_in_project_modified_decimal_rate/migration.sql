/*
  Warnings:

  - You are about to alter the column `price` on the `options` table. The data in that column could be lost. The data in that column will be cast from `Decimal(8,0)` to `Decimal(9,2)`.
  - You are about to alter the column `achieved_amount` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(11,2)`.
  - You are about to alter the column `goal_amount` on the `projects` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Decimal(11,2)`.
  - Added the required column `achievement_rate` to the `projects` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `options` MODIFY `price` DECIMAL(9, 2) NOT NULL;

-- AlterTable
ALTER TABLE `projects` ADD COLUMN `achievement_rate` DECIMAL(8, 4) NOT NULL,
    MODIFY `achieved_amount` DECIMAL(11, 2) NOT NULL,
    MODIFY `goal_amount` DECIMAL(11, 2) NOT NULL;
