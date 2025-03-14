
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Shield, Award, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Trust Badges Section */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-12 border-b border-gray-700 pb-8">
          <div className="flex items-center">
            <Shield className="w-10 h-10 text-insurance-secondary mr-3" />
            <div>
              <h4 className="font-semibold">Licensed Broker</h4>
              <p className="text-sm text-gray-400">FSRA #12345</p>
            </div>
          </div>
          <div className="flex items-center">
            <Award className="w-10 h-10 text-insurance-secondary mr-3" />
            <div>
              <h4 className="font-semibold">Top Rated</h4>
              <p className="text-sm text-gray-400">Insurance Excellence</p>
            </div>
          </div>
          <div className="flex items-center">
            <Star className="w-10 h-10 text-insurance-secondary mr-3" />
            <div>
              <h4 className="font-semibold">5-Star Service</h4>
              <p className="text-sm text-gray-400">Customer Satisfaction</p>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-insurance-secondary">Wise</span>
              <span className="text-red-500">Insure</span>
            </h3>
            <p className="text-gray-400 mb-4">Your trusted insurance broker, helping Canadians find the best coverage at competitive rates since 2008.</p>
            <div className="space-y-2">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-insurance-secondary flex-shrink-0 mt-1" />
                <p className="text-gray-400">123 Insurance Ave, Suite 400<br />Toronto, ON M5V 2G8</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-insurance-secondary" />
                <p className="text-gray-400">1-800-555-5555</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-insurance-secondary" />
                <p className="text-gray-400">info@wiseinsure.ca</p>
              </div>
            </div>
          </div>
          
          {/* Insurance Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Insurance Products</h3>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Auto</h4>
                <ul className="space-y-2">
                  <li><Link to="/auto-insurance" className="text-gray-400 hover:text-white text-sm">Car Insurance</Link></li>
                  <li><Link to="/motorcycle-insurance" className="text-gray-400 hover:text-white text-sm">Motorcycle</Link></li>
                  <li><Link to="/classic-car-insurance" className="text-gray-400 hover:text-white text-sm">Classic Car</Link></li>
                  <li><Link to="/high-risk-insurance" className="text-gray-400 hover:text-white text-sm">High Risk</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white text-sm font-semibold mb-2">Home</h4>
                <ul className="space-y-2">
                  <li><Link to="/home-insurance" className="text-gray-400 hover:text-white text-sm">Homeowners</Link></li>
                  <li><Link to="/condo-insurance" className="text-gray-400 hover:text-white text-sm">Condo</Link></li>
                  <li><Link to="/tenant-insurance" className="text-gray-400 hover:text-white text-sm">Tenant</Link></li>
                  <li><Link to="/landlord-insurance" className="text-gray-400 hover:text-white text-sm">Landlord</Link></li>
                </ul>
              </div>
            </div>
            <div className="mt-4">
              <ul className="space-y-2">
                <li><Link to="/business-insurance" className="text-gray-400 hover:text-white text-sm">Business Insurance</Link></li>
                <li><Link to="/life-insurance" className="text-gray-400 hover:text-white text-sm">Life Insurance</Link></li>
                <li><Link to="/travel-insurance" className="text-gray-400 hover:text-white text-sm">Travel Insurance</Link></li>
                <li><Link to="/health-insurance" className="text-gray-400 hover:text-white text-sm">Health Insurance</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              <li><Link to="/news" className="text-gray-400 hover:text-white">News</Link></li>
              <li><Link to="/reviews" className="text-gray-400 hover:text-white">Reviews</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/claims" className="text-gray-400 hover:text-white">Claims</Link></li>
              <li><Link to="/payment" className="text-gray-400 hover:text-white">Payment Options</Link></li>
              <li><Link to="/insurance-guides" className="text-gray-400 hover:text-white">Insurance Guides</Link></li>
              <li><Link to="/insurance-calculator" className="text-gray-400 hover:text-white">Insurance Calculator</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              <li><Link to="/accessibility" className="text-gray-400 hover:text-white">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} 
              <span className="text-insurance-secondary"> Wise</span>
              <span className="text-red-500">Insure</span>. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
