'use client'
import { Program_info } from '@/mock/db';
import Link from 'next/link';
import React, { useState } from 'react';

export function Course_program() {
    const [activeModule, setActiveModule] = useState<number | null>(null);

    const toggleModule = (index: number) => {
        setActiveModule(activeModule === index ? null : index);
    };

    const modules = Program_info;

    return (
        <article className='flex flex-col w-full mt-10'>
            <h2 className='font-bold text-[16.5px] font-inter pl-7'>Programa del curso</h2>
            <section className='flex flex-col mt-3 items-center w-full justify-center   rounded-md ' >
                <div className="rounded-md px-4 py-2 gap-x-2 w-[90%] bg-white/10">
                    {modules.map((module, index) => (
                        <div key={index} className="flex flex-col px-2 py-3">
                            <button onClick={() => toggleModule(index)} className="flex flex-row text-primary font-bold w-full text-start">
                                <p className='px-3'>{activeModule === index ? '-' : '+'}</p> Módulo {module.id}
                            </button>
                            {activeModule === index && (
                                <div className="flex flex-col pl-8 pt-3">
                                    <h2 className="font-bold mb-2">{module.title}</h2>
                                    {module.content.map((lesson, i) => (
                                        <div key={i} className='py-2'>
                                            <p className='text-[15px]'>Lección {i + 1}: {lesson.title} <Link className='text-sm underline' href="">vista previa</Link></p>
                                            <p className='text-sm'>{lesson.description}</p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </article>
    );
}
