"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DetailsIcon from "../../../public/icons/DetailIcon";
import StarRating from "../StarsRating/StarsRating";
import HeartIcon from "../MentoresComp/Icons/HeartIcon";
import { AplicationCart, PropsCourse } from "@/services/Interfaces";
import AddItenCart from "../AddItemCart/AddItenCart";
import RemoveCart from "../AddItemCart/RemoveCart";

export default function CardCourse({ course }: { course: PropsCourse  }) {
  const {
    id,
    mainImageCourse,
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
  const [StateCart,setStateCart] = useState(true) // estado de carito si el boton muestra eliminar o añadir carito
  function handleClick() {
    setStateHeadt(!StateHeadt);
  }
  return (
    <div className="h-[800px] w-full bg-[#1F2937] relative rounded-xl">
      <Image
        src={mainImageCourse}
        alt={`POrtada de ${projectName}`}
        width={width}
        height={heigth}
        objectFit="cover"
        className=" h-2/5 w-full rounded-t-xl object-cover object-center"
      />
      <button onClick={handleClick} className={"absolute right-2 top-2"}>
        <HeartIcon StateHeart={StateHeadt} />
      </button>
      <div className="px-4 flex justify-between py-4">
        <h2 className=" text-3xl">{title}</h2>
        <DetailsIcon />
      </div>
      <p className="px-4 w-4/5 text-md">{description}</p>
      <section className="m-4">
        <div className=" flex gap-3 bg-[#FFFFFF1A] rounded-lg w-max px-6 py-3 items-center">
          <Image
            src={projectImage}
            alt={`Imagen del proyecto ${projectName}`}
            width={30}
            height={20}
            className="m-4 "
          />
          <p className="font-semibold text-xs">{projectName}</p>
        </div>
        {tags.map((tags) => (
          <span
            className=" inline-block relative text-purple-900 bg-[#F7E5FFBF] hover:bg-purple-200 text-{#632daf} font-bold my-2 py-2 px-4 mr-4 rounded"
            key={tags}
          >
            {tags}
          </span>
        ))}
      </section>
      <StarRating
        totalNumbers={califications}
        rating={stars}
        className="px-6 mb-8"
      ></StarRating>
      {price && (
        <div>
          <p className="text-3xl px-4">$ {price}</p>
        </div>
      )}
      <div className="flex space-between p-4">
        
         <AddItenCart items={course}/>
        <RemoveCart id={id}/>
        
        
       
       
        <Link
          href={""}
          className="block text-[#D194E2] hover:text-white py-4 ml-6"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
