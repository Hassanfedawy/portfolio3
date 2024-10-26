import React from 'react'
import Image from 'next/image'
import { data } from '../Constants/data'

function Hero() {
  return (
    <div id='Home' className='flex flex-col md:flex-row mx-auto gap-10 md:gap-14 justify-center mt-16 md:mt-28 items-center'>
      
      {/* Image Section */}
      <div className='relative w-72 h-72 md:w-96 md:h-96'>
        <Image 
          src="/Images/Photo1.jpeg" 
          alt='Profile Pic' 
          layout='fill' 
          objectFit='contain' 
          className='rounded-2xl'
        />
      </div>
      
      {/* Text Section */}
      <div className='p-5 max-w-screen-md text-center md:text-left'>
        <h1 className='text-4xl md:text-5xl font-bold mb-4 whitespace-nowrap'>{data.job}</h1>
        <p className='font-medium text-neutral-600 mb-6 md:mb-10'>{data.Description}</p>
        <a href='#Contact' className='p-4 bg-orange-600 text-white rounded-lg font-semibold'>Get in touch</a>
      </div>
      
    </div>
  )
}

export default Hero
