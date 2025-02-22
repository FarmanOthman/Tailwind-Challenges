import chrome from '../assets/images/logo-chrome.svg';
import firefox from '../assets/images/logo-firefox.svg';
import opera from '../assets/images/logo-opera.svg';

const DownloadTheExtension = () => {
  return (
    <div className="text-center mt-10 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800" aria-level="1">
        Download The Extension
      </h1>
      <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto mt-4 mb-10">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve
        got a favourite you’d like us to prioritize.
      </p>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Chrome Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 h-72 md:h-80">
          <img src={chrome} alt="Google Chrome browser logo" className="h-16" />
          <h2 className="text-xl font-semibold" aria-level="2">Add to Chrome</h2>
          <p className="text-gray-500">Minimum version 62</p>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105" 
            aria-label="Download and install Chrome extension"
          >
            Add & Install Extension
          </button>
        </div>

        {/* Firefox Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 h-72 md:h-80 md:mt-8">
          <img src={firefox} alt="Mozilla Firefox browser logo" className="h-16" />
          <h2 className="text-xl font-semibold" aria-level="2">Add to Firefox</h2>
          <p className="text-gray-500">Minimum version 55</p>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105" 
            aria-label="Download and install Firefox extension"
          >
            Add & Install Extension
          </button>
        </div>

        {/* Opera Card */}
        <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col items-center gap-4 h-72 md:h-80 md:mt-16">
          <img src={opera} alt="Opera browser logo" className="h-16" />
          <h2 className="text-xl font-semibold" aria-level="2">Add to Opera</h2>
          <p className="text-gray-500">Minimum version 46</p>
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full transition-all duration-300 hover:bg-blue-700 hover:scale-105" 
            aria-label="Download and install Opera extension"
          >
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadTheExtension;
