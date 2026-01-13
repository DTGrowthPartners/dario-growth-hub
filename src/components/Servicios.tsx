import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Code, Zap, MessageCircle, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const Servicios = () => {
  const sectionRef = useScrollAnimation();

  const services = [
    {
      icon: TrendingUp,
      title: "Meta Ads Performance",
      description: "Campañas de alto rendimiento optimizadas para conversión.",
      highlights: ["Segmentación avanzada", "Testing A/B", "ROAS optimizado", "Reporting detallado"],
      path: "/servicios/meta-ads",
    },
    {
      icon: Code,
      title: "Desarrollo Web",
      description: "Sitios web que convierten visitantes en clientes.",
      highlights: ["Landing pages", "Webs corporativas", "E-commerce", "Aplicaciones web"],
      path: "/servicios/desarrollo-web",
    },
    {
      icon: Zap,
      title: "Sistemas y Automatizaciones",
      description: "Automatiza procesos y escala tu operación.",
      highlights: ["Flujos automatizados", "Integraciones", "CRM & Email", "Dashboards"],
      path: "/servicios/sistemas-automatizaciones",
    },
    {
      icon: MessageCircle,
      title: "Chatbots & IA",
      description: "Atención automatizada 24/7 para tu negocio.",
      highlights: ["WhatsApp Business", "Respuestas automáticas", "Calificación de leads", "Integración CRM"],
      path: null, // Este va a WhatsApp directamente
    },
  ];

  return (
    <section id="servicios" className="py-12 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <div className="text-center mb-8 md:mb-16 space-y-4">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">
            Servicios
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Soluciones que{" "}
            <span className="gradient-text">impulsan</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Estrategias personalizadas para hacer crecer tu negocio en el mundo digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="card-hover bg-card border-border/50 animate-fade-in h-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>

                  <ul className="space-y-1 flex-grow">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {service.path === null ? (
                    <a
                      href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola!%20vengo%20de%20su%20web%20y%20estoy%20interesado%20en%20sus%20servicios%20de%20Chatbots%20e%20IA&type=phone_number&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto"
                    >
                      <Button variant="ghost" className="group w-full justify-between mt-3 p-2 text-xs scroll-glow-button">
                        Ver más
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  ) : (
                    <Link to={service.path} className="mt-auto">
                      <Button variant="ghost" className="group w-full justify-between mt-3 p-2 text-xs scroll-glow-button">
                        Ver más
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Servicios;
