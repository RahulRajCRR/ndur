
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical } from 'lucide-react';

const WhyJoin: React.FC = () => {
  const benefits = [
    {
      title: "Know Your Body Like a Machine",
      description: "Gain unparalleled insights into your body's metrics with scientific precision."
    },
    {
      title: "Optimize Every Run, Every Rep",
      description: "Maximize your training with actionable, data-driven feedback."
    },
    {
      title: "Train with Precision",
      description: "Work with expert coaches to optimize your technique, strength, and performance."
    },
    {
      title: "Stop Guessing. Start Dominating",
      description: "NDÜR is for the relentless, the obsessed, the next level."
    }
  ];

  return (
    <section className="py-20 bg-black animate-section overflow-hidden">
      <div className="ndur-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image Column */}
          <div className="relative h-[400px] md:h-[500px] lg:h-full rounded-2xl overflow-hidden">
            <img 
              src="/lovable-uploads/155b3f70-4470-4125-8076-5ae898f66f2f.png" 
              alt="Elite endurance athletes showcasing running, cycling, and other endurance sports" 
              className="w-full h-full object-cover rounded-2xl glass-morphism"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </div>
          
          {/* Content Column */}
          <div className="lg:pl-8">
            <h2 className="h2 mb-4">Why You Should Be Here</h2>
            <p className="body-large mb-8 text-white/80">
              Because you're not here to coast. You want more — more speed, more clarity, more control. 
              NDÜR.AI gives it to you.
            </p>
            
            <div className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex">
                  <div className="w-1 bg-ndur-red mr-4 rounded-full"></div>
                  <div>
                    <h4 className="font-satoshi font-medium text-lg mb-1">{benefit.title}</h4>
                    <p className="body-medium text-white/70">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/lab" className="primary-button flex items-center group">
              <span>Step into the lab</span>
              <FlaskConical className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              <span className="ml-2 text-white/50">Or get left behind</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
