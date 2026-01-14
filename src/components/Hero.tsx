import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import { ArrowRight } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BackgroundBeams } from '@/components/BackgroundBeams';

const Hero = () => {
  const handleScrollToContact = () => {
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative min-h-[65vh] md:h-[80vh] bg-background overflow-hidden">
      <BackgroundBeams className="absolute inset-0 z-0" />

      <div className="relative z-10 h-full flex items-center justify-center pt-[12vh] md:pt-0">
        <div className="flex flex-col items-center gap-6 lg:gap-16">
          {/* Content */}
          <div className="text-center">
            <h1 className="text-[1.5rem] leading-tight sm:text-2xl md:text-4xl lg:text-5xl font-bold text-foreground md:leading-tight mb-6 sm:mb-4 px-4 sm:px-0 max-w-[340px] sm:max-w-none mx-auto">
              {/* Mobile title */}
              <span className="md:hidden">
                Acelero el crecimiento<br />
                de tu empresa con<br />
                estrategia, sistemas<br />
                y ejecución orientados<br />
                a resultados reales
              </span>
              {/* Desktop title */}
              <span className="hidden md:inline">
                Acelero el crecimiento de tu empresa<br />
                {' '}con estrategia, sistemas y ejecución<br />
                {' '}orientados a resultados reales
              </span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-8 sm:mb-8 text-center px-4 sm:px-0 max-w-2xl mx-auto">
              Fundador de <a href="https://dtgrowthpartners.com" target="_blank" rel="noopener noreferrer" className="shimmer-text">DT Growth Partners</a>.<br />Ayudamos a empresas que ya venden a multiplicar resultados con pauta digital, desarrollo, automatización e IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 items-center justify-center px-4 sm:px-0">
              <RippleButton
                size="default"
                onClick={() => window.open('https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0', '_blank')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-base px-8 py-3 sm:px-8 sm:py-3 w-full max-w-[320px] sm:w-auto sm:max-w-none"
              >
                ¡Hablemos Hoy!
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
