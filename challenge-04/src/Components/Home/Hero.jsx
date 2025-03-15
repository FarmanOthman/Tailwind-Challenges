import shape from '../../assets/Images/Shape Orange.svg'
import girls from '../../assets/Images/Traveller 1.png'
import plainIcon from '../../assets/Images/plane.png'
import playIcon from '../../assets/Images/Play button.svg'

function Hero() {
  return (
    <div className='h-screen relative'>
      <img src={shape} alt="" className='absolute z-[-10] top-[-9rem] right-0' />
      <div className='flex flex-col md:flex-row justify-evenly items-center h-full gap-6 px-4 md:px-0'>
        <div className='flex flex-col md:flex-row justify-around items-center gap-6 text-center md:text-left'>
          <div>
            <h3 className='text-lg md:text-xl font-bold poppins-regular text-red-400'>
              Best Destinations around the world
            </h3>
            <h1 className='font-volkhov mt-6 md:mt-8'>
              <span className='text-5xl md:text-8xl block'>Travel, enjoy</span>
              <span className='text-5xl md:text-8xl block'>and live a new</span>
              <span className='text-5xl md:text-8xl block'>and full life</span>
            </h1>
            <p className='mt-6 md:mt-8 text-gray-400 max-w-[477px] mx-auto md:mx-0'>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate
              sell they west hard for the.
            </p>
            <div className='flex justify-center md:justify-start items-center gap-4 mt-6'>
              <button className='hover:bg-orange-600 bg-light-orange text-white px-6 py-3 rounded-md transition duration-300 cursor-pointer ease-in-out '>Find out more</button>
              <div className='flex items-center gap-2'>
                <img src={playIcon} alt="" className='hover:cursor-pointer md:w-[30px] max-sm:mt-[30px] sm:mt-[30px] lg:w-[110px]'  />
                <p className='text-gray-400'>Play Demo</p>
              </div>
            </div>
          </div>
          <div className='relative'>
            <img src={girls} alt="" className='w-[90%] md:w-[765px] mx-auto' />
            <img src={plainIcon} alt="" className='absolute top-10 left-4 z-20 w-12 sm:w-[100px] max-sm:w-[80px]' />
            <img src={plainIcon} alt="" className='absolute bottom-32 md:bottom-80 right-4 -z-0 w-12 sm:w-[100px] max-sm:w-[80px]' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
