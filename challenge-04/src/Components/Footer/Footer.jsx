import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

function Footer() {
  return (
    <>
      {/* Main Footer Content */}
      <div className='flex flex-col md:flex-row justify-around items-start md:items-center p-8 gap-8 md:gap-0'>
        {/* Logo and Description */}
        <div className='flex flex-col justify-start items-start max-md:items-center gap-2 w-full md:w-auto text-center md:text-left'>
          <h1 className='font-bold text-4xl mb-4 poppins-regular'>Jadoo.</h1>
          <p className='text-sm poppins-regular max-w-[208px] text-gray-400'>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Company Links */}
        <div className='flex flex-col justify-start items-center md:items-start w-full md:w-auto text-center md:text-left'>
          <h1 className='font-bold text-xl mb-4 poppins-semibold'>Company</h1>
          <p className='poppins-regular text-gray-400'>About</p>
          <p className='poppins-regular text-gray-400'>Careers</p>
          <p className='poppins-regular text-gray-400'>Mobils</p>
        </div>

        {/* Contact Links */}
        <div className='flex flex-col justify-start items-center md:items-start w-full md:w-auto text-center md:text-left'>
          <h1 className='font-bold text-xl mb-4 poppins-semibold'>Contact</h1>
          <p className='poppins-regular text-gray-400'>Help/Q&A</p>
          <p className='poppins-regular text-gray-400'>Press</p>
          <p className='poppins-regular text-gray-400'>Affilates</p>
        </div>

        {/* More Links */}
        <div className='flex flex-col justify-start items-center md:items-start w-full md:w-auto text-center md:text-left'>
          <h1 className='font-bold text-xl mb-4 poppins-semibold'>More</h1>
          <p className='poppins-regular text-gray-400'>Airliesfees</p>
          <p className='poppins-regular text-gray-400'>Airline</p>
          <p className='poppins-regular text-gray-400'>Low fiar tips</p>
        </div>

        {/* Social Media and App Links */}
        <div className='flex flex-col justify-start items-center md:items-start w-full md:w-auto text-center md:text-left'>
          <div className='flex justify-center md:justify-start gap-3'>
            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-2xl cursor-pointer'>
              <FaFacebook className='text-xl text-black' />
            </button>
            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-2xl cursor-pointer'>
              <FaInstagram className='text-xl text-black' />
            </button>
            <button className='w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-2xl cursor-pointer'>
              <FaTwitter className='text-xl text-black' />
            </button>
          </div>
          <p className='poppins-regular text-gray-600 mt-4'>Discover our app</p>

          <div className='flex justify-center md:justify-evenly md:w-full gap-4 mt-2'>
            <button>
              <FaGooglePlay className='text-2xl text-gray-600 cursor-pointer' />
            </button>
            <button>
              <FaApple className='text-2xl text-gray-600 cursor-pointer' />
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className='flex justify-center items-center py-4'>
        <p className='text-sm poppins-regular text-gray-400'>
          All rights reserved. © 2024 Jadoo
        </p>
      </div>
    </>
  );
}

export default Footer;