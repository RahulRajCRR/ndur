import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, UserRound, Code, Microscope, Dumbbell, UploadCloud } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TeamMember from '../components/TeamMember';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    // Batch animations for better performance
    const ctx = gsap.context(() => {
      // Animation for fade-in elements with reduced stagger and duration
      gsap.from('.fade-in', {
        opacity: 0,
        y: 20, // Reduced from 30
        stagger: 0.1, // Reduced from 0.15
        duration: 0.5, // Reduced from 0.8
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.hero-section',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Animation for team members with reduced values
      gsap.from('.team-member', {
        opacity: 0,
        y: 20, // Reduced from 50
        stagger: 0.1, // Reduced from 0.2
        duration: 0.5, // Reduced from 0.8
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.team-section',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Animation for career items with reduced values
      gsap.from('.career-item', {
        opacity: 0,
        y: 20, // Reduced from 50
        stagger: 0.1, // Reduced from 0.2
        duration: 0.5, // Reduced from 0.8
        ease: "power2.out",
        scrollTrigger: {
          trigger: '.career-section',
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Cleanup
    return () => {
      ctx.revert(); // This will clean up all animations created by this context
    };
  }, []);

  return (
    <div className="min-h-screen animated-bg">
      <main>
        {/* Hero Section */}
        <section className="hero-section py-16 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/about-hero.jpeg" 
              alt="About NDÜR Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/60"></div>
          </div>
          <div className="ndur-container relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="fade-in text-4xl md:text-5xl lg:text-6xl font-inter font-bold mb-6 text-white">
                About <span className="text-ndur-red">NDÜR</span>
              </h1>
              <p className="fade-in text-white/80 text-lg md:text-xl lg:text-2xl mb-8 font-urbanist">
                Democratizing Elite-Level Training Through AI-Powered Analysis
              </p>
              <div className="fade-in w-24 h-1 bg-ndur-red mx-auto mb-12"></div>
            </div>
          </div>
        </section>

        {/* Why We Built NDÜR Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="ndur-container">
            <div className="max-w-3xl mx-auto text-center">
              <div className="fade-in">
                <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6 text-white">Why We Built <span className="text-ndur-red">NDÜR</span></h2>
                <div className="space-y-6 text-white/80 font-urbanist">
                  <p>
                    Our journey began when our founder, a competitive endurance athlete, discovered a significant gap in the market: high-level performance analytics were only available to elite athletes with extensive resources.
                  </p>
                  <p>
                    After experiencing how data-driven decisions dramatically improved performance and prevented injuries, we asked ourselves: "Why should this level of insight only be available to professionals?"
                  </p>
                  <p>
                    That question became our mission. We built NDÜR to democratize access to elite-level sports science, making it accessible to serious athletes at every level – from ambitious weekend warriors to Olympic hopefuls.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="py-16 md:py-24 bg-[#1a1f2e]">
          <div className="ndur-container text-center">
            <h2 className="fade-in text-3xl md:text-4xl font-inter font-bold mb-8 text-white">Our <span className="text-ndur-red">Mission</span></h2>
            <div className="max-w-4xl mx-auto">
              <p className="fade-in text-xl md:text-2xl lg:text-3xl leading-relaxed text-white/90 font-urbanist">
                "To democratize elite-level training insights through accessible, AI-powered analysis, enabling every dedicated athlete to train smarter and maximize their potential."
              </p>
              <div className="fade-in w-24 h-1 bg-ndur-red mx-auto my-12"></div>
              <p className="fade-in text-white/70 font-urbanist">
                We believe everyone deserves access to the same quality of performance insights as professional athletes. By combining cutting-edge sports science with artificial intelligence, we're making that possible.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section py-16 md:py-24 bg-black">
          <div className="ndur-container">
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6 text-center text-white">Our <span className="text-ndur-red">Team</span></h2>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-12 font-urbanist">
              Meet the experts behind NDÜR. Our team combines decades of experience in sports science, technology, and elite athletics to deliver cutting-edge performance solutions.
            </p>
            <div className="flex flex-row flex-wrap justify-center gap-8">
              <div className="mt-2">
                <TeamMember
                  name="Manjunath"
                  title="Co-Founder"
                  description="A visionary leader driving NDUR's mission of democratizing elite-level training through AI-powered analysis."
                  imgSrc="/images/team/manjunath.png"
                  bgColor="bg-purple-200"
                />
              </div>
              <div className="mt-32">
                <TeamMember
                  name="Dolly"
                  title="Co-Founder"
                  description="A dedicated founder with expertise in sports science and performance analysis, helping shape NDUR's innovative approach to athletic training."
                  imgSrc="/images/team/dolly.png"
                  bgColor="bg-green-200"
                />
              </div>
              <div className="mt-2">
                <TeamMember
                  name="Armutha"
                  title="Team Member"
                  description="A dedicated team member contributing to NDUR's mission of democratizing elite-level training through AI-powered analysis."
                  imgSrc="/images/team/armutha.png"
                  bgColor="bg-blue-200"
                />
              </div>
              <div className="mt-32">
                <TeamMember
                  name="Gabriel"
                  title="Co-Founder"
                  description="Leading the team with expertise and vision, driving NDUR's mission forward through innovative solutions and strategic direction."
                  imgSrc="/images/team/gabriel.png"
                  bgColor="bg-teal-200"
                />
              </div>
              <div className="mt-2">
                <TeamMember
                  name="Rahul"
                  title="Team Member"
                  description="A dedicated team member contributing to NDUR's mission of democratizing elite-level training through AI-powered analysis."
                  imgSrc="/images/team/rahul.png"
                  bgColor="bg-orange-200"
                />
              </div>
              <div className="mt-32">
                <TeamMember
                  name="Ajith"
                  title="Full Stack Developer"
                  description="Expert in full-stack development, building robust and scalable solutions that power NDUR's innovative platform."
                  imgSrc="/images/team/ajith.png"
                  bgColor="bg-indigo-200"
                />
              </div>
              <div className="mt-2">
                <TeamMember
                  name="Nate"
                  title="Architect"
                  description="Architecting the future of sports technology with innovative solutions and cutting-edge design patterns."
                  imgSrc="/images/team/nate.png"
                  bgColor="bg-yellow-200"
                />
              </div>
              <div className="mt-32">
                <TeamMember
                  name="Sujith"
                  title="Team Member"
                  description="A dedicated team member contributing to NDUR's mission of democratizing elite-level training through AI-powered analysis."
                  imgSrc="/images/team/sujith.png"
                  bgColor="bg-pink-200"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Careers Section - Updated to simplify contact approach */}
        <section className="career-section py-16 md:py-24 bg-black">
          <div className="ndur-container">
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6 text-center text-white">Careers at <span className="text-ndur-red">NDÜR</span></h2>
            <p className="text-white/80 text-center max-w-3xl mx-auto mb-12 font-urbanist">
              Join our team of innovators, scientists, and athletes who are pushing the boundaries of sports performance technology. We're always looking for passionate people to help us build the future of endurance training.
            </p>
            {/* Contact Box */}
            <div className="max-w-xl mx-auto">
              <div className="career-item rounded-xl bg-white/5 p-8 border border-white/10 text-center">
                <h3 className="text-xl font-bold text-white mb-4 font-inter">Want to connect with us?</h3>
                <p className="text-white/70 mb-6 font-urbanist">
                  Send your work and profile to us. We'd love to hear from talented individuals who are passionate about revolutionizing athletic performance.
                </p>
                <div className="bg-black/30 p-4 rounded-lg inline-block mb-6">
                  <p className="text-ndur-red font-mono text-xl">info@ndur.ai</p>
                </div>
                {/* Portfolio Upload Drop Box - Stylish */}
                <div
                  className="border-2 border-dashed border-[#e23636] rounded-xl bg-black/40 p-8 mb-4 flex flex-col items-center justify-center relative transition hover:border-[#ff4d4d]"
                  style={{ minHeight: 220 }}
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => e.preventDefault()}
                >
                  <UploadCloud className="w-10 h-10 text-[#e23636] mb-4" />
                  <p className="font-bold text-lg text-white mb-2">Drag Files Here to Add</p>
                  <span className="text-white/60 mb-4">or</span>
                  <label htmlFor="portfolio-upload" className="inline-block">
                    <input
                      id="portfolio-upload"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.zip,.rar,.jpg,.jpeg,.png,.webp,.txt"
                    />
                    <span className="bg-[#e23636] hover:bg-[#c82333] text-white px-6 py-2 rounded-full font-semibold cursor-pointer transition-colors text-base shadow-lg">
                      Choose Files
                    </span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button className="bg-ndur-red hover:bg-ndur-red/90" onClick={() => document.getElementById('join-us')?.scrollIntoView({ behavior: 'smooth' })}>
                Join the Team <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section id="join-us" className="py-16 md:py-24 bg-ndur-red/10">
          <div className="ndur-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="fade-in text-3xl md:text-4xl font-inter font-bold mb-6 text-white">Join the <span className="text-ndur-red">NDÜR</span> Movement</h2>
              <p className="fade-in text-white/80 mb-8 font-urbanist">
                Ready to experience the future of performance training? Book a lab test today and discover what elite-level insights can do for your athletic journey.
              </p>
              <div className="fade-in">
                <Button className="bg-ndur-red hover:bg-ndur-red/90 group">
                  Book Your First Analysis
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
