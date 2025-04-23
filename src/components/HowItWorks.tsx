
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 70%',
          toggleActions: 'play none none reverse',
        }
      });

      tl.from('.section-title', {
        opacity: 0,
        y: 30,
        duration: 0.6,
      });

      tl.from('.section-subtitle', {
        opacity: 0,
        y: 20,
        duration: 0.6,
      }, '-=0.3');

      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.from(step, {
            opacity: 0,
            y: 30,
            duration: 0.5,
            delay: 0.2 + index * 0.2,
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              end: 'bottom 70%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="ndur-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle text-center text-white text-xl mb-16 max-w-3xl mx-auto">
          Our three-step process transforms how you train, making elite-level performance science accessible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div 
            ref={el => stepsRef.current[0] = el} 
            className="numbered-step"
          >
            <div className="numbered-step-count">1</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Wear the Anklet</h3>
            <p className="text-white">
              Simply attach our lightweight, water-resistant anklet to start capturing precise biomechanical data.
            </p>
          </div>

          {/* Step 2 */}
          <div 
            ref={el => stepsRef.current[1] = el} 
            className="numbered-step"
          >
            <div className="numbered-step-count">2</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Train with AI Insights</h3>
            <p className="text-white">
              Receive real-time feedback and personalized recommendations to optimize your movement patterns.
            </p>
          </div>

          {/* Step 3 */}
          <div 
            ref={el => stepsRef.current[2] = el} 
            className="numbered-step"
          >
            <div className="numbered-step-count">3</div>
            <h3 className="text-2xl font-bold mb-4 text-white">Optimize via Lab Data</h3>
            <p className="text-white">
              Combine wearable data with lab tests to create a comprehensive profile of your performance potential.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Link to="/book-test" className="primary-button">
            Start your journey with us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
