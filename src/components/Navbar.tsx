import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('');
  const navigate = useNavigate();

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
        const navbarHeight = 80; // Height of the navbar in pixels
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        setIsMenuOpen(false);
      }
    }
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const handleNavigation = (to: string) => {
    closeMenu();
    navigate(to);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
          scrolled ? 'py-3 bg-black/95 backdrop-blur-sm shadow-lg' : 'py-5 bg-black/90'
        }`}
      >
        <div className="ndur-container flex justify-between items-center relative z-[9999]">
          {/* Logo - Left aligned */}
          <div onClick={() => handleNavigation('/')} className="cursor-pointer flex items-center">
            <img 
              src="/images/logo.png" 
              alt="NDÜR.AI Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              <button onClick={() => handleNavigation('/')} className="nav-link">Home</button>
              {currentPath === '/lab' ? (
                <>
                  <button onClick={() => scrollToSection('packages')} className="nav-link">Packages</button>
                  <button onClick={() => scrollToSection('calculator')} className="nav-link">Test Calculator</button>
                </>
              ) : (
                <button onClick={() => handleNavigation('/lab')} className="nav-link">Lab</button>
              )}
              <button onClick={() => handleNavigation('/about')} className="nav-link">About Us</button>
              <button onClick={() => handleNavigation('/products')} className="nav-link">Products</button>
              <button onClick={() => handleNavigation('/gallery')} className="nav-link">Gallery</button>
              <button onClick={() => handleNavigation('/events')} className="nav-link">Events</button>
              <button onClick={() => handleNavigation('/blog')} className="nav-link">Blog</button>
              
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
          <div className="lg:hidden flex items-center relative z-[9999]">
            <button 
              onClick={toggleMenu}
              className="text-white hover:text-ndur-red transition-colors p-2"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Fixed positioning with proper z-index */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[60px] bg-black/95 backdrop-blur-md z-[9998] overflow-y-auto h-[calc(100vh-60px)]">
            <div className="ndur-container flex flex-col space-y-6 py-8 px-4">
              <button onClick={() => handleNavigation('/')} className="nav-link py-3 text-xl">Home</button>
              {currentPath === '/lab' ? (
                <>
                  <button onClick={() => scrollToSection('packages')} className="nav-link py-3 text-xl text-left">Packages</button>
                  <button onClick={() => scrollToSection('calculator')} className="nav-link py-3 text-xl text-left">Test Calculator</button>
                </>
              ) : (
                <button onClick={() => handleNavigation('/lab')} className="nav-link py-3 text-xl">Lab</button>
              )}
              <button onClick={() => handleNavigation('/about')} className="nav-link py-3 text-xl">About Us</button>
              <button onClick={() => handleNavigation('/products')} className="nav-link py-3 text-xl">Products</button>
              <button onClick={() => handleNavigation('/gallery')} className="nav-link py-3 text-xl">Gallery</button>
              <button onClick={() => handleNavigation('/events')} className="nav-link py-3 text-xl">Events</button>
              <button onClick={() => handleNavigation('/blog')} className="nav-link py-3 text-xl">Blog</button>
              
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
