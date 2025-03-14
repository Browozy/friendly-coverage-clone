
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const InsuranceCategories = () => {
  const categories = [
    {
      id: 'auto',
      title: 'Auto Insurance',
      description: 'Protect yourself on the road with competitive auto insurance policies.',
      icon: '🚗',
      link: '/auto-insurance'
    },
    {
      id: 'home',
      title: 'Home Insurance',
      description: 'Ensure your most valuable asset is protected with comprehensive home insurance.',
      icon: '🏠',
      link: '/home-insurance'
    },
    {
      id: 'business',
      title: 'Business Insurance',
      description: 'Specialized coverage to protect your business from potential risks and liabilities.',
      icon: '💼',
      link: '/business-insurance'
    },
    {
      id: 'life',
      title: 'Life Insurance',
      description: "Secure your family's financial future with the right life insurance policy.",
      icon: '❤️',
      link: '/life-insurance'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Insurance Solutions</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(category => (
            <Link to={category.link} key={category.id}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{category.icon}</div>
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
