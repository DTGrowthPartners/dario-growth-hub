import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Target, BarChart3, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const pricingPlans = [
  {
    name: "Plan Starter",
    price: "$2.000.000 COP/mes",
    period: "+ 10% de la inversión en Ads",
    description: "Ideal para negocios que están comenzando con publicidad digital.",
    features: [
      "1 reunión mensual 1:1.",
      "3 reuniones virtuales.",
      "Configuración de Portafolio Comercial y Pruebas A/B en anuncios.",
      "Análisis y optimización de anuncios.",
      "Estrategia de segmentación personalizada.",
      "Reporte mensual de resultados."
    ],
    popular: true
  },
  {
    name: "Plan Growth",
    price: "$3.500.000 COP/mes",
    period: "+ 10% de la inversión en Ads",
    description: "Para negocios en crecimiento que buscan resultados consistentes.",
    features: [
      "Todo lo incluido en el plan Starter.",
      "1 reunión quincenal.",
      "Creación de contenido publicitario optimizado.",
      "Optimización de embudos de conversión.",
      "Análisis de la competencia."
    ],
    popular: true,
    tag: "Más Popular"
  },
  {
    name: "Plan Scale",
    price: "$5.000.000 COP/mes",
    period: "+ 10% de la inversión en Ads",
    description: "Para empresas que buscan escalar agresivamente.",
    features: [
      "Todo lo incluido en el Plan Growth.",
      "1 reunión semanal.",
      "Administración total de campañas.",
      "Creación de contenido multimedia profesional.",
      "Implementación de estrategias avanzadas de remarketing.",
      "Consultoría estratégica 1:1."
    ],
    popular: true,
    tag: "Más completo"
  }
];

const testimonials = [
  {
    name: "Johana Zapateiro",
    subtitle: "Cliente · Hace 5 meses",
    rating: 5,
    shortReview: "Estoy muy feliz con los resultados. Desde que implementamos las estrategias de marketing y pauta, las ventas han crecido notablemente. Invertir en esta área ha valido totalmente la pena...",
    fullReview: "Estoy muy feliz con los resultados. Desde que implementamos las estrategias de marketing y pauta, las ventas han crecido notablemente. Invertir en esta área ha valido totalmente la pena. Gracias ser productivos, por su estructura, dirección y enfoque claro, hoy veo mi empresa más organizada y en crecimiento.",
  },
  {
    name: "ACB Fit",
    subtitle: "3 opiniones · Hace 5 meses",
    rating: 5,
    shortReview: "Recomendado con total confianza, profesional, líder, creativo, realmente trasciende su rol 👌🏼 La calidad de su trabajo es excepcional, cuidando cada detalle como si el proyecto fuera suyo...",
    fullReview: "Recomendado con total confianza, profesional, líder, creativo, realmente trasciende su rol 👌🏼 La calidad de su trabajo es excepcional, cuidando cada detalle como si el proyecto fuera suyo. Siempre va más allá de lo que se le pide, aporta ideas valiosas, guía con criterio y está constantemente dispuesto a apoyar en cada paso dado. Tiene un ojo estratégico, y siempre va un paso adelante ✅ Pero lo que más destaco es su inteligencia y visión, que lo convierten en una pieza clave para cualquier empresa que valore el crecimiento, la innovación y el compromiso real.",
  },
  {
    name: "Tradición Caribe",
    subtitle: "Cliente · Hace 4 meses",
    rating: 5,
    shortReview: "DT nos ayudó a estructurar nuestra estrategia publicitaria en Meta. Gracias a su experiencia, hemos podido atraer a más clientes interesados en nuestros productos...",
    fullReview: "DT nos ayudó a estructurar nuestra estrategia publicitaria en Meta. Gracias a su experiencia, hemos podido atraer a más clientes interesados en nuestros productos y aumentar nuestras ventas de manera efectiva.",
  },
  {
    name: "Tennis Cartagena",
    subtitle: "1 opinión · Editado · Hace 5 meses",
    rating: 5,
    shortReview: "Excelente trabajo, siempre dispuesto a ayudar y encontrar soluciones innovadoras. Recomendado 100% — me ha ayudado a mejorar mi presencia en línea...",
    fullReview: "Excelente trabajo, siempre dispuesto a ayudar y encontrar soluciones innovadoras. Recomendado 100% — me ha ayudado a mejorar mi presencia en línea y a alcanzar mis objetivos de marketing digital.",
  },
  {
    name: "Carlos Tatis",
    subtitle: "Cliente · Hace 4 meses",
    rating: 5,
    shortReview: "Realmente brindan mucho conocimiento y facilitan todas las herramientas para que mi empresa obtuviera los buenos resultados.",
    fullReview: "Realmente brindan mucho conocimiento y facilitan todas las herramientas para que mi empresa obtuviera los buenos resultados.",
  },
];

