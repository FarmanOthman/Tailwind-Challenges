import futureTable from '../assets/images/illustration-features-tab-1.svg'

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-x-8 relative flex-col md:flex-row">
      {/* Blue Section */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-[18.75rem] bg-blue-600 rounded-tl-full rounded-bl-full hidden md:block"></div>

      {/* Content */}
      <div className="flex flex-col justify-center items-center gap-6 md:ml-20 max-w-[80vw] md:max-w-[50vw]">
        <h1 className="text-4xl md:text-5xl font-bold text-black text-center md:text-left">A Simple Bookmark Manager</h1>
        <p className="text-blue-900 text-center md:text-left">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105">
            More Info
          </button>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full border-2 border-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:border-blue-700">
            Get Started
          </button>
        </div>
      </div>

      {/* Image */}
      <img src={futureTable} alt="Table Illustration" className="z-10 h-[300px] md:h-[400px] mt-8 md:mt-0" />
    </div>
  )
}

export default Hero
