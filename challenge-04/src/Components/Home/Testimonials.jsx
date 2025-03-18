import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  let timer;

  useEffect(() => {
    fetch("/Testimonials/User.json") 
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      changeSlide((currentIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, testimonials]);

  const changeSlide = (index) => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex(index);
      setFade(true);
    }, 300);
  };

  const handleNext = () => {
    clearInterval(timer);
    changeSlide((currentIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    clearInterval(timer);
    changeSlide(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  if (testimonials.length === 0) return <p>Loading...</p>;

  const { name, location, message } = testimonials[currentIndex];

  return (
    <div className='flex flex-col lg:flex-row justify-around gap-8 lg:gap-16 items-center mt-16 lg:mt-32 px-4 sm:px-6 lg:px-16 xl:pl-64'>
      <div className='flex flex-col items-center lg:items-start justify-start gap-4'>
        <h3 className='text-gray-500 poppins-semibold text-xl'>Testimonials</h3>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl leading-10 lg:leading-16 font-bold max-w-[409px] font-volkhov text-center lg:text-left'>
          What people say about Us.
        </h1>
        <div className="flex gap-2 sm:gap-4 items-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-gray-900 scale-110" : "bg-gray-500"}`}
              onClick={() => changeSlide(index)}
              style={{ cursor: "pointer" }}
            ></div>
          ))}
        </div>
      </div>
      <div className={`flex flex-col gap-4 justify-baseline rounded-2xl items-start bg-white shadow-xl px-6 sm:px-8 py-4 transition-opacity duration-500 ease-in-out ${fade ? "opacity-100" : "opacity-0"}`}>
        <p className="poppins-regular text-gray-500 text-md sm:text-lg md:text-xl w-full max-w-[472px] mx-auto mt-4 mb-6 sm:mb-10 text-center lg:text-left">
          “{message}”
        </p>
        <div className="flex items-center lg:items-start gap-2 flex-col">
          <h2 className="text-lg sm:text-xl text-gray-500 poppins-semibold">{name}</h2>
          <p className="text-gray-400 poppins-regular">{location}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 max-md:hidden"> {/* Controller for Carousel */}
        <FaChevronUp className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500 cursor-pointer" onClick={handlePrev} />
        <FaChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-gray-500 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
}

export default Testimonials;
