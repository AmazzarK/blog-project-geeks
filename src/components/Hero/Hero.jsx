import React from 'react';
import heroImage1 from '../../assets/images/hero1.jpg';
import heroImage2 from '../../assets/images/hero2.jpg';
import heroImage3 from '../../assets/images/hero3.jpg';

import ImageCarousel from './../ui/ImageCarousel';

function Hero() {
  const heroImages = [heroImage1, heroImage2, heroImage3];

  return (
    <section className="relative w-full h-[450px] sm:h-[550px] md:h-[650px] lg:h-[750px] xl:h-[800px] overflow-hidden rounded-none sm:rounded-lg md:rounded-2xl shadow-none sm:shadow-lg">
      <ImageCarousel images={heroImages} interval={6000} />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/70 md:bg-black/80" />

      <div className="absolute inset-0 flex flex-col justify-center z-10 px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24">
        <div className="max-w-full sm:max-w-3xl lg:max-w-4xl space-y-5">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl leading-tight">
            Coaching Professionnel & Personnel
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg leading-relaxed">
           Transformez vos ambitions en réalité concrète et épanouissante grâce à un coaching stratégique et profondément humain.
          </p>

          <button className="mt-4 px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full shadow-lg hover:bg-indigo-100 transition-all duration-300 ease-in-out text-base sm:text-lg md:text-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 active:scale-95">
            Prendre un Rendez-vous
          </button>
        </div>
      </div>

      <div className="sm:hidden absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white/70 text-xs flex items-center gap-1">
        <span>Glissez</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      </div>
    </section>
  );
}

export default Hero;
