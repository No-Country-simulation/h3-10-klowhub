/*
  Warnings:

  - You are about to alter the column `balance` on the `Wallets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `DoublePrecision`.
  - Made the column `balance` on table `Wallets` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Wallets" ALTER COLUMN "balance" SET NOT NULL,
ALTER COLUMN "balance" SET DEFAULT 0,
ALTER COLUMN "balance" SET DATA TYPE DOUBLE PRECISION;
