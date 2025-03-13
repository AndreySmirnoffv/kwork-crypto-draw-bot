-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_chatId_key" ON "User"("chatId");
