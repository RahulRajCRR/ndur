
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Calendar, Users, Trophy, MapPin, Clock, TrendingUp } from 'lucide-react';

const Events = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-ndur-red to-transparent"></div>
        <div className="ndur-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-satoshi font-bold text-5xl md:text-6xl mb-6">
              NDÜR <span className="text-ndur-red">Events</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-urbanist">
              Join us at events around the world where athletes discover how NDÜR.AI transforms their performance
            </p>
          </div>
        </div>
      </section>
      
      {/* Past Events Section */}
      <section className="py-16 bg-black">
        <div className="ndur-container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-satoshi font-bold mb-4">Past Events</h2>
            <div className="w-20 h-1 bg-ndur-red mb-6"></div>
            <p className="text-white/80 max-w-3xl font-urbanist text-lg">
              See how NDÜR.AI has been revolutionizing the running experience at our recent events.
            </p>
          </div>
          
          {/* Featured Past Event */}
          <div className="bg-ndur-darkGray rounded-2xl overflow-hidden shadow-xl border border-white/5 mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-6">
                  <span className="inline-block py-1 px-4 rounded-full bg-ndur-red/20 text-ndur-red text-sm font-medium mb-4">
                    March 15, 2025
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-satoshi font-bold mb-4">
                    Freshworks Chennai Marathon 2025
                  </h3>
                  <div className="flex flex-col gap-4 my-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="text-ndur-red w-5 h-5" />
                      <span className="text-white/80">Chennai, Tamil Nadu</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-ndur-red w-5 h-5" />
                      <span className="text-white/80">2,500+ Participants</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Trophy className="text-ndur-red w-5 h-5" />
                      <span className="text-white/80">Full & Half Marathon</span>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6 font-urbanist">
                    At the Freshworks Chennai Marathon, NDÜR.AI provided runners with real-time gait analysis and performance metrics. 
                    Athletes received personalized insights to optimize their running form, improve efficiency, and reduce injury risk.
                  </p>
                </div>
                <div className="mt-auto">
                  <button className="primary-button">View Event Details</button>
                </div>
              </div>
              <div className="relative h-full min-h-[300px] md:min-h-full">
                <img 
                  src="/lovable-uploads/852f2dc5-bc94-4da9-826b-2fc415d63f58.png" 
                  alt="NDÜR.AI at Freshworks Chennai Marathon" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
            </div>
          </div>
          
          {/* Event Gallery */}
          <div className="mb-12">
            <h3 className="text-2xl md:text-3xl font-satoshi font-bold mb-6">Event Gallery</h3>
            <p className="text-white/80 max-w-3xl font-urbanist text-lg mb-8">
              See how NDÜR.AI transformed runners' experience at the Freshworks Chennai Marathon with our innovative gait analysis technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div key={index} className="rounded-xl overflow-hidden border border-white/5 bg-ndur-darkGray hover:shadow-lg transition-all group">
                <div className="aspect-w-16 aspect-h-12 relative">
                  <AspectRatio ratio={4/3} className="bg-ndur-darkGray">
                    {index === 1 ? (
                      <img
                        src="/lovable-uploads/ede1ec98-2d00-4524-b07f-3cc0222eb2c6.png"
                        alt={`NDÜR.AI Marathon Event ${index}`}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-ndur-darkGray to-black">
                        <span className="text-ndur-red font-satoshi font-bold text-xl">Event Image {index}</span>
                      </div>
                    )}
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h4 className="font-satoshi font-medium text-lg mb-2">Marathon Moment {index}</h4>
                  <p className="text-white/60 text-sm font-urbanist">
                    Runners experiencing real-time analysis with NDÜR.AI technology
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* How NDÜR.AI Enhances Marathon Performance */}
          <div className="bg-gradient-to-br from-ndur-darkGray to-black rounded-2xl p-8 border border-white/5 mb-20">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-satoshi font-bold mb-6 text-center">
                How NDÜR.AI Enhances Marathon Performance
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mt-10">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ndur-red/20 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="w-8 h-8 text-ndur-red" />
                  </div>
                  <h4 className="font-satoshi font-bold text-xl mb-3">Gait Analysis</h4>
                  <p className="text-white/70 font-urbanist">
                    Advanced AI algorithms analyze running form to identify inefficiencies and reduce injury risk
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ndur-red/20 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-8 h-8 text-ndur-red" />
                  </div>
                  <h4 className="font-satoshi font-bold text-xl mb-3">Real-time Feedback</h4>
                  <p className="text-white/70 font-urbanist">
                    Instant insights allow athletes to make immediate adjustments during training sessions
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-ndur-red/20 flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-ndur-red" />
                  </div>
                  <h4 className="font-satoshi font-bold text-xl mb-3">Personalized Training</h4>
                  <p className="text-white/70 font-urbanist">
                    Custom training plans based on individual biomechanics and performance goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-b from-black to-ndur-darkGray">
        <div className="ndur-container">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-satoshi font-bold mb-4">Upcoming Events</h2>
            <div className="w-20 h-1 bg-ndur-red mb-6"></div>
          </div>
          
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <div className="w-20 h-20 rounded-full bg-ndur-red/20 flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-10 h-10 text-ndur-red" />
            </div>
            <h3 className="text-2xl md:text-3xl font-satoshi font-bold mb-4">Coming Soon</h3>
            <p className="text-white/80 font-urbanist text-lg mb-8">
              We're planning exciting new events where you can experience NDÜR.AI technology first-hand. 
              Stay tuned for announcements about upcoming marathons, training camps, and more.
            </p>
            <button className="secondary-button">Get Notified</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
