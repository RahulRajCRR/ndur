
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Blog = () => {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-b from-ndur-red to-transparent"></div>
        <div className="ndur-container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="font-inter font-bold text-5xl md:text-6xl mb-6">
              NDÜR <span className="text-ndur-red">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-urbanist">
              Science-backed insights and performance wisdom for the modern endurance athlete
            </p>
          </div>
        </div>
      </section>
      
      {/* Endurance Lab Feature Section */}
      <section className="py-16 bg-black">
        <div className="ndur-container">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">Endurance Lab</h2>
              <div className="w-20 h-1 bg-ndur-red mb-6"></div>
              <h3 className="text-2xl font-inter font-medium mb-4">Inside the Endurance Lab</h3>
              <p className="text-xl font-urbanist mb-3 text-ndur-red">Where science meets sweat.</p>
              <p className="text-lg text-white/80 font-urbanist mb-6">
                Step into the heart of NDÜR.AI — our Endurance Lab — where data, diagnostics, 
                and elite-level insight collide to redefine human performance.
              </p>
              <Link to="/lab" className="primary-button inline-flex items-center">
                Visit the Lab <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <AspectRatio ratio={4/3} className="overflow-hidden rounded-2xl border border-white/10">
                <img 
                  src="/lovable-uploads/442c15b2-3f34-4a45-904a-0dac130f5bd9.png" 
                  alt="NDÜR Endurance Lab" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </AspectRatio>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-4">Latest from the Lab</h2>
            <div className="w-20 h-1 bg-ndur-red mb-10"></div>
          </div>
          
          {/* Blog Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 */}
            <Card className="bg-ndur-darkGray text-white border border-white/10 hover:shadow-lg transition-all overflow-hidden group">
              <AspectRatio ratio={16/9} className="bg-black">
                <img
                  src="/lovable-uploads/852f2dc5-bc94-4da9-826b-2fc415d63f58.png"
                  alt="VO2 Max Testing"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>April 10, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>5 min read</span>
                  </div>
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">VO2 Max: The Gold Standard of Endurance</h3>
                <p className="text-white/80 font-urbanist mb-4">
                  Discover how our VO2 Max testing goes beyond numbers — decoding your true aerobic potential 
                  and shaping smarter, more efficient training blocks.
                </p>
                <Link to="/blog/vo2-max-gold-standard" className="inline-flex items-center text-ndur-red hover:text-ndur-red/80 font-urbanist font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Article 2 */}
            <Card className="bg-ndur-darkGray text-white border border-white/10 hover:shadow-lg transition-all overflow-hidden group">
              <AspectRatio ratio={16/9} className="bg-black">
                <img
                  src="/lovable-uploads/ede1ec98-2d00-4524-b07f-3cc0222eb2c6.png"
                  alt="Lactate Threshold Testing"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>April 5, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>6 min read</span>
                  </div>
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">Lactate Threshold & Why It Matters</h3>
                <p className="text-white/80 font-urbanist mb-4">
                  Learn how pinpointing your lactate threshold can optimize race pace, delay fatigue, 
                  and increase training precision — whether you're chasing a 5K PR or an ultra.
                </p>
                <Link to="/blog/lactate-threshold-matters" className="inline-flex items-center text-ndur-red hover:text-ndur-red/80 font-urbanist font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Article 3 */}
            <Card className="bg-ndur-darkGray text-white border border-white/10 hover:shadow-lg transition-all overflow-hidden group">
              <AspectRatio ratio={16/9} className="bg-black">
                <img
                  src="/lovable-uploads/442c15b2-3f34-4a45-904a-0dac130f5bd9.png"
                  alt="Biomechanics Analysis"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>March 28, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>7 min read</span>
                  </div>
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">Biomechanics Breakdown: Your Running Form, Reimagined</h3>
                <p className="text-white/80 font-urbanist mb-4">
                  Our gait analysis isn't just about stride. It's a full-body scan of your movement economy, 
                  identifying inefficiencies and reducing injury risk through motion capture and wearable tech.
                </p>
                <Link to="/blog/biomechanics-breakdown" className="inline-flex items-center text-ndur-red hover:text-ndur-red/80 font-urbanist font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Article 4 */}
            <Card className="bg-ndur-darkGray text-white border border-white/10 hover:shadow-lg transition-all overflow-hidden group">
              <AspectRatio ratio={16/9} className="bg-black">
                <img
                  src="/lovable-uploads/5a5da8df-a29e-4263-8f7c-ab922163f770.png"
                  alt="Recovery Data Analysis"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>March 22, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>4 min read</span>
                  </div>
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">Recovery is Data Too</h3>
                <p className="text-white/80 font-urbanist mb-4">
                  We don't stop at performance — we measure recovery. Explore how we quantify muscle fatigue, 
                  ground contact asymmetry, and neuromuscular balance post-training.
                </p>
                <Link to="/blog/recovery-data" className="inline-flex items-center text-ndur-red hover:text-ndur-red/80 font-urbanist font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Article 5 */}
            <Card className="bg-ndur-darkGray text-white border border-white/10 hover:shadow-lg transition-all overflow-hidden group">
              <AspectRatio ratio={16/9} className="bg-black">
                <img
                  src="/lovable-uploads/b83c278c-5f6a-420d-80a2-ec9861479df8.png"
                  alt="Personalized Coaching"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </AspectRatio>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 text-xs text-white/70 mb-3">
                  <div className="flex items-center">
                    <Calendar className="h-3 w-3 mr-1" />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>6 min read</span>
                  </div>
                </div>
                <h3 className="font-inter font-bold text-xl mb-3">Personalized Coaching, Backed by Lab Data</h3>
                <p className="text-white/80 font-urbanist mb-4">
                  See how our in-house physiologists and AI systems craft truly individualized plans 
                  using insights only available through lab-grade diagnostics.
                </p>
                <Link to="/blog/personalized-coaching" className="inline-flex items-center text-ndur-red hover:text-ndur-red/80 font-urbanist font-medium">
                  Read more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Why It Matters Section */}
      <section className="py-16 bg-gradient-to-b from-black to-ndur-darkGray">
        <div className="ndur-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6">Why It Matters</h2>
            <div className="w-20 h-1 bg-ndur-red mx-auto mb-8"></div>
            <p className="text-xl text-white/80 font-urbanist leading-relaxed">
              In a world full of guesswork, the Endurance Lab delivers evidence-based training. 
              Every test, metric, and insight is designed to help you train smarter, recover better, 
              and perform at your absolute best.
            </p>
            <div className="mt-10">
              <Link to="/lab" className="primary-button">
                Book Your Lab Assessment
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-16 bg-ndur-darkGray">
        <div className="ndur-container">
          <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-inter font-bold mb-4">Get Lab Insights Delivered</h2>
              <p className="text-lg text-white/80 font-urbanist mb-8">
                Subscribe to our newsletter for the latest research, training methods, and exclusive content 
                from our performance experts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white w-full focus:outline-none focus:border-ndur-red"
                />
                <button className="primary-button whitespace-nowrap">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
