import React from 'react'
import Image from 'next/image'
import { data } from '../Constants/data'
function Hero() {
  return (
    <div className='flex mx-auto gap-14 justify-center mt-28 items-center'>
      <div className='relative w-96 h-96'>
        <Image src="/Images/Photo1.jpeg" alt='Profile Pic' layout='fill' objectFit='contain' className='rounded-2xl'/>
      </div>
      <div className='p-5 max-w-screen-md'>
        <h1 className='text-5xl font-bold mb-4 text-nowrap'>{data.job}</h1>
        <p className='text-md font-medium text-neutral-600 mb-10'> {data.Description}</p>
        <button className='p-4 bg-orange-600 text-white rounded-lg font-semibold'> Get in touch</button>
      </div>
    </div>
  )
}

export default Hero