const MetaAds = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const plansScrollRef = useRef<HTMLDivElement>(null);

  // Carrusel infinito para planes - triplicamos para scroll seamless
  const infinitePlans = [...pricingPlans, ...pricingPlans, ...pricingPlans];

  useEffect(() => {
    const container = plansScrollRef.current;
    if (!container || window.innerWidth >= 768) return;

    // Posicionar en el set del medio al inicio
    const cardWidth = container.scrollWidth / 3;
    container.scrollLeft = cardWidth;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.scrollWidth / 3;

      // Si llegamos al final, saltar al medio
      if (scrollLeft >= cardWidth * 2) {
        container.scrollLeft = cardWidth + (scrollLeft - cardWidth * 2);
      }
      // Si llegamos al inicio, saltar al medio
      else if (scrollLeft <= 0) {
        container.scrollLeft = cardWidth + scrollLeft;
      }
    };

    container.addEventListener('scrollend', handleScroll);
    return () => container.removeEventListener('scrollend', handleScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      scrollContainerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }

    const scrollToMiddle = () => {
      const middlePosition = document.documentElement.scrollHeight / 2;
      window.scrollTo({ top: middlePosition, behavior: 'instant' });

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, 300);
    };

    if (document.readyState === 'complete') {
      scrollToMiddle();
    } else {
      window.addEventListener('load', scrollToMiddle);
      return () => window.removeEventListener('load', scrollToMiddle);
    }
  }, []);

  const benefits = [
    {
      icon: Target,
      title: "Targeting Científico",
      description: "Segmentación basada en datos reales, no en suposiciones.",
    },
    {
      icon: BarChart3,
      title: "Optimización Continua",
      description: "Testing estructurado y mejoras incrementales constantes.",
    },
    {
      icon: TrendingUp,
      title: "Escalamiento Inteligente",
      description: "Crecimiento sostenible manteniendo ROI positivo.",
    },
  ];

  const process = [
    {
      phase: "Consultoría",
      title: "Brindamos consultoría y asesoramiento",
      description: "En marketing digital, guiando a empresas y emprendedores en la implementación de estrategias efectivas para escalar sus negocios en el mundo digital.",
    },
    {
      phase: "Gestión",
      title: "Ofrecemos",
      description: "Gestión de publicidad en redes sociales, utilizando plataformas como Facebook, Instagram, TikTok, YouTube y WhatsApp para maximizar la visibilidad de tu negocio y aumentar las conversiones con estrategias de segmentación efectivas.",
    },
    {
      phase: "Segmentación",
      title: "Implementamos",
      description: "Estrategias de segmentación avanzadas, analizando a fondo a tu audiencia objetivo para dirigir anuncios personalizados que aumenten la tasa de conversión y mejoren el retorno de inversión.",
    },
    {
      phase: "Contenido",
      title: "Creamos",
      description: "Contenido publicitario atractivo y persuasivo, desde imágenes y videos profesionales hasta textos optimizados, diseñados para captar la atención del público y generar interacción en tus campañas.",
    },
    {
      phase: "Seguimiento",
      title: "Monitoreamos",
      description: "El rendimiento de las campañas con análisis detallados y reportes periódicos, ajustando estrategias en tiempo real para maximizar resultados y asegurar el crecimiento sostenible.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-16">
        {/* Hero */}
        <section className="py-20 sm:py-24 lg:py-32 relative overflow-hidden">
          {/* Background Image with Blur */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/images/3280018.jpg)',
              filter: 'blur(3px)',
              transform: 'scale(1.1)',
              backgroundPosition: 'center 40%'
            }}
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-[#0A0A0A]" />
          {/* Bottom Gradient */}
          <div
            className="absolute bottom-0 left-0 right-0 h-48 sm:h-40"
            style={{
              background: 'linear-gradient(to bottom, transparent, #0A0A0A)'
            }}
          />

          <div className="section-container relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <div className="inline-block">
                <span className="px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-semibold uppercase tracking-wider">
                  Ads
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text block">Transforma</span>
                <span className="text-2xl lg:text-4xl block mt-2">tus campañas publicitarias</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-normal">
                En DT Growth Partners ofrecemos planes personalizados para adaptarnos a las necesidades de tu negocio. Descubre el mejor plan que se ajuste a tus objetivos.
              </p>

              <div className="flex flex-col gap-4 justify-center items-center pt-6 w-full max-w-md mx-auto">
                <Button
                  size="lg"
                  className="btn-primary group text-lg px-8 py-4 w-full"
                  onClick={() => window.open('https://wa.me/573007189383?text=Hola%20Dairo,%20quiero%20tener%20campañas%20exitosas', '_blank')}
                >
                  Agendar una consulta
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="group text-lg px-8 py-4 border-2 w-full bg-background hover:bg-background hover:text-[#027FFF] hover:border-[#027FFF] hover:shadow-[0_0_15px_rgba(2,127,255,0.4)] transition-all duration-300"
                  style={{ borderColor: '#027FFF', color: '#027FFF' }}
                  onClick={() => document.getElementById('pricing-plans')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Ver Planes
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 sm:py-20 relative" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="section-container">
            <h2 className="text-3xl lg:text-4xl font-bold text-center mb-16 -mt-[2vh] sm:mt-0">
              ¿Por qué nuestro enfoque es <span className="gradient-text">diferente</span>?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card
                    key={benefit.title}
                    className="bg-background/50 border-border/50 backdrop-blur-sm animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
          </section>

        {/* Pricing Plans */}
        <section id="pricing-plans" className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4 -mt-[3vh] sm:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Elige el <span className="gradient-text">plan</span> que mejor se adapte a tu negocio
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ofrecemos planes personalizados para adaptarnos a las necesidades de tu negocio, ya sea que estés comenzando o buscando un crecimiento rápido.
              </p>
            </div>

            {/* Desktop: grid normal */}
            <div className="hidden md:grid md:grid-cols-3 md:gap-8 max-w-5xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <Card
                  key={plan.name}
                  className={`card-hover bg-card border-border/50 relative hover:border-t-4 hover:border-t-primary transition-all duration-300 animate-float ${
                    plan.popular ? 'ring-2 ring-primary shadow-lg scale-105' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {plan.popular && plan.tag && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        {plan.tag}
                      </span>
                    </div>
                  )}
                  <CardContent className="p-8 pt-10 space-y-6 flex flex-col h-full">
                    <div className="text-center space-y-2">
                      <h3 className="text-2xl font-bold">{plan.name}</h3>
                      <p className="text-sm text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center space-y-1 pt-4 border-t border-border/50">
                      <div className="text-4xl font-bold text-primary">{plan.price}</div>
                      <div className="text-base text-muted-foreground">{plan.period}</div>
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                      size="lg"
                      onClick={() => {
                        const messages = {
                          'Plan Starter': 'Hola Dairo, estoy interesado en el Plan Starter para comenzar con publicidad digital',
                          'Plan Growth': 'Hola Dairo, quiero el Plan Growth para hacer crecer mi negocio de forma consistente',
                          'Plan Scale': 'Hola Dairo, necesito el Plan Scale para escalar agresivamente mi negocio'
                        };
                        const message = encodeURIComponent(messages[plan.name as keyof typeof messages]);
                        window.open(`https://wa.me/573007189383?text=${message}`, '_blank');
                      }}
                    >
                      Comenzar Ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Mobile: carrusel infinito */}
            <div
              ref={plansScrollRef}
              className="flex md:hidden overflow-x-auto gap-4 pb-4 pt-4 px-6 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {infinitePlans.map((plan, index) => (
                <Card
                  key={`${plan.name}-${index}`}
                  className={`card-hover bg-card border-border/50 relative transition-all duration-300 flex-shrink-0 w-[calc(100vw-3.5rem)] max-w-[340px] snap-center ${
                    plan.popular ? 'ring-2 ring-primary shadow-lg' : ''
                  }`}
                >
                  {plan.popular && plan.tag && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                        {plan.tag}
                      </span>
                    </div>
                  )}
                  <CardContent className="p-5 pt-8 space-y-4 flex flex-col h-full">
                    <div className="text-center space-y-1">
                      <h3 className="text-xl font-bold">{plan.name}</h3>
                      <p className="text-xs text-muted-foreground">{plan.description}</p>
                    </div>

                    <ul className="space-y-2 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-4 h-4 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          </div>
                          <span className="text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center space-y-1 pt-3 border-t border-border/50">
                      <div className="text-2xl font-bold text-primary">{plan.price}</div>
                      <div className="text-xs text-muted-foreground">{plan.period}</div>
                    </div>

                    <Button
                      className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'}`}
                      size="default"
                      onClick={() => {
                        const messages = {
                          'Plan Starter': 'Hola Dairo, estoy interesado en el Plan Starter para comenzar con publicidad digital',
                          'Plan Growth': 'Hola Dairo, quiero el Plan Growth para hacer crecer mi negocio de forma consistente',
                          'Plan Scale': 'Hola Dairo, necesito el Plan Scale para escalar agresivamente mi negocio'
                        };
                        const message = encodeURIComponent(messages[plan.name as keyof typeof messages]);
                        window.open(`https://wa.me/573007189383?text=${message}`, '_blank');
                      }}
                    >
                      Comenzar Ahora
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 sm:py-20 relative">
          <div className="section-container">
            <div className="text-center mb-16 space-y-4 -mt-[3vh] sm:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Nos <span className="gradient-text">especializamos</span> en
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Estrategias innovadoras para potenciar el crecimiento de tu negocio a través de publicidad digital, optimización de campañas y análisis de datos.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {process.map((step, index) => (
                <Card
                  key={step.phase}
                  className="card-hover bg-card border-border/50 animate-fade-in relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-300">{`0${index + 1}`}</span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs text-primary font-medium uppercase tracking-wider">
                        {step.phase}
                      </div>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-20 relative" style={{ backgroundColor: '#0A0A0A' }}>
          <div className="section-container">
            <div className="text-center mb-16 -mt-[2vh] sm:mt-0">
              <h2 className="text-xl lg:text-4xl font-bold mb-4">
                Resultados que <span className="gradient-text">hablan por sí solos</span>
              </h2>
              <p className="text-base lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                Impulsa tu negocio con estrategias publicitarias en Facebook, Instagram, WhatsApp, TikTok y YouTube, atrayendo más clientes y aumentando tus ventas con campañas altamente optimizadas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {[
                { metric: "COP$7,000MIL", label: "Millones en ventas generadas para nuestros clientes." },
                { metric: "40K", label: "Órdenes generadas a través de nuestras campañas." },
                { metric: "+1K", label: "Campañas publicitarias exitosas." },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className={`text-center space-y-3 animate-fade-in ${index === 1 ? 'md:ml-16' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl lg:text-5xl font-bold text-primary">{stat.metric}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Cases */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 -mt-[2vh] sm:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Casos de <span className="gradient-text">Éxito</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Historias reales de empresas que transformaron sus resultados con nuestras estrategias de Meta Ads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Caso 1: Retail de Bebidas */}
              <Card
                className="card-hover bg-card border-border/50 cursor-pointer group relative overflow-hidden"
                onClick={() => window.location.href = '/casos-exito/retail-bebidas'}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                        Retail de Bebidas Online
                      </div>
                      <h3 className="text-xl font-bold">De ROAS 1.3x a resultados escalables</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="rounded-lg p-4 space-y-2" style={{ backgroundColor: '#0A0A0A' }}>
                    <div className="text-sm text-muted-foreground">El Desafío</div>
                    <p className="text-sm">
                      Cliente con meses de inversión en Meta Ads sin resultados. Campañas enfocadas en alcance sin conversiones configuradas.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Período</div>
                      <div className="text-lg font-bold text-primary">60 días</div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Inversión</div>
                      <div className="text-lg font-bold text-primary">$1.2M</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">ROAS inicial</span>
                      <span className="font-semibold text-red-400">1.3x</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Caso 2: Escalamiento Trimestral */}
              <Card
                className="card-hover bg-card border-border/50 cursor-pointer group relative overflow-hidden"
                onClick={() => window.location.href = '/casos-exito/escalamiento-trimestral'}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                        E-commerce Retail
                      </div>
                      <h3 className="text-xl font-bold">+92% en ventas escalando trimestralmente</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="rounded-lg p-4 space-y-2" style={{ backgroundColor: '#0A0A0A' }}>
                    <div className="text-sm text-muted-foreground">El Contexto</div>
                    <p className="text-sm">
                      Después de estabilizar campañas, necesitábamos escalar sin desperdiciar presupuesto manteniendo el ROAS.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Período</div>
                      <div className="text-lg font-bold text-primary">6 meses</div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">ROAS Q2</div>
                      <div className="text-lg font-bold text-primary">41x</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Crecimiento ventas</span>
                      <span className="font-semibold text-primary">+92%</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Caso 3: Restaurante de Comida Típica */}
              <Card
                className="card-hover bg-card border-border/50 cursor-pointer group relative overflow-hidden"
                onClick={() => window.location.href = '/casos-exito/reconocimiento-local-restaurante'}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1 flex-1 pr-2">
                      <div className="text-xs text-primary font-semibold uppercase tracking-wider">
                        Reconocimiento Local | Restaurante
                      </div>
                      <h3 className="text-base sm:text-lg font-bold leading-tight">
                        <span className="block sm:inline">440 mil personas</span>
                        <span className="block sm:inline sm:ml-1">de la zona ahora</span>
                        <span className="block sm:inline sm:ml-1">conocen el restaurante</span>
                      </h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>

                  <div className="rounded-lg p-4 space-y-2" style={{ backgroundColor: '#0A0A0A' }}>
                    <div className="text-sm text-muted-foreground">El Desafío</div>
                    <p className="text-sm">
                      Restaurante de comida típica caribeña con bajo reconocimiento local. La gente no sabía dónde estaba ubicado.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-2">
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Alcance</div>
                      <div className="text-lg font-bold text-primary">440 mil</div>
                    </div>
                    <div className="bg-primary/5 rounded-lg p-3 text-center">
                      <div className="text-xs text-muted-foreground mb-1">Inversión</div>
                      <div className="text-lg font-bold text-primary">$407</div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-border/50">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Nuevos seguidores</span>
                      <span className="font-semibold text-primary">+1,303</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Ver caso completo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="py-20">
          <div className="section-container">
            <div className="text-center mb-16 -mt-[2vh] sm:mt-0">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Empresas que <span className="gradient-text">confían</span> en nosotros
              </h2>
              <p className="text-xl text-muted-foreground">
                Hemos ayudado a crecer a múltiples negocios en Cartagena y Colombia.
              </p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 items-center">
              {[
                { name: "Arismendy", logo: "/images/1-arismendy.png" },
                { name: "Equilibrio Clinic", logo: "/images/2.logo-equilibrio-clinic.png" },
                { name: "El Bolivarense", logo: "/images/3-El-Bolivarense-logotipo-02.webp" },
                { name: "Tradición", logo: "/images/3.logo-tradicion.png" },
                { name: "Tennis Cartagena", logo: "/images/4-tennis-cartagena.png" },
                { name: "ACB Fit", logo: "/images/5.logo-acbfit-4.png" },
                { name: "En Medidas Específicas", logo: "/images/6-logo-en-medidas-especificas.png" },
                { name: "Neuro Carolina", logo: "/images/7-logo-neuro-carolina.png" },
                { name: "Motos Top", logo: "/images/8-MOTOS-TOP-VERT.png" },
                { name: "1A", logo: "/images/13-logo1A.png" },
                { name: "Verzatille", logo: "/images/10-verzatille.png" },
                { name: "Autoexpress", logo: "/images/12-autoexpress.png" },
              ].map((client, index) => (
                <div
                  key={client.name}
                  className="flex items-center justify-center p-4 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-12 md:max-h-10 max-w-full object-contain opacity-60 hover:opacity-100 transition-opacity grayscale"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-[5vh] md:py-24 bg-[#0A0A0A]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12 space-y-2 md:space-y-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                Testimonios
              </span>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-foreground italic">
                Lo que dicen nuestros{' '}
                <span className="text-[#027FFF]">clientes</span>
              </h2>
            </div>

            {/* Testimonials Horizontal Scroll with Arrows */}
            <div className="relative">
              {/* Left Arrow */}
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#111111]/80 hover:bg-[#222222] border border-[#333333] rounded-full p-2 -ml-4 hidden md:flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Right Arrow */}
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#111111]/80 hover:bg-[#222222] border border-[#333333] rounded-full p-2 -mr-4 hidden md:flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x snap-mandatory"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {testimonials.map((testimonial, index) => {
                  const isExpanded = expandedCards.has(index);
                  const hasMoreContent = testimonial.shortReview !== testimonial.fullReview;

                  return (
                    <div
                      key={index}
                      className="bg-[#111111] border border-[#222222] rounded-lg p-6 space-y-4 flex-shrink-0 w-[300px] md:w-[350px] snap-start"
                    >
                      {/* Stars */}
                      <div className="flex items-center space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 text-[#027FFF] fill-current" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Review */}
                      <blockquote className="text-sm text-gray-300 italic leading-relaxed">
                        "{isExpanded ? testimonial.fullReview : testimonial.shortReview}"
                      </blockquote>

                      {/* Ver más / Ver menos link */}
                      {hasMoreContent && (
                        <button
                          onClick={() => toggleExpand(index)}
                          className="text-[#027FFF] text-sm hover:underline block cursor-pointer"
                        >
                          {isExpanded ? 'Ver menos' : 'Ver más'}
                        </button>
                      )}

                      {/* Author */}
                      <div className="pt-2 border-t border-[#222222]">
                        <div className="font-semibold text-sm text-white">{testimonial.name}</div>
                        <div className="text-xs text-gray-400">{testimonial.subtitle}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="section-container">
            <div className="relative overflow-hidden rounded-3xl border border-border/50 p-12 lg:p-16" style={{ backgroundColor: '#0A0A0A' }}>
              <video
                className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-50"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="/images/fondo-seccion-DT-OS2.mp4" type="video/mp4" />
              </video>

              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="text-center space-y-8">
                  <h2 className="text-2xl lg:text-5xl font-bold whitespace-nowrap">
                    ¡Hagámoslo <span className="gradient-text">realidad</span>!
                  </h2>

                  <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
                    Si ya inviertes en Ads y no estás escalando, el problema no es Meta.<br />
                    Es la estrategia.<br />
                    Agenda una auditoría y veamos si tiene sentido escalar juntos.
                  </p>

                  <div className="flex justify-center">
                    <Button
                      size="lg"
                      className="btn-primary group text-white"
                      onClick={() => window.open('https://wa.me/573007189383?text=Hola%20Dairo,%20quiero%20tener%20campañas%20exitosas', '_blank')}
                    >
                      <svg className="mr-2 h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                      Hablemos por WhatsApp
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm
          sourceDetail="Formulario de Meta Ads"
          title="¿Listo para escalar tus campañas?"
          description="Cuéntame sobre tu negocio y veamos cómo podemos mejorar tus resultados en Meta Ads."
        />
      </main>

      <Footer />
    </div>
  );
};

export default MetaAds;
