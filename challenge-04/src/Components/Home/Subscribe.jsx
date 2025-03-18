import waves from '../../assets/Images/Waves.png';
import telegramIcon from '../../assets/Images/Group 77.png';
import { MdOutlineEmail } from "react-icons/md";

function Subscribe() {
  return (
    <div className='flex items-center justify-center w-full mt-12'>
      <div className='w-full md:w-[1170px] h-[300px] md:h-[407px] light-purple rounded-lg rounded-tl-[100px] md:rounded-tl-[175px] relative flex items-center justify-center max-sm:mx-6 '>
        {/* Waves Background Images */}
        <img src={waves} alt="" className='absolute top-1/3 right-0 w-1/2 md:w-auto max-sm:top-1/4' />
        <img src={waves} alt="" className='absolute top-1/4 left-0 rotate-90 w-1/2 md:w-auto max-sm:top-1/6 ' />

        {/* Telegram Icon */}
        <img src={telegramIcon} alt="" className='absolute top-[-20px] md:top-[-27px] right-[-20px] md:right-[-27px] h-[50px] w-[50px] md:h-[70px] md:w-[70px] z-20' />

        {/* Content Container */}
        <div className='flex flex-col items-center justify-center w-full md:w-[859px] px-4 md:px-0'>
          {/* Heading */}
          <h1 className='poppins-semibold text-lg md:text-3xl text-gray-500 text-center'>
            Subscribe to get information, latest news, and other interesting offers about Jadoo
          </h1>

          {/* Input and Button Container */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-6 w-full max-w-[420px] md:max-w-none">
            {/* Email Input */}
            <div className="relative w-full flex items-stretch">
              <MdOutlineEmail
                size={20}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                className="w-full h-[50px] pl-10 bg-white text-gray-400 rounded-md px-4 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            {/* Subscribe Button */}
            <button className="w-full md:w-auto custom-orange-1 text-md poppins-regular text-white px-8 py-3 rounded-xl transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;