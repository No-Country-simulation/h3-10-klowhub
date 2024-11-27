export interface PropsMentor {
  mentorImage: string;
  fullName: string;
  projectName: string;
  projectImage: string;
  reviewCount: number;
  sessionCount: number;
  language: string;
  countryFlagIcon: string;
  hourlyRate: number;
  detailsLink: string;
}

export interface inputdate {
  type: string;
  name: string;
  placeholder: string;
  className?: string;
}

export interface IconPromps {
  width: number;
  height: number;
}

export interface Course {
  id: number | any;
  title: string;
  descripcion: string;
  details: Details_Course;
  video_resumen: string;
  avatar: string;
  name: string;
  bio: string;
  info_curso: string
}

export interface Course_page {
  id: number | any;
  title: string;
  description: string;
  details?: Details_Course;
  video_resumen: string;
  avatar: string;
  name: string;
  bio: string;
  info_curso: string
  items: string[]
  question: question_info;
}

export interface question_info {
  question_1: string;
  question_2: string;
}

export interface Details_Course {
  valoracion: number;
  estrellas: number | any;
  videos: number;
  duracion: number;
}


