
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import AutoInsurance from "./pages/AutoInsurance";
import HomeInsurance from "./pages/HomeInsurance";
import BusinessInsurance from "./pages/BusinessInsurance";
import LifeInsurance from "./pages/LifeInsurance";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/auto-insurance" element={<AutoInsurance />} />
          <Route path="/home-insurance" element={<HomeInsurance />} />
          <Route path="/business-insurance" element={<BusinessInsurance />} />
          <Route path="/life-insurance" element={<LifeInsurance />} />
          <Route path="/about" element={<About />} />
          
          {/* New Routes - these will redirect to NotFound until implemented */}
          <Route path="/motorcycle-insurance" element={<NotFound />} />
          <Route path="/classic-car-insurance" element={<NotFound />} />
          <Route path="/high-risk-insurance" element={<NotFound />} />
          <Route path="/condo-insurance" element={<NotFound />} />
          <Route path="/tenant-insurance" element={<NotFound />} />
          <Route path="/landlord-insurance" element={<NotFound />} />
          <Route path="/travel-insurance" element={<NotFound />} />
          <Route path="/health-insurance" element={<NotFound />} />
          <Route path="/blog" element={<NotFound />} />
          <Route path="/reviews" element={<NotFound />} />
          <Route path="/careers" element={<NotFound />} />
          <Route path="/login" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="/claims" element={<NotFound />} />
          <Route path="/payment" element={<NotFound />} />
          <Route path="/insurance-guides" element={<NotFound />} />
          <Route path="/insurance-calculator" element={<NotFound />} />
          <Route path="/privacy" element={<NotFound />} />
          <Route path="/terms" element={<NotFound />} />
          <Route path="/accessibility" element={<NotFound />} />
          <Route path="/news" element={<NotFound />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
