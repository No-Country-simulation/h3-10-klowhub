import { StaticImageData } from "next/image";
import React, { Dispatch, SetStateAction } from "react";

export interface CardCursoLong {
  id:number;
  title: string;
  description?: string;
  tags: string[];
  price?: string;
  video_url?: string;
  projectName?: string;
  sector?: {name:string};
  punctuation: string;
  altMainImageCourse?: string;
  stars: [];
  children?: React.ReactNode
  projectImage?: string;
  url_img?: string;
  sellerImage?: string;
  premium?: boolean;
  seller?: {isUserActive: boolean};
  top?: number;
  
  className?: string;
  width?: number;
  heigth?: number;
}
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
  details: Details_Course;
  video_resumen: string;
  avatar: string;
  name: string;
  bio: string;
  info_curso: string;
}

export interface Course_page {
  id: number;
  title: string;
  description: string;
  details?: {
    valoracion: number;
    estrellas: number;
    videos: number;
    duracion: number;
  };
  video_resumen: string;
  avatar: string;
  name: string;
  bio: string;
  info_curso: string;
  items: string[];
  question: {
    question_1: string;
    question_2: string;
  };
  requirements: string[];
  includes: string[];
  information_app: {
    funcionalidad: string[];
    tools: string[];
    section: string[];
    content: string[];
  };
}

export interface question_info {
  question_1: string;
  question_2: string;
}

export interface Course_page {
  id: number;
  title: string;
  description: string;
  details?: Details_Course;
  video_resumen: string;
  avatar: string;
  name: string;
  bio: string;
  info_curso: string;
  items: string[];
  question: question_info;
}

export interface question_info {
  question_1: string;
  question_2: string;
}

export interface Details_Course {
  valoracion: number;
  estrellas: number;
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
  children?: React.ReactNode;
  className?: string;
  id: number;
  
}

export interface PropsDetailsAppCart {
  nameAplication: string;
  language: string;
  Dateofshopping: string;
  dateCupon: string | null;
  valueShopping: number;
  valueTotal: number;
  PaymentMethod: string;
}

export interface Product {
id:number
urlImg: string
nameProject: string
Top: number
Industry: string
Developer: boolean
numberOfScores: number
numberVotes: number
Category: string[]
price: number
description: string,
quantity? : number
}
export interface Steps {
  step1: { status: boolean; step: boolean };
  step2: { status: boolean; step: boolean };
  step3: { status: boolean; step: boolean };
}

export interface step1 {
  steps: Steps;
  setStepAction: Dispatch<
    SetStateAction<{
      step1: { status: boolean; step: boolean };
      step2: { status: boolean; step: boolean };
      step3: { status: boolean; step: boolean };
    }>
  >;
}

export interface step2 {
  nameProject: string;
  steps: Steps;
  setStep: Dispatch<
    SetStateAction<{
      step1: { status: boolean; step: boolean };
      step2: { status: boolean; step: boolean };
      step3: { status: boolean; step: boolean };
    }>
  >;
}

export interface PropsCourse {
  id:number;
  mainImageCourse: string;
  altMainImageCourse?: string;
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

export interface Banner_Props {
  backgroundImage: StaticImageData | string;
  title: string;
  redirectTo: string;
  classes: string;
}

export interface userLogin {
  email: string;
  password: string;
}
export interface AuthTokens {
  token: string;
  email: string;
  iat: number;
  exp: number;
  authorities: string[];
}
export interface AuthContextProps {
  login: (email: string, password: string) => void;
  logout: () => void;
  isLoggedIn: boolean;
  authTokens: AuthTokens | null;
  userName: string;
}
export interface tokenData {
  fullName: string;
  sub: string;
  iat: number;
  exp: number;
  authorities: string[];
}

export interface UserLogged {
  id?: string;
  email?: string;
  name?: string;
  token?: string;
}

export interface IAuthContext {
  user?: UserLogged;
  setUser?: Dispatch<SetStateAction<UserLogged>>;
}
