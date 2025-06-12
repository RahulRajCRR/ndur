import React, { useState } from 'react';
import { ImagePlus } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <main className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">NDÜR <span className="text-[#e23636]">Gallery</span></h1>
            <p className="text-white/80 max-w-3xl mx-auto">
              Our gallery is currently being updated. Check back soon for exciting new content!
            </p>
          </div>
          
          {/* Empty State */}
          <div className="flex flex-col items-center justify-center py-16">
            <ImagePlus className="w-16 h-16 text-white/20 mb-4" />
            <h3 className="text-white text-xl font-bold mb-2">Coming Soon</h3>
            <p className="text-white/60 text-center">
              We're working on something amazing. Stay tuned!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
