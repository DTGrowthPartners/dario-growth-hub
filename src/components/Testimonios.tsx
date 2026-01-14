import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Johana Zapateiro",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWpFwf5p8TI48NOKCyDkMvn8iTrkkLb7gGZ_vsvDmgkxsrYtio=s56-c-rp-mo-br100",
    rating: 5,
    review: "Estoy muy feliz con los resultados. Desde que implementamos las estrategias de marketing y pauta, las ventas han crecido notablemente. Invertir en esta área ha valido totalmente la pena.",
  },
  {
    name: "ACB Fit",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVmPx7v-FlTPI1tc8NdpdveH6n2OysWtLJeD17GPxesoYcLKc8M=s56-c-rp-mo-br100",
    rating: 5,
    review: "Recomendado con total confianza, profesional, líder, creativo, realmente trasciende su rol. La calidad de su trabajo es excepcional, cuidando cada detalle como si el proyecto fuera suyo.",
  },
  {
    name: "Tennis Cartagena",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUCHA2cF3V_kJUnHwYVgDT0YkckM0C09RkDtwojeAH1uel_PQ=s56-c-rp-mo-br100",
    rating: 5,
    review: "Excelente trabajo, siempre dispuesto a ayudar y encontrar soluciones innovadoras. Recomendado 100%, me ha ayudado a mejorar mi presencia en línea y a alcanzar mis objetivos de marketing digital.",
  },
  {
    name: "Carlos Tatis",
    avatar: "https://lh3.googleusercontent.com/a/ACg8ocKUCTi_YTX7OCwWXREHf5BXYNh60_wGheWZUY_y4_Cf-Df3=s56-c-rp-mo-br100",
    rating: 5,
    review: "Realmente brindan mucho conocimiento y facilitan todas las herramientas para que mi empresa obtuviera los buenos resultados.",
  },
  {
    name: "Jonathan Indalecio Alvarez",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWiRYo5bUwejSzaoVGTJ17ICXJivC-ZBVvQZAG63mkLPkpXAM6U=s56-c-rp-mo-br100",
    rating: 5,
    review: "Lo mejor para pautar en las redes sociales.",
  },
];

const Testimonios = () => {
  return (
    <section id="testimonios" className="py-[5vh] md:py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16 space-y-2 md:space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Testimonios
          </span>
          <h2 className="text-xl lg:text-5xl font-bold text-foreground">
            Lo que dicen nuestros{' '}
            <span className="gradient-text">clientes</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-card/80 border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
            >
              <CardContent className="p-6 space-y-4">
                {/* Stars */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>

                {/* Review */}
                <blockquote className="text-sm text-muted-foreground italic">
                  "{testimonial.review}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-3 pt-2">
                  <img
                    src={testimonial.avatar}
                    alt={`${testimonial.name} avatar`}
                    className="w-10 h-10 rounded-full ring-2 ring-primary/30"
                  />
                  <div>
                    <div className="font-semibold text-sm text-foreground">{testimonial.name}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
