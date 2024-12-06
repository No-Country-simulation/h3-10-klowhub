"use client";
import { courseCard } from "@/mock/db";
import { db as mentors } from "@/mock/db"; // Importa la lista de mentores
import React, { useEffect, useState } from "react";
import CardCourse from "@/components/Card_Course/Card_Course";
import BackgroundBanner2 from "../../../public/Fondos_img/BackgroundBanner2.png";
import Banner from "@/components/Banner/Banner";
import CardCourseHorizontal from "@/components/Card_Course/Card_Course_Horizontal/CardCourseHorizontal";
import CardMentoresComponent from "@/components/MentoresComp/Card_Component";
import BannerMentores from "@/components/MentoresComp/Banner/BannerMentores";
export default function Home() {
  const [visibleCountAPP, setVisibleCountAPP] = useState(4); // Estado para controlar cuántos elementos se muestran
  const [visibleCountCourse, setVisibleCountCourse] = useState(3); // Estado para controlar cuántos elementos se muestran
  const [Card_Curso,setCurso] = useState([])
  // Función para cargar más elementos
  const handleShowMoreAPP = () => {
    setVisibleCountAPP((prevCount: number) => prevCount + 4);
  };
  const handleShowMoreCourse = () => {
    setVisibleCountCourse((prevCount: number) => prevCount + 4);
  };
  const base = courseCard;
  const curso = courseCard.slice(0, 1);
  useEffect(() => {
    fetch('https://knowhub-api-production.up.railway.app/courses?page=1&limit=3',{
      method: 'GET',
      headers: {
        "content-type": "application/json"
      }
    })
     .then(response => response.json())
     .then(date => setCurso(date))
  },[])
  return (
    <div>
      {curso &&
        curso.map((items) => {
          return (
            <div className="p-4" key={items.title}>
              <CardCourseHorizontal course={items} />
            </div>
          );
        })}
      <div className="m-8">
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-around">
          <Banner
            backgroundImage={BackgroundBanner2}
            classes=""
            title="Aprende en KlowHub"
            redirectTo="/"
          />
          <Banner
            backgroundImage={BackgroundBanner2}
            classes=""
            title="Encuentra Aplicaciones"
            redirectTo="/"
          />
          <Banner
            backgroundImage={BackgroundBanner2}
            classes=""
            title="Publica Proyectos"
            redirectTo="/"
          />
          <Banner
            classes=""
            title="Aprende en KlowHub"
            redirectTo="/"
            backgroundImage={BackgroundBanner2}
          />
        </div>
        <section className="mt-8">
          <h2 className="font-bold text-xl lg:text-5xl">Cursos Recomendados</h2>
          <p className="mt-4 mb-8 text-sm lg:text-lg">
            Descubre los cursos más destacados y lleva tus habilidades al
            siguiente nivel. Aprende de expertos y aplica tus conocimientos en
            proyectos reales con AppSheet.
          </p>
              <div className="grid gap-5"
               style={{
                gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))"
               }}>
              {Card_Curso.map((item,index) => (
              <CardCourse course={item} key={index}/>
             ))}
              </div>
               
                            
        </section>
        <div className="w-full flex justify-center">
          {visibleCountCourse < base.length && (
            <button
              onClick={handleShowMoreCourse}
              className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900"
            >
              Mostrar más
            </button>
          )}
        </div>

        <section className="mt-8">
          <h2 className="font-bold text-xl lg:text-5xl">
            Aplicaciones Recomendadas
          </h2>
          <p className="mt-4 mb-8 text-sm lg:text-lg">
            Explorá soluciones listas para usar. Encontrá la app perfecta para
            tu proyecto y empezá a trabajar de inmediato.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/*aplicationCard.slice(0, visibleCountAPP).map((item, index) => (
              <div  className="p-4" key={index}>
                <CardAplication
                 id={CartJson[0].id}
                 Category={CartJson[0].Category}
                 Developer={CartJson[0].Developer}
                 Industry={CartJson[0].Industry}
                 Top={CartJson[0].Top}
                 nameProject={CartJson[0].nameProject}
                 numberOfScores={CartJson[0].numberOfScores}
                 numberVotes={CartJson[0].numberVotes}
                 urlImg={CartJson[0].urlImg}
                />
              </div>
            ))*/}
          </div>
          <div className="w-full flex justify-center">
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
        <section className="mt-8">
          <BannerMentores
            backgroundImage={BackgroundBanner2}
            title="Conecta con Expertos"
            redirectTo=""
            classes="mb-10"
          />
        </section>
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mentors.map((mentor) => (
              <CardMentoresComponent key={mentor.id} mentor={mentor} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
