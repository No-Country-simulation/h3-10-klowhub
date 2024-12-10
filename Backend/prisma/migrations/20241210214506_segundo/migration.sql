/*
  Warnings:

  - The primary key for the `Items` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Items_ratings" DROP CONSTRAINT "Items_ratings_item_id_fkey";

-- DropForeignKey
ALTER TABLE "Media" DROP CONSTRAINT "Media_item_id_fkey";

-- DropForeignKey
ALTER TABLE "Module" DROP CONSTRAINT "Module_item_id_fkey";

-- AlterTable
ALTER TABLE "Items" DROP CONSTRAINT "Items_pkey",
ADD COLUMN     "is_course" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Items_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Items_id_seq";

-- AlterTable
ALTER TABLE "Items_ratings" ALTER COLUMN "item_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Media" ALTER COLUMN "item_id" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Module" ALTER COLUMN "item_id" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Items_ratings" ADD CONSTRAINT "Items_ratings_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Module" ADD CONSTRAINT "Module_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_item_id_fkey" FOREIGN KEY ("item_id") REFERENCES "Items"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
