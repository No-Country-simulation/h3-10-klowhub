-- DropIndex
DROP INDEX "DeleteAt_user_user_id_key";

-- AlterTable
ALTER TABLE "DeleteAt_user" ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_type_course_id_fkey" FOREIGN KEY ("type_course_id") REFERENCES "Types_of_courses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_course_level_id_fkey" FOREIGN KEY ("course_level_id") REFERENCES "Courses_level"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_platform_id_fkey" FOREIGN KEY ("platform_id") REFERENCES "Platforms"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_language_id_fkey" FOREIGN KEY ("language_id") REFERENCES "Languages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_sector_id_fkey" FOREIGN KEY ("sector_id") REFERENCES "Sectors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_content_pillar_id_fkey" FOREIGN KEY ("content_pillar_id") REFERENCES "Content_pillars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_functionality_id_fkey" FOREIGN KEY ("functionality_id") REFERENCES "Functionality"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Courses" ADD CONSTRAINT "Courses_tool_id_fkey" FOREIGN KEY ("tool_id") REFERENCES "Tools"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
