/*
  Warnings:

  - Added the required column `report` to the `MedicalReport` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MedicalReport" ADD COLUMN     "report" TEXT NOT NULL;
