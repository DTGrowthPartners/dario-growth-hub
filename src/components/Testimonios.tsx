import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

const Testimonios = () => {
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="testimonios" className="py-[5vh] md:py-24 bg-[#0A0A0A]">
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
  );
};

export default Testimonios;
