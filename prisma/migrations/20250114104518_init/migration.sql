-- CreateEnum
CREATE TYPE "Branch" AS ENUM ('Computer', 'AIDS', 'IT', 'CSD', 'Mechanical', 'Chemical', 'Electrical', 'Civil', 'ENTC', 'Robotics');

-- CreateEnum
CREATE TYPE "Division" AS ENUM ('A', 'B');

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "branch" "Branch" NOT NULL,
    "divison" "Division" NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Registration_email_key" ON "Registration"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Registration_phone_key" ON "Registration"("phone");
