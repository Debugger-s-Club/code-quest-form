/*
  Warnings:

  - Added the required column `year` to the `Registration` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Year" AS ENUM ('SY', 'TY');

-- AlterTable
ALTER TABLE "Registration" ADD COLUMN     "year" "Year" NOT NULL;
