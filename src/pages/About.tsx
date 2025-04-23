import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, UserRound, Code, Microscope, Dumbbell } from 'lucide-react';
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
        <section className="hero-section py-16 md:py-24 lg:py-32">
          <div className="ndur-container">
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <div className="fade-in rounded-xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/5a5da8df-a29e-4263-8f7c-ab922163f770.png" 
                  alt="NDÜR Lab Testing" 
                  className="w-full h-full object-cover"
                  loading="lazy" // Add lazy loading
                />
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {/* Team Member 1 */}
              <div className="team-member">
                <TeamMember
                  name="Dr. Sarah Chen"
                  title="Founder & CEO"
                  bio="Former Olympic athlete with a PhD in Sports Physiology. Sarah pioneered NDÜR's core technology after experiencing firsthand how data-driven training transformed her own athletic career."
                  imgSrc="/lovable-uploads/42293f73-c9e8-43fd-b752-cf73e45bc3b3.png"
                  icon={<Dumbbell className="text-ndur-red" size={20} />}
                />
              </div>

              {/* Team Member 2 */}
              <div className="team-member">
                <TeamMember
                  name="Marcus Johnson"
                  title="CTO"
                  bio="AI expert with previous experience at leading tech companies. Marcus leads our engineering team, translating complex biomechanical data into actionable insights for athletes."
                  imgSrc="/lovable-uploads/155b3f70-4470-4125-8076-5ae898f66f2f.png"
                  icon={<Code className="text-ndur-red" size={20} />}
                />
              </div>

              {/* Team Member 3 */}
              <div className="team-member">
                <TeamMember
                  name="Dr. Elena Rodriguez"
                  title="Head of Research"
                  bio="PhD in Biomechanics with 15+ years in sports science research. Elena oversees our testing protocols and ensures our analytics are backed by rigorous science."
                  imgSrc="/lovable-uploads/b83c278c-5f6a-420d-80a2-ec9861479df8.png"
                  icon={<Microscope className="text-ndur-red" size={20} />}
                />
              </div>

              {/* Team Member 4 */}
              <div className="team-member">
                <TeamMember
                  name="James Wilson"
                  title="Athletic Performance Director"
                  bio="Former elite coach with experience at the highest levels of sport. James bridges the gap between our technology and real-world athletic performance."
                  imgSrc="/lovable-uploads/55e6e6f1-2e19-45c8-81c2-49a9b716381e.png"
                  icon={<UserRound className="text-ndur-red" size={20} />}
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
                <div className="bg-black/30 p-4 rounded-lg inline-block">
                  <p className="text-ndur-red font-mono text-xl">hello@ndur.ai</p>
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
