import futureTable from '../assets/images/illustration-features-tab-3.svg';

const Feature = () => {
  return (
    <section className="mb-[100px]">
      {/* Feature Section Header */}
      <div className="text-center mt-[100px] md:mt-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">Feature</h1>
        <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mt-4 mb-11">
          Our aim is to make it quick and easy for you to access your favourite websites.
          Your bookmarks sync between your devices so you can access them on the go.
        </p>
      </div>

      {/* Main Feature Content */}
      <div className="relative flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-20 py-12 md:py-24">
        {/* Blue Section */}
        <div className="absolute bottom-0 left-0 w-full lg:w-1/3 h-[280px] bg-blue-600 rounded-tr-full rounded-br-full hidden md:block"></div>

        {/* Image */}
        <img
          src={futureTable}
          alt="Table Illustration"
          className="z-10 h-[350px] md:h-[400px] mt-8 md:mt-0 transition-opacity duration-500 ease-in opacity-100"
        />

        {/* Content */}
        <div className="flex flex-col justify-center items-center text-center md:text-left md:items-start gap-6 md:ml-20 max-w-[90%] lg:max-w-[45%]">
          <h1 className="text-4xl md:text-5xl font-bold text-black">
            A Simple Bookmark Manager
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Our aim is to make it quick and easy for you to access your favourite websites.
            Your bookmarks sync between your devices so you can access them on the go.
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105"
            aria-label="More Info about the Bookmark Manager"
            role="button"
          >
            More Info
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feature;
