"use client";

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { data } from '../Constants/data';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='flex justify-between items-center shadow-md p-4 sticky top-0 bg-gray-200 z-50'>
      <div className='ml-16'>
        <h4 className='font-bold text-black'>{data.name}</h4>
        <h6 className='font-semibold text-neutral-400'>{data.job}</h6>
      </div>

      <div className='hidden md:flex mr-10 gap-5'>
        <ul className='cursor-pointer flex space-x-6 text-black font-medium border-2 border-gray-400 rounded-md px-2 py-1'>
          <a href='#Home' className='bg-black text-white my-auto py-2 px-4 rounded-md hover:bg-gray-800 transition duration-200'>Home</a>
          <a href='#Work' className='my-auto hover:text-orange-400 transition duration-200'>Work</a>
          <a href='#Service' className='my-auto hover:text-orange-400 transition duration-200'>Service</a>
        </ul>
        <a href='#Contact' className='flex justify-center items-center text-orange-400 font-bold border-2 border-gray-400 rounded-md p-2 hover:bg-orange-400 hover:text-white transition duration-200'>
          Contact Me
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button onClick={toggleMenu} className='md:hidden p-2 text-black hover:bg-gray-200 transition duration-200'>
        <FontAwesomeIcon icon={faBars} width={40} height={40} />
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-16 right-4 bg-white shadow-md rounded-md w-48 z-10 md:hidden transition-all duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
        <ul className='flex flex-col space-y-2 p-4'>
          <a href='#Home' className='bg-black text-white py-2 px-4 rounded-md cursor-pointer hover:bg-gray-800 transition duration-200'>Home</a>
          <a  href='#Work' className='py-2 px-4 cursor-pointer hover:text-orange-400 transition duration-200'>Work</a>
          <a href='#Service' className='py-2 px-4 cursor-pointer hover:text-orange-400 transition duration-200'>Service</a>
          <a href='#Contact'>
            <button className='w-full text-orange-400 font-bold border-2 border-gray-400 rounded-md p-2 hover:bg-orange-400 hover:text-white transition duration-200'>
              Contact Me
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
