import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-background">
      <Header />
      <main className="min-h-screen">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;