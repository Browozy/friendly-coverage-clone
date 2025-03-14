
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import InsuranceCategories from '@/components/InsuranceCategories';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <InsuranceCategories />
        <Benefits />
        <Testimonials />
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
