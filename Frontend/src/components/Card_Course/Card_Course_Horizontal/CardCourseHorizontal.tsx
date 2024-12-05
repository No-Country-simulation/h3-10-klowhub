"use client";
import { useState } from "react";
import Image from "next/image";
import DetailsIcon from "../../../../public/icons/DetailIcon";
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
    title,
    description,
    tags,
  } = course;
  const [StateHeadt, setStateHeadt] = useState(false);
  function handleClick() {
    setStateHeadt(!StateHeadt);
  }
  const progress = 50;
  return (
    <div className="h-auto w-full bg-[#1F2937] relative rounded-xl flex flex-col lg:flex-row">
      {/* Imagen al lado izquierdo */}
      <div className="w-full lg:w-1/4 h-64 lg:h-auto relative">
        <Image
          src={mainImageCourse}
          alt={altMainImageCourse}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl lg:rounded-l-xl lg:rounded-t-none"
        />
        <button
          onClick={handleClick}
          className="absolute right-2 top-2 p-2 rounded-full"
        >
          <HeartIcon StateHeart={StateHeadt} />
        </button>
      </div>

      {/* Contenido al lado derecho */}
      <div className="w-full lg:w-3/4 flex flex-col justify-between p-4">
        <div>
          <div className="flex justify-between">
            <h2 className="text-2xl lg:text-5xl text-white">{title}</h2>
            <div className="absolute right-5 top-5">
              <DetailsIcon />
            </div>
          </div>
          <p className="mt-4 text-sm lg:text-xl text-gray-300">{description}</p>
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
          <div className="flex flex-row items-center">
            <div
              className="w-5/6"
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
        </div>
        <button
  onClick={handleClick}
  className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900 w-48"
>
  Continuar viendo
</button>

      </div>
    </div>
  );
}