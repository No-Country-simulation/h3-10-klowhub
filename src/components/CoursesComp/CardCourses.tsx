"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DetailsIcon from "../../../public/icons/DetailIcon";
import StarRating from "../StartsRating/StartsRating";
import HeartIcon from "../MentoresComp/Icons/HeartIcon";
interface PropsCourse {
  mainImageCourse: string;
  altMainImageCourse: string;
  title: string;
  description: string;
  projectName: string;
  projectImage: string;
  sector: string;
  sellerImage: string;
  premium: boolean;
  stars: number;
  tags: string[];
  price: number;
  califications: number;
  width?: number;
  heigth?: number;
}

export default function CardCoursesComponent({
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
}: PropsCourse) {
  const [StateHeadt, setStateHeadt] = useState(false);
  function handleClick() {
    setStateHeadt(!StateHeadt);
  }
  return (
    <div className=" w-full max-w-[700px]  bg-[#1F2937] relative rounded-xl">
      <button onClick={handleClick} className={"absolute right-2 top-2"}>
        <HeartIcon StateHeart={StateHeadt} />
      </button>
      <Image
        src={mainImageCourse}
        alt={altMainImageCourse}
        width={width}
        height={heigth}
        className="rounded-t-xl object-cover object-center w-full"
      />
      <div className="flex justify-between p-4">
        <h2 className="text-xl">{title}</h2>
        <DetailsIcon />
      </div>
      <p className="">{description}</p>
      <section className="my-4">
        <div className="flex gap-3 bg-[#FFFFFF1A] rounded-lg w-max px-4 py-3 items-center">
          <Image
            src={projectImage}
            alt={`Imagen del proyecto ${projectName}`}
            width={30}
            height={20}
          />
          <p className="font-semibold text-xs">{projectName}</p>
        </div>
        {tags.map((tags) => (
          <span
            className="text-purple-900 bg-[#F7E5FFBF] hover:bg-purple-200 text-white font-bold my-2 py-2 px-4 mx-4 rounded"
            key={tags}
          >
            {tags}
          </span>
        ))}
      </section>
      <StarRating totalNumbers={califications} rating={stars}></StarRating>
      <div>$ {price}</div>
      <div className="flex space-between">
        <button className="bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
          Añadir al Carrito
        </button>
        <Link href={""} className="block text-[#D194E2] hover:text-white">
          Ver detalles
        </Link>
      </div>
    </div>
  );
}
