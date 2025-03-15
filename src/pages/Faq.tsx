
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { useState } from 'react';

// FAQ data
const faqData = [
  {
    category: "General Insurance Questions",
    questions: [
      {
        id: "gen1",
        question: "What is an insurance broker and how are they different from an insurance agent?",
        answer: "An insurance broker represents multiple insurance companies and works on behalf of the client to find the best coverage at the best rate. Unlike an insurance agent who typically works for a single insurance company, a broker provides unbiased advice and can compare options from many different insurers."
      },
      {
        id: "gen2",
        question: "Does WiseInsure charge a fee for your services?",
        answer: "No, we don't charge clients a fee for our services. We're compensated through commissions paid by the insurance companies when a policy is sold. This means you get our expert advice and assistance at no additional cost to you."
      },
      {
        id: "gen3",
        question: "How can I get a quote through WiseInsure?",
        answer: "You can get a quote by completing our online quote form, calling us directly at 1-800-555-5555, or visiting one of our offices in person. We'll collect some basic information and provide you with competitive quotes from multiple insurers."
      },
      {
        id: "gen4",
        question: "How long does it take to get insurance through WiseInsure?",
        answer: "In many cases, we can provide quotes and bind coverage on the same day. The exact timing depends on the type of insurance and your specific circumstances. Auto and home insurance can often be set up very quickly, while more complex business policies may take longer."
      }
    ]
  },
  {
    category: "Auto Insurance",
    questions: [
      {
        id: "auto1",
        question: "What factors affect my auto insurance premium?",
        answer: "Several factors impact your auto insurance rates, including your driving record, age, location, the type of vehicle you drive, annual mileage, coverage limits, deductible amount, and your insurance history. Some insurers also consider credit scores where legally permitted."
      },
      {
        id: "auto2",
        question: "How can I lower my auto insurance costs?",
        answer: "You can potentially lower your auto insurance costs by maintaining a clean driving record, bundling multiple policies, increasing your deductible, asking about discounts (good student, safe driver, anti-theft devices), paying your premium in full, and comparing quotes from multiple insurers through WiseInsure."
      },
      {
        id: "auto3",
        question: "Do I need additional coverage beyond the mandatory minimum?",
        answer: "While each province mandates minimum liability coverage, these minimums may not provide adequate protection in the event of a serious accident. We generally recommend higher liability limits and considering optional coverages like collision, comprehensive, and accident benefits to ensure proper protection."
      }
    ]
  },
  {
    category: "Home Insurance",
    questions: [
      {
        id: "home1",
        question: "Is home insurance legally required in Canada?",
        answer: "Home insurance is not legally mandated by the government, but most mortgage lenders require it as a condition of your loan. Even without a mortgage, home insurance is strongly recommended to protect what is likely your biggest investment from unexpected events like fire, theft, or liability claims."
      },
      {
        id: "home2",
        question: "What's the difference between replacement cost and actual cash value?",
        answer: "Replacement cost coverage pays to replace your damaged property with new items of similar kind and quality, without deduction for depreciation. Actual cash value coverage pays the depreciated value of the item at the time of loss. Replacement cost provides better coverage but typically comes with higher premiums."
      },
      {
        id: "home3",
        question: "Does home insurance cover water damage?",
        answer: "Basic home insurance typically covers some types of water damage, such as from burst pipes or overflow from appliances. However, damage from sewer backup, overland flooding, or ground water seepage usually requires additional endorsements. We can help you understand your risks and recommend appropriate water damage coverage."
      }
    ]
  },
  {
    category: "Business Insurance",
    questions: [
      {
        id: "biz1",
        question: "What types of business insurance should my small business have?",
        answer: "Most small businesses should consider commercial general liability insurance, property insurance, business interruption coverage, and professional liability insurance if applicable to your industry. Depending on your specific business, you might also need cyber liability, employment practices liability, or commercial auto insurance."
      },
      {
        id: "biz2",
        question: "How much does business insurance cost?",
        answer: "Business insurance costs vary widely based on your industry, revenue, number of employees, location, claims history, and the types and limits of coverage you choose. Small businesses might pay anywhere from $500 to several thousand dollars annually. We can provide customized quotes based on your specific business needs."
      }
    ]
  },
  {
    category: "Claims Process",
    questions: [
      {
        id: "claims1",
        question: "How do I file a claim through WiseInsure?",
        answer: "If you need to file a claim, you can either contact your insurance company directly using the information on your policy documents, or call our claims assistance line at 1-800-555-5555. We'll help guide you through the process and advocate on your behalf with the insurance company."
      },
      {
        id: "claims2",
        question: "Will filing a claim raise my insurance rates?",
        answer: "The impact of a claim on your rates depends on many factors, including the type of claim, your claims history, and the specific insurance company's policies. Some claims, particularly those resulting from events beyond your control, may have minimal impact on your rates. We're happy to discuss the potential implications before you file a claim."
      }
    ]
  }
];

const Faq = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  
  // Filter FAQs based on search query
  const getFilteredFaqs = () => {
    if (!searchQuery) return faqData;
    
    return faqData.map(category => {
      const filteredQuestions = category.questions.filter(q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      return {
        ...category,
        questions: filteredQuestions
      };
    }).filter(category => category.questions.length > 0);
  };
  
  const filteredFaqs = getFilteredFaqs();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-insurance-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about insurance coverage, policies, and working with WiseInsure.
            </p>
          </div>
        </section>
        
        {/* Search Section */}
        <section className="py-8 bg-white border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="text"
                placeholder="Search frequently asked questions..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Accordion Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category, index) => (
                  <div key={category.category} className="mb-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">{category.category}</h2>
                    <Accordion
                      type="single" 
                      collapsible
                      className="bg-white rounded-lg shadow-sm"
                      value={expandedCategory === category.category ? category.questions[0].id : undefined}
                      onValueChange={(value) => {
                        if (value) {
                          setExpandedCategory(category.category);
                        } else {
                          setExpandedCategory(null);
                        }
                      }}
                    >
                      {category.questions.map(item => (
                        <AccordionItem key={item.id} value={item.id} className="border-b last:border-0">
                          <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-insurance-primary">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 text-gray-600">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <h3 className="text-xl font-semibold mb-2">No matching questions found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search or browse all categories.</p>
                  <Button 
                    onClick={() => setSearchQuery('')}
                    variant="outline"
                  >
                    Clear Search
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Still Have Questions Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Still Have Questions?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Our team of insurance experts is here to help. Contact us for personalized assistance with any insurance questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild className="bg-insurance-primary hover:bg-insurance-primary/90">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:1-800-555-5555">
                  Call 1-800-555-5555
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Faq;
