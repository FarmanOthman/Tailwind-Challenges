import React from 'react'
import YellowRectangle from '../../assets/Images/Group 7.png'
import RedRectangle from '../../assets/Images/Group 12.png'
import GreenRectangle from '../../assets/Images/Group 11.png'
import Girl from '../../assets/Images/Rectangle 17.jpg'
import Send from '../../assets/Images/send.svg'
import MapIcon from '../../assets/Images/map icon.svg'
import LEAF from '../../assets/Images/LEAF.svg'

function EasyAndFast() {
  return (
    <div className='flex justify-around items-start gap-8 mt-16 px-4 sm:px-6 lg:px-64'>
      <div className='flex flex-col items-start justify-start gap-4'>
        <h4 className='text-md text-gray-500 poppins-semibold text-xl'>Easy and Fast</h4>
        <h1 className='text-2xl md:text-5xl font-bold mb-3 font-volkhov max-w-[511px]'>
          Book your next trip 
          in 3 easy steps
        </h1>
        <div className='flex justify-around items-start gap-8'>
          <img src={YellowRectangle} alt="" />
          <div className='flex flex-col items-start justify-center'>
            <h2 className='text-md text-gray-500 poppins-semibold'>Choose Destination</h2>
            <p className='text-gray-400 max-w-[327px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
          </div>
        </div>
        <div className='flex justify-around items-start gap-8'>
          <img src={RedRectangle} alt="" />
          <div className='flex flex-col items-start justify-center'>
            <h2 className='text-md text-gray-500 poppins-semibold'>Choose Destination</h2>
            <p className='text-gray-400 max-w-[327px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
          </div>
        </div>
        <div className='flex justify-around items-start gap-8'>
          <img src={GreenRectangle} alt="" />
          <div className='flex flex-col items-start justify-center'>
            <h2 className='text-md text-gray-500 poppins-semibold'>Choose Destination</h2>
            <p className='text-gray-400 max-w-[327px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-start gap-2 justify-center p-6 bg-white rounded-2xl'>
        <img src={Girl} alt="Girl" className='mb-3' />
        <h2 className='text-lg font-semibold '>Trip To Greece</h2>
        <p className='text-gray-400 poppiens-regular'>14-29 June | By Farman Othman.</p>
        <div className='flex items-center gap-3'>
          <img src={Send} alt="Send" />
          <img src={MapIcon} alt="Map" />
          <img src={LEAF} alt="LEAF" />
        </div>
        <p className='text-gray-400 poppiens-regular'>24 people going</p>
      </div>
    </div>
  )
}

export default EasyAndFast