
import { Button } from '@/components/ui/button';
import { Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-16 bg-insurance-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Save on Your Insurance?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Get started with a free quote today and see how much you could save with WiseInsure.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button className="bg-white text-insurance-primary hover:bg-gray-100 text-lg py-6 px-8">
            Get a Free Quote
          </Button>
          
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-insurance-primary text-lg py-6 px-8">
            <Phone className="mr-2 h-5 w-5" />
            Call 1-800-555-5555
          </Button>
        </div>
        
        <div className="mt-8">
          <Button asChild variant="ghost" className="border border-white text-white hover:bg-white hover:text-insurance-primary">
            <Link to="/static-export">
              <Download className="mr-2 h-4 w-4" />
              Download Static Site
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
