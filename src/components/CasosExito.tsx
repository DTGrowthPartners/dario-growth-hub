import { useState } from 'react';
import { ShoppingCart, Users, TrendingUp, ChevronDown, ChevronUp } from 'lucide-react';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

interface CaseStudyDetails {
  industria: string;
  queHicimos: string;
  metricaPrincipal: string;
  metricaSecundaria: string;
}

interface CaseStudy {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
  roi: string;
  tags: string[];
  details: CaseStudyDetails;
}

const caseStudies: CaseStudy[] = [
  {
    icon: <ShoppingCart className="w-5 h-5 text-primary" />,
    category: 'Tienda física',
    title: 'Tienda de moda',
    description: 'Optimización de campañas Meta Ads con creative testing estructurado',
    metric: '$250K',
    metricLabel: 'en ventas generadas',
    roi: 'ROI 4.2x',
    tags: ['Meta Ads', 'E-commerce', 'Performance'],
    details: {
      industria: 'Tienda física',
      queHicimos: 'Optimización de campañas Meta Ads con creative testing estructurado',
      metricaPrincipal: '$250K USD en ventas',
      metricaSecundaria: 'ROI 4.2x',
    },
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    category: 'Salud',
    title: 'Clínica de Estética',
    description: 'Campañas de leads para WhatsApp con segmentación por temperatura de audiencia',
    metric: '350M',
    metricLabel: 'en ventas generadas',
    roi: 'ROAS 5.2x',
    tags: ['Meta Ads', 'WhatsApp', 'Leads'],
    details: {
      industria: 'Salud',
      queHicimos: 'Campañas de leads para WhatsApp con segmentación por temperatura de audiencia',
      metricaPrincipal: '350M COP en ventas generadas',
      metricaSecundaria: 'ROAS 5.2x',
    },
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    category: 'Industria B2B',
    title: 'Desarrollo Web a la Medida',
    description: 'Sitio web creado para una empresa de alquiler de contenedores y baños portátiles. Diseño enfocado en SEO, automatización de cotizaciones y captación de leads B2B listos para contacto.',
    metric: '+320%',
    metricLabel: 'más cotizaciones',
    roi: '3.1x conversión',
    tags: ['Web Development', 'B2B', 'SEO'],
    details: {
      industria: 'Industria B2B',
      queHicimos: 'Sitio web creado para una empresa de alquiler de contenedores y baños portátiles. Diseño enfocado en SEO, automatización de cotizaciones y captación de leads B2B listos para contacto.',
      metricaPrincipal: '+320% más cotizaciones',
      metricaSecundaria: '3.1x conversión',
    },
  },
];

const CasosExito = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedCard(prev => prev === index ? null : index);
  };

  return (
    <section id="casos" className="relative overflow-hidden bg-[#0A0A0A] py-[5vh] md:py-24">
      {/* Stars Background */}
      <StarsBackground className="z-0" />
      <ShootingStars
        starColor="#3B82F6"
        trailColor="#60A5FA"
        minSpeed={25}
        maxSpeed={50}
        minDelay={300}
        maxDelay={800}
        className="z-0"
      />
      <ShootingStars
        starColor="#60A5FA"
        trailColor="#3B82F6"
        minSpeed={20}
        maxSpeed={45}
        minDelay={400}
        maxDelay={900}
        className="z-0"
      />
      <ShootingStars
        starColor="#2563EB"
        trailColor="#60A5FA"
        minSpeed={30}
        maxSpeed={55}
        minDelay={500}
        maxDelay={1000}
        className="z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-16 space-y-2 md:space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Casos de Éxito
          </span>
          <h2 className="text-xl lg:text-5xl font-bold text-foreground">
            Empresas que escalaron con{' '}
            <span className="text-primary">datos</span>
          </h2>
          <p className="text-sm lg:text-xl text-muted-foreground max-w-xs lg:max-w-2xl mx-auto">
            Casos reales de crecimiento con nuestro enfoque de performance, desarrollo y automatización.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="rounded-lg border border-border/50 bg-[#121212]/80 backdrop-blur-sm shadow-lg hover:border-primary/30 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    {study.icon}
                  </div>
                  <span className="text-xs text-muted-foreground">{study.category}</span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{study.title}</h3>
                  <p className="text-sm text-muted-foreground">{study.description}</p>
                </div>

                {/* Metrics */}
                <div className="space-y-2 pt-3 border-t border-border/50">
                  <div>
                    <div className="text-2xl font-bold text-primary">{study.metric}</div>
                    <div className="text-xs text-muted-foreground">{study.metricLabel}</div>
                  </div>
                  <div className="text-xs font-medium text-foreground">{study.roi}</div>
                </div>

                {/* Expand Button */}
                <button
                  onClick={() => toggleCard(index)}
                  className="flex items-center justify-between w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <span>Ver detalles completos</span>
                  {expandedCard === index ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                {/* Expanded Details */}
                {expandedCard === index && (
                  <div className="pt-3 border-t border-border/50 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Industria</p>
                      <p className="text-sm text-foreground">{study.details.industria}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Qué hicimos</p>
                      <p className="text-sm text-foreground">{study.details.queHicimos}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Métrica principal</p>
                      <p className="text-sm font-semibold text-primary">{study.details.metricaPrincipal}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Métrica secundaria</p>
                      <p className="text-sm font-semibold text-foreground">{study.details.metricaSecundaria}</p>
                    </div>
                  </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {study.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-secondary text-xs rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
