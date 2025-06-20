import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (titleRef.current && contentRef.current) {
      const timeline = gsap.timeline();
      timeline.fromTo(titleRef.current, {
        opacity: 0,
        y: 30
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      }).fromTo(contentRef.current.querySelectorAll('.animate-item'), {
        opacity: 0,
        y: 20
      }, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
    }
  }, []);
  return <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-black">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="w-full h-full aspect-[16/9] md:aspect-auto">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-ndur-darkGray to-black opacity-70"></div>
      </div>
      
      <div className="ndur-container relative z-10">
        <div className="max-w-3xl">
          
          
          <h3 ref={titleRef} className="h3 text-white mb-8">
            NDÜR is an <span className="text-ndur-red">Intelligent Performance Ecosystem</span> built for endurance athletes.
          </h3>
          
          <div ref={contentRef} className="space-y-8">
            <p className="body-large text-white/85 max-w-2xl animate-item font-urbanist">NDÜR combines cutting-edge technology with advanced AI to optimize your movement to prevent injuries and maximize your endurance performance with lab-grade accuracy</p>
            
            <div className="flex flex-wrap items-center gap-4 animate-item mt-8">
              <Link to="/lab" className="primary-button rounded-full">Get started</Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;