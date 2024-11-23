'use client'
import { Course } from "@/services/Interfaces";
import { Icon_Power_Apps } from "../../../public/icons/Details_Course_Icon/Power_Apps";
import React, { useState } from "react";
import { Icon_Camera } from "../../../public/icons/Details_Course_Icon/Icon_Camera";
import { Icon_Clock } from "../../../public/icons/Details_Course_Icon/Icon_Clock";
import { Icon_Star, Icon_Start_Med } from "../../../public/icons/Details_Course_Icon/Start_Icon";
import { usePathname } from "next/navigation";
import Link from "next/link";


export function Page_Details_Course({ datos }: { datos: Course }) {

    const pathname = usePathname();
    const segments = pathname?.split('/').filter(Boolean);

    const { id, title, descripcion, details, video_resumen, avatar, name, bio, info_curso } = datos;


    const [rating, setRating] = useState(details?.estrellas);

    const renderStar = (index: number) => {
        const fullStar = index < Math.floor(rating);
        const halfStar = index === Math.floor(rating) && rating % 1 !== 0;
        if (halfStar) {
            return (
                <Icon_Start_Med />
            );
        }
        if (fullStar) {
            return <Icon_Star key={index} width={20} height={20} fill="#FBBC05" />;
        }
        return <Icon_Star fill='#fff' width={20} height={20} key={index} />
    };



    return (
        <main className="grid grid-cols-2 ">
            <section className=' max-h-[80vh] overflow-y-auto max-w-2xl ml-10'>
                <div className="mb-20 mt-20">
                    {segments?.map((segment, index) => {
                        const path = `/${segments.slice(0, index + 1).join('/')}`;
                        const isLast = index === segments.length - 1;

                        return (
                            <li key={path} className="flex items-center">
                                <span className="mx-2">/</span>
                                {isLast ? (
                                    <div className="flex flex-row">
                                        <Link href={`/${decodeURIComponent(segment)}`} className="font-bold">{decodeURIComponent(segment)}</Link>

                                    </div>
                                ) : (
                                    <Link href={path} className="hover:underline">
                                        {decodeURIComponent(segment)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </div>
                <article className='font-inter'>
                    <h2 className='mb-4 font-bold text-[16px]'>{title}</h2>
                    <p>
                        {descripcion}
                    </p>
                </article>
                <article className='flex flex-row items-center bg-white/10 w-1/4 max-[900px]:w-1/2 gap-x-2 font-inter justify-around rounded-xl p-2 mb-10 mt-10'>
                    <Icon_Power_Apps width={20} height={20} />
                    <p>Power Apps</p>
                </article>

                <article className='md:flex md:flex-row mb-5 md:items-center' >
                    <div className='grid grid-cols-1 grid-rows-2 md:flex md:flex-row md:gap-x-1 items-center' key={id}>
                        <div className='flex flex-row items-center '>
                            <p className='pt-0.5 pr-4'>{details?.valoracion}</p>
                            {Array.from({ length: 5 }, (_, index) => (
                                <React.Fragment key={index}>{renderStar(index)}</React.Fragment>
                            ))}
                            <p className='pl-1'>(74)</p>
                        </div>

                        <div className='flex flex-row mt-2 items-center '>
                            <div className='flex flex-row items-center pb-1 md:pl-4 gap-x-3 text-[#A1C2FA]'>
                                <Icon_Camera width={16} height={16} />
                                <p className=''>{details?.videos} videos</p>
                            </div>
                            <div className='flex flex-row items-center pb-1 gap-x-2 ml-4 text-[#A1C2FA]'>
                                <Icon_Clock width={16} height={16} />
                                <p>{details?.duracion} horas</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section >
            <section>

            </section>
        </main>
    );
}