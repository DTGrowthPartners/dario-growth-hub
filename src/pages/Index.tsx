import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TrustedBrands from '@/components/TrustedBrands';
import About from '@/components/About';
import Blog from '@/components/Blog';
import DTGrowthPartners from '@/components/DTGrowthPartners';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll to section if hash exists in URL
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <TrustedBrands />
        <About />
        <Blog />
        <DTGrowthPartners />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
