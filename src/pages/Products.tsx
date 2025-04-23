import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Products = () => {
  const isMobile = useIsMobile();

  return (
    <main className="pt-10 md:pt-16 pb-16 md:pb-24">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section - Ndur AI Anklet */}
        <section className="py-8 md:py-12 lg:py-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 px-2">
              <span className="text-[#e23636]">NDÜR AI Anklet</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-8">
              Next-Gen Wearable for Smarter Running
            </h2>
            
            <div className="space-y-6 mt-8 text-left">
              <p className="text-md sm:text-lg md:text-xl text-white/80 px-4">
                Step into the future of fitness with the Ndur AI Anklet—a revolutionary wearable designed to transform how runners understand and improve their performance. Unlike traditional wrist-based wearables, this smart anklet provides insights right from the source of your stride—your feet.
              </p>
              
              {/* Product Image */}
              <div className="bg-gradient-to-br from-[#e23636]/20 to-black/60 rounded-xl p-6 my-8 relative h-64 sm:h-80 md:h-96 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/10 text-9xl font-bold">NDÜR</div>
                </div>
                <div className="relative z-10 text-center">
                  <span className="text-[#e23636] text-4xl sm:text-5xl font-bold">AI ANKLET</span>
                </div>
              </div>

              {/* Why Anklet Section */}
              <div className="my-12 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#e23636] mb-4">Why Anklet?</h3>
                <p className="text-white/80 mb-6">
                  Worn on the ankle, Ndur captures your running movement with greater accuracy, offering real-time analysis of your gait, balance, and movement patterns. Whether you're a professional athlete, a casual jogger, or recovering from an injury, the Ndur Anklet adapts to your journey with personalized, AI-driven insights.
                </p>
              </div>
              
              {/* Smarter with AI Section */}
              <div className="my-12 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#e23636] mb-4">Smarter with AI</h3>
                <p className="text-white/80 mb-6">
                  Harnessing the power of artificial intelligence, the anklet doesn't just collect data—it understands it. The AI identifies patterns, detects asymmetries, and even predicts potential injury risks, helping you optimize your form and reach your goals faster.
                </p>
              </div>
              
              {/* One Device Section */}
              <div className="my-12 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#e23636] mb-4">One Device. Multiple Dimensions.</h3>
                <p className="text-white/80 mb-6">
                  The Ndur Anklet supports a broad spectrum of users—from runners and sports enthusiasts to physiotherapy patients—delivering value across sports performance, rehabilitation, and everyday fitness. Its stylish, ergonomic design ensures comfort during intense workouts, while the companion app keeps you connected and informed wherever you go.
                </p>
              </div>
              
              {/* A New Way to Train Section */}
              <div className="my-12 px-4">
                <h3 className="text-xl md:text-2xl font-bold text-[#e23636] mb-4">A New Way to Train</h3>
                <p className="text-white/80 mb-6">
                  With edge computing and real-time feedback, the anklet acts like your personal coach, guiding your strides, tracking your improvements, and motivating you through every run. For those seeking a smarter, more insightful way to train, Ndur is the perfect fit.
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="text-center mt-12 mb-16 px-4">
                <Button className="bg-[#e23636] hover:bg-[#e23636]/90 px-8 py-6 rounded-full text-lg">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-12 md:mb-16 text-white">
            <span className="text-[#e23636]">COMING</span> SOON
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
            {/* Product Card 1 */}
            <Card className="bg-black/40 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="h-36 sm:h-48 bg-gradient-to-br from-[#e23636]/20 to-black/60 mb-4 rounded-md flex items-center justify-center">
                  <span className="text-[#e23636] text-4xl sm:text-5xl font-bold">NDÜR·FIT</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Performance Tracker</h3>
                <p className="text-white/70 mb-4 text-sm sm:text-base">
                  Advanced wearable technology that tracks metrics beyond heart rate and steps—measuring muscle oxygen saturation, hydration, and recovery status.
                </p>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Product Card 2 */}
            <Card className="bg-black/40 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300">
              <CardContent className="p-4 sm:p-6">
                <div className="h-36 sm:h-48 bg-gradient-to-br from-[#e23636]/20 to-black/60 mb-4 rounded-md flex items-center justify-center">
                  <span className="text-[#e23636] text-4xl sm:text-5xl font-bold">NDÜR·APP</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">AI Training Coach</h3>
                <p className="text-white/70 mb-4 text-sm sm:text-base">
                  Personalized AI coaching system that adapts your training plan in real-time based on performance data, recovery metrics, and environmental factors.
                </p>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
            
            {/* Product Card 3 */}
            <Card className="bg-black/40 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300 sm:col-span-2 lg:col-span-1">
              <CardContent className="p-4 sm:p-6">
                <div className="h-36 sm:h-48 bg-gradient-to-br from-[#e23636]/20 to-black/60 mb-4 rounded-md flex items-center justify-center">
                  <span className="text-[#e23636] text-4xl sm:text-5xl font-bold">NDÜR·GEAR</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">Performance Apparel</h3>
                <p className="text-white/70 mb-4 text-sm sm:text-base">
                  Technical running gear with integrated sensors, adaptive compression, and thermoregulation technology designed for optimal performance in any conditions.
                </p>
                <Button variant="outline" className="w-full group">
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Products;
