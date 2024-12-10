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

export default function CardCourse({ course }: { course: CardCursoLong }) {
  const {
    projectImage,
    projectName,
    title,
    description,
    tags,
    punctuation,
    price,
    image_url,
  } = course;
  const [StateHeadt, setStateHeadt] = useState(false);
  let imagen: string;
  if (image_url != null && image_url != "") {
    imagen = image_url;
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
    <div className="h-auto w-full  flex flex-col   bg-[#1F2937] relative rounded-xl p-4">
      <Image
        src={imagen}
        alt="IMagen de app"
        width={245}
        height={245}
        className="w-full object-cover object-center rounded-md"
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
            {projectName && (
              <div className="flex  bg-[#FFFFFF1A] rounded-lg w-full px-4 py-2 items-center flex-wrap">
                <Image
                  src={projectImage ? projectImage : ""}
                  alt={`Imagen del proyecto ${projectName}`}
                  width={30}
                  height={20}
                  className="mr-4 flex-shrink-0"
                />
                <p className="font-semibold text-xs text-white ">
                  {projectName}
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
          {price && (
            <div>
              <p className="text-xl lg:text-2xl font-bold">
                ${parseFloat(price).toFixed(2)}
              </p>
            </div>
          )}
        </article>
      </section>

      <div className="flex items-center  space-between py-2 mt-2 font-inter">
        <div onClick={handleButonCart}>
          {StateButonCart ? (
            <AddItenCart items={course} />
          ) : (
            <RemoveCart id={course.id} />
          )}
        </div>
        <Link
          href={`/course/${id}`}
          className="block text-[#D194E2] hover:text-white py-4 ml-6 font-bold font-inter"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
