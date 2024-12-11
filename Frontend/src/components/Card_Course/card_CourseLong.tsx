"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DetailsIcon from "../../../public/icons/DetailIcon";
import StarRating from "../StarsRating/StarsRating";
import HeartIcon from "../MentoresComp/Icons/HeartIcon";
import { CardCursoLong } from "@/services/Interfaces";
import AddItenCart from "../AddItemCart/AddItenCart";
import RemoveCart from "../AddItemCart/RemoveCart";

export default function CardCoursLong({ course }: { course: CardCursoLong }) {
  const {
    platform,
    title,
    description,
    tags,
    punctuation,
    image_url,
  } = course;
  const [StateHeadt, setStateHeadt] = useState(false);
  let imagen: string;
  if (image_url && image_url != "") {
    imagen = image_url.length > 0 ? image_url : '/imgApp.png';
  } else {
    imagen = "/imgApp.png";
  }
  const [StateButonCart, setStateButonCart] = useState(true);

  const handleButonCart = () => {
    setStateButonCart(!StateButonCart);
  };
  function handleClick() {
    setStateHeadt(!StateHeadt);
  }
  return (
    <div className="h-auto w-full  flex  max-md:flex-wrap   bg-[#1F2937] relative rounded-xl p-4">
      <Image
        src={imagen}
        alt="IMagen de app"
        width={245}
        height={245}
        className="w-full max-md:max-w-full max-md:h-[245px] max-w-[300px]  object-cover object-center rounded-md"
      />
      <button onClick={handleClick} className="absolute right-2 top-2">
        <HeartIcon StateHeart={StateHeadt} />
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

          <section className="">
            {platform && (
              <div className="flex my-2 max-w-max bg-[#FFFFFF1A] rounded-lg  px-4 py-2 items-center flex-wrap">
                <Image
                  src={"/img/Cards_Img/logo.png"}
                  alt={`Imagen del proyecto ${platform.name}`}
                  width={30}
                  height={20}
                  className="mr-4 flex-shrink-0"
                />
                <p className="font-semibold text-xs text-white ">
                  {platform.name}
                </p>
              </div>
            )}
            {tags.map((tag) => (
              <span
                className="inline-block relative  bg-[#F7E5FFBF] hover:bg-purple-200 text-primary_d font-bold my-2 text-[14px] py-1  px-4 mr-4 rounded-md"
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
        </article>
        <div className="ml-4 mr-auto flex flex-wrap items-center  space-between py-2 mt-2 font-inter">
        <div onClick={handleButonCart}>
          {StateButonCart ? (
            <AddItenCart items={course} />
          ) : (
            <RemoveCart id={course.id} />
          )}
        </div>
        <Link
          href={`/course/`}
          className="block text-[#D194E2] hover:text-white py-4 ml-6 font-bold font-inter"
        >
          Ver detalles
        </Link>
      </div>
      </section>

     
    </div>
  );
}
