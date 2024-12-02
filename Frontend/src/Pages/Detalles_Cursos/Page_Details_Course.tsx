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
import { Teacher_info } from "@/components/Details_Course/Details_teacher/Teacher";
import { Course_program } from "@/components/Details_Course/Course program/Course_program";
import { Mail } from "../../../public/icons/Details_Course_Icon/Social_Media/Mail";
import { Icon_Whasapp } from "../../../public/icons/Details_Course_Icon/Social_Media/Whasapp";
import { Icon_Mensagge } from "../../../public/icons/Details_Course_Icon/Social_Media/Mensagge";
import { Icon_Linkendi } from "../../../public/icons/Details_Course_Icon/Social_Media/Linkedin";
import { Reviews } from "@/components/Details_Course/Reviews/Reviews";

export default function Page_Details_Course({ id }: { id: string }) {
  const breadcrumbs = useBreadcrumbs();
  const parsedId = Number(id);
  const [showMore, setShowMore] = useState(false);


  const filteredInfo = detalles_pages.find(item => item.id === parsedId) as Course_page | undefined;

  if (!filteredInfo) {
    return <div className="text-center my-10">No se encontró información para el curso con id {id}</div>;
  }

  const { details } = filteredInfo;
  const rating = details?.estrellas ?? 0;

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
    <main className="max-w-7xl flex flex-col justify-center mb-[48px]">
      <nav className="mb-5 mt-5">
        <ol className="flex flex-row mt-4 mb-4">
          {breadcrumbs?.map(({ name, path, isLast }) => (
            <li key={path} className="flex flex-row items-center">
              <span className="mx-2"></span>
              {isLast ? (
                <span className="font-bold">{filteredInfo?.title}</span>
              ) : (
                <Link href={path} className=" flex flex-row gap-x-5">
                  <p className="hover:underline">{name}</p>
                  <p>/</p>
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

          <figure className='flex flex-col p-0 m-0 w-[800px]'>
            <div>
              <Image className='mb-1 h-[385px]' src={filteredInfo?.video_resumen} width={800} height={400} alt='video_resumen' />



            </div>
            <h3 className="pl-4 mt-2 mb-2 font-semibold font-inter">Contenido gratuito</h3>
            <div className="grid grid-cols-4  gap-x-3 items-center justify-center">
              <div className="flex flex-col gap-y-3">
                <Image alt="Leccion 1" src={"/img/Details_Course/Lesson/Leccion_1.png"} width={500} height={300} />
                <p>Lección 1</p>
              </div>
              <div className="flex flex-col gap-y-3">
                <Image alt="Leccion 2" src={"/img/Details_Course/Lesson/Leccion_2.png"} width={500} height={300} />
                <p>Lección 2</p>

              </div>
              <div className="flex flex-col gap-y-3">
                <Image alt="Leccion 3" className="pt-1 h-[93px]" src={"/img/Details_Course/Lesson/Leccion_3.png"} width={500} height={300} />
                <p>Lección 3</p>

              </div>
              <div className="flex flex-col gap-y-3">
                <Image alt="Leccion 4" src={"/img/Details_Course/Lesson/Leccion_4.png"} width={500} height={300} />
                <p>Lección 4</p>

              </div>

            </div>
          </figure>

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

        
          <section>
            <h3 className=" text-[16px]">Despues de completar este curso, serás capaz de</h3>
            <ul className="ml-4 mt-4">
              {filteredInfo.items.map((item: string, index: number) => {
                return (
                  <div className="flex flex-row items-center mb-2  gap-y-4 text-sm" key={index}>
                    <Icon_Check_page width={62} height={26} />
                    <li key={index}>{item}</li>
                  </div>
                )
              })}
            </ul>
          </section>

          <section className='flex flex-col gap-y-2 mb-2 mt-10'>
            <h3 className='font-bold text-md'>Acerca de este curso</h3>
            <p className='font-inter text-sm' style={{ opacity: showMore ? 1 : 0.5, transition: "opacity 0.5s ease-in-out" }}>{filteredInfo.info_curso}</p>
          </section>

          <button className={`w-full text-center mt-10 ${showMore ? "hidden" : "block  "}`} onClick={() => setShowMore(!showMore)}>
            {showMore ? " Ver menos" : "Ver mas"}
          </button>

          {showMore && (
            <div className="mt-10 ">
              <div>
                <button className=" bg-primary_b_500 border w-auto border-none rounded-lg font-semibold font-inter px-10 py-2">
                  Añadir al carrito
                </button>
              </div>
              <div className='flex flex-row mt-6 gap-x-4 items-center'>
                <h5 className='font-inter text-[14px]'>Compartir</h5>
                <div className='flex flex-row items-center gap-x-3'>
                  <Mail width={12} height={12} />
                  <Icon_Whasapp width={12} height={12} />
                  <Icon_Mensagge width={12} height={12} />
                  <Icon_Linkendi width={12} height={12} />
                </div>
              </div>
              <div className="flex flex-col gap-y-5 mt-4">
                <h2 className="font-bold font-inter text-[18px]">¿Por  qué aprender con {filteredInfo.name}?</h2>
                <p className="font-inter text-sm">{filteredInfo.question.question_1}</p>
              </div>
              <div className="flex flex-col gap-y-5 mt-4">
                <h2 className="font-bold font-inter text-[18px]">¿Para quién es este curso?</h2>
                <p className="font-inter text-sm">{filteredInfo.question.question_2}</p>
              </div>
              <div className="flex flex-col gap-y-5 mt-4">
                <h2>Requsitos</h2>

                <div>
                  {filteredInfo.requirements.map((item: string, index: number) => {
                    return (
                      <div className="flex flex-row" key={index}>
                        <Icon_Check_page width={62} height={26} />
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
              <div className="flex flex-col gap-y-5 mt-4">
                <h2>¿Que incluye?</h2>

                <div className="">
                  {filteredInfo.includes.map((item: string, index: number) => {
                    return (
                      <div className="flex flex-row gap-y-4 pb-4" key={index}>
                        <Icon_Check_page width={62} height={26} />
                        <p>{item}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div>
                <h2 className="font-bold">Información y funcionalidades de la app</h2>
                <div className=" py-1 rounded-md grid grid-cols-4 border border-primary_c_200 mt-4">
                  <div className="flex flex-col items-center ">
                    <h3 className="font-inter pb-4 font-semibold">Funcionalidades</h3>
                    <div className="flex flex-col gap-y-3 items-center">
                      {filteredInfo.information_app.funcionalidad.map((item: string, index: number) => {
                        return (
                          <h5 key={index} className="bg-gray-400 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm">
                            {item}
                          </h5>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="font-inter pb-4 font-semibold">Herramientas y plataformas</h3>
                    <div className="flex flex-col gap-y-3">
                      {filteredInfo.information_app.tools.map((item: string, index: number) => {
                        return (
                          <h5 key={index} className="bg-gray-400  px-2 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm">
                            {item}
                          </h5>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="font-inter pb-4 font-semibold">Sector</h3>
                    <div className="flex flex-col gap-y-3 items-center">
                      {filteredInfo.information_app.section.map((item: string, index: number) => {
                        return (
                          <h5 key={index} className="bg-gray-400 px-2 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm">
                            {item}
                          </h5>
                        )
                      })}
                    </div>
                  </div>

                  <div className="flex flex-col items-center">
                    <h3 className="font-inter pb-4 font-semibold">Plan de contenido</h3>
                    <div className="flex flex-col gap-y-3 pb-2 items-center">
                      {filteredInfo.information_app.content.map((item: string, index: number) => {
                        return (
                          <h5 key={index} className="bg-gray-400 px-2 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm">
                            {item}
                          </h5>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-20">
                <Reviews />
              </div>
            </div>
          )}
        </article>

        <aside className="flex flex-col">
          <Teacher_info />
          <div className="">

          </div>
          <Course_program />
          <div className="flex flex-col gap-y-6 justify-center w-full items-center mt-10">
            <button className="bg-primary_b_500 w-[60%] rounded-lg font-bold font-inter px-3 py-2 text-base">
              Comprar Curso
            </button>
            <button className="border-primary_a border w-[60%] text-primary_c_200 rounded-lg font-bold font-inter px-3 py-2">
              Añadir al carrito
            </button>
          </div>


        </aside>


      </section>

    </main>
  );
}


