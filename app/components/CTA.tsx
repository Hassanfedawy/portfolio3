import React from 'react'
import Image from 'next/image'
import { data } from "../Constants/data";

function CTA() {
  return (
    <div id="about" className='grid grid-cols-1 md:grid-cols-3 p-5 gap-6 md:gap-10'>

      {/* Text Section */}
      <div className='md:col-span-2'>
        <h4 className='text-lg text-orange-600'>About</h4>
        <h2 className='text-4xl font-bold mb-6'>{data.job}</h2>
        <p className='text-neutral-600 font-medium'>
          {data.about1}
          <br /><br />
          {data.about2}
        </p>
      </div>

      {/* Image Section */}
      <div className='relative w-full h-72 md:w-96 md:h-96'>
        <Image 
          src="/Images/Photo1.jpeg" 
          alt="Profile Photo" 
          layout="fill" 
          objectFit="contain" 
          className="rounded-2xl"
        />
      </div>
      
    </div>
  );
}

export default CTA;
