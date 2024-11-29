import React, { Dispatch, SetStateAction } from "react";

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
export interface AplicationCart {
  urlImg:string,
  nameProject:string,
  Top:number,
  Industry:string,
  Developer:boolean,
  numberOfScores:number,
  numberVotes:number,
  Category:string[],
  children?: React.ReactNode,
  className?: string
} 

export interface PropsDetailsAppCart {
  nameAplication:string,
  language:string,
  Dateofshopping:string,
  dateCupon:string | null,
   valueShopping:number,
   valueTotal:number,
   PaymentMethod:string
}


export interface Steps{
  
    step1:
     {status:boolean,
      step:boolean}
    ,
    step2:
    {status:boolean,
     step:boolean},
     step3:
     {status:boolean,
      step:boolean}
   }

export interface step1{
  steps:Steps
  ,setStep: Dispatch<SetStateAction<{
    step1:
     {status:boolean,
      step:boolean}
    ,
    step2:
    {status:boolean,
     step:boolean},
     step3:
     {status:boolean,
      step:boolean}}>>
}

export interface step2{
  nameProject:string,
  steps:Steps
  ,setStep: Dispatch<SetStateAction<{
    step1:
     {status:boolean,
      step:boolean}
    ,
    step2:
    {status:boolean,
     step:boolean},
     step3:
     {status:boolean,
      step:boolean}}>>
}