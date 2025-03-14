
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-insurance-primary">InsureWise</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-insurance-primary font-medium">Home</Link>
            <Link to="/auto-insurance" className="text-gray-700 hover:text-insurance-primary font-medium">Auto Insurance</Link>
            <Link to="/home-insurance" className="text-gray-700 hover:text-insurance-primary font-medium">Home Insurance</Link>
            <Link to="/business-insurance" className="text-gray-700 hover:text-insurance-primary font-medium">Business Insurance</Link>
            <Link to="/about" className="text-gray-700 hover:text-insurance-primary font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-insurance-primary font-medium">Contact</Link>
          </nav>
          
          {/* Phone Number */}
          <div className="hidden md:flex items-center">
            <a href="tel:1-800-555-5555" className="flex items-center text-insurance-primary font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              1-800-555-5555
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-700" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Home</Link>
            <Link to="/auto-insurance" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Auto Insurance</Link>
            <Link to="/home-insurance" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Home Insurance</Link>
            <Link to="/business-insurance" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Business Insurance</Link>
            <Link to="/about" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Contact</Link>
            <a href="tel:1-800-555-5555" className="flex items-center text-insurance-primary font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              1-800-555-5555
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
