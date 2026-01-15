import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import DTGrowthPage from "./pages/DTGrowthPage";
import ContactPage from "./pages/ContactPage";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import MetaAds from "./pages/MetaAds";
import DesarrolloWeb from "./pages/DesarrolloWeb";
import SistemasAutomatizaciones from "./pages/SistemasAutomatizaciones";
import CaseStudyRetailLicores from "./pages/CaseStudyRetailLicores";
import CaseStudyEscalamientoTrimestral from "./pages/CaseStudyEscalamientoTrimestral";
import CaseStudyRestaurante from "./pages/CaseStudyRestaurante";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/dt-growth" element={<DTGrowthPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/ads" element={<MetaAds />} />
          <Route path="/web" element={<DesarrolloWeb />} />
          <Route path="/servicios/sistemas-automatizaciones" element={<SistemasAutomatizaciones />} />
          <Route path="/casos-exito/retail-bebidas" element={<CaseStudyRetailLicores />} />
          <Route path="/casos-exito/escalamiento-trimestral" element={<CaseStudyEscalamientoTrimestral />} />
          <Route path="/casos-exito/reconocimiento-local-restaurante" element={<CaseStudyRestaurante />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
