import React from 'react'
import { data } from '../Constants/data'

function NavBar() {
  return (
    <nav className='justify-between flex shadow-md p-4'>
      <div className='ml-16'>
        <h4 className='font-bold text-black'>{data.name}</h4>
        <h6 className='font-semibold text-neutral-400'>{data.job}</h6>
      </div>

        <div className='flex  mr-10 gap-5'>
      <ul className='cursor-pointer flex space-x-6 text-black font-medium border-2 border-gray-400 rounded-md px-2 py-1'>
        <li className='bg-black text-white my-auto py-2 px-4 rounded-md'>Home</li>
        <li className='my-auto'>Work </li>
        <li className='my-auto'>Service</li>
      </ul>
      <button className=' text-orange-400 font-bold border-2 border-gray-400 rounded-md p-2'>Contact Me</button>
      </div>
    </nav>
  )
}

export default NavBar
