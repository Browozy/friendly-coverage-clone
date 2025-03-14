
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAutoMenuOpen, setIsAutoMenuOpen] = useState(false);
  const [isHomeMenuOpen, setIsHomeMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-gray-100 py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <Link to="/blog" className="text-gray-600 hover:text-insurance-primary">Blog</Link>
              <Link to="/reviews" className="text-gray-600 hover:text-insurance-primary">Reviews</Link>
              <Link to="/careers" className="text-gray-600 hover:text-insurance-primary">Careers</Link>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:1-800-555-5555" className="flex items-center text-insurance-primary font-semibold">
                <Phone className="mr-2 h-4 w-4" />
                1-800-555-5555
              </a>
              <Link to="/login" className="text-gray-600 hover:text-insurance-primary text-sm">Login</Link>
              <Link to="/en-fr" className="text-gray-600 hover:text-insurance-primary text-sm">EN/FR</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-insurance-primary">Wise</span>
              <span className="text-red-600">Insure</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Auto Insurance Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-insurance-primary font-medium"
                onClick={() => setIsAutoMenuOpen(!isAutoMenuOpen)}
                onMouseEnter={() => setIsAutoMenuOpen(true)}
                onMouseLeave={() => setIsAutoMenuOpen(false)}
              >
                Auto Insurance
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isAutoMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsAutoMenuOpen(true)}
                  onMouseLeave={() => setIsAutoMenuOpen(false)}
                >
                  <Link to="/auto-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Car Insurance</Link>
                  <Link to="/motorcycle-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Motorcycle Insurance</Link>
                  <Link to="/classic-car-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Classic Car Insurance</Link>
                  <Link to="/high-risk-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">High Risk Drivers</Link>
                </div>
              )}
            </div>
            
            {/* Home Insurance Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-insurance-primary font-medium"
                onClick={() => setIsHomeMenuOpen(!isHomeMenuOpen)}
                onMouseEnter={() => setIsHomeMenuOpen(true)}
                onMouseLeave={() => setIsHomeMenuOpen(false)}
              >
                Home Insurance
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isHomeMenuOpen && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-50"
                  onMouseEnter={() => setIsHomeMenuOpen(true)}
                  onMouseLeave={() => setIsHomeMenuOpen(false)}
                >
                  <Link to="/home-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Homeowners Insurance</Link>
                  <Link to="/condo-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Condo Insurance</Link>
                  <Link to="/tenant-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Tenant Insurance</Link>
                  <Link to="/landlord-insurance" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Landlord Insurance</Link>
                </div>
              )}
            </div>

            <Link to="/business-insurance" className="text-gray-700 hover:text-insurance-primary font-medium">Business Insurance</Link>
            <Link to="/life-insurance" className="text-gray-700 hover:text-insurance-primary font-medium">Life Insurance</Link>
            <Link to="/about" className="text-gray-700 hover:text-insurance-primary font-medium">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-insurance-primary font-medium">Contact</Link>
          </nav>
          
          {/* Get a Quote Button */}
          <div className="hidden md:flex items-center">
            <Button asChild className="bg-insurance-primary hover:bg-insurance-primary/90">
              <Link to="/contact">Get a Quote</Link>
            </Button>
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
            <div className="border-b pb-2">
              <p className="font-medium text-gray-800 mb-2">Auto Insurance</p>
              <Link to="/auto-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Car Insurance</Link>
              <Link to="/motorcycle-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Motorcycle Insurance</Link>
              <Link to="/classic-car-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Classic Car Insurance</Link>
              <Link to="/high-risk-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>High Risk Drivers</Link>
            </div>
            
            <div className="border-b pb-2">
              <p className="font-medium text-gray-800 mb-2">Home Insurance</p>
              <Link to="/home-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Homeowners Insurance</Link>
              <Link to="/condo-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Condo Insurance</Link>
              <Link to="/tenant-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Tenant Insurance</Link>
              <Link to="/landlord-insurance" className="block pl-4 py-1 text-sm text-gray-700 hover:text-insurance-primary" onClick={toggleMenu}>Landlord Insurance</Link>
            </div>
            
            <Link to="/business-insurance" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Business Insurance</Link>
            <Link to="/life-insurance" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Life Insurance</Link>
            <Link to="/about" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-insurance-primary font-medium" onClick={toggleMenu}>Contact</Link>
            
            <div className="border-t pt-4">
              <Link to="/blog" className="block text-sm text-gray-600 hover:text-insurance-primary py-1" onClick={toggleMenu}>Blog</Link>
              <Link to="/reviews" className="block text-sm text-gray-600 hover:text-insurance-primary py-1" onClick={toggleMenu}>Reviews</Link>
              <Link to="/careers" className="block text-sm text-gray-600 hover:text-insurance-primary py-1" onClick={toggleMenu}>Careers</Link>
              <Link to="/login" className="block text-sm text-gray-600 hover:text-insurance-primary py-1" onClick={toggleMenu}>Login</Link>
            </div>
            
            <a href="tel:1-800-555-5555" className="flex items-center text-insurance-primary font-semibold">
              <Phone className="mr-2 h-5 w-5" />
              1-800-555-5555
            </a>
            
            <Button asChild className="w-full bg-insurance-primary hover:bg-insurance-primary/90">
              <Link to="/contact" onClick={toggleMenu}>Get a Quote</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
