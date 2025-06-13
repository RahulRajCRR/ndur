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
      // Close mobile menu on scroll
      if (isMenuOpen) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
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
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="ndur-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="NDÜR Logo" className="h-12" />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <Link to="/" className={`nav-link ${currentPath === '/' ? 'text-[#e23636]' : 'text-white'}`}>Home</Link>
              <Link to="/lab" className={`nav-link ${currentPath === '/lab' ? 'text-[#e23636]' : 'text-white'}`}>Endurance Lab</Link>
              <Link to="/about" className={`nav-link ${currentPath === '/about' ? 'text-[#e23636]' : 'text-white'}`}>About Us</Link>
              <Link to="/events" className={`nav-link ${currentPath === '/events' ? 'text-[#e23636]' : 'text-white'}`}>Events</Link>
              <Link to="/products" className={`nav-link ${currentPath === '/products' ? 'text-[#e23636]' : 'text-white'}`}>Products</Link>
              <Link to="/partnership" className={`nav-link ${currentPath === '/partnership' ? 'text-[#e23636]' : 'text-white'}`}>Partnerships</Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/lab"
              className="bg-[#e23636] hover:bg-[#e23636]/90 text-white px-6 py-2 rounded-full transition-colors"
            >
              Step Into the Lab
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-[#e23636] transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md">
            <div className="px-4 py-4 space-y-4">
              <Link to="/" className="block text-white hover:text-[#e23636] transition-colors" onClick={closeMenu}>Home</Link>
              <Link to="/lab" className="block text-white hover:text-[#e23636] transition-colors" onClick={closeMenu}>Endurance Lab</Link>
              <Link to="/about" className="block text-white hover:text-[#e23636] transition-colors" onClick={closeMenu}>About Us</Link>
              <Link to="/events" className="block text-white hover:text-[#e23636] transition-colors" onClick={closeMenu}>Events</Link>
              <Link to="/products" className="block text-white hover:text-[#e23636] transition-colors" onClick={closeMenu}>Products</Link>
              <Link to="/partnership" className="block text-white hover:text-[#e23636] transition-colors" onClick={closeMenu}>Partnerships</Link>
              <Link to="/lab" className="block bg-[#e23636] hover:bg-[#e23636]/90 text-white px-6 py-2 rounded-full text-center transition-colors" onClick={closeMenu}>Step Into the Lab</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
