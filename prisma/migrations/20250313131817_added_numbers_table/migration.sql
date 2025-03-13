/*
  Warnings:

  - You are about to drop the `Number` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Number";

-- CreateTable
CREATE TABLE "Numbers" (
    "id" SERIAL NOT NULL,
    "number" INTEGER NOT NULL,

    CONSTRAINT "Numbers_pkey" PRIMARY KEY ("id")
);
