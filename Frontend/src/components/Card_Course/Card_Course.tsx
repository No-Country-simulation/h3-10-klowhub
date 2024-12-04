"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DetailsIcon from "../../../public/icons/DetailIcon";
import StarRating from "../StarsRating/StarsRating";
import HeartIcon from "../MentoresComp/Icons/HeartIcon";
import { PropsCourse } from "@/services/Interfaces";

export default function CardCourse({ course }: { course: PropsCourse }) {
  const {
    mainImageCourse,
    altMainImageCourse,
    projectImage,
    projectName,
    title,
    description,
    tags,
    stars,
    califications,
    price,
    width = 200,
    heigth = 453,
  } = course;
  const [StateHeadt, setStateHeadt] = useState(false);
  function handleClick() {
    setStateHeadt(!StateHeadt);
  }
  return (
    <div className="h-auto w-full bg-[#1F2937] relative rounded-xl p-4">
      <Image
        src={mainImageCourse}
        alt={altMainImageCourse}
        width={width}
        height={heigth}
        objectFit="cover"
        className="h-64 w-full rounded-t-xl object-cover object-center"
      />
      <button onClick={handleClick} className="absolute right-2 top-2">
        <HeartIcon StateHeart={StateHeadt} />
      </button>
      <div className="px-4 flex justify-between py-4">
        <h2 className="text-2xl lg:text-3xl">{title}</h2>
        <DetailsIcon />
      </div>
      <p className="px-4 w-full text-sm lg:text-md">{description}</p>
      <section className="m-4">
       <div className="flex gap-3 bg-[#FFFFFF1A] rounded-lg w-full px-4 py-2 items-center flex-wrap">
          <Image
            src={projectImage}
            alt={`Imagen del proyecto ${projectName}`}
            width={30}
            height={20}
            className="mr-4 flex-shrink-0"
          />
          <p className="font-semibold text-xs text-white ">{projectName}</p>
        </div>
        {tags.map((tag) => (
          <span
            className="inline-block relative text-purple-900 bg-[#F7E5FFBF] hover:bg-purple-200 text-{#632daf} font-bold my-2 py-2 px-4 mr-4 rounded"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </section>
      <StarRating
        totalNumbers={califications}
        rating={stars}
        className="px-6 mb-8"
      />
      {price && (
        <div>
          <p className="text-2xl lg:text-3xl px-4">$ {price}</p>
        </div>
      )}
      <div className="flex justify-between p-4">
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
          Añadir al Carrito
        </button>
        <Link
          href=""
          className="block text-[#D194E2] hover:text-white py-4 ml-6"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}