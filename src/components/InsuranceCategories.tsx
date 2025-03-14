
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Car, Home, Briefcase, Heart } from 'lucide-react';

const InsuranceCategories = () => {
  const categories = [
    {
      id: 'auto',
      title: 'Auto Insurance',
      description: 'Protect yourself on the road with competitive auto insurance policies.',
      icon: <Car className="h-12 w-12 text-white" />,
      link: '/auto-insurance',
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600'
    },
    {
      id: 'home',
      title: 'Home Insurance',
      description: 'Ensure your most valuable asset is protected with comprehensive home insurance.',
      icon: <Home className="h-12 w-12 text-white" />,
      link: '/home-insurance',
      bgColor: 'bg-gradient-to-br from-green-500 to-green-600'
    },
    {
      id: 'business',
      title: 'Business Insurance',
      description: 'Specialized coverage to protect your business from potential risks and liabilities.',
      icon: <Briefcase className="h-12 w-12 text-white" />,
      link: '/business-insurance',
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600'
    },
    {
      id: 'life',
      title: 'Life Insurance',
      description: "Secure your family\'s financial future with the right life insurance policy.",
      icon: <Heart className="h-12 w-12 text-white" />,
      link: '/life-insurance',
      bgColor: 'bg-gradient-to-br from-red-500 to-red-600'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Insurance Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link to={category.link} key={category.id} className="transform transition duration-300 hover:scale-105">
              <Card className="h-full overflow-hidden border-0 shadow-lg">
                <div className={`${category.bgColor} p-6 flex justify-center items-center rounded-t-lg`}>
                  <div className="rounded-full bg-white/20 p-4">
                    {category.icon}
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <h3 className="text-xl font-semibold mb-2 text-insurance-primary">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceCategories;
