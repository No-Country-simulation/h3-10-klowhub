import { teache_info } from "@/mock/db"
import Image from "next/image";
import { Icon_start } from "../../../../public/icons/Details_Course_Icon/Teacher_details/Icon_Start";
import { Icon_quali } from "../../../../public/icons/Details_Course_Icon/Teacher_details/Icon_quali";
import { Icon_students } from "../../../../public/icons/Details_Course_Icon/Teacher_details/Icon_students";
import { Icon_course } from "../../../../public/icons/Details_Course_Icon/Teacher_details/Icon_course";

export function Teacher_info() {

    const info = teache_info;

    return (
        <section className="flex justify-center">
            {info.map((item, index) => {
                return (
                    <article key={index} className=" bg-white/10 rounded-md px-5 py-2 gap-x-2 w-[90%]">
                        <div className='flex flex-row items-center gap-x-3 h-auto'>
                            <Image src={item.img_avatar} className="mt-1" width={50} height={50} alt='avatar' />
                            <div className='flex flex-col justify-center h-auto'>
                                <h3 className='font-inter font-semibold'>{item.name}</h3>
                                <p className='text-[14px] font-inter'>{item.bio}</p>
                            </div>
                        </div>
                        <hr className="mt-5 opacity-30 w-full" />
                        <div>
                            <ul className="flex flex-col gap-y-2 font-inter text-sm">
                                <li className="flex flex-row mt-2 gap-x-2">
                                    <Icon_start width={20} height={20} />
                                    <p>Califación del instructor: {item.details.qualification}</p>
                                </li>
                                <li className="flex flex-row mt-2 gap-x-2 ">
                                    <Icon_quali width={20} height={20} />
                                    <p>{item.details.qualification} ({item.details.reviews} Reseñas)</p>
                                </li>
                                <li className="flex flex-row mt-2 gap-x-2 ">
                                    <Icon_students width={20} height={20} />
                                    <p>{item.details.students} estudiantes</p>
                                </li>
                                <li className="flex flex-row mt-2 gap-x-2 ">
                                    <Icon_course width={20} height={20} />
                                    <p>{item.details.course} Cursos</p>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full flex justify-end mt-4">
                            <p className="text-primary text-sm">Visitar perfil</p>
                        </div>
                    </article>
                )
            })}

        </section>
    )
}