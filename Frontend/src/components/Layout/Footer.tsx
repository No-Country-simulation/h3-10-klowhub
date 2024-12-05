"use client";
import useAuth from "@/Hooks/useAuth";
import { Icon_Facebook } from "../../../public/icons/Footer_Icon/Icon_Facebook";
import { Icon_Linkendi } from "../../../public/icons/Footer_Icon/Icon_Linkendi";
import { Icon_Twitter } from "../../../public/icons/Footer_Icon/Icon_Twitter";
import {  useEffect, useState } from "react";
export function Footer() {
  const { logout, isLoggedIn } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(isLoggedIn); 
  }, [isLoggedIn]);

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <footer className="flex flex-col justify-center pt-10  h-auto bg-gradient-to-b from-[#201C2D] via-[#201D43] to-[#262136] mt-8">
        <section className="flex flex-col ml-6 gap-y-5 md:flex-row md:justify-evenly md:pt-2 lg:mb-32  ">
          <article className="flex flex-col gap-y-2 text-[14px] lg:text-[17px]">
            <h2 className="opacity-50">Categorías</h2>
            <p className=" ">Cursos</p>
            <p className=" ">Aplicaciones</p>
            <p className=" ">Vende un Curso</p>
            <p className=" ">Vende una App</p>
          </article>
          <article className="flex flex-col gap-y-2 text-[14px] lg:text-[17px]">
            <h2 className="opacity-50">Acerca De</h2>
            <p className="">Instructores</p>
            <p className="">Cursos</p>
            <p className="">Términos del Servicio</p>
            <p className="">Políticas de Privacidad</p>
          </article>
          <article className="flex flex-col gap-y-2 text-[14px] lg:text-[17px]">
            <h2 className="opacity-50">Soporte</h2>
            <p className="">FAQ</p>
            <p className="">Contacto</p>
            <p className="">Foro</p>
          </article>
          <article className="flex flex-col">
            <h2 className="opacity-50 pb-2">Encuéntranos En</h2>
            <div className="flex flex-row gap-x-5 items-center ">
              <Icon_Facebook width={24} height={24} />
              <Icon_Twitter width={25} height={26} />
              <Icon_Linkendi width={24} height={24} />
            </div>
          </article>
        </section>
        {loggedIn && (
          <button
            onClick={handleLogout}
            className="mt-4 px-4 py-2 bg-purple-700 text-white rounded hover:bg-purple-900 w-48"
          >
            Cerrar Sesión
          </button>
        )}
        <section className="flex justify-center  pt-5 border-none  ">
          <h2 className="border-t-2 border-gray-500 w-[90%] md:w-full text-center pt-2 pb-2 text-[10px] md:text-[15px]">
            © Klowhub
          </h2>
        </section>
      </footer>
    </>
  );
}
