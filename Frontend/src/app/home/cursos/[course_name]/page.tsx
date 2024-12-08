'use client';

import  Page_Details_Course from '@/Pages/Detalles_Cursos/Page_Details_Course';
import React from 'react';

interface PageProps {
  params: Promise<{
    course_name: string;
  }>;
}

const CourseDetail = ({ params }: PageProps) => {
  const { course_name } = React.use(params);

  console.log('Información del parámetro:', course_name);

  if (!course_name) {
    return <div>No se encontró el curso.</div>;
  }

  console.log("Tipo de dato del course_name: " + typeof course_name)

  return (
    <main className="flex justify-center">
      <Page_Details_Course id={course_name} />
    </main>
  );
};

export default CourseDetail;