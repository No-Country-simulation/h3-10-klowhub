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
  id: number;
  title: string;
  descripcion: string;
  details?: Details_Course;
  video_resumen: string;
  avatar: string;
  name: string;
  bio: string;
  info_curso: string
}

export interface Details_Course {
  valoracion: number;
  estrellas: number | any;
  videos: number;
  duracion: number;
}

