"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DetailsIcon from "../../../public/icons/DetailIcon";
import StarRating from "../StarsRating/StarsRating";
import HeartIcon from "../MentoresComp/Icons/HeartIcon";
import { CardCursoLong } from "@/services/Interfaces";
import { Icon_Shopping } from "../../../public/icons/Card_Course/Icon_Shopping";
import { useCart } from "@/Hooks/useCart";

interface CardCourseProps {
  course: CardCursoLong;
}

const CardCourse: React.FC<CardCourseProps> = ({ course }) => {
  const { addToCart } = useCart();

  const {
    projectImage,
    projectName = "Nombre del Proyecto",
    title = "Título del Curso",
    description = "Descripción del Curso",
    tags = [],
    punctuation = "0",
    price = "0.00",
    id,
  }: CardCursoLong = course;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const handleAddToCart = () => {
    addToCart(course);
  };

  return (
    <div className="h-auto w-full flex flex-col bg-[#1F2937] relative rounded-xl p-4">
    
      {projectImage ? (
        <Image
          src={projectImage}
          alt={`Imagen del proyecto ${projectName}`}
          width={245}
          height={245}
          className="w-full object-cover object-center rounded-md"
        />
      ) : (
        <div className="w-full h-[245px] bg-gray-700 rounded-md flex items-center justify-center">
          <p className="text-gray-300 text-sm">Sin imagen disponible</p>
        </div>
      )}
      
      {/* Botón para marcar como favorito */}
      <button onClick={handleToggleFavorite} className="absolute right-2 top-2">
        <HeartIcon StateHeart={isFavorite} />
      </button>

      {/* Contenido del curso */}
      <section className="flex flex-col w-full items-center">
        <article className="flex flex-col w-[95%]">
          {/* Título y detalles */}
          <div className="flex justify-between pt-3 pb-[12px]">
            <h2 className="text-base font-semibold font-inter">{title}</h2>
            <DetailsIcon />
          </div>

          {/* Descripción */}
          <p className="w-full text-sm lg:text-md">{description}</p>

          {/* Etiquetas y nombre del proyecto */}
          <section>
            {projectName && (
              <div className="flex bg-[#FFFFFF1A] rounded-lg w-full px-4 py-2 items-center flex-wrap">
                {projectImage ? (
                  <Image
                    src={projectImage}
                    alt={`Imagen del proyecto ${projectName}`}
                    width={30}
                    height={20}
                    className="mr-4 flex-shrink-0"
                  />
                ) : null}
                <p className="font-semibold text-xs text-white">{projectName}</p>
              </div>
            )}
            {tags.length > 0 &&
              tags.map((tag) => (
                <span
                  className="inline-block relative bg-[#F7E5FFBF] hover:bg-purple-200 text-primary_d font-bold my-2 text-[14px] py-1 px-4 mr-4 rounded-md"
                  key={tag}
                >
                  {tag}
                </span>
              ))}
          </section>

          {/* Puntuación */}
          <div>
            <StarRating
              totalNumbers={parseInt(punctuation)}
              rating={4.5}
              className="mb-3"
            />
          </div>

          {/* Precio */}
          {price && (
            <div>
              <p className="text-xl lg:text-2xl font-bold">
                ${parseFloat(price).toFixed(2)}
              </p>
            </div>
          )}
        </article>
      </section>

      {/* Botones de acción */}
      <div className="flex items-center space-between py-2 mt-2 font-inter">
        <button
          onClick={handleAddToCart}
          className="flex flex-row gap-x-3 font-inter justify-center items-center bg-primary_b_500 text-white w-1/2 rounded-2xl h-[80%] px-3"
        >
          <Icon_Shopping width={20} height={21} />
          <p className="font-semibold font-inter">Añadir al Carrito</p>
        </button>
        <Link
          href={`/course/${id}`}
          className="block text-[#D194E2] hover:text-white py-4 ml-6 font-bold font-inter"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
};

export default CardCourse;