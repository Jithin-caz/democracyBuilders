/*
  Warnings:

  - The primary key for the `Voter` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Voter" DROP CONSTRAINT "Voter_pkey",
ALTER COLUMN "Voterid" SET DATA TYPE TEXT,
ADD CONSTRAINT "Voter_pkey" PRIMARY KEY ("Voterid");
