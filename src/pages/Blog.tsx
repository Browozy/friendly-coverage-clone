
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "10 Ways to Lower Your Auto Insurance Premium",
    excerpt: "Learn effective strategies to reduce your car insurance costs without sacrificing coverage quality.",
    category: "Auto Insurance",
    author: "Sarah Johnson",
    date: "June 15, 2023",
    imageUrl: "/placeholder.svg",
    slug: "lower-auto-insurance-premium"
  },
  {
    id: 2,
    title: "Home Insurance Myths Debunked",
    excerpt: "We clear up common misconceptions about home insurance that could be costing you money.",
    category: "Home Insurance",
    author: "Michael Chen",
    date: "May 28, 2023",
    imageUrl: "/placeholder.svg",
    slug: "home-insurance-myths"
  },
  {
    id: 3,
    title: "Understanding Life Insurance: Term vs. Whole Life",
    excerpt: "A comprehensive comparison of term and whole life insurance to help you make the right choice.",
    category: "Life Insurance",
    author: "Jessica Williams",
    date: "April 12, 2023",
    imageUrl: "/placeholder.svg",
    slug: "term-vs-whole-life-insurance"
  },
  {
    id: 4,
    title: "Business Insurance: Protecting Your Small Business",
    excerpt: "Essential coverage types every small business owner should consider to protect their investment.",
    category: "Business Insurance",
    author: "David Thompson",
    date: "March 5, 2023",
    imageUrl: "/placeholder.svg",
    slug: "protecting-small-business"
  },
  {
    id: 5,
    title: "First-Time Homebuyer's Guide to Insurance",
    excerpt: "Everything you need to know about insuring your first home and avoiding common pitfalls.",
    category: "Home Insurance",
    author: "Emma Rodriguez",
    date: "February 19, 2023",
    imageUrl: "/placeholder.svg",
    slug: "first-time-homebuyer-insurance"
  },
  {
    id: 6,
    title: "How Does Your Credit Score Affect Insurance Rates?",
    excerpt: "The surprising connection between your credit history and what you pay for various insurance policies.",
    category: "Insurance Basics",
    author: "James Wilson",
    date: "January 30, 2023",
    imageUrl: "/placeholder.svg",
    slug: "credit-score-insurance-rates"
  },
];

const categories = [
  "All Categories",
  "Auto Insurance",
  "Home Insurance",
  "Life Insurance",
  "Business Insurance",
  "Insurance Basics",
  "Insurance Claims",
  "Industry News"
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  
  // Filter posts based on search query and selected category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All Categories' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-insurance-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Insurance Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert advice, industry insights, and helpful tips to help you make informed insurance decisions.
            </p>
          </div>
        </section>
        
        {/* Search and Filter */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">Filter by:</span>
                <select
                  className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-insurance-primary"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Grid */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <Card key={post.id} className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="py-6 flex-grow">
                      <div className="mb-3">
                        <span className="inline-block bg-insurance-primary/10 text-insurance-primary px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold mb-3 hover:text-insurance-primary">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    </CardContent>
                    <CardFooter className="pt-0 pb-6 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </div>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold mb-2">No posts found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria.</p>
                <Button 
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Categories');
                  }}
                  variant="outline"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Newsletter Subscription */}
        <section className="py-16 bg-insurance-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Subscribe to Our Newsletter</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest insurance tips, industry news, and exclusive offers delivered straight to your inbox.
            </p>
            <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow"
              />
              <Button className="bg-insurance-primary hover:bg-insurance-primary/90 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to Find the Right Insurance?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Compare quotes from our network of 50+ insurance providers and find the perfect coverage.
            </p>
            <Button asChild size="lg" className="bg-insurance-primary hover:bg-insurance-primary/90">
              <Link to="/contact">
                Get a Free Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
