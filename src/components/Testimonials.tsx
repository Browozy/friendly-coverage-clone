
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Toronto, ON',
      quote: 'InsureWise saved me over $500 on my auto insurance. The process was incredibly easy and their customer service was excellent!',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Vancouver, BC',
      quote: 'After comparing multiple quotes through InsureWise, I found much better home insurance coverage for less than I was paying before.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Rodriguez',
      location: 'Calgary, AB',
      quote: 'Their broker took the time to understand my business needs and found the perfect insurance policy. Highly recommended!',
      rating: 5
    }
  ];

  // Star rating component
  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg 
            key={i} 
            className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            fill="currentColor" 
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 bg-insurance-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what customers have to say about their experience with InsureWise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
