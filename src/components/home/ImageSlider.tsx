import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Import vanilla-tilt
import VanillaTilt from "vanilla-tilt";

const ImageSlider = () => {
  const [activeProject, setActiveProject] = useState(0);
  const tiltRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 0,
      title: "Equilibrio Clinic",
      category: "Clínica Estética",
      description: "Proyecto de estrategia digital y rediseño web para Equilibrio Clinic, clínica líder en estética y dermatología en Cartagena. El objetivo fue comunicar su experiencia y tecnología avanzada, creando una plataforma que proyecta confianza y optimiza la agenda de valoraciones.",
      logo: "/images/2.logo-equilibrio-clinic.png",
      previewImage: "/images/desarrolloweb/web3.png",
      fallbackImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EEquilibrio Clinic%3C/text%3E%3C/svg%3E",
      url: "https://equilibrioclinic.com.co",
      technologies: ["WordPress", "Elementor", "Integración software Agenda"],
      stats: {
        responsive: "100%",
        performance: "A+",
        seo: "SEO",
        year: "2025"
      }
    },
    {
      id: 1,
      title: "Arismendy Andrade",
      category: "Constructora",
      description: "Sitio web corporativo para un proveedor de soluciones industriales. Diseño intuitivo con una presentación clara de su portafolio de equipos y servicios, y una estructura optimizada para facilitar la generación de cotizaciones y el contacto comercial.",
      logo: "https://dairotraslavina.com/wp-content/uploads/2025/06/LOGO_LOGO-7aa39e.svg",
      previewImage: "/images/desarrolloweb/web2.png",
      fallbackImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EArismendy Andrade%3C/text%3E%3C/svg%3E",
      url: "https://arismendyandrade.com",
      technologies: ["WordPress", "GSAP", "Tailwind CSS", "SEO"],
      stats: {
        responsive: "100%",
        performance: "A+",
        seo: "SEO",
        year: "2024"
      }
    },
    {
      id: 2,
      title: "ACBFIT",
      category: "Gimnasio/Fitness",
      description: "Sitio web corporativo para gimnasio y centro de fitness. Diseño moderno con presentación clara de servicios, horarios, planes de membresía y sistema de reservas online para clases y entrenamientos personalizados.",
      logo: "/images/5.logo-acbfit-4.png",
      previewImage: "/images/desarrolloweb/web1.png",
      fallbackImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3Ctext x='200' y='125' font-family='Arial, sans-serif' font-size='16' fill='%236b7280' text-anchor='middle' dominant-baseline='middle'%3EACBFIT%3C/text%3E%3C/svg%3E",
      url: "https://acbfit.com",
      technologies: ["WordPress", "Elementor", "Integración software Evo"],
      stats: {
        responsive: "100%",
        performance: "A+",
        seo: "SEO",
        year: "2024"
      }
    }
  ];

  // Initialize Vanilla Tilt
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 12,
        speed: 300,
        glare: false,
        scale: 1.0,
        gyroscopeMinAngleX: 1,
      });
    }

    // Cleanup function
    return () => {
      if (tiltRef.current && (tiltRef.current as any).vanillaTilt) {
        (tiltRef.current as any).vanillaTilt.destroy();
      }
    };
  }, []);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="webs-portafolio" className="py-20 bg-black">
      <div className="section-container">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Webs que <span className="gradient-text">convierten</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proyectos que generan resultados medibles para nuestros clientes
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Left: Project Preview - Same height as cards container */}
          <div className="flex items-stretch" ref={tiltRef}>
            <Card className="bg-card border-border/50 overflow-hidden group flex flex-col w-full">
              <CardContent className="p-0 flex-1 flex flex-col">
                <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10 flex-1">
                  <img
                    src={projects[activeProject].previewImage}
                    alt={`${projects[activeProject].title} preview`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = projects[activeProject].fallbackImage;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Visit Site Button */}
                  <a
                    href={projects[activeProject].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-6 right-6 bg-primary/90 hover:bg-primary text-primary-foreground px-4 py-2 rounded-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                  >
                    Visitar sitio
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={projects[activeProject].logo}
                      alt={`${projects[activeProject].title} logo`}
                      className="h-10 w-auto object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div>
                      <h3 className="text-xl font-semibold">{projects[activeProject].title}</h3>
                      <span className="text-xs text-primary font-medium uppercase tracking-wider">
                        {projects[activeProject].category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {projects[activeProject].description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {projects[activeProject].technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-4 gap-2 pt-4 border-t border-border/50">
                    {Object.entries(projects[activeProject].stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-sm font-semibold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Project Thumbnails */}
          <div className="flex flex-col justify-between gap-4 h-full">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`cursor-pointer transition-all duration-300 flex-1 ${
                  activeProject === index
                    ? 'ring-2 ring-primary bg-primary/5'
                    : 'hover:bg-card/80'
                }`}
                onClick={() => setActiveProject(index)}
              >
                <CardContent className="p-4 flex items-center gap-4 h-full">
                  <div className="relative w-24 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-gradient-to-br from-primary/5 to-primary/10">
                    <img
                      src={project.previewImage}
                      alt={`${project.title} thumbnail`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = project.fallbackImage;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{project.title}</h4>
                    <span className="text-xs text-muted-foreground">{project.category}</span>
                  </div>
                  {activeProject === index && (
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mobile Layout - Carousel */}
        <div className="lg:hidden relative">
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-primary/5 to-primary/10">
                <img
                  src={projects[activeProject].previewImage}
                  alt={`${projects[activeProject].title} preview`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = projects[activeProject].fallbackImage;
                  }}
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={projects[activeProject].logo}
                    alt={`${projects[activeProject].title} logo`}
                    className="h-8 w-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{projects[activeProject].title}</h3>
                    <span className="text-xs text-primary font-medium uppercase tracking-wider">
                      {projects[activeProject].category}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground">
                  {projects[activeProject].description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {projects[activeProject].technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={projects[activeProject].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Visitar sitio
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-2 top-1/3 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-2 top-1/3 -translate-y-1/2 bg-background/80 backdrop-blur-sm border border-border rounded-full p-2 hover:bg-primary/10 transition-colors"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeProject === index
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-primary/30 hover:bg-primary/50'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
