import Header from '@/components/Header';
import DTGrowthPartners from '@/components/DTGrowthPartners';
import Footer from '@/components/Footer';

const DTGrowthPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <DTGrowthPartners />
      </main>
      <Footer />
    </div>
  );
};

export default DTGrowthPage;