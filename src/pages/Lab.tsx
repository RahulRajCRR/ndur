import React, { useEffect, useRef, useState } from 'react';
import TestCarousel from '../components/TestCarousel';
import LabHeroCarousel from '../components/LabHeroCarousel';
import { Check, CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile, useScreenWidth } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';
import { Dialog, DialogTrigger, DialogContent } from '../components/ui/dialog';

// Import GSAP for animations
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Lab: React.FC = () => {
  const testingPackagesRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const screenWidth = useScreenWidth();
  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const scrollToPackages = () => {
    if (testingPackagesRef.current) {
      testingPackagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // TODO: Replace with actual email sending logic (e.g., EmailJS, Formspree, or backend API)
    // Example: await sendToEmail(form);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen animated-bg">
      <main className="overflow-x-hidden">
        {/* Hero Carousel Section */}
        <LabHeroCarousel />
        
        {/* Testing Packages Section */}
        <section ref={testingPackagesRef} id="packages" className="py-10 md:py-16 lg:py-24 bg-black scroll-mt-[100px]">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-3 md:mb-4">
              <span className="text-white block mb-5">Our New Testing Packages</span> 
              <span 
                className="block text-3xl sm:text-4xl md:text-6xl font-black"
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2.3px #e23636',
                  textShadow: 'none',
                }}
              >
                Coming Soon
              </span>
            </h2>
            <p className="text-center text-white/80 mb-8 md:mb-12 max-w-3xl mx-auto px-2 text-sm sm:text-base">
              We're preparing something special for athletes and fitness enthusiasts. These cutting-edge performance testing packages are launching soon. Stay tuned!
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {/* Basic Athlete Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border-2 border-[#e23636]">
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
                
                <Button className="group rounded-full px-20 mx-auto block">Available Soon</Button>
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
                    <span className="text-white text-sm md:text-base">Force Distribution Analysis</span>
                  </li>
                </ul>
                
                <Button className="group rounded-full px-20 mx-auto block">Available Soon</Button>
              </div>
              
              {/* Elite Performance Package */}
              <div className="rounded-xl p-5 md:p-6 lg:p-8 bg-black/40 border-2 border-[#e23636]">
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
                    <span className="text-white text-sm md:text-base">Advanced Recovery Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-[#e23636] mr-2 mt-1 flex-shrink-0 h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-white text-sm md:text-base">Personalized Training Plan</span>
                  </li>
                </ul>
                
                <Button className="group rounded-full px-20 mx-auto block">Available Soon</Button>
              </div>
            </div>
            {/* Waiting List Button using Dialog */}
            <div className="flex justify-center mt-10">
              <Dialog open={modalOpen} onOpenChange={setModalOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-[#e23636] hover:bg-[#e23636]/90 text-white text-lg px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                    Join Waiting List
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-0 bg-black rounded-xl max-w-md mx-auto">
                  <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4 text-center text-[#e23636]">Join the Waiting List</h2>
                    {submitted ? (
                      <div className="text-green-500 text-center font-bold py-8">Thank you! We'll notify you as soon as our specialized lab is ready for your endurance upgrade.</div>
                    ) : (
                      <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                          <label className="block text-white font-medium mb-1">Name:</label>
                          <input type="text" name="name" required className="w-full px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#e23636]" value={form.name} onChange={handleInputChange} />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-1">Phone Number:</label>
                          <input type="tel" name="phone" required className="w-full px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#e23636]" value={form.phone} onChange={handleInputChange} />
                        </div>
                        <div>
                          <label className="block text-white font-medium mb-1">Mail ID:</label>
                          <input type="email" name="email" required className="w-full px-4 py-2 rounded bg-white/10 text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#e23636]" value={form.email} onChange={handleInputChange} />
                        </div>
                        <Button type="submit" className="w-full bg-[#e23636] text-white rounded-full py-3 text-lg font-bold" disabled={submitting}>
                          {submitting ? 'Submitting...' : 'Submit'}
                        </Button>
                      </form>
                    )}
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Lab;
