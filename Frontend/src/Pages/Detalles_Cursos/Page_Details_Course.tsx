'use client';

import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs";
import { detalles_pages } from "@/mock/db";
import Image from "next/image";
import Link from "next/link";

import { Icon_Clock } from "../../../public/icons/Details_Course_Icon/Icon_Clock";
import { Icon_Camera } from "../../../public/icons/Details_Course_Icon/Icon_Camera";
import { Course_page } from "@/services/Interfaces";
import React, { useState } from "react";
import { Icon_Star, Icon_Start_Med } from "../../../public/icons/Details_Course_Icon/Start_Icon";
import { Icon_Check_page } from "../../../public/icons/Details_Course_Icon/Icon_Check";

export function Page_Details_Course({ id }: any) {

  const parsedId = Number(id);

  const filteredInfo: Course_page | any = detalles_pages.find(item => {
    console.log("Comparando item.id:", item.id, "con parsedId:", parsedId);
    return item.id === parsedId;
  });

  if (!filteredInfo) {
    return <div className="text-center my-10">No se encontró información para el curso con id {id}</div>;
  }

  const [rating, setRating] = useState(filteredInfo.details?.estrellas);

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

  const breadcrumbs = useBreadcrumbs();

  return (
    <main className="max-w-7xl flex flex-col justify-center mb-[48px]">
      <nav className="mb-10">
        <ol className="flex flex-row mt-4 mb-4">
          {breadcrumbs?.map(({ name, path, isLast }) => (
            <li key={path} className="flex flex-row items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="font-bold">{filteredInfo?.title}</span>
              ) : (
                <Link href={path} className="hover:underline">
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="grid grid-cols-[2fr_1fr]">
        <article className=''>
          <header>
            <h2 className='mb-4 font-bold text-[16px]'>{filteredInfo?.title}</h2>
          </header>
          <p className="text-sm">{filteredInfo?.description}</p>

          <div className='md:flex md:flex-row mb-5 md:mb-2 md:items-center md:mt-10'>
            <div className='grid grid-cols-1 grid-rows-2 md:flex md:flex-row md:gap-x-1 items-center' key={id}>
              <div className='flex flex-row items-center'>
                <span className='pt-0.5 pr-4'>{filteredInfo.details?.estrellas}</span>
                {Array.from({ length: 5 }, (_, index) => (
                  <React.Fragment key={index}>{renderStar(index)}</React.Fragment>
                ))}
                <span className='pl-1'>(74)</span>
              </div>

              <div className='flex flex-row mt-2 items-center'>
                <div className='flex flex-row items-center pb-1 md:pl-4 gap-x-3 text-[#A1C2FA]'>
                  <Icon_Camera width={22} height={22} />
                  <span className="text-sm">{filteredInfo?.details?.videos} videos</span>
                </div>
                <div className='flex flex-row items-center pb-1 gap-x-2 ml-4 text-[#A1C2FA]'>
                  <Icon_Clock width={20} height={20} />
                  <span className="text-sm">{filteredInfo?.details?.duracion} horas</span>
                </div>
              </div>
            </div>
          </div>

          <figure className='flex flex-col'>
            <Image className='mb-1 h-[345px]' src={filteredInfo?.video_resumen} width={880} height={300} alt='video_resumen' />
            <Image
              src={"/img/Details_Course/Reproductor.png"}
              alt='Reproductor'
              className='relative bottom-[3.5rem] max-[1000px]:hidden rounded-md left-0'
              width={880}
              height={50}
            />
          </figure>

          {/* Lecciones */}
          <div>

          </div>

          <div className='flex flex-row items-center gap-x-2 mb-5 sm:mt-5  h-auto'>
            <div className="flex flex-col justify-center  items-center h-auto">
              <Image src={filteredInfo?.avatar} className="mt-1" width={80} height={80} alt='avatar' />
              <Link href={"#"} className="text-[12px] text-center mt-1.5 font-inter font-semibold underline">Ver perfil</Link>

            </div>
            <div className='flex flex-col justify-center h-auto pb-6'>
              <h3 className='font-inter font-semibold'>{filteredInfo.name}</h3>
              <p className='text-[14px] font-inter'>{filteredInfo.bio}</p>
            </div>
          </div>

          <div>
          </div>




          <section>
            <h3 className="mb-2">Despues de completar este curso,  serás capaz de</h3>
            <ul className="">
              {filteredInfo.items.map((item: string, index: number) => {
                return (
                  <div className="flex flex-row items-center mb-2 gap-y-4" key={index}>
                    <Icon_Check_page width={62} height={26} />
                    <li key={index}>{item}</li>
                  </div>
                )
              })}
            </ul>
          </section>

          <section className='flex flex-col gap-y-2 mb-2 mt-10'>
            <h3 className='font-bold text-md'>Acerca de este curso</h3>
            <p className='font-inter text-sm'>{filteredInfo.info_curso}</p>
          </section>

        </article>

        <aside className="">

        </aside>
        <p className="mt-10 text-center">Ver mas</p>
      </section>

    </main>
  );
}

