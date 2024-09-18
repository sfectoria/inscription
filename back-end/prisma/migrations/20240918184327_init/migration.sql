-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('male', 'female');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "avatarUrl" TEXT,
    "password" TEXT NOT NULL,
    "confirmkey" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Member" (
    "cin" SERIAL NOT NULL,
    "firstNameAr" TEXT NOT NULL,
    "lastNameAr" TEXT NOT NULL,
    "gender" "Gender" NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "governmentId" INTEGER NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("cin")
);

-- CreateTable
CREATE TABLE "Government" (
    "id" SERIAL NOT NULL,
    "nameFr" TEXT NOT NULL,

    CONSTRAINT "Government_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Member" ADD CONSTRAINT "Member_governmentId_fkey" FOREIGN KEY ("governmentId") REFERENCES "Government"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
