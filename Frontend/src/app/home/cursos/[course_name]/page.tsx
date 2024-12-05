'use client';

import Page_Details_Course from '@/Pages/Detalles_Cursos/Page_Details_Course';
import React, { useState, useEffect } from 'react';

interface PageProps {
  params: {
    course_name: string;
  };
}

const CourseDetail = ({ params }: PageProps) => {
  const [courseName, setCourseName] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Await if params is a Promise
      setCourseName(resolvedParams.course_name);
    };

    fetchParams();
  }, [params]);

  if (!courseName) {
    return <div>No se encontró el curso.</div>;
  }

  console.log("Información del parámetro:", courseName);
  console.log("Tipo de dato del course_name:", typeof courseName);

  return (
    <main className="flex justify-center">
      <Page_Details_Course id={courseName} />
    </main>
  );
};

export default CourseDetail;
