import futureTable from '../assets/images/illustration-features-tab-1.svg'

const Hero = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-x-48 relative">
      <div className="absolute bottom-0 right-0 w-1/2 h-[400px] bg-blue-600 rounded-tl-full rounded-bl-full"></div>

      <div className="flex flex-col justify-center items-center gap-6 ml-20 max-w-[50vw]">
        <h1 className="text-5xl font-bold text-black ">A Simple Bookmark Manager</h1>
        <p className="text-blue-900">Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-full">More Info</button>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full">Get Started</button>
        </div>
      </div>
      <img src={futureTable} alt="Table Illustration" className="z-10 h-[400px] mr-9" />
      
    </div>
  )
}

export default Hero
