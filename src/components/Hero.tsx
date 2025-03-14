
import { Button } from '@/components/ui/button';
import { Select } from '@/components/ui/select';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-insurance-primary to-insurance-secondary py-20 md:py-32">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Save on Insurance with InsureWise
          </h1>
          <p className="text-xl text-white mb-8">
            Compare quotes from Canada's top insurance providers and save up to 30% on your premium.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Get a Quote Now</h3>
            <div className="space-y-4">
              <div>
                <label htmlFor="insurance-type" className="block text-sm font-medium text-gray-700 mb-1">
                  I'm looking for:
                </label>
                <select 
                  id="insurance-type" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insurance-primary"
                >
                  <option value="auto">Auto Insurance</option>
                  <option value="home">Home Insurance</option>
                  <option value="business">Business Insurance</option>
                  <option value="life">Life Insurance</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-1">
                  Postal Code:
                </label>
                <input 
                  type="text" 
                  id="postal-code" 
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insurance-primary"
                  placeholder="e.g. A1A 1A1"
                />
              </div>
              
              <Button className="w-full bg-insurance-primary hover:bg-insurance-dark text-white py-6">
                Get My Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
