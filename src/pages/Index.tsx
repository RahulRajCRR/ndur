import React, { useEffect, useRef } from 'react';
import Hero from '../components/Hero';
// import FeatureGrid from '../components/FeatureGrid';
// import WhyJoin from '../components/WhyJoin';
// import LabServices from '../components/LabServices';
import CTA from '../components/CTA';

// Import GSAP for animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useDeviceType, useScreenWidth } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger);

const Index: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const deviceType = useDeviceType();
  const screenWidth = useScreenWidth();

  useEffect(() => {
    if (pageRef.current) {
      // Initialize animations when component mounts
      const sections = pageRef.current.querySelectorAll('.animate-section');
      
      // Adjust animation based on device type
      const yOffset = deviceType === 'mobile' ? 20 : deviceType === 'tablet' ? 30 : 50;
      const duration = deviceType === 'mobile' ? 0.6 : deviceType === 'tablet' ? 0.8 : 1;
      
      sections.forEach((section) => {
        gsap.fromTo(
          section,
          { 
            opacity: 0, 
            y: yOffset 
          },
          { 
            opacity: 1, 
            y: 0, 
            duration: duration, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            }
          }
        );
      });
    }
  }, [deviceType, screenWidth]);

  return (
    <div ref={pageRef} className="min-h-screen bg-black text-white">
      <main className="overflow-hidden">
        <Hero />
        {/* <FeatureGrid /> */}
        {/* <WhyJoin /> */}
        {/* <LabServices /> */}
        <CTA />
      </main>
    </div>
  );
};

export default Index;
