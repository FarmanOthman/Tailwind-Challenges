import React from 'react'
import AMDicon from '../assets/Images/amd.svg'
import MicrosoftIcon from '../assets/Images/microsoft.svg'
import Google from '../assets/Images/social.svg'
import Paypal from '../assets/Images/paypal.svg'
import Linkin from '../assets/Images/linkedin(1).svg'
import X from '../assets/Images/twitter(3).svg'
import In from '../assets/Images/linkedin(2).svg'

function Hero() {
  return (
    <div className='flex items-center justify-between h-screen bg-transparent gap-8'>
      <div className='flex items-start max-w-[20rem] flex-col gap-10 ml-20'>
        <div className='flex flex-col gap-5'>
          <h1 className=" text-4xl font-bold text-left whitespace-pre-line">
            <span className="block">Where</span>
            <span className="block">Knowledge</span>
            <span className="block">Meets the Stars</span>
          </h1>
          <button className='flex items-baseline'>
            <a href="#" className="bg-red-500 text-white px-12 py-2 shadow-[0_5px_15px_rgba(255,0,0,0.4),_0_8px_30px_rgba(255,0,0,0.2)]">Enroll Now</a>
           </button>
        </div>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center justify-between gap-14'>
            <div>
              <input type="text" placeholder='Search' className='bg-gray-700 py-3 px-2 border border-white w-[11rem]' />
            </div>
            <div className='flex gap-2 items-baseline'>
              <img src={X} alt="" className='h-7' />
              <img src={In} alt="" className='h-7' />
            </div>
          </div>

          <p className='text-gray-300 text-left text-sm'>The universe is a canvas of endless possibilities, painted with galaxies, stars, 
            and planets beyond our wildest imagination.</p>
          <div>

          </div>
        </div>
        
      </div>
      <div>
        <div className='flex items-baseline justify-end'>
        <div className='flex items-center justify-center gap-16 backdrop-blur-sm bg-white/10 px-10'>
          <h2>Trusted by:</h2>
          <img className='h-20' src={AMDicon} alt='AMD' />
          <img className='h-20' src={MicrosoftIcon} alt='Microsoft' />
          <img className='h-20' src={Google} alt='Google' />
          <img className='h-20' src={Linkin} alt='Linkin' />
          <img className='h-20' src={Paypal} alt='Paypal' />
        </div>
          
        </div>
      </div>
    </div>
  )
}

export default Hero