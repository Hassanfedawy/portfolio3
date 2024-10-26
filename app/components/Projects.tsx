import React from 'react';
import Image from 'next/image';

const projects = [
    {
        photo: "/Images/Photo1.jpeg",
        name: "Legacy Basketball Academy",
        description: "A professional platform designed to promote the academy’s programs and offerings. It features a modern design that highlights information about basketball training sessions, coaching staff, and upcoming events. Built using Next.js and Tailwind CSS for a clean, responsive experience.",
        link: "https://legacy-basketball-academy.vercel.app/"
    },
    {
        photo: "/Images/Photo1.jpeg",
        name: "Airbnb Clone",
        description: "A replica of Airbnb’s platform, featuring a sleek and responsive design. Users can explore property listings, view details, and interact with the booking system. The site provides a familiar user experience, capturing key functionalities like browsing and filtering listings. Built with Next.js and Tailwind CSS for a smooth user experience.",
        link: "https://air-bnb-clone-rose.vercel.app/"
    },
    {
        photo: "/Images/Photo1.jpeg",
        name: "Amazon Clone",
        description: "A functional e-commerce platform modeled after Amazon, featuring a clean and responsive design. Users can browse products, add items to their cart, and manage their profiles through user authentication. Built with Next.js for server-side rendering and Tailwind CSS for efficient styling, the site offers a seamless shopping experience similar to Amazon.",
        link: "https://amazonclone-rosy-omega.vercel.app/"
    },
];

function Projects() {
    return (
        <div id="Work" className="py-16 px-4 md:px-10">

            <div className='flex flex-col md:flex-row justify-between items-center my-8'>
                <div>
                    <h4 className='text-lg text-orange-500'>Work</h4>
                    <h2 className='text-4xl font-bold'>A selection of recent projects</h2>
                </div>
                <p className='text-sm text-slate-700 max-w-md md:max-w-xl mt-4 md:mt-0'>
                    I have been passionate about these projects, helping my clients achieve their vision and assisting them with their next steps.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-xl mx-auto'>
                {projects.map((project) => (
                    <a
                        href={project.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-slate-600 border border-black ease-in cursor-pointer flex flex-col p-4 hover:scale-105 transition duration-200'
                        key={project.name}
                    >
                        <div className='relative w-full h-64 mx-auto'>
                            <Image
                                src={project.photo}
                                alt={project.name}
                                layout='fill'
                                objectFit='contain'
                                className='mx-auto'
                            />
                        </div>
                        <h3 className='text-xl font-semibold text-white mt-4'>{project.name}</h3>
                        <p className='text-sm text-slate-300 mt-1'>{project.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Projects;
