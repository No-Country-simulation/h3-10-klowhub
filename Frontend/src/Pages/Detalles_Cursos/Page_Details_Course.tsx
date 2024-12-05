"use client";

import { useBreadcrumbs } from "@/Hooks/useBreadcrumbs";
import { detalles_pages } from "@/mock/db";
import Image from "next/image";
import Link from "next/link";
import { Icon_Clock } from "../../../public/icons/Details_Course_Icon/Icon_Clock";
import { Icon_Camera } from "../../../public/icons/Details_Course_Icon/Icon_Camera";
import { Course_page } from "@/services/Interfaces";
import React, { useState } from "react";
import {
  Icon_Star,
  Icon_Start_Med,
} from "../../../public/icons/Details_Course_Icon/Start_Icon";
import { Icon_Check_page } from "../../../public/icons/Details_Course_Icon/Icon_Check";
import { Mail } from "../../../public/icons/Details_Course_Icon/Social_Media/Mail";
import { Icon_Whasapp } from "../../../public/icons/Details_Course_Icon/Social_Media/Whasapp";
import { Icon_Mensagge } from "../../../public/icons/Details_Course_Icon/Social_Media/Mensagge";
import { Icon_Linkendi } from "../../../public/icons/Details_Course_Icon/Social_Media/Linkedin";
import { Reviews } from "@/components/Details_Course/Reviews/Reviews";
import { Teacher_info } from "@/components/Details_Course/Details_teacher/Teacher";
import { Course_program } from "@/components/Details_Course/Course program/Course_program";

