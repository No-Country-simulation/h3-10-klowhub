'use client';
import React, { useState } from 'react';
import Modal from '../Modals/Modal';
import { Icon_Power_Apps } from '../../../public/icons/Details_Course_Icon/Power_Apps';
import { Icon_Camera } from '../../../public/icons/Details_Course_Icon/Icon_Camera';
import { Course } from '@/services/Interfaces';
import { Icon_Star, Icon_Start_Med } from '../../../public/icons/Details_Course_Icon/Start_Icon';
import Image from 'next/image';
import { Icon_Clock } from '../../../public/icons/Details_Course_Icon/Icon_Clock';
import { Mail } from '../../../public/icons/Details_Course_Icon/Social_Media/Mail';
import { Icon_Whasapp } from '../../../public/icons/Details_Course_Icon/Social_Media/Whasapp';
import { Icon_Mensagge } from '../../../public/icons/Details_Course_Icon/Social_Media/Mensagge';
import { Icon_Linkendi } from '../../../public/icons/Details_Course_Icon/Social_Media/Linkedin';
import Link from 'next/link';

const buttonStyle: React.CSSProperties = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

export function Details_Course_Modal({ datos }: { datos: Course }) {
  const { id, title, descripcion, details, avatar, name, bio, info_curso } = datos;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [rating] = useState(details?.estrellas);

  const renderStar = (index: number) => {
    const fullStar = index < Math.floor(rating);
    const halfStar = index === Math.floor(rating) && rating % 1 !== 0;
    if (halfStar) {
      return <Icon_Start_Med />;
    }
    if (fullStar) {
      return <Icon_Star key={index} width={20} height={20} fill="#FBBC05" />;
    }
    return <Icon_Star fill="#fff" width={20} height={20} key={index} />;
  };

  return (
    <div className="">
      <button onClick={openModal} style={buttonStyle} className="mt-10 ml-10">
        Ver detalles
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <section className="bg-[#1B1C44] max-h-[80vh] overflow-y-auto">
          <article className="font-inter">
            <h2 className="mb-4 font-bold text-[16px]">{title}</h2>
            <p>{descripcion}</p>
          </article>
          <article className="flex flex-row items-center bg-white/10 w-1/4 max-[900px]:w-1/2 gap-x-2 font-inter justify-around rounded-xl p-2 mb-10 mt-10">
            <Icon_Power_Apps width={20} height={20} />
            <p>Power Apps</p>
          </article>

          <article className="md:flex md:flex-row mb-5 md:items-center">
            <div className="grid grid-cols-1 grid-rows-2 md:flex md:flex-row md:gap-x-1 items-center" key={id}>
              <div className="flex flex-row items-center">
                <p className="pt-0.5 pr-4">{details?.valoracion}</p>
                {Array.from({ length: 5 }, (_, index) => (
                  <React.Fragment key={index}>{renderStar(index)}</React.Fragment>
                ))}
                <p className="pl-1">(74)</p>
              </div>

              <div className="flex flex-row mt-2 items-center">
                <div className="flex flex-row items-center pb-1 md:pl-4 gap-x-3 text-[#A1C2FA]">
                  <Icon_Camera width={16} height={16} />
                  <p className="">{details?.videos} videos</p>
                </div>
                <div className="flex flex-row items-center pb-1 gap-x-2 ml-4 text-[#A1C2FA]">
                  <Icon_Clock width={16} height={16} />
                  <p>{details?.duracion} horas</p>
                </div>
              </div>
            </div>
          </article>
          <div className="flex flex-col">
            <video
              controls
              className="rounded-lg mb-4"
              width="100%"
              height="auto"
              src="https://res.cloudinary.com/dnxezl9ye/video/upload/v1733341007/klowhub/c4tv79qejrp0gmhfqssx.mp4"
            >
              Tu navegador no soporta videos.
            </video>
          </div>
          <div className="flex flex-row items-center gap-x-2 mb-5 sm:mt-5">
            <Image src={avatar} width={100} height={100} alt="avatar" />
            <div className="flex flex-col">
              <h3 className="font-bold font-inter">{name}</h3>
              <h5 className="text-[12px] font-inter">{bio}</h5>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 mb-2">
            <h3 className="font-bold text-md">Acerca de este curso</h3>
            <p className="font-inter text-sm ">{info_curso}</p>
          </div>
          <Link
            href={`cursos/${id}`}
            className="mt-5 border border-[#d194e2] text-[#d194e2] px-14 text-[14px] py-1.5 rounded-md hover:bg-[#834196] hover:text-white duration-200"
            onClick={closeModal}
          >
            Ver detalles
          </Link>
          <div className="flex flex-row mt-6 gap-x-4 items-center">
            <h5 className="font-inter text-[12px]">Compartir</h5>
            <div className="flex flex-row items-center gap-x-3">
              <Mail width={12} height={12} />
              <Icon_Whasapp width={12} height={12} />
              <Icon_Mensagge width={12} height={12} />
              <Icon_Linkendi width={12} height={12} />
            </div>
          </div>
        </section>
      </Modal>
    </div>
  );
}
