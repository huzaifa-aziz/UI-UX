import { useState } from "react";
import Image from "next/image";

const HomeCarousel = () => {
  const slides = [
    {
      id: 1,
      image: "/car.png", // Replace with actual image paths
      title: "The Best Platform for Car Rental",
      button: "Rent Now",
    },
    {
      id: 2,
      image: "/car (1).png",
      title: "Find Your Dream Car Today",
      button: "Explore Cars",
    },
    {
      id: 3,
      image: "/car (2).png",
      title: "Affordable Luxury Cars for Rent",
      button: "Start Booking",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? slides.length - 1 : (prev - 1) % slides.length
    );
  };

  return (
    <div className="w-full py-8 flex justify-center items-center">
      <div className="w-full max-w-[1200px] mx-auto relative">
        {/* Carousel Content */}
        <div className="relative w-full h-[400px] overflow-hidden rounded-lg">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-transform duration-700 ${
                index === currentSlide ? "translate-x-0" : "translate-x-full"
              }`}
            >
              <div className="flex flex-col items-center justify-center h-full bg-[#3563E9] text-white p-6 rounded-lg shadow-lg">
                <Image
                  src={slide.image}
                  alt={slide.title}
                  width={800}
                  height={300}
                  className="object-cover rounded-md"
                />
                <h2 className="text-2xl font-bold mt-4">{slide.title}</h2>
                <button className="bg-white text-[#3563E9] mt-4 px-6 py-2 rounded-lg hover:bg-gray-200 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
          onClick={prevSlide}
        >
          ❮
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:scale-110 transition"
          onClick={nextSlide}
        >
          ❯
        </button>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-4">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full ${
                currentSlide === index
                  ? "bg-[#3563E9]"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeCarousel;
