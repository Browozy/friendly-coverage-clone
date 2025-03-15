
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Award, Users, Check } from 'lucide-react';

const insurersList = [
  { id: 1, name: "ABC Insurance", specialty: "Auto & Home", rating: 4.8 },
  { id: 2, name: "XYZ Insurance Group", specialty: "All Lines", rating: 4.9 },
  { id: 3, name: "Canada Protect", specialty: "Home & Business", rating: 4.7 },
  { id: 4, name: "Northern Shield", specialty: "Auto & Life", rating: 4.6 },
  { id: 5, name: "Maple Insurance", specialty: "All Lines", rating: 4.8 },
  { id: 6, name: "Guardian Group", specialty: "Life & Health", rating: 4.9 },
  { id: 7, name: "National Cover", specialty: "All Lines", rating: 4.7 },
  { id: 8, name: "Dominion Insurance", specialty: "Auto & Home", rating: 4.5 },
  { id: 9, name: "Pacific Protection", specialty: "Business", rating: 4.8 },
  { id: 10, name: "Great North Insurance", specialty: "All Lines", rating: 4.9 },
  { id: 11, name: "Elite Insurance", specialty: "High Value", rating: 5.0 },
  { id: 12, name: "First Insurance", specialty: "Auto & Home", rating: 4.6 },
  { id: 13, name: "Western Shield", specialty: "All Lines", rating: 4.7 },
  { id: 14, name: "Capital Coverage", specialty: "Business", rating: 4.8 },
  { id: 15, name: "Eastcoast Protection", specialty: "All Lines", rating: 4.7 },
  { id: 16, name: "Frontier Insurance", specialty: "Rural & Farm", rating: 4.8 },
  { id: 17, name: "Urban Shield", specialty: "Urban Properties", rating: 4.6 },
  { id: 18, name: "Family First", specialty: "Life & Health", rating: 4.9 },
  { id: 19, name: "Premier Group", specialty: "All Lines", rating: 4.7 },
  { id: 20, name: "Safe Haven", specialty: "Home & Life", rating: 4.8 },
];

// Only display 20 of the 50 insurers on this page for simplicity
const featuredInsurers = insurersList.slice(0, 20);

const Insurers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-insurance-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Insurance Providers</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              WiseInsure partners with 50+ top-rated insurance companies to find you the best coverage at competitive rates.
            </p>
          </div>
        </section>
        
        {/* Benefits of our partnerships */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Why We Partner With Multiple Insurers</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With access to 50+ insurance providers, we can compare quotes to find you the perfect coverage at the best possible price.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto bg-insurance-primary/10 p-3 rounded-full inline-block mb-4">
                    <Shield className="h-8 w-8 text-insurance-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">More Choice</h3>
                  <p className="text-gray-600">
                    With 50+ insurance providers to choose from, we can find the perfect match for your specific needs and circumstances.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto bg-insurance-primary/10 p-3 rounded-full inline-block mb-4">
                    <Award className="h-8 w-8 text-insurance-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Better Rates</h3>
                  <p className="text-gray-600">
                    Our customers save an average of 30% on their premiums by comparing quotes from multiple providers.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto bg-insurance-primary/10 p-3 rounded-full inline-block mb-4">
                    <Users className="h-8 w-8 text-insurance-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">Expert Advice</h3>
                  <p className="text-gray-600">
                    Our licensed insurance brokers are familiar with all of our insurance partners and can guide you to the best options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Insurance Providers Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-800">Our Featured Insurance Partners</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We work with Canada's most trusted insurance companies to bring you reliable coverage and excellent service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featuredInsurers.map(insurer => (
                <Card key={insurer.id} className="border-0 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{insurer.name}</h3>
                    <p className="text-gray-600 mb-2">Specialty: {insurer.specialty}</p>
                    <div className="flex items-center text-insurance-success">
                      <span className="font-semibold mr-1">{insurer.rating}</span>
                      <span className="text-sm">/5.0</span>
                      <span className="ml-1">★★★★★</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-6">
                These are just 20 of our 50+ insurance partners. Contact us to learn more about all of our insurance providers.
              </p>
              <Button asChild className="bg-insurance-primary hover:bg-insurance-primary/90">
                <Link to="/contact">
                  Get a Customized Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Why Choose WiseInsure */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose WiseInsure?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Independent Advice</h3>
                    <p className="text-gray-600">
                      We're not tied to any one insurance company, so we always put your interests first. Our goal is to find you the best coverage at the best price.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Licensed Professionals</h3>
                    <p className="text-gray-600">
                      All of our insurance advisors are fully licensed professionals with years of experience in the insurance industry.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
                    <p className="text-gray-600">
                      We're here for you long after you buy your policy. From claims help to policy updates, we provide support throughout the life of your policy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4 mt-1">
                    <Check className="h-5 w-5 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Digital Convenience</h3>
                    <p className="text-gray-600">
                      Get quotes online, by phone, or in person - whatever works best for you. Our digital tools make insurance shopping easy and convenient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-insurance-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Compare Insurance Quotes?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you find the right coverage from our network of 50+ insurance providers.
            </p>
            <Button asChild size="lg" className="bg-white text-insurance-primary hover:bg-gray-100">
              <Link to="/contact">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Insurers;
