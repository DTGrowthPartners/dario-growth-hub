import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { BackgroundBeams } from '@/components/BackgroundBeams';
import heroImage from '@/assets/dario-about.jpg';

const Hero = () => {
  const handleScrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-background overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6 lg:gap-16">
          {/* Content */}
          <div className="text-center">
            <h1 className="text-[1.75rem] leading-tight sm:text-3xl md:text-5xl lg:text-6xl font-bold text-foreground sm:leading-tight mb-8 sm:mb-4 px-6 sm:px-0">
              Escalo negocios<br />con estrategia, sistemas y ejecución.
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 sm:mb-8 text-center px-4 sm:px-0">
              Fundador de <a href="https://dtgrowthpartners.com" target="_blank" rel="noopener noreferrer" className="underline-hover">DT Growth Partners</a>.<br />Ayudamos a empresas que ya venden a multiplicar resultados con pauta digital, desarrollo, automatización e IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 items-center justify-center px-4 sm:px-0">
              <RippleButton
                size="default"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=14158702322&text=Hola!%20Quiero%20agendar%20una%20consultor%C3%ADa.&type=phone_number&app_absent=0', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-base px-8 py-3 sm:px-8 sm:py-3 w-full max-w-[320px] sm:w-auto sm:max-w-none"
              >
                ¡Hablemos Hoy!
                <FontAwesomeIcon icon={faWhatsapp} className="ml-2 h-5 w-5 sm:h-7 sm:w-7" />
                <RippleButtonRipples />
              </RippleButton>
              <RippleButton
                variant="outline"
                size="default"
                onClick={() => window.open('https://dtgrowthpartners.com/', '_blank')}
                className="border-foreground/20 hover:bg-foreground/5 text-base sm:text-base px-8 py-3 sm:px-8 sm:py-3 w-full max-w-[320px] sm:w-auto sm:max-w-none"
              >
                Conoce DT Growth partners
                <ArrowRight className="ml-2 h-4 w-4" />
                <RippleButtonRipples />
              </RippleButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
