import { useEffect, useState } from "react";

function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/CardCategory/CategoryDetails.json")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div className="h-auto flex flex-col items-center justify-center relative px-4 sm:px-8 max-sm:my-[13rem]">
      <h1 className="text-xl text-gray-500 poppins-semibold">Category</h1>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-volkhov mt-4 text-center">
        We Offer Best Services
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-12 mt-8 items-center max-sm:pb-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center px-6 py-8 sm:px-8 sm:py-12 transition-transform duration-500 hover:scale-105 hover:bg-white hover:rounded-2xl hover:shadow-md hover:outline-none w-full sm:w-auto"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="w-20 h-20 sm:w-24 sm:h-24"
            />
            <h1 className="text-lg font-semibold font-sans mt-4 text-center">{category.title}</h1>
            <p className="text-gray-500 text-md text-center max-w-[175px]">{category.description}</p>
          </div>
        ))}
      </div>

      <div className="absolute w-[60px] sm:w-[80px] h-[60px] sm:h-[80px]  light-red rounded-tl-3xl rounded-br-lg -z-10 bottom-[-1rem] left-[80%] sm:left-[27rem] shadow-md"></div>
    </div>
  );
}

export default Category;
