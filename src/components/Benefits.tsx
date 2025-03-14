
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      id: 1,
      title: 'Save Up to 30%',
      description: 'Compare quotes from multiple insurance providers to find the best rate.',
      icon: <Check className="h-8 w-8 text-white p-1.5 bg-insurance-success rounded-full" />
    },
    {
      id: 2,
      title: 'Trusted Advisors',
      description: 'Our licensed insurance brokers provide expert guidance tailored to your needs.',
      icon: <Check className="h-8 w-8 text-white p-1.5 bg-insurance-success rounded-full" />
    },
    {
      id: 3,
      title: 'Fast & Easy Process',
      description: 'Get quotes online or by phone in minutes, with simple and straightforward service.',
      icon: <Check className="h-8 w-8 text-white p-1.5 bg-insurance-success rounded-full" />
    },
    {
      id: 4,
      title: 'Personalized Service',
      description: 'Receive customized insurance solutions based on your specific requirements.',
      icon: <Check className="h-8 w-8 text-white p-1.5 bg-insurance-success rounded-full" />
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Why Choose InsureWise?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 15 years, we've been helping Canadians find the perfect insurance coverage at the best possible rates.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map(benefit => (
            <div key={benefit.id} className="flex flex-col items-start">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
