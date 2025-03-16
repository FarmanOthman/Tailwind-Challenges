import React, { useEffect, useState } from 'react';

function Destanations() {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    fetch("/CardDestination/CardDetails.json")
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className='flex flex-col items-center justify-center mt-28 px-4 sm:px-6 lg:px-8'>
      <p className='text-xl text-gray-500 poppins-semibold '>Top Selling</p>
      <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold font-volkhov mt-4 text-center mb-6'>Top Destinations</h1>

      <div className='flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-12 mt-8 items-center pb-8 w-full'>
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="flex flex-col items-center shadow-md rounded-b-2xl w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(25%-1.5rem)] max-w-[300px] transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            <img
              src={destination.imageUrl}
              alt={destination.title}
              className="w-full h-[340px] object-cover rounded-t-2xl"
            />
            <div className='flex flex-col items-start w-full bg-white rounded-b-2xl p-4'>
              <div className='flex justify-between items-center gap-2 w-full mt-4 mb-2'>
                <h5 className="text-md text-gray-500 font-volkhov">{destination.title}</h5>
                <p className="text-gray-500 text-md font-volkhov">{destination.price}</p>
              </div>
              <p className="text-gray-500 text-sm font-volkhov text-left">{destination.trip}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destanations;