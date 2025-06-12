import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/lab-hero-1.png',
    title: 'VO₂ Max Testing',
    description: 'Precision performance analysis for elite athletes'
  },
  {
    id: 2,
    image: '/images/lab-hero-2.png',
    title: 'Gait Analysis',
    description: 'Advanced biomechanical assessment'
  },
  {
    id: 3,
    image: '/images/lab-hero-3.png',
    title: 'Force Deck Testing',
    description: 'Measure your power output with precision'
  },
  {
    id: 4,
    image: '/images/lab-hero-4.png',
    title: 'Body Composition',
    description: 'Comprehensive body analysis'
  },
  {
    id: 5,
    image: '/images/lab-hero-5.png',
    title: 'Recovery Analysis',
    description: 'Optimize your recovery process'
  },
  {
    id: 6,
    image: '/images/lab-hero-6.png',
    title: 'Performance Lab',
    description: 'State-of-the-art testing facility'
  }
];

const LabHeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/70 to-transparent" />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="ndur-container">
              <div className="max-w-3xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/80 mb-8">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-[#e23636]' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default LabHeroCarousel; 