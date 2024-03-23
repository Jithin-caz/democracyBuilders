/*
  Warnings:

  - Added the required column `area` to the `Voter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Voter" ADD COLUMN     "area" TEXT NOT NULL;
