
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const updatePath = () => {
      setCurrentPath(window.location.pathname);
    };

    updatePath();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', updatePath);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', updatePath);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
  const scrollToSection = (sectionId: string) => {
    if (currentPath === '/lab') {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
      }
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled ? 'py-3 bg-black/95 backdrop-blur-sm shadow-lg' : 'py-5 bg-black/90'
        }`}
      >
        <div className="ndur-container flex justify-between items-center">
          {/* Logo - Left aligned with smaller AI text */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl md:text-3xl font-days font-bold tracking-wider">
              <span className="text-white">N</span>
              <span className="text-white">D</span>
              <span className="text-ndur-red">Ü</span>
              <span className="text-white">R</span>
              <span className="text-white text-base md:text-xl">.AI</span>
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              {currentPath === '/lab' ? (
                <>
                  <button onClick={() => scrollToSection('packages')} className="nav-link">Packages</button>
                  <button onClick={() => scrollToSection('calculator')} className="nav-link">Test Calculator</button>
                </>
              ) : (
                <Link to="/lab" className="nav-link">Lab</Link>
              )}
              <Link to="/about" className="nav-link">About Us</Link>
              <Link to="/products" className="nav-link">Products</Link>
              <Link to="/gallery" className="nav-link">Gallery</Link>
              <Link to="/events" className="nav-link">Events</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              
              {/* Dropdown */}
              <div className="relative">
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center nav-link"
                  aria-expanded={isDropdownOpen}
                  aria-controls="dropdown-menu"
                >
                  More <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div 
                    id="dropdown-menu"
                    className="absolute top-full right-0 mt-2 w-48 bg-black border border-white/10 rounded-lg shadow-lg py-2 z-[101]"
                  >
                    <Link to="/partnership" className="block px-4 py-3 text-white hover:bg-white/10 font-urbanist font-medium text-sm transition-colors" onClick={closeMenu}>Partnerships</Link>
                    <Link to="/press" className="block px-4 py-3 text-white hover:bg-white/10 font-urbanist font-medium text-sm transition-colors" onClick={closeMenu}>Press</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right side button - Changed to "Contact Us" */}
          <div className="hidden lg:flex">
            <Link to="/contact" className="primary-button">Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-ndur-red transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed positioning with proper z-index */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-md z-[99] overflow-y-auto">
            <div className="ndur-container flex flex-col space-y-6 py-8 px-4">
              <Link to="/" className="nav-link py-3 text-xl" onClick={closeMenu}>Home</Link>
              {currentPath === '/lab' ? (
                <>
                  <button onClick={() => scrollToSection('packages')} className="nav-link py-3 text-xl text-left">Packages</button>
                  <button onClick={() => scrollToSection('calculator')} className="nav-link py-3 text-xl text-left">Test Calculator</button>
                </>
              ) : (
                <Link to="/lab" className="nav-link py-3 text-xl" onClick={closeMenu}>Lab</Link>
              )}
              <Link to="/about" className="nav-link py-3 text-xl" onClick={closeMenu}>About Us</Link>
              <Link to="/products" className="nav-link py-3 text-xl" onClick={closeMenu}>Products</Link>
              <Link to="/gallery" className="nav-link py-3 text-xl" onClick={closeMenu}>Gallery</Link>
              <Link to="/events" className="nav-link py-3 text-xl" onClick={closeMenu}>Events</Link>
              <Link to="/blog" className="nav-link py-3 text-xl" onClick={closeMenu}>Blog</Link>
              
              {/* Mobile Dropdown */}
              <div className="py-3">
                <button 
                  onClick={toggleDropdown} 
                  className="flex items-center text-white text-xl font-urbanist font-medium"
                  aria-expanded={isDropdownOpen}
                >
                  More <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="pl-4 mt-4 space-y-4">
                    <Link to="/partnership" className="block text-white hover:text-ndur-red text-lg font-urbanist font-medium transition-colors py-2" onClick={closeMenu}>Partnerships</Link>
                    <Link to="/press" className="block text-white hover:text-ndur-red text-lg font-urbanist font-medium transition-colors py-2" onClick={closeMenu}>Press</Link>
                  </div>
                )}
              </div>
              
              <div className="flex flex-col space-y-4 pt-6">
                <Link to="/contact" className="primary-button text-center w-full" onClick={closeMenu}>Contact Us</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
      
      {/* Spacer div with sufficient height to prevent content from being hidden under the navbar */}
      <div className="h-[80px] md:h-[100px] w-full"></div>
    </>
  );
};

export default Navbar;
