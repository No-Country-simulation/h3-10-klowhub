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
  info_curso: string;
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
export interface AplicationCart {
  urlImg: string;
  nameProject: string;
  Top: number;
  Industry: string;
  Developer: boolean;
  numberOfScores: number;
  numberVotes: number;
  Category: string[];
  id: number;
  fnDelete: (id: number) => undefined;
}

export interface PropsCourse {
  mainImageCourse: string;
  altMainImageCourse: string;
  title: string;
  description: string;
  projectName: string;
  projectImage: string;
  sector?: string;
  sellerImage?: string;
  premium?: boolean;
  stars: number;
  tags: string[];
  price?: number;
  califications: number;
  width?: number;
  heigth?: number;
}
