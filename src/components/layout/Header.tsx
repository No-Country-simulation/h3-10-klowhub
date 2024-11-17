'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Icon_Shopping_Cart } from '../../../public/icons/Header_Icon/Shopping_cart';
import { Icon_Notification } from '../../../public/icons/Header_Icon/Notification';
import { Icon_Email } from '../../../public/icons/Header_Icon/Email';
import { Icon_luggage } from '../../../public/icons/Header_Icon/luggage';
import { Space } from '../../../public/icons/Header_Icon/Space';
import { useState } from 'react';

export function Header() {
    const [isActive, setIsActive] = useState(false);

    const toggleSwitch = () => {
        setIsActive((prev) => !prev);
    };

    return (
        <div className="mt-4 bg-transparent font-inter text-white flex items-center justify-between px-6 py-2">
            <div className='absolute top-0 left-0 w-full h-20 -z-10 blur-md'>
                <Image src={'/img/Header_Img/Header_img.png'} alt='fondo' width={1366} height={100} className='' />
            </div>

            <div className='absolute opacity-[60%] top-4 left-0 w-full h-[4.5rem] -z-[10] bg-[#1F2026]'>

            </div>


            <div className="flex flex-row items-center space-x-10">
                <div className="">
                    <Image alt='Logo' src={"/img/Header_Img/Logo.png"} width={50} height={50} className=" " />


                </div>

                <nav className="flex space-x-3  ">
                    <div className='flex flex-row gap-x-2 items-center bg-gray-500/100 py-1 px-2  rounded-md'>
                        <Link href="#" className="hover:text-purple-400">Home</Link>
                        <Link href="#" className="bg-purple-500 text-white  px-2 rounded-md">Plataforma</Link>
                    </div>
                    <div className='flex flex-row items-center gap-x-4 text-[16px]'>
                        <Link href="#" className="hover:text-purple-400 text-[14px]">Dashboard</Link>
                        <Link href="#" className="hover:text-purple-400 text-[14px]">Curso y lecciones</Link>
                        <Link href="#" className="hover:text-purple-400 text-[14px]">Appstore</Link>
                        <Link href="#" className="hover:text-purple-400 text-[14px]">Proyectos</Link>
                        <Link href="#" className="hover:text-purple-400 text-[14px]">Consultoría</Link>
                        <Link href="#" className="hover:text-purple-400 text-[14px]">Sobre Appsheet</Link>
                    </div>
                </nav>
            </div>

            <div className="flex items-center space-x-4">
                <div className="flex space-x-0 items-center">
                    <a href="#" className="hover:text-purple-400">
                        <Icon_Shopping_Cart />
                    </a>
                    <a href="#" className="hover:text-purple-400">
                        <Icon_Notification />
                    </a>
                    <a href="#" className="hover:text-purple-400">
                        <Icon_Email />
                    </a>
                </div>


                <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 rounded-full text-sm font-semibold">Explorador</button>
                    <div className={`flex flex-row items-center justify-center px-1 rounded-xl  cursor-pointer bg-purple-600`}
                        onClick={toggleSwitch}>
                        <a href="#" onClick={toggleSwitch} className={`bg-white rounded-xl  ${isActive ? '' : 'bg-transparent'}`}>
                            <Icon_luggage />
                        </a>
                        <a >
                            <Space width={30} height={30} stroke={`white`} />
                        </a>
                    </div>


                    <div className="rounded-full w-8 h-8 bg-purple-500 overflow-hidden">
                        <Image src="/img/Header_img/avatar.png" width={100} height={100} alt="Profile Picture" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>

    );
}