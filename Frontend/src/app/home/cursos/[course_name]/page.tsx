'use client'
import { useParams } from 'next/navigation';
import { Page_Details_Course } from '@/Pages/Detalles_Cursos/Page_Details_Course';
import { Breadcrumbs } from '@/components/Breadcrubs.tsx/Breadcrubs';

const CourseDetail = ({ params }: any) => {
  params = useParams();
  const courseName = params.course_name;

  if (!courseName) {
    return <div>Loading...</div>;
  }

  const id = params.course_name;

  return (
    <section>
      <Page_Details_Course id={id} />
    </section>
  );
};

export default CourseDetail;
