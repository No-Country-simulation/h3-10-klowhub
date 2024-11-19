'use client'
import Image from "next/image";
import Link from "next/link";
import MovieIcon from '@/components/MentoresComp/Icons/MovieIcon';
import HeartIcon from '@/components/MentoresComp/Icons/HeartIcon';
import DetailsIcon from '../../../public/icons/DetailIcon'
import { useState } from "react";
import { PropsMentor } from "@/services/Interfaces";
export default function CardMentoresComponent({ mentor }: { mentor: PropsMentor }) {

    const { mentorImage, fullName, projectName, projectImage, reviewCount, sessionCount, language, countryFlagIcon, hourlyRate, detailsLink } = mentor;

    const [StateHeadt, setStateHeadt] = useState(false)
    function handleClick() {
        setStateHeadt(!StateHeadt)
    }

    return (
        <div className=" w-full max-w-[330px]  bg-[#1F2937] relative rounded-xl">
            <button onClick={handleClick} className={'absolute right-2 top-2'}>
                <HeartIcon StateHeart={StateHeadt} />
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
                            alt={`Icono del pais del mentor`} />
                    </section>
                    <DetailsIcon />
                </div>
                <div className="flex gap-3 bg-[#FFFFFF1A] rounded-lg w-max px-4 py-3 items-center">
                    <Image
                        src={projectImage}
                        alt={`Imagen del proyecto $projectName}`}
                        width={30}
                        height={20} />
                    <p className="font-semibold text-xs">{projectName}</p>
                </div>
                <div className="flex gap-3 text-sm">
                    <MovieIcon />
                    <p>{sessionCount} Sesiones</p>
                    <p>{"(" + reviewCount + " Reseñas)"} </p>
                </div>
                <p className="text-sm">{language}</p>
                <p className="font-bold text-xl">{hourlyRate}USD / Hora</p>
            </div>
            <Link href={detailsLink} className="block text-[#D194E2] text-center pb-4 hover:text-white">Ver detalles</Link>
        </div>
    )
}
