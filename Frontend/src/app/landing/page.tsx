"use client";
import { courseCard } from "@/mock/db";
import React, { useState } from "react";
import CardCourse from "@/components/Card_Course/Card_Course";
import BackgroundBanner2 from "../../../public/Fondos_img/BackgroundBanner2.png";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";
import Banner from "@/components/Banner/Banner";
import CardCourseHorizontal from "@/components/Card_Course/Card_Course_Horizontal/CardCourseHorizontal";


export default function LandingPage() {
  const [visibleCountAPP, setVisibleCountAPP] = useState(4); // Estado para controlar cuántos elementos se muestran
  const [visibleCountCourse, setVisibleCountCourse] = useState(3); // Estado para controlar cuántos elementos se muestran

  // Función para cargar más elementos
  const handleShowMoreAPP = () => {
    setVisibleCountAPP((prevCount: number) => prevCount + 4);
  };
  const handleShowMoreCourse = () => {
    setVisibleCountCourse((prevCount: number) => prevCount + 4);
  };
  const base = courseCard;
  const curso = courseCard.slice(0, 1);
  return (
    <div>
      <Header />

      {curso &&
        curso.map((items) => {
          return (
            <div className="" key={items.title}>
              <CardCourseHorizontal course={items} />;
            </div>
          );
        })}
      <div className="m-8">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap sm:gap-4 justify-around">
          <Banner
            backgroundImage={BackgroundBanner2}
            classes=""
            title="Aprende en KlowHub"
            redirectTo="/"
          ></Banner>
          <Banner
            classes=""
            title="Encuentra Aplicaciones"
            redirectTo="/"
          ></Banner>
          <Banner
            backgroundImage={BackgroundBanner2}
            classes=""
            title="Publica Proyectos"
            redirectTo="/"
          ></Banner>
          <Banner classes="" title="Aprende en KlowHub" redirectTo="/"></Banner>
        </div>
        <section className="mt-8">
          <h2 className="font-bold text-xl lg:text-5xl">Cursos Recomendados</h2>
          <p className="mt-4 mb-8 text-sm lg:text-lg">
            Descubre los cursos más destacados y lleva tus habilidades al
            siguiente nivel. Aprende de expertos y aplica tus conocimientos en
            proyectos reales con AppSheet.
          </p>
          <div className="lg:col-span-4 lg:gap-12 grid-cols-1 lg:grid-cols-3 grid">
            {base.slice(0, visibleCountCourse).map((items) => {
              return (
                <div className="" key={items.title}>
                  <CardCourse course={items} />;
                </div>
              );
            })}
          </div>
        </section>
        <div className=" w-100 flex justify-center">
          {visibleCountCourse < base.length && (
            <button
              onClick={handleShowMoreCourse}
              className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
            >
              Mostrar más
            </button>
          )}
        </div>

        <section>
          <h2 className="font-bold text-xl lg:text-5xl">
            Aplicaciones Recomendadas
          </h2>
          <p className="mt-4 mb-8 text-sm lg:text-lg">
            Explorá soluciones listas para usar. Encontrá la app perfecta para
            tu proyecto y empezá a trabajar de inmediato.
          </p>
          <div className="col-span-4 gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid">
            {base.slice(0, visibleCountAPP).map((items) => {
              return (
                <div className="" key={items.title}>
                  <CardCourse course={items} />;
                </div>
              );
            })}
          </div>
          <div className=" w-100 flex justify-center">
            {visibleCountAPP < base.length && (
              <button
                onClick={handleShowMoreAPP}
                className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
              >
                Mostrar más
              </button>
            )}
          </div>
        </section>
        <section>
          <h2 className="text-5xl">Ultimas Consultas</h2>
        </section>
      </div>
      <Footer />
    </div>
  );
}
