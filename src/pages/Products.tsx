import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const Products = () => {
  const isMobile = useIsMobile();

  return (
    <main className="pt-10 md:pt-16 pb-16 md:pb-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="container mx-auto px-4 md:px-6">
        {/* Hero Section - Ndur AI Anklet */}
        <section className="py-8 md:py-12 lg:py-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 px-2 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e23636] to-[#ff6b6b]">
                NDÜR AI Anklet
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white/90 mb-12 font-light">
              Next-Gen Wearable for Smarter Running
            </h2>
            
            <div className="space-y-8 mt-12 text-left">
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-white/80 px-4 leading-relaxed"
              >
                Step into the future of fitness with the Ndur AI Anklet—a revolutionary wearable designed to transform how runners understand and improve their performance.
              </motion.p>
              
              {/* Product Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-[#e23636]/20 via-black/40 to-[#e23636]/20 rounded-2xl p-8 my-12 relative h-72 sm:h-96 md:h-[32rem] overflow-hidden flex items-center justify-center backdrop-blur-sm border border-white/10"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/5 text-[12rem] font-black tracking-wider">NDÜR</div>
                </div>
                <div className="relative z-10 text-center">
                  <span className="text-[#e23636] text-5xl sm:text-6xl font-black tracking-wider">AI ANKLET</span>
                  <div className="mt-4 text-white/60 text-lg">Coming Soon</div>
                </div>
              </motion.div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16 px-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300"
                >
                  <Sparkles className="h-8 w-8 text-[#e23636] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">AI-Powered Insights</h3>
                  <p className="text-white/70">Real-time analysis of your gait, balance, and movement patterns with advanced AI algorithms.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300"
                >
                  <Zap className="h-8 w-8 text-[#e23636] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Edge Computing</h3>
                  <p className="text-white/70">Process data locally for instant feedback and reduced latency during your workouts.</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300"
                >
                  <Target className="h-8 w-8 text-[#e23636] mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Precision Tracking</h3>
                  <p className="text-white/70">Capture movement data with millimeter precision for accurate performance analysis.</p>
                </motion.div>
              </div>
              
              {/* CTA Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="text-center mt-16 mb-20 px-4"
              >
                <Button className="bg-gradient-to-r from-[#e23636] to-[#ff6b6b] hover:from-[#ff6b6b] hover:to-[#e23636] px-10 py-7 rounded-full text-lg font-semibold shadow-lg shadow-[#e23636]/20 transition-all duration-300 transform hover:scale-105">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="py-16 md:py-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-16 text-white tracking-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#e23636] to-[#ff6b6b]">COMING</span> SOON
          </motion.h2>
        </section>
      </div>
    </main>
  );
};

export default Products;
