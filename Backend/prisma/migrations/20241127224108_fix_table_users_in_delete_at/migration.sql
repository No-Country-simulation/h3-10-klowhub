-- DropIndex
DROP INDEX "DeleteAt_user_user_id_key";

-- AlterTable
ALTER TABLE "DeleteAt_user" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;
