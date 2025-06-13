import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {
  showMap?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showMap = false }) => {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="ndur-container">
        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-10 md:gap-0">
          {/* Logo, Description, CTA, and Quick Links grouped for mobile */}
          <div className="flex-1 flex flex-col items-center md:items-start">
            <Link to="/" className="inline-block mb-6 mt-4">
              <div className="flex items-center">
                <img 
                  src="/images/logo.png" 
                  alt="NDÜR.AI Logo" 
                  className="h-12 w-auto"
                />
              </div>
            </Link>
            <p className="text-white/70 mb-4 font-urbanist max-w-[280px] text-center md:text-left">
              Revolutionizing endurance sports through AI-powered analysis and coaching.
            </p>
            <Link to="/lab" className="primary-button mb-6">
              Book a Lab Test
            </Link>
            {/* Quick Links for mobile */}
            <div className="w-full md:hidden mt-2 text-left">
              <h4 className="font-inter font-semibold text-white text-xl mb-4 text-left">Quick Links</h4>
              <ul className="space-y-2 text-left">
                <li>
                  <Link to="/about" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Quick Links for desktop */}
          <div className="hidden md:block text-right">
            <h4 className="font-inter font-semibold text-white text-xl mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/about" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Footer - Copyright */}
        <div className="pt-4 border-t border-white/10 text-center">
          <p className="text-white/60 font-urbanist">© 2025 NDÜR.AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
