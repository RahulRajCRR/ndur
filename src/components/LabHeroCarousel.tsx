import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/lab-hero-1.png',
    title: 'VO₂ Max Testing',
    description: `Measures how much oxygen your body uses during intense exercise—key for endurance and aerobic fitness. Reveals how well your heart, lungs, and muscles perform under stress.`,
    quote: "\"NDÜR turns VO₂ Max into a training superpower.\" Paired with AI, it creates adaptive zones, guides recovery, and tracks progress like a pro coach.",
    overlayOpacity: 0.85
  },
  {
    id: 6,
    image: '/images/lab-hero-6.png',
    title: 'Lactate Threshold Test',
    description: `Identifies the point where fatigue starts by measuring blood lactate during a treadmill or cycle test. Helps build precise training zones for stamina and peak output.`,
    quote: "\"NDÜR makes this test practical, affordable, and impactful.\" AI translates your results into training strategies that boost performance and recovery.",
    overlayOpacity: 1.0
  },
  {
    id: 5,
    image: '/images/lab-hero-5.png',
    title: 'Body Composition Analysis',
    description: `Uses BIA to estimate fat, muscle, and hydration—giving better insights than weight alone. Helps tailor goals for fat loss, strength, and metabolic health.`,
    quote: "\"NDÜR combines body composition with performance metrics to deliver a holistic view of your fitness.\" It fine-tunes training and recovery in real time.",
    overlayOpacity: 1.4
  },
  {
    id: 3,
    image: '/images/lab-hero-3.png',
    title: 'Force Distribution Analysis',
    description: `Force plates track power, balance, and symmetry in movement. Critical for injury prevention and building stronger, more efficient performance patterns.`,
    quote: "\"NDÜR's biomechanical analysis boosts training precision.\" Wearable data reveals movement gaps for smarter technique and safer progress.",
    overlayOpacity: 0.8
  },
  {
    id: 4,
    image: '/images/lab-hero-4.png',
    title: 'Foot Pressure Scanner',
    description: `Scans pressure patterns across your feet to detect imbalances and gait issues. Great for improving posture, footwear, and running efficiency.`,
    quote: "\"NDÜR's foot pressure analysis completes your movement profile.\" Combines data to reduce strain, improve form, and lower injury risk.",
    overlayOpacity: 0.75
  },
  {
    id: 2,
    image: '/images/lab-hero-2.png',
    title: 'Gait Analysis',
    description: `Breaks down stride, cadence, and symmetry to detect inefficiencies and risks. Tracks movement in real time for smarter running technique.`,
    quote: "\"NDÜR transforms gait analysis into actionable insights.\" Our AI decodes your form to guide personalized corrections and injury prevention.",
    overlayOpacity: 0.8
  },
];


const LabHeroCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

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
            loading="lazy"
          />
          <div
            className="absolute inset-0 bg-gradient-to-br from-black to-transparent"
            style={{ background: `linear-gradient(to bottom right, rgba(0,0,0,${slide.overlayOpacity}), rgba(0,0,0,0.0))` }}
          />
          
          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="ndur-container">
              <div className="max-w-3xl">
                <h1 className="h1 mb-4">
                  {slide.title}
                </h1>
                <p className="text-base md:text-2xl text-white/80 mb-4 font-urbanist">
                  {slide.description}
                </p>
                <p className="text-base md:text-2xl font-semibold font-urbanist text-white/80">
                  {(() => {
                    const match = slide.quote.match(/"([^"]*)"(.*)/);
                    if (match) {
                      return <><span style={{ color: '#e23636' }}>&quot;{match[1]}&quot;</span>{match[2]}</>;
                    }
                    return slide.quote;
                  })()}
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