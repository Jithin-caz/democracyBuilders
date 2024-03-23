-- CreateTable
CREATE TABLE "Voter" (
    "Voterid" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "constituency" TEXT NOT NULL,

    CONSTRAINT "Voter_pkey" PRIMARY KEY ("Voterid")
);

-- CreateTable
CREATE TABLE "Candidate" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "party" TEXT NOT NULL,
    "constituency" TEXT NOT NULL,

    CONSTRAINT "Candidate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Voter_Voterid_key" ON "Voter"("Voterid");
