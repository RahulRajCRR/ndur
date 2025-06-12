import React, { useEffect, useRef } from 'react';
import TestCarousel from '../components/TestCarousel';
import LabHeroCarousel from '../components/LabHeroCarousel';
import { Check, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile, useScreenWidth } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

// Import GSAP for animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Lab: React.FC = () => {
  const testingPackagesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const screenWidth = useScreenWidth();

  const scrollToPackages = () => {
    if (testingPackagesRef.current) {
      testingPackagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen animated-bg">
      <main className="overflow-x-hidden">
        {/* Hero Carousel Section */}
        <LabHeroCarousel />
        
        {/* Testing Packages Section */}
        <section ref={testingPackagesRef} id="packages" className="py-10 md:py-16 lg:py-24 bg-black scroll-mt-[100px]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-3 md:mb-4">Our Testing Packages</h2>
            <p className="text-center text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto px-2 text-sm sm:text-base">
              Choose the right package based on your training level and goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Basic Athlete Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border border-white/10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Basic Athlete Package</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm md:text-base">
                  For casual runners, gym enthusiasts, or anyone starting their fitness journey.
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">VO₂ Max Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Lactate Threshold Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Body Composition Analysis (BIA)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Foot Pressure Scanner</span>
                  </li>
                </ul>
                
                <Button className="w-full group rounded-full">
                  Book a Session
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Advanced Performance Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border-2 border-[#e23636] relative">
                <div className="absolute -top-3 md:-top-4 right-3 md:right-8 bg-[#e23636] text-white text-xs md:text-sm font-bold px-2 md:px-4 py-1 rounded-full">
                  Recommended
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Advanced Performance Package</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm md:text-base">
                  Designed for marathoners, triathletes, and competitive endurance athletes.
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">VO₂ Max Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Lactate Threshold Test</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Gait Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Force Deck Testing</span>
                  </li>
                </ul>
                
                <Button className="w-full group rounded-full">
                  Book a Session
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
              
              {/* Elite Performance Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border border-white/10">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white">Elite Performance Package</h3>
                <p className="text-white/80 mb-6 sm:mb-8 text-sm md:text-base">
                  For professional athletes and those seeking the ultimate performance edge.
                </p>
                
                <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">All Advanced Package Tests</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">DEXA Body Scan</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Advanced Recovery Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Personalized Training Plan</span>
                  </li>
                </ul>
                
                <Button className="w-full group rounded-full">
                  Book a Session
                  <CalendarIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lab;
