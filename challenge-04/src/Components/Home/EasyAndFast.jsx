import React from 'react';
import YellowRectangle from '../../assets/Images/Group 7.png';
import RedRectangle from '../../assets/Images/Group 12.png';
import GreenRectangle from '../../assets/Images/Group 11.png';
import Girl from '../../assets/Images/Rectangle 17.jpg';
import Send from '../../assets/Images/send.svg';
import MapIcon from '../../assets/Images/map icon.svg';
import LEAF from '../../assets/Images/LEAF.svg';

function EasyAndFast() {
  return (
    <div className='flex flex-col lg:flex-row justify-around items-start gap-8 mt-16 px-4 sm:px-6 lg:px-16 xl:px-64'>
      {/* Left Section */}
      <div className='flex flex-col items-start justify-start gap-4 w-full lg:w-1/2'>
        <h4 className='text-md text-gray-500 poppins-semibold text-xl'>Easy and Fast</h4>
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold mb-3 font-volkhov max-w-[511px]'>
          Book your next trip in 3 easy steps
        </h1>
        {/* Steps Section */}
        <div className='flex flex-col gap-6 w-full'>
          <div className='flex items-start gap-4'>
            <img src={YellowRectangle} alt="" className='w-12 h-12' />
            <div className='flex flex-col items-start justify-center'>
              <h2 className='text-md text-gray-500 poppins-semibold'>Choose Destination</h2>
              <p className='text-gray-400 max-w-[327px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <img src={RedRectangle} alt="" className='w-12 h-12' />
            <div className='flex flex-col items-start justify-center'>
              <h2 className='text-md text-gray-500 poppins-semibold'>Make Payment</h2>
              <p className='text-gray-400 max-w-[327px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
          <div className='flex items-start gap-4'>
            <img src={GreenRectangle} alt="" className='w-12 h-12' />
            <div className='flex flex-col items-start justify-center'>
              <h2 className='text-md text-gray-500 poppins-semibold'>Reach Airport on Selected Date</h2>
              <p className='text-gray-400 max-w-[327px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section (Card) */}
      <div className='flex flex-col items-start gap-2 justify-center p-6 bg-white rounded-2xl w-full lg:w-1/3 shadow-lg'>
        <img src={Girl} alt="Girl" className='w-full h-auto rounded-lg mb-3' />
        <h2 className='text-base md:text-lg font-semibold'>Trip To Greece</h2>
        <p className='text-sm md:text-base text-gray-400 poppiens-regular'>14-29 June | By Farman Othman.</p>
        <div className='flex items-center gap-3 mt-2'>
          <img src={Send} alt="Send" className='w-6 h-6' />
          <img src={MapIcon} alt="Map" className='w-6 h-6' />
          <img src={LEAF} alt="LEAF" className='w-6 h-6' />
        </div>
        <p className='text-sm md:text-base text-gray-400 poppiens-regular mt-2'>24 people going</p>
      </div>
    </div>
  );
}

export default EasyAndFast;