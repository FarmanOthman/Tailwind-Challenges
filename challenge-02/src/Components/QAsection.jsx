import arrowIcon from '../assets/images/icon-arrow.svg'

const QAsection = () => {
  return (
    <section className="bg-white text-black py-20 mb-24 flex">
      <div className="container mx-auto px-4 justify-center items-center flex flex-col">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <p className="text-lg text-center text-gray-600">Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.</p>
        {/* Make it dynamic by mapping through the data and displaying the questions and answers here.*/}
        <div className="flex justify-between gap-[22rem] mt-8 mb-2">
          <h3 className="text-lg font-bold">What is Bookmark?</h3>
          <img src={arrowIcon} alt="arrowIcon" className = "h-4" />
        </div>
        <button className="btn text-left mt-10">More Info</button>
        
      </div>
    </section>
    );
}

export default QAsection;