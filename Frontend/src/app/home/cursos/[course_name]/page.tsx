'use client'
import { useParams } from 'next/navigation';
import { Page_Details_Course } from '@/Pages/Detalles_Cursos/Page_Details_Course';

const CourseDetail = ({ params }: any) => {
  params = useParams();
  const courseName = params.course_name;

  if (!courseName) {
    return <div>Loading...</div>;
  }

  const id = params.course_name;

  return (
    <section>
      
      <div>
        <h1>Curso: {courseName}</h1>
      </div>
      <div>
        <Page_Details_Course id={id} />
      </div>
      
    </section>
  );
};

export default CourseDetail;
