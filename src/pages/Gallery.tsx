import React, { useState } from 'react';
import { Image, ImagePlus, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const galleryImages = [
  {
    id: 1,
    title: "VO₂ Max Testing",
    category: "lab",
    description: "Athletes performing high-intensity VO₂ max assessments in our lab.",
    imageUrl: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 2, 
    title: "Gait Analysis Session",
    category: "lab",
    description: "3D motion capture for comprehensive running form analysis.",
    imageUrl: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 3,
    title: "Recovery Session",
    category: "recovery",
    description: "MELT recovery technique session with our physiotherapist.",
    imageUrl: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 4,
    title: "NDÜR Wearables",
    category: "products",
    description: "Our custom wearable devices that track advanced metrics.",
    imageUrl: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 5,
    title: "Coaching Session",
    category: "coaching",
    description: "One-on-one coaching with our endurance experts.",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 6,
    title: "DEXA Body Scan",
    category: "lab",
    description: "Precision body composition analysis with our DEXA scanner.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 7,
    title: "Performance Analysis",
    category: "lab",
    description: "Advanced performance metrics tracking and analysis.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5fecbe10e27?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 8,
    title: "Strength Training",
    category: "training",
    description: "Specialized strength training for endurance athletes.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&auto=format"
  },
  {
    id: 9,
    title: "Nutrition Planning",
    category: "coaching",
    description: "Personalized nutrition planning for optimal performance.",
    imageUrl: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&auto=format"
  }
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
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
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
              Lab
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
            <button 
              onClick={() => setFilter('training')}
              className={`px-4 py-2 rounded-full text-sm md:text-base ${
                filter === 'training' 
                  ? 'bg-[#e23636] text-white' 
                  : 'bg-white/10 text-white/80 hover:bg-white/20'
              }`}
            >
              Training
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className="group relative aspect-square overflow-hidden rounded-lg bg-black/40 border border-white/10 hover:border-[#e23636]/50 transition-all duration-300"
                onClick={() => openLightbox(index)}
              >
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white text-lg font-bold mb-1">{image.title}</h3>
                    <p className="text-white/80 text-sm">{image.description}</p>
                  </div>
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
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
            <div className="relative max-w-4xl w-full mx-4">
              <button 
                onClick={closeLightbox}
                className="absolute -top-4 -right-4 z-10 bg-black/60 p-2 rounded-full text-white hover:text-[#e23636] transition-colors hover:bg-black"
              >
                <X className="w-6 h-6" />
              </button>
              
              <img
                src={filteredImages[currentImage].imageUrl}
                alt={filteredImages[currentImage].title}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-1">
                  {filteredImages[currentImage].title}
                </h3>
                <p className="text-white/80">
                  {filteredImages[currentImage].description}
                </p>
              </div>
              
              <button 
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#e23636] transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              
              <button 
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#e23636] transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Gallery;
