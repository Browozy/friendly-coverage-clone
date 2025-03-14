
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BarChart, Heart, Shield, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-insurance-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About WiseInsure</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We're dedicated to helping Canadians find the perfect insurance coverage at competitive rates.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  Founded in 2010, WiseInsure began with a simple mission: to make insurance shopping easier, more transparent, and more affordable for all Canadians.
                </p>
                <p>
                  Our founders recognized that finding the right insurance policy was often confusing, time-consuming, and frustrating. Many Canadians were either overpaying for coverage they didn't need or were underinsured without knowing it.
                </p>
                <p>
                  We set out to change that by building a platform that connects customers with the right insurance providers for their specific needs. By leveraging technology and insurance expertise, we've helped thousands of Canadians save money while getting the protection they need.
                </p>
                <p>
                  Today, WiseInsure is one of Canada's leading insurance comparison services, with a dedicated team of licensed insurance advisors and partnerships with over 30 of the country's top insurance providers.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto bg-insurance-primary/10 p-3 rounded-full inline-block mb-4">
                    <Users className="h-8 w-8 text-insurance-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-insurance-primary">Customer First</h3>
                  <p className="text-gray-600">
                    We put our customers' needs at the center of everything we do, providing personalized solutions and exceptional service.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto bg-insurance-primary/10 p-3 rounded-full inline-block mb-4">
                    <Shield className="h-8 w-8 text-insurance-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-insurance-primary">Integrity</h3>
                  <p className="text-gray-600">
                    We operate with honesty, transparency, and fairness in all our dealings with customers, partners, and employees.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center h-full">
                <CardContent className="pt-8 pb-6 px-6">
                  <div className="mx-auto bg-insurance-primary/10 p-3 rounded-full inline-block mb-4">
                    <Award className="h-8 w-8 text-insurance-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-insurance-primary">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in our advice, service, and technology to deliver the best possible experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Why Choose WiseInsure</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Insurance experts at work" 
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4">
                    <BarChart className="h-6 w-6 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Compare Multiple Quotes</h3>
                    <p className="text-gray-600">
                      We partner with over 30 insurance providers to ensure you get the best rates available.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4">
                    <Heart className="h-6 w-6 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Expert Advice</h3>
                    <p className="text-gray-600">
                      Our licensed insurance advisors provide personalized recommendations based on your unique needs.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-insurance-primary/10 p-2 rounded-full mr-4">
                    <Award className="h-6 w-6 text-insurance-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">Save Time and Money</h3>
                    <p className="text-gray-600">
                      Our customers save an average of 30% on their insurance premiums when they shop with WiseInsure.
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
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Compare quotes from top insurance providers and find the perfect coverage for your needs.
            </p>
            <Button asChild size="lg" className="bg-white text-insurance-primary hover:bg-gray-100">
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
