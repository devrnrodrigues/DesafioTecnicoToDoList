/*
  Warnings:

  - Made the column `completed` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `user_id` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `tasks` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "tasks" ALTER COLUMN "completed" SET NOT NULL,
ALTER COLUMN "user_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "users" ALTER COLUMN "created_at" SET NOT NULL;
