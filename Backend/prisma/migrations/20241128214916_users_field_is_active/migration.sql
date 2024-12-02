-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "isUserActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "notification" BOOLEAN NOT NULL DEFAULT false;
