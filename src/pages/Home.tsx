import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageCircle } from 'lucide-react';
import WaitlistForm from '@/components/WaitlistForm';

gsap.registerPlugin(ScrollTrigger);

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }

    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from('.hero-content', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out'
      });

      // Animate sections on scroll
      gsap.utils.toArray('.animate-section').forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 flex flex-col items-center justify-center h-full">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            NDÜR is an Intelligent Performance Ecosystem built for endurance athletes
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            NDÜR combines cutting-edge technology with advanced AI to optimize your movement to prevent injuries and maximize your endurance performance with lab-grade accuracy
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/lab"
              className="inline-block bg-[#e23636] hover:bg-[#e23636]/90 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-16 md:py-24">
        <div className="ndur-container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-inter font-bold mb-6 text-white">
              Be the First to <span className="text-ndur-red">Experience</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 font-urbanist">
              Join our exclusive waitlist to get early access to NDÜR's revolutionary sports performance technology.
            </p>
          </div>
          
          <div className="max-w-xl mx-auto">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Rest of the sections remain unchanged */}
      // ... existing code ...
    </div>
  );
};

export default Home; 