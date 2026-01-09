import { ExternalLink, Users, Target, Zap, BarChart } from 'lucide-react';
import { HoleBackground } from '@/components/ui/hole-background';
import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import { HoverEffect } from '@/components/ui/card-hover-effect';

const featureItems = [
  {
    title: 'Estrategia de crecimiento',
    description: 'Diseñamos roadmaps claros y ejecutables alineados a los objetivos reales del negocio.',
    link: 'https://dtgrowthpartners.com',
  },
  {
    title: 'Paid Media de alto rendimiento',
    description: 'Gestionamos campañas con foco en ROI, eficiencia y aprendizaje continuo, no solo en volumen.',
    link: 'https://dtgrowthpartners.com',
  },
  {
    title: 'Growth Systems',
    description: 'Construimos sistemas y procesos que permiten escalar sin depender de tácticas aisladas.',
    link: 'https://dtgrowthpartners.com',
  },
  {
    title: 'Partnership estratégico',
    description: 'Trabajamos como una extensión del equipo de liderazgo, con responsabilidad real sobre resultados.',
    link: 'https://dtgrowthpartners.com',
  },
];

const DTGrowthPartners = () => {
  return (
    <section id="dt-growth" className="relative w-full min-h-screen flex items-center py-16 lg:py-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background Image Container */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none z-0">
        <img
          src="/src/assets/DT-GROWTH-LOGO-DYCI6Arf.png"
          alt="DT Growth Partners Background"
          className="max-w-[120%] lg:max-w-[60%] h-auto lg:h-auto opacity-5 rotate-90 lg:rotate-0 max-h-[85vh] lg:max-h-none object-contain"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-1 lg:order-1 bg-[#121212]/30 lg:bg-[#121212]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 lg:p-10 border border-border/50 shadow-xl">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3 sm:mb-4">
              La empresa
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              DT Growth Partners
            </h2>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 px-2 sm:px-0">
              <p>
                DT Growth Partners es una boutique de crecimiento creada para trabajar con empresas ambiciosas que necesitan algo más que ejecución táctica: necesitan dirección estratégica y sistemas que escalen.
              </p>
            </div>

            <RippleButton
              size="lg"
              onClick={() => window.open('https://dtgrowthpartners.com', '_blank')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base px-8"
            >
              Visitar DT Growth Partners
              <ExternalLink className="ml-2 h-4 w-4" />
              <RippleButtonRipples />
            </RippleButton>
          </div>

          {/* Features Grid */}
          <div className="order-2 lg:order-2">
            <HoverEffect items={featureItems} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DTGrowthPartners;
