import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Youtube } from 'lucide-react';

interface FooterProps {
  showMap?: boolean;
}

const Footer: React.FC<FooterProps> = ({ showMap = false }) => {
  return (
    <footer className="py-16 bg-black border-t border-white/10">
      <div className="ndur-container">
        {/* Top Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Column 1: Links */}
          <div>
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
          
          {/* Column 2: CTA & Social */}
          <div>
            <div className="mb-6">
              <Link to="/" className="inline-block mb-4">
                <div className="flex items-center">
                  <img 
                    src="/images/logo.png" 
                    alt="NDÜR.AI Logo" 
                    className="h-14 w-auto"
                  />
                </div>
              </Link>
              <p className="text-white/70 mb-6 font-urbanist max-w-[280px]">
                Revolutionizing endurance sports through AI-powered analysis and coaching.
              </p>
              <Link to="/lab" className="primary-button mb-6">
                Book a Lab Test
              </Link>
            </div>
            
            <div>
              <span className="block text-white mb-4 font-urbanist">Follow Us</span>
              <div className="flex gap-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-ndur-red hover:border-ndur-red transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-ndur-red hover:border-ndur-red transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-ndur-red hover:border-ndur-red transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* New FAQs, Terms, Privacy section */}
        <div className="flex flex-wrap justify-center gap-6 py-8 border-t border-white/10 mb-8">
          <Link to="/faq" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
            FAQs
          </Link>
          <Link to="/terms" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
            Terms of Service
          </Link>
          <Link to="/privacy" className="text-white/70 hover:text-ndur-red transition-colors font-urbanist">
            Privacy Policy
          </Link>
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
