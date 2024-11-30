"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DetailsIcon from "../../../../public/icons/DetailIcon";
import StarRating from "../../StarsRating/StarsRating";
import HeartIcon from "../../MentoresComp/Icons/HeartIcon";
import { PropsCourse } from "@/services/Interfaces";

export default function CardCourseHorizontal({
  course,
}: {
  course: PropsCourse;
}) {
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
  const progress = 50;
  return (
    <div className="h-[400px] w-full bg-[#1F2937] relative rounded-xl flex">
      {/* Imagen al lado izquierdo */}
      <div className="w-[25%] h-full relative">
        <Image
          src={mainImageCourse}
          alt={altMainImageCourse}
          layout="fill"
          objectFit="cover"
          className="rounded-l-xl"
        />
        <button
          onClick={handleClick}
          className="absolute right-2 top-2  p-2 rounded-full"
        >
          <HeartIcon StateHeart={StateHeadt} />
        </button>
      </div>

      {/* Contenido al lado derecho */}
      <div className="w-[70%] flex flex-col justify-between">
        <div className="px-4 py-4">
          <div className="flex justify-between">
            <h2 className="text-5xl text-white">{title}</h2>
            <div className="absolute right-5 top-5">
              <DetailsIcon />
            </div>
          </div>
          <p className="mt-4 text-xl text-gray-300">{description}</p>
          <section className="mt-4">
            {tags.map((tag) => (
              <span
                className="inline-block text-purple-900 bg-[#F7E5FFBF] hover:bg-purple-200 text-{#632daf} font-bold my-2 py-2 px-4 mr-4 rounded"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </section>
          <p className="mt-8">Mi Progreso</p>
          <div className="flex flex-row items-center ">
            <div
              className=" w-5/6"
              style={{
                height: "15px",
                backgroundColor: "#E0BBE4",
                borderRadius: "5px",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  backgroundColor: "#7E57C2", // Violeta más oscuro
                  transition: "width 0.3s ease-in-out",
                }}
              />
            </div>
            <p className="text-2xl ml-4">{progress}%</p>
          </div>
          <button className="absolute bottom-5 bg-purple-700 hover:bg-purple-900 text-white font-bold py-6 px-12 rounded">
            Continuar Viendo
          </button>
        </div>
      </div>
    </div>
  );
}
