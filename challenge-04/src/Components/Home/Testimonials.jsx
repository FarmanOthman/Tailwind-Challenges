import { useState, useEffect } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("/Testimonials/User.json") 
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((error) => console.error("Error fetching testimonials:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [testimonials]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  if (testimonials.length === 0) return <p>Loading...</p>;

  const { name, location, message } = testimonials[currentIndex];

  return (
    <div className='flex justify-around gap-16 items-center mt-32 px-4 sm:px-6 lg:px-16 xl:pl-64'>
      <div className='flex flex-col items-start justify-start gap-4'>
        <h3 className='text-gray-500 poppins-semibold text-xl'>Testimonials</h3>
        <h1 className='text-5xl leading-16 font-bold max-w-[409px] font-volkhov'>
          What people say about Us.
        </h1>
        <div className="flex gap-4 items-center mt-4">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-4 w-4 rounded-full ${index === currentIndex ? "bg-gray-900" : "bg-gray-500"}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-baseline rounded-2xl items-start bg-white shadow-xl px-8 py-4">
        <p className="poppins-regular text-gray-500 text-lg md:text-xl w-[472px] mx-auto mt-4 mb-10">
          “{message}”
        </p>
        <div className="flex items-start gap-2 flex-col">
          <h2 className="text-xl text-gray-500 poppins-semibold">{name}</h2>
          <p className="text-gray-400 poppins-regular">{location}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4"> {/* Controller for Carousel */}
        <FaChevronUp className="h-8 w-8 text-gray-500 cursor-pointer" onClick={handlePrev} />
        <FaChevronDown className="h-8 w-8 text-gray-500 cursor-pointer" onClick={handleNext} />
      </div>
    </div>
  );
}

export default Testimonials;
