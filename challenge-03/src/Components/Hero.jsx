import React from 'react';
import AMDicon from '../assets/Images/amd.svg';
import MicrosoftIcon from '../assets/Images/microsoft.svg';
import Google from '../assets/Images/social.svg';
import Paypal from '../assets/Images/paypal.svg';
import LinkedinIcon from '../assets/Images/linkedin(1).svg';
import TwitterIcon from '../assets/Images/twitter(3).svg';
import LinkedinAltIcon from '../assets/Images/linkedin(2).svg';

function Hero() {
  return (
    <div className='min-h-[89vh]'>
      <div className="flex flex-col lg:flex-row items-end justify-between bg-transparent gap-3 lg:gap-8 p-4 lg:pt-36">
        {/* Left Section */}
        <div className="flex flex-col gap-8 lg:gap-10 lg:ml-20 max-w-[20rem] items-start w-full lg:w-auto">
          <div className="flex flex-col gap-5 w-full">
            <h1 className="text-4xl lg:text-4xl font-bold text-left whitespace-pre-line">
              <span className="block">Where</span>
              <span className="block">Knowledge</span>
              <span className="block">Meets the Stars</span>
            </h1>
            <a
              href="#"
              className="bg-red-500 text-white px-8 lg:px-12 py-3 w-full text-center lg:w-auto shadow-[0_5px_15px_rgba(255,0,0,0.4),_0_8px_30px_rgba(255,0,0,0.2)] hover:bg-red-600 transition-colors duration-300"
            >
              Enroll Now
            </a>
          </div>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-14 w-full">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-700 py-3 px-4 border border-white w-full sm:w-[11rem]"
              />
              <div className="flex gap-4 w-full justify-center sm:justify-start">
                <img src={TwitterIcon} alt="Twitter" className="h-7" />
                <img src={LinkedinAltIcon} alt="LinkedIn" className="h-7" />
              </div>
            </div>

            <p className="text-gray-300 text-left text-sm w-full">
              The universe is a canvas of endless possibilities, painted with galaxies, stars, 
              and planets beyond our wildest imagination.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-baseline lg:self-end justify-end w-full lg:w-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-14 backdrop-blur-sm bg-white/10 px-6 py-6 lg:px-10 lg:py-0 w-full lg:w-auto">
            <h2 className="text-lg lg:text-xl">Trusted by:</h2>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-14">
              <img className="h-12 lg:h-20" src={AMDicon} alt="AMD" />
              <img className="h-12 lg:h-20" src={MicrosoftIcon} alt="Microsoft" />
              <img className="h-12 lg:h-20" src={Google} alt="Google" />
              <img className="h-12 lg:h-20" src={LinkedinIcon} alt="LinkedIn" />
              <img className="h-12 lg:h-20" src={Paypal} alt="Paypal" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;