import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Activity,
  Footprints,
  Users,
  Dumbbell,
  Utensils,
  Pill
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const LabService = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
}) => (
  <Card className="flex flex-col h-full bg-black/40 glass-morphism border-ndur-red/20 transform transition-all hover:border-ndur-red">
    <CardHeader className="pb-3">
      <div className="w-full flex justify-center items-center mb-6">
        <div className="p-4 rounded-full bg-black/40 border border-ndur-red/30">
          {icon}
        </div>
      </div>
      <CardTitle className="text-xl text-[#e23636] text-center">{title}</CardTitle>
    </CardHeader>
    <CardContent className="text-gray-200 text-sm flex-grow">
      <p dangerouslySetInnerHTML={{ __html: description }} />
    </CardContent>
  </Card>
);

const LabServices = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current && cardsRef.current) {
      // Create animation for cards
      const cards = cardsRef.current.querySelectorAll('.card-item');
      
      gsap.fromTo(
        cards,
        { 
          opacity: 0,
          y: 50,
        },
        { 
          opacity: 1, 
          y: 0, 
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
          }
        }
      );
    }
  }, []);

  const services = [
    {
      icon: <Activity size={36} className="text-[#e23636]" />,
      title: "Metabolic Analysis",
      description: "Unlock your body's energy systems through:<br/><br/><strong>VO₂ Max Testing:</strong> Determine your maximum oxygen uptake to tailor endurance training.<br/><br/><strong>Lactate Threshold Assessment:</strong> Identify the exercise intensity at which lactate begins to accumulate, optimizing training zones.<br/><br/>These insights enable precise training adjustments, enhancing aerobic capacity and performance."
    },
    {
      icon: <Footprints size={36} className="text-[#e23636]" />,
      title: "Running Mechanics",
      description: "Enhance your stride and prevent injuries with:<br/><br/><strong>2D/3D Gait Analysis:</strong> Assess movement patterns to identify inefficiencies.<br/><br/><strong>Joint Strength Assessments:</strong> Evaluate muscular imbalances and joint stability.<br/><br/><strong>Personalized Feedback:</strong> Receive tailored recommendations to improve running economy.<br/><br/>By refining biomechanics, athletes can achieve more efficient and safer movement patterns."
    },
    {
      icon: <Users size={36} className="text-[#e23636]" />,
      title: "One-on-One Coaching",
      description: "Accelerate progress with individualized support:<br/><br/><strong>Customized Training Plans:</strong> Develop programs aligned with personal goals and data insights.<br/><br/><strong>Elite Feedback:</strong> Gain insights from certified coaches experienced in endurance sports.<br/><br/><strong>Technique Optimization:</strong> Fine-tune form and strategy for peak performance.<br/><br/>This personalized approach ensures that training is both effective and sustainable."
    },
    {
      icon: <Dumbbell size={36} className="text-[#e23636]" />,
      title: "Sports Recovery & Movement Therapy",
      description: "Promote recovery and mobility through:<br/><br/><strong>MELT Hand & Foot Program:</strong> Utilize self-treatment techniques to alleviate pain and improve flexibility.<br/><br/><strong>Sports Massage:</strong> Address muscle tension and enhance circulation.<br/><br/><strong>Small Group Classes:</strong> Engage in guided sessions focused on mobility and recovery.<br/><br/>These therapies support the body's natural healing processes, reducing downtime and enhancing performance."
    },
    {
      icon: <Utensils size={36} className="text-[#e23636]" />,
      title: "Performance Nutrition",
      description: "Fuel your body effectively with:<br/><br/><strong>Personalized Nutrition Plans:</strong> Align dietary strategies with training demands and goals.<br/><br/><strong>Energy Optimization:</strong> Ensure adequate fueling for workouts and competitions.<br/><br/><strong>Recovery Enhancement:</strong> Incorporate nutrients that support muscle repair and growth.<br/><br/>Proper nutrition is integral to achieving and maintaining peak athletic performance."
    },
    {
      icon: <Pill size={36} className="text-[#e23636]" />,
      title: "Injury Management & In-House Physiotherapy",
      description: "Proactively address and rehabilitate injuries with our integrated approach:<br/><br/><strong>AI-Driven Risk Assessment:</strong> Utilize wearable technology to detect movement patterns indicative of potential injuries.<br/><br/><strong>On-Site Physiotherapy:</strong> Access licensed physiotherapists for immediate evaluation and treatment.<br/><br/><strong>Personalized Rehabilitation Programs:</strong> Develop recovery plans tailored to individual needs and progress.<br/><br/><strong>Continuous Monitoring:</strong> Track rehabilitation progress through real-time data, allowing for timely adjustments."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-ndur-dark via-ndur-darkGray to-black opacity-80 z-0"></div>
      <div className="ndur-container relative z-10">
        <h2 className="h2 text-center mb-12 text-[#e23636]">Elevate Every Run with NDÜR Lab Services</h2>
        <p className="body-medium text-center max-w-3xl mx-auto mb-16 text-gray-300">
          NDÜR.AI transcends traditional performance tracking by offering a holistic suite of services 
          designed to optimize every facet of your athletic journey. Our Lab Services integrate cutting-edge 
          technology, expert coaching, and personalized care to help you train smarter, recover faster, and 
          perform at your peak.
        </p>
        
        <div className="px-4 sm:px-8 md:px-12 lg:px-16 py-6 bg-black/30 backdrop-blur-sm rounded-2xl border border-ndur-red/20 shadow-xl shadow-black/30">
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="card-item h-full">
                <LabService 
                  icon={service.icon} 
                  title={service.title} 
                  description={service.description} 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabServices;
