import { useState } from "react";

export default function Carousel({ images }) {
  const [currentIndex, setIndex] = useState(0);

  function nextSlide() {
    setIndex((prevState) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  }

  function prevSlide() {
    setIndex((prevState) => (prev - 1 < images.length - 1 ? 2 : prev - 1));
  }

  return (
    <>
      <div className="w-full h-96 bg-slate-500 overflow-hidden shadow-lg rounded-lg flex relative">
        {images.map((slide) => {
          return (
            <div
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
              className="bg-teal-400 w-full h-96  transition ease-in duration-500 shrink-0"
            >
              <img src={slide} className="object-contain w-full h-96" />
            </div>
          );
        })}

        {/* slider controls */}

        <div className="absolute inset-0 flex items-center justify-between m-6">
          <button
            onClick={prevSlide}
            className="block bg-white/60 rounded-full p-2 backdrop-blur-md"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
              />
            </svg>
          </button>
          <button
            className="block bg-white/60 rounded-full p-2 backdrop-blur-md"
            onClick={nextSlide}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
