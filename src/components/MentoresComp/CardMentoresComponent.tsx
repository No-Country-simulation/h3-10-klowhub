'use client'
import Image from "next/image";
import Link from "next/link";
import MovieIcon from '@/components/MentoresComp/Icons/MovieIcon';
import HeartIcon from '@/components/MentoresComp/Icons/HeartIcon';
import DetailsIcon from '../../../public/icons/DetailIcon'
import { useState } from "react";
// TypeScript interface to define mentor data types
interface PropsMentor {
    mentorImage: string; // URL of the mentor's profile picture
    fullName: string; // Mentor's full name
    projectName: string; // Name of the project associated with the mentor
    projectImage: string; // URL of the project's image
    reviewCount: number; // Number of reviews
    sessionCount: number; // Number of sessions conducted by the mentor
    language: string; // Language spoken by the mentor
    countryFlagIcon: string; // URL of the country flag icon
    hourlyRate: number; // Price charged per hour in USD or relevant currency
    detailsLink: string; // URL to see more details about the mentor
  }
  

export default function CardMentoresComponent(
    {mentorImage,
     fullName,
     projectName,
     projectImage,
     reviewCount,
     sessionCount,
     language,
     countryFlagIcon,
     hourlyRate,
     detailsLink
    }:PropsMentor) {

        const [StateHeadt, setStateHeadt] = useState(false)
        function handleClick(){
            setStateHeadt(!StateHeadt)
        }
       
  return (
    <div className=" w-full max-w-[330px]  bg-[#1F2937] relative rounded-xl">
       <button onClick={handleClick} className = {'absolute right-2 top-2'}>
       <HeartIcon StateHeart={StateHeadt}/>
       </button>
        <Image 
        src={mentorImage}
        width={330}
        height={200}
        alt={`Imagen del ${fullName}`}
        className="rounded-t-xl object-cover object-center"
        />

        <div className="flex flex-col gap-3 p-3">
            <div className="flex justify-between">
                <section className="flex gap-4">
                    <p className="font-semibold">{fullName}</p>
                    <Image 
                     src={countryFlagIcon}
                     width={20}
                     height={20}
                     alt={`Icono del pais del mentor`}/>
                </section>
        <DetailsIcon/>
            </div>

            <div className="flex gap-3 bg-[#FFFFFF1A] rounded-lg w-max px-4 py-3 items-center">
                <Image 
                src={projectImage}
                alt={`Imagen del proyecto ${projectName}`}
                width={30}
                height={20}/>
                <p className="font-semibold text-xs">{projectName}</p>
            </div>

            <div className="flex gap-3 text-sm">
                <MovieIcon/>
                <p>{sessionCount} Sesiones</p>
                <p>{"("+reviewCount + " Reseñas)"} </p>
            </div>
            <p className="text-sm">{language}</p>
            <p className="font-bold text-xl">{hourlyRate}USD / Hora</p>
        </div>

        <Link href={detailsLink} className="block text-[#D194E2] text-center pb-4 hover:text-white">Ver detalles</Link>
    </div>
  )
}