export default function Page_Details_Course({ id }: { id: string }) {
  const breadcrumbs = useBreadcrumbs();
  const parsedId = Number(id);
  const [showMore, setShowMore] = useState(false);

  const filteredInfo = detalles_pages.find((item) => item.id === parsedId) as
    | Course_page
    | undefined;

  if (!filteredInfo) {
    return (
      <div className="text-center my-10">
        No se encontró información para el curso con id {id}
      </div>
    );
  }

  const { details } = filteredInfo;
  const rating = details?.estrellas ?? 0;

  const renderStar = (index: number) => {
    const fullStar = index < Math.floor(rating);
    const halfStar = index === Math.floor(rating) && rating % 1 !== 0;
    if (halfStar) {
      return <Icon_Start_Med />;
    }
    if (fullStar) {
      return <Icon_Star key={index} width={20} height={20} fill="#FBBC05" />;
    }
    return <Icon_Star fill="#fff" width={20} height={20} key={index} />;
  };

  return (
    <main className="max-w-7xl mx-auto flex flex-col justify-center mb-12 px-4 lg:px-0 ml-2">
      <nav className="mb-5 mt-5">
        <ol className="flex flex-wrap gap-2">
          {breadcrumbs?.map(({ name, path, isLast }) => (
            <li key={path} className="flex items-center">
              {isLast ? (
                <span className="font-bold">{filteredInfo?.title}</span>
              ) : (
                <Link href={path} className="flex items-center gap-2">
                  <span className="hover:underline">{name}</span>
                  <span>/</span>
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>

      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
        <article>
          <header>
            <h2 className="mb-4 text-xl font-bold">{filteredInfo?.title}</h2>
          </header>
          <p className="text-sm">{filteredInfo?.description}</p>

          <div className="flex flex-col lg:flex-row gap-4 mt-6">
            <div className="flex items-center">
              <span className="pr-4">{filteredInfo.details?.estrellas}</span>
              {Array.from({ length: 5 }, (_, index) => (
                <React.Fragment key={index}>{renderStar(index)}</React.Fragment>
              ))}
              <span className="pl-1">(74)</span>
            </div>
            <div className="flex flex-wrap gap-4 text-[#A1C2FA]">
              <div className="flex items-center">
                <Icon_Camera width={22} height={22} />
                <span className="ml-2">
                  {filteredInfo?.details?.videos} videos
                </span>
              </div>
              <div className="flex items-center">
                <Icon_Clock width={20} height={20} />
                <span className="ml-2">
                  {filteredInfo?.details?.duracion} horas
                </span>
              </div>
            </div>
          </div>

          <figure className="flex flex-col items-center mt-6">
            <video
              className="rounded-lg w-full lg:w-[800px]"
              controls
              src="https://res.cloudinary.com/dnxezl9ye/video/upload/v1733341007/klowhub/c4tv79qejrp0gmhfqssx.mp4"
            >
              Tu navegador no soporta videos.
            </video>
            <h3 className="mt-4 text-lg font-semibold">Contenido gratuito</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              {["Lección 1", "Lección 2", "Lección 3", "Lección 4"].map(
                (lesson, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Image
                      alt={lesson}
                      src={`/img/Details_Course/Lesson/Leccion_${
                        index + 1
                      }.png`}
                      width={200}
                      height={150}
                      className="rounded-lg"
                    />
                    <p className="mt-2 text-sm">{lesson}</p>
                  </div>
                )
              )}
            </div>
          </figure>

          {!showMore && (
            <>
              <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
                <div className="flex flex-col items-center">
                  <Image
                    src={filteredInfo?.avatar}
                    className="rounded-full"
                    width={80}
                    height={80}
                    alt="avatar"
                  />
                  <Link
                    href="#"
                    className="text-sm font-semibold mt-2 underline"
                  >
                    Ver perfil
                  </Link>
                </div>
                <div>
                  <h3 className="font-semibold">{filteredInfo.name}</h3>
                  <p className="text-sm">{filteredInfo.bio}</p>
                </div>
              </div>
              <section className="mt-8">
                <h3 className="text-lg font-semibold">
                  Después de completar este curso, serás capaz de:
                </h3>
                <ul className="mt-4 space-y-2">
                  {filteredInfo.items.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Icon_Check_page width={24} height={24} />
                      <span className="ml-2 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
              <section className="flex flex-col gap-y-2 mb-2 mt-10">
                <h3 className="font-bold text-md">Acerca de este curso</h3>
                <p
                  className="font-inter text-sm"
                  style={{
                    opacity: showMore ? 1 : 0.5,
                    transition: "opacity 0.5s ease-in-out",
                  }}
                >
                  {filteredInfo.info_curso}
                </p>
              </section>
              <button
                className="mt-8 text-center bg-primary_b_500 text-white py-2 px-4 rounded-lg w-full lg:w-auto"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Ver menos" : "Ver más"}
              </button>{" "}
            </>
          )}

          {showMore && (
            <div className="mt-10">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
                  <div className="flex flex-col items-center">
                    <Image
                      src={filteredInfo?.avatar}
                      className="rounded-full"
                      width={80}
                      height={80}
                      alt="avatar"
                    />
                    <Link
                      href="#"
                      className="text-sm font-semibold mt-2 underline"
                    >
                      Ver perfil
                    </Link>
                  </div>
                  <div>
                    <h3 className="font-semibold">{filteredInfo.name}</h3>
                    <p className="text-sm">{filteredInfo.bio}</p>
                  </div>
                </div>

                <section className="mt-8">
                  <h3 className="text-lg font-semibold">
                    Después de completar este curso, serás capaz de:
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {filteredInfo.items.map((item, index) => (
                      <li key={index} className="flex items-center">
                        <Icon_Check_page width={24} height={24} />
                        <span className="ml-2 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="flex flex-col gap-y-2 mb-2 mt-10">
                  <h3 className="font-bold text-md">Acerca de este curso</h3>
                  <p
                    className="font-inter text-sm"
                    style={{
                      opacity: showMore ? 1 : 0.5,
                      transition: "opacity 0.5s ease-in-out",
                    }}
                  >
                    {filteredInfo.info_curso}
                  </p>
                </section>
                <button className=" bg-primary_b_500 border w-auto border-none rounded-lg font-semibold font-inter px-10 py-2">
                  Añadir al carrito
                </button>

                <div className="flex flex-row mt-6 gap-x-4 items-center">
                  <h5 className="font-inter text-[14px]">Compartir</h5>
                  <div className="flex flex-row items-center gap-x-3">
                    <Mail width={12} height={12} />
                    <Icon_Whasapp width={12} height={12} />
                    <Icon_Mensagge width={12} height={12} />
                    <Icon_Linkendi width={12} height={12} />
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 mt-4">
                  <h2 className="font-bold font-inter text-[18px]">
                    ¿Por qué aprender con {filteredInfo.name}?
                  </h2>
                  <p className="font-inter text-sm">
                    {filteredInfo.question.question_1}
                  </p>
                </div>
                <div className="flex flex-col gap-y-5 mt-4">
                  <h2 className="font-bold font-inter text-[18px]">
                    ¿Para quién es este curso?
                  </h2>
                  <p className="font-inter text-sm">
                    {filteredInfo.question.question_2}
                  </p>
                </div>
                <div className="flex flex-col gap-y-5 mt-4">
                  <h2>Requsitos</h2>

                  <div>
                    {filteredInfo.requirements.map(
                      (item: string, index: number) => {
                        return (
                          <div className="flex flex-row" key={index}>
                            <Icon_Check_page width={62} height={26} />
                            <p>{item}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-y-5 mt-4">
                  <h2>¿Que incluye?</h2>

                  <div className="">
                    {filteredInfo.includes.map(
                      (item: string, index: number) => {
                        return (
                          <div
                            className="flex flex-row gap-y-4 pb-4"
                            key={index}
                          >
                            <Icon_Check_page width={62} height={26} />
                            <p>{item}</p>
                          </div>
                        );
                      }
                    )}
                  </div>
                </div>

                <div>
                  <h2 className="font-bold">
                    Información y funcionalidades de la app
                  </h2>
                  <div className="py-1 rounded-md border border-primary_c_200 mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-inter pb-4 font-semibold">
                        Funcionalidades
                      </h3>
                      <div className="flex flex-col gap-y-3 items-center">
                        {filteredInfo.information_app.funcionalidad.map(
                          (item: string, index: number) => {
                            return (
                              <h5
                                key={index}
                                className="bg-gray-400 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm w-full max-w-[200px]"
                              >
                                {item}
                              </h5>
                            );
                          }
                        )}
                      </div>
                    </div>

                   
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-inter pb-4 font-semibold">
                        Herramientas y plataformas
                      </h3>
                      <div className="flex flex-col gap-y-3">
                        {filteredInfo.information_app.tools.map(
                          (item: string, index: number) => {
                            return (
                              <h5
                                key={index}
                                className="bg-gray-400 px-2 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm w-full max-w-[200px]"
                              >
                                {item}
                              </h5>
                            );
                          }
                        )}
                      </div>
                    </div>

                    
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-inter pb-4 font-semibold">Sector</h3>
                      <div className="flex flex-col gap-y-3 items-center">
                        {filteredInfo.information_app.section.map(
                          (item: string, index: number) => {
                            return (
                              <h5
                                key={index}
                                className="bg-gray-400 px-2 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm w-full max-w-[200px]"
                              >
                                {item}
                              </h5>
                            );
                          }
                        )}
                      </div>
                    </div>

                    
                    <div className="flex flex-col items-center text-center">
                      <h3 className="font-inter pb-4 font-semibold">
                        Plan de contenido
                      </h3>
                      <div className="flex flex-col gap-y-3 pb-2 items-center">
                        {filteredInfo.information_app.content.map(
                          (item: string, index: number) => {
                            return (
                              <h5
                                key={index}
                                className="bg-gray-400 px-2 p-1 rounded-lg text-primary_b_500/70 font-semibold font-inter text-sm w-full max-w-[200px]"
                              >
                                {item}
                              </h5>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-20">
                  <Reviews />
                </div>
              </div>
            </div>
          )}
        </article>

        <aside className="flex flex-col">
          <Teacher_info />
          <div className=""></div>
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
