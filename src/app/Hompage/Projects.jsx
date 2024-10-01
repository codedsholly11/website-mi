"use client";
import React from 'react';
import Image from 'next/image';

const Projects = () => {
    const car = [
        { photo: '/images/beauty.jpeg', title: 'IB Trading Academy', link: 'https://ib-academy.ng' },
        { photo: '/images/tree.jpeg', title: 'Fancy Pix', link: 'https://unsplash-rose.vercel.app' },
        { photo: '/images/home.jpeg', title: 'Car 3', link: 'https://example.com/car3' },
        { photo: '/images/field.jpeg', title: 'Car 4', link: 'https://example.com/car4' },
        { photo: '/images/globe.jpeg', title: 'Car 5', link: 'https://example.com/car5' },
        { photo: '/images/fall.jpeg', title: 'Car 7', link: 'https://example.com/car7' },
    ];

    return (
        <div id='Work' className='flex flex-col items-center pt-10 justify-center gap-5 '>
            <div>
                <h1 className='text-[40px] font-bold'>My Projects</h1>
            </div>
            <div className='grid md:grid-cols-3  gap-6 w-full px-10'>
                {car.map((c, index) => (
                    <div key={index} className='relative  group overflow-hidden'>
                        <Image
                            className='block w-full h-auto object-cover'
                            src={c.photo}
                            alt={`Project ${index + 1}`}
                            width={500}
                            height={500}
                        />
                        <div className='absolute inset-0 bg-gray-800 bg-opacity-100 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center'>
                            <div className='text-white text-center'>
                                <h2 className='text-xl font-bold mb-2'>{c.title}</h2>
                                <p className='mb-4'>{c.description}</p>
                                <a href={c.link} target='_blank' rel='noopener noreferrer'>
                                   <div className='flex flex-col gap-[20px]'>
                                        <button className='px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300'>
                                            <p className='text-sm'>Show Project</p>
                                        </button>
                                        <button className='px-2 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-300'>
                                            <p className='text-sm'>Show Repository</p>
                                        </button>
                                   </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
