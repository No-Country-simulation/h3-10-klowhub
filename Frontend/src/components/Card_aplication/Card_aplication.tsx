"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CaficationCartComponent from "../ShoppingCart/CaficationCartComponent";
import HeartIcon from "../MentoresComp/Icons/HeartIcon";
import { Icon_Shopping_Cart } from "../../../public/icons/Header_Icon/Shopping_cart";
import DetailsIcon from "../../../public/icons/DetailIcon";
import { AplicationCart } from "@/services/Interfaces";
import { Icon_Power_Apps } from "../../../public/icons/Details_Course_Icon/Power_Apps";
export default function CardAplication({
  urlImg,
  nameProject,
  numberOfScores,
  numberVotes,
  Category,
  className,
}: AplicationCart) {
  const [StateHeadt, setStateHeadt] = useState(false);

  function handleClick() {
    setStateHeadt(!StateHeadt);
  }

  return (
    <div
      className={`h-auto w-full bg-[#1F2937] rounded-xl shadow-lg relative ${className}`}
    >
      {/* Imagen Principal */}
      <Image
        src={urlImg}
        alt={`Imagen de la aplicación ${nameProject}`}
        width={400}
        height={200}
        className="h-64 w-full rounded-t-xl object-cover object-center"
      />
      {/* Botón Favoritos */}
      <button onClick={handleClick} className="absolute right-2 top-2">
        <HeartIcon StateHeart={StateHeadt} />
      </button>

      {/* Contenido */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white truncate">
            {nameProject}
          </h2>
          <DetailsIcon />
        </div>
        <p className="text-sm text-gray-400 mt-2 truncate">
          Aplicacion top en gestion de proyectos
        </p>

        {/* Información del Proyecto */}
        <article className="flex flex-row items-center bg-white/10 w-1/3 max-[900px]:w-1/2 gap-x-2 font-inter justify-around rounded-xl p-2 mb-5 mt-5">
          <Icon_Power_Apps width={20} height={20} />
          <p>Power Apps</p>
        </article>

        {/* Categorías */}
        <div className="flex flex-wrap gap-2 mt-4">
          {Category?.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-purple-200 text-purple-700 text-xs font-bold py-2 px-4 rounded"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Calificaciones */}
      <div className="px-6 mb-4 flex items-center">
        <p className="text-white mr-1">{numberOfScores}</p>
        <CaficationCartComponent valueStar={numberOfScores} />
        <p className="ml-2 text-gray-400">({numberVotes})</p>
      </div>

      {/* Precio */}
      <div>
        <p className="text-2xl lg:text-3xl px-4 text-white">$ 65</p>
      </div>

      {/* Botones de Acción */}
      <div className="flex justify-between items-center px-4 pb-4 mt-5">
        <button className="bg-purple-700 hover:bg-purple-800 text-white font-semibold text-sm py-2 px-3 rounded-lg flex items-center gap-2">
          <Icon_Shopping_Cart />
          Añadir al carrito
        </button>

        <Link
          href=""
          className="text-sm text-purple-400 hover:text-purple-300 font-medium ml-4"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
