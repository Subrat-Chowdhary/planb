/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `todo` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `completed` to the `todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `todoText` to the `todo` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `todo` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `todo` ADD COLUMN `completed` BOOLEAN NOT NULL,
    ADD COLUMN `todoText` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `todo_userId_key` ON `todo`(`userId`);

-- AddForeignKey
ALTER TABLE `todo` ADD CONSTRAINT `todo_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
