import { Search, Map, Compass, BarChart3 } from 'lucide-react';
import { WorkFlipCard } from './WorkFlipCard';

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico y análisis de datos',
    subtitle: 'Entender antes de escalar.',
    description:
      'Analizamos tus métricas actuales, unit economics y canales de adquisición para identificar cuellos de botella y oportunidades reales. El objetivo es claridad absoluta sobre qué funciona y qué no.',
    whatsappMessage: 'Hola Dario, me interesa el servicio de Diagnóstico y análisis de datos. Me gustaría entender mejor cómo pueden analizar mi negocio.',
  },
  {
    icon: Map,
    title: 'Roadmap de crecimiento',
    subtitle: 'Prioridades claras, foco total.',
    description:
      'Diseñamos un plan estratégico con iniciativas priorizadas, timelines realistas y KPIs accionables. Cada decisión tiene un impacto esperado y un criterio claro de éxito. Nada entra al roadmap si no mueve la aguja.',
    whatsappMessage: 'Hola Dario, estoy interesado en crear un Roadmap de crecimiento para mi negocio. Me gustaría agendar una conversación.',
  },
  {
    icon: Compass,
    title: 'Dirección estratégica',
    subtitle: 'Ejecución alineada a resultados.',
    description:
      'Lideramos la ejecución de las iniciativas clave, asegurando coherencia entre estrategia, paid media, producto y operaciones. Acompañamos al equipo para que cada acción esté alineada con el objetivo de crecimiento.',
    whatsappMessage: 'Hola Dario, me interesa la Dirección estratégica. Necesito ayuda para ejecutar mi plan de crecimiento.',
  },
  {
    icon: BarChart3,
    title: 'Medición y ajuste continuo',
    subtitle: 'Optimizar es parte del sistema.',
    description:
      'Monitoreamos resultados en tiempo real, iteramos sobre lo que funciona y eliminamos lo que no. El crecimiento no es un evento, es un proceso continuo de aprendizaje y optimización enfocado en ROI y rentabilidad.',
    whatsappMessage: 'Hola Dario, quiero optimizar mis métricas y resultados. Me interesa el servicio de Medición y ajuste continuo.',
  },
];

const HowIWork = () => {
  return (
    <section id="como-trabajo" className="min-h-screen flex items-center relative py-20 lg:py-32 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 lg:px-8 w-full relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-4">
            Cómo trabajo
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Modelo DT de crecimiento predecible
          </h2>
          <p className="text-lg text-muted-foreground">
            Un sistema claro para convertir incertidumbre en crecimiento predecible.<br />
            No improvisamos. Diseñamos, ejecutamos y optimizamos con datos reales.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <WorkFlipCard
              key={index}
              data={{
                icon: step.icon,
                title: step.title,
                subtitle: step.subtitle,
                description: step.description,
                number: index + 1,
                whatsappMessage: step.whatsappMessage,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
