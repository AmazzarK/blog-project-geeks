import React, { useState, useEffect, useCallback } from 'react';

const ImageCarousel = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (images.length === 0) return;
    const autoSlide = setInterval(goToNext, interval);
    return () => clearInterval(autoSlide);
  }, [images.length, interval, goToNext]);

  if (!images || images.length === 0) {
    return (
      <div className="text-center text-gray-500 p-4 bg-white rounded-lg shadow-md">
        Aucune image à afficher dans le carrousel. 😔
      </div>
    );
  }

  return (
    <div className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] xl:h-[800px] overflow-hidden">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover transition-opacity duration-700 ease-in-out opacity-100"
      />

      {/* Left Arrow */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/60 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-black/80 transition-all"
        aria-label="Image précédente"
      >
        &#10094;
      </button>

      {/* Right Arrow */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/60 text-white p-2 sm:p-3 rounded-full z-20 hover:bg-black/80 transition-all"
        aria-label="Image suivante"
      >
        &#10095;
      </button>

      {/* Indicators (optional) */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 rounded-full cursor-pointer transition-all duration-300 
              ${index === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Aller à l'image ${index + 1}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
