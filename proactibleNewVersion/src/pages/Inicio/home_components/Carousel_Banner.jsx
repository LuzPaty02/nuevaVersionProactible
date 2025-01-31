import { useState, useCallback } from "react";
import CarreraProactible1_comp from "../../../assets/images/pagina_inicio/carrousel/carreraProactible_carrousel.webp";
import protesis from "../../../assets/images/pagina_inicio/carrousel/protesis_boton_carrousel.jpg";

export default function Carousel_Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { src: CarreraProactible1_comp, alt: "CarreraProactible1_comp" },
    { src: protesis, alt: "protesis" },
  ];

  // Use of `useCallback` to memoize navigation handlers for performance
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  }, [slides.length]);

  const setSlide = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {/* Carousel items */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`duration-700 ease-in-out absolute inset-0 transition-opacity ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy" // Lazy load images to improve performance
              className="absolute block w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-current={currentSlide === index ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
              onClick={() => setSlide(index)}
            ></button>
          ))}
        </div>

        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 bg-opacity-50 hover:bg-white transition-colors duration-300">
            <svg
              className="w-4 h-4 text-white group-hover:text-gray-600 transition-colors duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={nextSlide}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-600 bg-opacity-50 hover:bg-white transition-colors duration-300">
            <svg
              className="w-4 h-4 text-white group-hover:text-gray-600 transition-colors duration-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
  );
}
