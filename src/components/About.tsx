import { useState, useEffect } from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import darioImg1 from '../assets/dario-about-desenfoque.png';
import darioImg2 from '../assets/DSC03678.jpg';

const images = [darioImg1, darioImg2];

const stats = [
  { value: '$250k', label: 'Gestionados en Ads', description: 'Inversión gestionada en campañas publicitarias.' },
  { value: '25+', label: 'Proyectos Completados', description: 'Proyectos exitosamente finalizados.' },
  { value: '10x', label: 'ROI Promedio', description: 'Retorno promedio sobre inversión.' },
  { value: '+$5M USD', label: 'Ventas generadas', description: 'Ventas totales generadas a través de estrategias de crecimiento.' },
];

const About = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center bg-[#0A0A0A] relative py-16 lg:py-0">
      {/* Image */}
      <div className="absolute top-0 right-0 bottom-0 w-[45%] hidden lg:block">
        <div className="relative h-full w-full">
          <div className="relative shadow-xl h-full overflow-hidden">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Dario Traslaviña ${index + 1}`}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[6000ms] ease-in-out ${
                  index === currentImage ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(0deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(180deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%)]"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Title - Mobile */}
          <div className="order-1 lg:hidden text-center">
            <p className="text-primary font-semibold text-base tracking-wider uppercase mb-3">
              Cómo te puedo ayudar
            </p>
          </div>
          {/* Image - Mobile */}
          <div className="order-2 lg:hidden relative">
            <img src={images[currentImage]} alt="Dario Traslaviña" className="w-full h-auto" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(0deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(180deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%)]"></div>
          </div>
          {/* Content - Mobile first */}
          <div className="order-3 lg:order-1 lg:flex-1">
            <p className="hidden lg:block text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              Cómo te puedo ayudar
            </p>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-6 lg:mb-6 leading-tight -mt-12 lg:mt-0 text-center lg:text-left">
              Operador de crecimiento, no solo consultor
            </h2>
            <div className="space-y-4 lg:space-y-4 text-muted-foreground text-base lg:text-base leading-relaxed">
              <p>
                Ayudo a empresas a escalar mediante sistemas de crecimiento basados en datos,<br /> paid media orientado a performance y ejecución estratégica enfocada en<br /> resultados reales.
              </p>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 lg:mt-8 mb-4">Cómo trabajo</h3>
              <ul className="space-y-2.5 lg:space-y-2">
                <li>• Diagnóstico basado en datos reales, no en supuestos.</li>
                <li>• Diseño de sistemas de crecimiento, no "hacks" ni experimentos sueltos.</li>
                <li>• Ejecución y optimización continua, con foco en métricas que importan.</li>
              </ul>
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mt-8 lg:mt-8 mb-4">Cómo te puedo ayudar en números</h3>
            </div>

            {/* Stats */}
            <Accordion type="single" collapsible className="mt-6 lg:mt-6 max-w-md">
              {stats.map((stat, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left py-3">
                    <div>
                      <p className="text-xl md:text-2xl lg:text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm lg:text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground pb-2">{stat.description}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* WhatsApp Button */}
            <div className="mt-8">
              <a
                href="https://api.whatsapp.com/send/?phone=573007189383&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
