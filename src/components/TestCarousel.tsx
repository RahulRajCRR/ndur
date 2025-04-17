
import React from 'react';
import { ChevronRight, Activity, Bike, Scale, Footprints, MoveHorizontal, ArrowsUpFromLine } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const TestCarousel = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12">
          <div className="space-y-12 w-full">
            {/* VO2 Max Test */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <Activity size={28} className="text-[#e23636]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">VO₂ Max</h2>
                </div>
                <p className="text-white/80 mb-4">
                  It measures the maximum amount of oxygen your body can utilize during intense exercise—a gold standard for assessing aerobic capacity and endurance potential. Conducted via progressive treadmill or cycle protocols, it reveals how efficiently your heart, lungs, and muscles perform under stress.
                </p>
                <p className="text-white/80">
                  NDÜR turns VO₂ Max into a training superpower. Paired with our AI-driven platform, the data goes beyond a single number. It fuels adaptive training zones, smarter recovery timing, and endurance tracking over time—making elite-level insights accessible and actionable.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 order-1 md:order-2">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#e23636]/30 to-black/60 flex items-center justify-center">
                    <span className="text-[#e23636] text-3xl md:text-4xl font-bold">VO₂ MAX TEST</span>
                  </div>
                </AspectRatio>
              </div>
            </div>

            {/* Lactate Threshold */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Bike size={28} className="text-[#e23636]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Lactate Threshold</h2>
                </div>
                <p className="text-white/80 mb-4">
                  This assessment pinpoints the exercise intensity at which lactate starts accumulating in the blood faster than it can be cleared—a key marker for endurance. Conducted through progressive exercise on a treadmill or cycle, it helps determine the threshold where fatigue begins. This data is crucial for designing training zones that improve stamina and performance.
                </p>
                <p className="text-white/80">
                  NDÜR makes this test practical, affordable, and impactful. Integrated with our AI-driven platform, results translate into optimized pacing strategies and personalized training—eliminating guesswork and maximizing results.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 order-1">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#e23636]/30 to-black/60 flex items-center justify-center">
                    <span className="text-[#e23636] text-3xl md:text-4xl font-bold">LACTATE THRESHOLD</span>
                  </div>
                </AspectRatio>
              </div>
            </div>

            {/* Body Composition Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <Scale size={28} className="text-[#e23636]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Body Composition Analysis (BIA)</h2>
                </div>
                <p className="text-white/80 mb-4">
                  BIA uses a safe electrical signal to estimate fat percentage, muscle mass, hydration levels, and more. It offers a quick, non-invasive snapshot of your physical makeup, providing a clearer understanding than weight or BMI alone. This helps fine-tune fitness goals related to fat loss, muscle building, or metabolism.
                </p>
                <p className="text-white/80">
                  NDÜR pairs body composition with performance metrics to deliver holistic insights. With our intelligent app, your training and recovery plans adapt in real time to support optimal body composition and athletic output.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 order-1 md:order-2">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#e23636]/30 to-black/60 flex items-center justify-center">
                    <span className="text-[#e23636] text-3xl md:text-4xl font-bold">BODY COMPOSITION</span>
                  </div>
                </AspectRatio>
              </div>
            </div>

            {/* Force Plate Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2">
                <div className="flex items-center gap-3 mb-4">
                  <ArrowsUpFromLine size={28} className="text-[#e23636]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Force Plate Analysis</h2>
                </div>
                <p className="text-white/80 mb-4">
                  It measures the force generated during movements like jumping, running, or standing. They offer detailed insights into power, balance, and asymmetry—critical for assessing performance and identifying potential injury risks.
                </p>
                <p className="text-white/80">
                  NDÜR's biomechanical analysis enhances training precision. When combined with real-time wearable data, it reveals movement inefficiencies, allowing for smarter, safer improvements in strength and technique.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 order-1">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#e23636]/30 to-black/60 flex items-center justify-center">
                    <span className="text-[#e23636] text-3xl md:text-4xl font-bold">FORCE PLATE ANALYSIS</span>
                  </div>
                </AspectRatio>
              </div>
            </div>

            {/* Foot Pressure Scanner */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <div className="flex items-center gap-3 mb-4">
                  <Footprints size={28} className="text-[#e23636]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Foot Pressure Scanner</h2>
                </div>
                <p className="text-white/80 mb-4">
                  This tool evaluates how pressure is distributed across your feet during motion. It identifies arch type, gait patterns, and imbalances that may affect efficiency or cause strain. It's essential for optimizing footwear and running form.
                </p>
                <p className="text-white/80">
                  NDÜR's foot pressure analysis rounds out your movement profile. Integrated with force and stride data, it helps improve posture, reduce injury risk, and refine form—from the ground up.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 order-1 md:order-2">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#e23636]/30 to-black/60 flex items-center justify-center">
                    <span className="text-[#e23636] text-3xl md:text-4xl font-bold">FOOT PRESSURE ANALYSIS</span>
                  </div>
                </AspectRatio>
              </div>
            </div>

            {/* Running Gait Analysis */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2">
                <div className="flex items-center gap-3 mb-4">
                  <MoveHorizontal size={28} className="text-[#e23636]" />
                  <h2 className="text-2xl md:text-3xl font-bold text-white">Running Gait Analysis</h2>
                </div>
                <p className="text-white/80 mb-4">
                  Gait analysis breaks down your running mechanics—stride length, cadence, foot strike, joint angles, and symmetry. By capturing movement patterns in motion, it reveals inefficiencies, muscular imbalances, or form flaws that may impact performance or increase injury risk.
                </p>
                <p className="text-white/80">
                  NDÜR transforms gait analysis into actionable performance insights. Using AI-powered motion tracking and data from your wearable anklet, we decode your unique running signature. This enables personalized technique correction, injury prevention strategies, and performance optimization—tailored to how you move.
                </p>
              </div>
              <div className="aspect-w-16 aspect-h-9 order-1">
                <AspectRatio ratio={16/9}>
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-[#e23636]/30 to-black/60 flex items-center justify-center">
                    <span className="text-[#e23636] text-3xl md:text-4xl font-bold">GAIT ANALYSIS</span>
                  </div>
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestCarousel;
