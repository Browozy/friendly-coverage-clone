
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-insurance-primary py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Our insurance experts are ready to assist you. Reach out to us for any questions or to get a personalized quote.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Form Side */}
              <div>
                <ContactForm />
              </div>
              
              {/* Info Side */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get In Touch</h2>
                <p className="text-gray-600 mb-8">
                  Whether you have questions about insurance policies, need help with a claim, or want to request a quote, 
                  our team is here to help. Contact us through the form or using the information below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-insurance-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Our Office</h3>
                      <p className="text-gray-600">
                        123 Insurance Ave, Suite 400<br />
                        Toronto, ON M5V 2G8<br />
                        Canada
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-insurance-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">
                        General: 1-800-555-5555<br />
                        Claims: 1-800-555-6666
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-insurance-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">
                        General Inquiries: info@insurewise.ca<br />
                        Customer Support: support@insurewise.ca<br />
                        Claims: claims@insurewise.ca
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-insurance-primary mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-800">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 8:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section (Placeholder) */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">Visit Our Office</h2>
            <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Map Placeholder - Would embed Google Maps here</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
