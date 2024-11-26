/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Users" (
    "user_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "birthday" TEXT,
    "role_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "profile_image" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Sellers" (
    "seller_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "seller_level_id" INTEGER NOT NULL DEFAULT 1,
    "description" TEXT,
    "isUserActive" BOOLEAN NOT NULL DEFAULT true,
    "sales_type_id" INTEGER NOT NULL,
    "url_website" TEXT,
    "collection_method_id" INTEGER NOT NULL,
    "punctuation" DOUBLE PRECISION DEFAULT 0,

    CONSTRAINT "Sellers_pkey" PRIMARY KEY ("seller_id")
);

-- CreateTable
CREATE TABLE "Registers_date" (
    "register_date_id" SERIAL NOT NULL,
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "isSeller" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Registers_date_pkey" PRIMARY KEY ("register_date_id")
);

-- CreateTable
CREATE TABLE "Seller_ratings" (
    "id" SERIAL NOT NULL,
    "seller_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seller_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seller_levels" (
    "level_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Seller_levels_pkey" PRIMARY KEY ("level_id")
);

-- CreateTable
CREATE TABLE "Change_seller_level" (
    "id" SERIAL NOT NULL,
    "seller_id" TEXT NOT NULL,
    "level_id" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Change_seller_level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sales_type" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sales_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection_method" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Collection_method_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Wallets" (
    "id" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "balance" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Wallets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeleteAt_user" (
    "id" SERIAL NOT NULL,
    "user_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeleteAt_user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactions" (
    "id" SERIAL NOT NULL,
    "wallet_id" TEXT NOT NULL,
    "type_transaction" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Type_transactions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Type_transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "seller_id" TEXT NOT NULL,
    "type_course_id" INTEGER NOT NULL,
    "premium" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "course_level_id" INTEGER NOT NULL,
    "platform_id" INTEGER NOT NULL,
    "language_id" INTEGER NOT NULL,
    "sector_id" INTEGER NOT NULL,
    "content_pillar_id" INTEGER NOT NULL,
    "functionality_id" INTEGER NOT NULL,
    "tool_id" INTEGER NOT NULL,
    "tags" TEXT[],
    "price" DECIMAL(65,30) NOT NULL,
    "punctuation" DECIMAL(65,30) NOT NULL DEFAULT 0,
    "updateAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses_ratings" (
    "id" SERIAL NOT NULL,
    "course_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Courses_ratings_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Types_of_courses" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Types_of_courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Courses_level" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Courses_level_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Platforms" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Platforms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Languages" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sectors" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Sectors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Content_pillars" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Content_pillars_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Functionality" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Functionality_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tools" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Tools_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Purchased_courses" (
    "id" SERIAL NOT NULL,
    "transaction_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "course_id" TEXT NOT NULL,

    CONSTRAINT "Purchased_courses_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Sellers_user_id_key" ON "Sellers"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Registers_date_id_key" ON "Registers_date"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Wallets_seller_id_key" ON "Wallets"("seller_id");

-- CreateIndex
CREATE UNIQUE INDEX "DeleteAt_user_user_id_key" ON "DeleteAt_user"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Purchased_courses_transaction_id_key" ON "Purchased_courses"("transaction_id");

-- AddForeignKey
ALTER TABLE "Sellers" ADD CONSTRAINT "Sellers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seller_ratings" ADD CONSTRAINT "Seller_ratings_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Sellers"("seller_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Change_seller_level" ADD CONSTRAINT "Change_seller_level_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Sellers"("seller_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Wallets" ADD CONSTRAINT "Wallets_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Sellers"("seller_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeleteAt_user" ADD CONSTRAINT "DeleteAt_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Transactions" ADD CONSTRAINT "Transactions_wallet_id_fkey" FOREIGN KEY ("wallet_id") REFERENCES "Wallets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Sellers"("seller_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses_ratings" ADD CONSTRAINT "Courses_ratings_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "Courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchased_courses" ADD CONSTRAINT "Purchased_courses_transaction_id_fkey" FOREIGN KEY ("transaction_id") REFERENCES "Transactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
