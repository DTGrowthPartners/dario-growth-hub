import { useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const blogContent: Record<string, { content: string[] }> = {
  'crecimiento-no-es-marketing': {
    content: [
      'El error más común que veo en empresas que buscan escalar es confundir crecimiento con marketing. Son dos cosas completamente diferentes.',
      'El marketing es una función. El crecimiento es un sistema.',
      'Cuando piensas en crecimiento como marketing, terminas con un equipo que lanza campañas, optimiza anuncios y genera leads. Pero sin un sistema integrado, esos leads se pierden en un proceso de ventas desordenado, un producto que no retiene, o una experiencia de cliente que destruye el LTV.',
      'Las empresas que realmente escalan entienden que el crecimiento atraviesa toda la organización. Es la intersección de producto, marketing, ventas, customer success y operaciones.',
      'Un sistema de crecimiento efectivo tiene tres componentes fundamentales:',
      '**1. Motor de Adquisición**: No solo cómo atraes usuarios, sino cómo lo haces de forma eficiente y escalable. Esto incluye tus canales, tu targeting, tu messaging y tu proceso de conversión.',
      '**2. Motor de Retención**: Cómo mantienes a los usuarios activos y comprometidos. Esto incluye onboarding, engagement loops, y la creación de hábitos.',
      '**3. Motor de Monetización**: Cómo extraes valor de forma que sea win-win. Pricing, upselling, expansión de cuentas.',
      'Estos tres motores deben trabajar en armonía. Si tu adquisición es excelente pero tu retención es pobre, estás llenando un balde con agujeros. Si tu retención es perfecta pero no monetizas bien, tienes un hobby, no un negocio.',
      'El trabajo de un líder de crecimiento no es optimizar campañas. Es diseñar y optimizar el sistema completo.',
      'Esto requiere una visión transversal, capacidad de análisis profundo, y la habilidad de influir en múltiples equipos sin autoridad directa. Es un rol de arquitecto, no de ejecutor.',
      'Cuando empiezas a ver el crecimiento como un sistema, las preguntas que te haces cambian. Ya no es "¿cómo conseguimos más leads?" sino "¿dónde está la mayor fricción en nuestro flywheel y cómo la eliminamos?"',
      'Ese cambio de mentalidad es lo que separa a las empresas que escalan de las que se estancan.',
    ],
  },
  'paid-media-rentable': {
    content: [
      'ROAS es la métrica más sobrevaluada en paid media. Y paradójicamente, la obsesión con ROAS es lo que impide que muchas empresas escalen su inversión publicitaria.',
      'Déjame explicar.',
      'ROAS (Return on Ad Spend) te dice cuánto revenue generas por cada dólar invertido en ads. Si inviertes $1 y generas $3 en revenue, tienes un ROAS de 3x. Suena simple y útil.',
      'El problema es que ROAS no te dice si estás ganando dinero.',
      'Un ROAS de 3x puede ser increíble para una empresa con márgenes del 70%, pero desastroso para una con márgenes del 20%. El contexto importa.',
      'Las métricas que realmente importan cuando escalas paid media:',
      '**1. CAC Payback Period**: ¿Cuánto tiempo tarda un cliente en devolverte lo que gastaste en adquirirlo? Si tu payback es de 3 meses y tu retención promedio es de 12 meses, tienes un modelo sólido.',
      '**2. Contribution Margin After Ads**: Después de costos de producto/servicio y gasto publicitario, ¿cuánto queda? Esta es la métrica que determina si puedes reinvertir.',
      '**3. LTV:CAC Ratio**: ¿Cuánto valor genera un cliente en su vida vs. lo que costó adquirirlo? Un ratio de 3:1 es el mínimo saludable para escalar.',
      '**4. Marginal CAC**: ¿Cuánto cuesta adquirir el próximo cliente? Esta métrica aumenta a medida que escalas y es crucial para planificar inversión.',
      'Los errores más costosos que veo:',
      '**Escalar demasiado rápido**: Triplicar presupuesto en una semana porque "el ROAS está bueno". Esto destruye eficiencia y crea volatilidad.',
      '**Ignorar la saturación de audiencia**: Cada audiencia tiene un límite. Cuando lo alcanzás, tu CAC se dispara.',
      '**No diversificar canales**: Depender 100% de Facebook/Google es un riesgo estructural. Los CPMs suben, las políticas cambian.',
      '**Optimizar para métricas vanity**: Likes, impresiones, CTR alto en ads irrelevantes. Nada de esto importa si no convierte.',
      'Paid media rentable es un equilibrio entre escala y eficiencia. Y encontrar ese equilibrio requiere entender profundamente tus unit economics, no solo mirar dashboards.',
    ],
  },
  'sistemas-para-escalar': {
    content: [
      'La mayoría de las empresas que se estancan no tienen un problema de estrategia. Tienen un problema de sistemas.',
      'Estrategia es decidir qué hacer. Sistemas es cómo lo ejecutas consistentemente.',
      'Puedes tener la mejor estrategia del mundo, pero si tu equipo está ahogado en procesos manuales, información dispersa en 15 herramientas, y reuniones que no llevan a ningún lado, esa estrategia nunca se materializa.',
      'Un framework para construir sistemas que escalan:',
      '**1. Documenta antes de automatizar**',
      'El error es saltar a automatizar procesos que ni siquiera están documentados. Primero, escribe exactamente cómo se hace algo. Paso a paso. Esto revela ineficiencias que no veías.',
      '**2. Single Source of Truth**',
      'Cada tipo de información debe vivir en un solo lugar. Datos de clientes en el CRM. Métricas en un dashboard centralizado. Documentación en un wiki. La duplicación de información es el enemigo de la escalabilidad.',
      '**3. Ownership claro**',
      'Cada proceso debe tener un dueño. No un comité, no "el equipo". Una persona que es responsable de que funcione y de mejorarlo.',
      '**4. Métricas de proceso, no solo de resultado**',
      'Si solo mides resultados (revenue, clientes), no sabés qué arreglar cuando las cosas van mal. Medí el proceso: tiempo de respuesta, tasas de conversión entre etapas, velocidad de resolución.',
      '**5. Iteración continua**',
      'Los sistemas no se diseñan una vez y se olvidan. Deben evolucionar. Implementá revisiones mensuales de procesos clave. Preguntá: ¿qué fricción estamos experimentando?',
      'Los sistemas que recomiendo priorizar:',
      '- Sistema de adquisición y nurturing de leads',
      '- Sistema de onboarding de clientes',
      '- Sistema de reporting y análisis',
      '- Sistema de comunicación interna',
      '- Sistema de gestión de proyectos',
      'No necesitás implementar todo de golpe. Empezá por el sistema que está causando más fricción. Arréglalo. Pasá al siguiente.',
      'Las empresas que escalan no son las que trabajan más. Son las que construyen sistemas que trabajan por ellos.',
    ],
  },
};

const blogPosts = [
  {
    slug: 'crecimiento-no-es-marketing',
    title: 'El crecimiento no es marketing',
    description: 'Por qué las empresas que entienden el growth como un sistema integrado escalan más rápido.',
    category: 'Growth',
    date: '15 Dic 2024',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    slug: 'paid-media-rentable',
    title: 'Paid Media rentable',
    description: 'Las métricas que realmente importan cuando escalas inversión publicitaria.',
    category: 'Paid Media',
    date: '8 Dic 2024',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    slug: 'sistemas-para-escalar',
    title: 'Los sistemas para escalar',
    description: 'Un framework práctico para construir la infraestructura operativa.',
    category: 'Sistemas',
    date: '1 Dic 2024',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&q=80',
  },
];

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);
  const content = slug ? blogContent[slug] : null;

  if (!post || !content) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post no encontrado</h1>
            <a href="/#blog">
              <Button>Volver al blog</Button>
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-24 pb-16">
        <article className="container mx-auto px-4 lg:px-8 max-w-3xl">
          {/* Back link */}
          <a
            href="/#blog"
            className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al blog
          </a>

          {/* Hero image */}
          <div className="aspect-video rounded-2xl overflow-hidden mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Meta */}
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              {post.date}
            </span>
            <span className="inline-flex items-center text-sm text-primary font-medium">
              <Tag className="mr-2 h-4 w-4" />
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Content */}
          <div className="prose prose-lg max-w-none">
            {content.content.map((paragraph, index) => {
              // Handle bold text
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-foreground mt-8 mb-4">
                    {paragraph.replace(/\*\*/g, '')}
                  </h3>
                );
              }
              
              // Handle paragraphs with inline bold
              const parts = paragraph.split(/(\*\*.*?\*\*)/g);
              return (
                <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                  {parts.map((part, i) => {
                    if (part.startsWith('**') && part.endsWith('**')) {
                      return (
                        <strong key={i} className="text-foreground font-semibold">
                          {part.replace(/\*\*/g, '')}
                        </strong>
                      );
                    }
                    return part;
                  })}
                </p>
              );
            })}
          </div>

          {/* Author */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Escrito por <span className="text-foreground font-medium">Dario Traslaviña</span> · Founder & Growth Partner
            </p>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
