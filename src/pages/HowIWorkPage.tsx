import Header from '@/components/Header';
import HowIWork from '@/components/HowIWork';
import Footer from '@/components/Footer';

const HowIWorkPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 lg:pt-20">
        <HowIWork />
      </main>
      <Footer />
    </div>
  );
};

export default HowIWorkPage;