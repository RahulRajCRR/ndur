import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-8 bottom-8 flex flex-col gap-4 z-50">
      {/* Scroll to Top Button - styled as small, circular, with red border */}
      <button
        onClick={scrollToTop}
        className="bg-white border-2 border-[#e23636] text-[#e23636] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center"
        aria-label="Scroll to top"
        style={{ width: 44, height: 44 }}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
};

export default FloatingButtons; 