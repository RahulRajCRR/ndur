
import React from 'react';
import { FlaskConical, Bot, UserRound, Activity, Bandage, HeartPulse } from 'lucide-react';

const FeatureGrid: React.FC = () => {
  const features = [
    {
      title: "Pro-Level Testing",
      description: "VO₂ Max & Lactate Threshold Testing to push your limits and understand your body's true potential.",
      icon: <FlaskConical className="text-ndur-red mr-2" size={20} />
    },
    {
      title: "AI-Driven Analysis",
      description: "Real-time gait & impact insights for smarter movement and performance.",
      icon: <Bot className="text-ndur-red mr-2" size={20} />
    },
    {
      title: "Elite Coaching",
      description: "In-house experts guiding your every step — not influencers, just professionals.",
      icon: <UserRound className="text-ndur-red mr-2" size={20} />
    },
    {
      title: "Cutting-Edge Wearables",
      description: "Our custom ankle-worn device is designed to help you perform at your best, with precision metrics that other wearables just can't offer.",
      icon: <Activity className="text-ndur-red mr-2" size={20} />
    },
    {
      title: "Injury Management",
      description: "Prevent, assess, and recover with AI-driven insights and in-house physiotherapy support.",
      icon: <Bandage className="text-ndur-red mr-2" size={20} />
    }
  ];

  return (
    <section className="bg-black py-16 w-full overflow-hidden animate-section">
      <div className="ndur-container">
        <div className="text-center mb-12">
          <h2 className="h2 mb-2">Why NDÜR.AI?</h2>
          <p className="text-ndur-red font-medium mb-8">Because average doesn't cut it.</p>
          
          <p className="body-large max-w-3xl mx-auto mb-12">
            NDÜR.AI isn't just another fitness app — it's your high-performance command center. 
            We're bringing pro-level testing, AI-driven analysis, and elite coaching into one 
            seamless ecosystem to give you the edge you need to dominate your sport.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-ndur-dark rounded-lg glass-morphism p-6 flex flex-col"
            >
              <h4 className="h4 mb-4 flex items-center">
                {feature.icon}
                {feature.title}
              </h4>
              <p className="body-medium text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-ndur-darkGray rounded-lg glass-morphism p-8 text-center">
          <p className="body-large font-medium mb-0">
            This is the future of endurance — and we're building it now. 
            <span className="block text-ndur-red mt-2">No fluff. No guesswork. Just pure performance intelligence.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
