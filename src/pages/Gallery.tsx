import React, { useState } from 'react';
import { Image, ImagePlus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const galleryImages = [
  {
    id: 1,
    title: "VO₂ Max Testing",
    category: "lab",
    description: "Athletes performing high-intensity VO₂ max assessments in our lab.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2, 
    title: "Gait Analysis Session",
    category: "lab",
    description: "3D motion capture for comprehensive running form analysis.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Recovery Session",
    category: "recovery",
    description: "MELT recovery technique session with our physiotherapist.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "NDÜR Wearables",
    category: "products",
    description: "Our custom wearable devices that track advanced metrics.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Coaching Session",
    category: "coaching",
    description: "One-on-one coaching with our endurance experts.",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "DEXA Body Scan",
    category: "lab",
    description: "Precision body composition analysis with our DEXA scanner.",
    imageUrl: "/placeholder.svg"
  },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const isMobile = useIsMobile();
  
  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);
  
  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto'; // Allow scrolling again
  };
  
  const nextImage = () => {
    setCurrentImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
  };
  
  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
  };
  
  return (
    <div className="min-h-screen bg-black">
      <main className="py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">NDÜR <span className="text-[#e23636]">Gallery</span></h1>
            <p className="text-white/80 max-w-3xl mx-auto">
              Explore our state-of-the-art lab facilities, equipment, and training sessions through our gallery.
            </p>
          </div>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                filter === 'all' 
                  ? 'bg-[#e23636] text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter('lab')}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                filter === 'lab' 
                  ? 'bg-[#e23636] text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Lab Services
            </button>
            <button 
              onClick={() => setFilter('recovery')}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                filter === 'recovery' 
                  ? 'bg-[#e23636] text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Recovery
            </button>
            <button 
              onClick={() => setFilter('products')}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                filter === 'products' 
                  ? 'bg-[#e23636] text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Products
            </button>
            <button 
              onClick={() => setFilter('coaching')}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                filter === 'coaching' 
                  ? 'bg-[#e23636] text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Coaching
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id} 
                className="relative group cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-full bg-ndur-darkGray flex items-center justify-center overflow-hidden">
                    <Image className="w-12 h-12 text-white/30" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <h3 className="text-white font-bold text-lg md:text-xl">{image.title}</h3>
                  <p className="text-white/80 text-sm md:text-base">{image.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="flex flex-col items-center justify-center py-16">
              <ImagePlus className="w-16 h-16 text-white/20 mb-4" />
              <h3 className="text-white text-xl font-bold mb-2">No images found</h3>
              <p className="text-white/60 text-center">
                No images available for the selected filter.
              </p>
            </div>
          )}
          
          {/* Image Upload CTA */}
          <div className="mt-16 bg-ndur-darkGray/50 rounded-lg p-6 md:p-8 text-center">
            <h3 className="text-white text-xl md:text-2xl font-bold mb-3">Share Your NDÜR Experience</h3>
            <p className="text-white/80 mb-6">
              Had a great experience at our lab? Share your photos with us and we might feature them in our gallery!
            </p>
            <button className="bg-[#e23636] hover:bg-[#e23636]/90 text-white px-6 py-3 rounded-full inline-flex items-center gap-2">
              <ImagePlus className="w-5 h-5" />
              <span>Share Your Photos</span>
            </button>
          </div>
        </div>
        
        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white bg-black/40 p-2 rounded-full"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full"
              onClick={prevImage}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="p-4 md:p-8 max-w-4xl w-full">
              <div className="aspect-w-16 aspect-h-9 bg-ndur-darkGray rounded-lg mb-4 flex items-center justify-center">
                <Image className="w-24 h-24 text-white/20" />
              </div>
              
              <h3 className="text-white text-xl md:text-2xl font-bold">{filteredImages[currentImage].title}</h3>
              <p className="text-white/80">{filteredImages[currentImage].description}</p>
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full"
              onClick={nextImage}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
