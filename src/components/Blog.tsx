import { ArrowRight, Calendar, Tag, Zap, TrendingUp, Target } from "lucide-react";
import darioHeroImg from "@/assets/dario-hero.jpg";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export const blogPosts = [
  {
    slug: "crecimiento-no-es-marketing",
    title: "El crecimiento no es marketing",
    excerpt:
      "Por qué las empresas que entienden el growth como un sistema integrado escalan más rápido que las que lo ven como un conjunto de tácticas.",
    category: "Growth",
    date: "15 Dic 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    slug: "paid-media-rentable",
    title: "Paid Media rentable: Más allá del ROAS",
    excerpt:
      "Las métricas que realmente importan cuando escalas inversión publicitaria y cómo evitar los errores más costosos.",
    category: "Paid Media",
    date: "8 Dic 2024",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
  {
    slug: "sistemas-para-escalar",
    title: "Los sistemas que necesitas para escalar",
    excerpt:
      "Un framework práctico para construir la infraestructura operativa que permite crecimiento sostenible.",
    category: "Sistemas",
    date: "1 Dic 2024",
    image: darioHeroImg,
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Growth: { bg: "bg-primary/5", text: "text-primary", border: "border-primary/10" },
  "Paid Media": { bg: "bg-emerald-500/5", text: "text-emerald-600", border: "border-emerald-500/10" },
  Sistemas: { bg: "bg-amber-500/5", text: "text-amber-600", border: "border-amber-500/10" },
  "Founder Notes": { bg: "bg-violet-500/5", text: "text-violet-600", border: "border-violet-500/10" },
};

const icons: Record<string, React.ReactNode> = {
  Growth: <Zap className="h-6 w-6 text-primary" />,
  "Paid Media": <TrendingUp className="h-6 w-6 text-emerald-600" />,
  Sistemas: <Target className="h-6 w-6 text-amber-600" />,
};

const Blog = () => {
  return (
    <section id="blog" className="py-16 lg:py-24 bg-[#0A0A0A] relative">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
            Blog
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Últimas publicaciones
          </h2>
          <p className="text-lg text-muted-foreground">
            Ideas, frameworks y reflexiones sobre crecimiento, estrategia y liderazgo.
          </p>
        </div>

        {/* Blog Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto">
          {blogPosts.map((post, index) => (
            <BentoGridItem
              key={post.slug}
              title={
                <div className="flex items-center gap-2">
                  <span className="text-lg">{post.title}</span>
                </div>
              }
              description={
                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[post.category].bg} ${categoryColors[post.category].text}`}>
                      {post.category}
                    </span>
                    <span className="flex items-center text-xs text-muted-foreground">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </span>
                  </div>
                </div>
              }
              header={
                <div className="relative aspect-[16/9] lg:aspect-[3/2] overflow-hidden rounded-t-xl h-full">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale group-hover/bento:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover/bento:opacity-100 transition-opacity duration-300" />
                </div>
              }
              icon={icons[post.category]}
              className={index === 0 ? "md:col-span-2 md:row-span-2" : "md:row-span-1"}
            >
              <a
                href={`/blog/${post.slug}`}
                className="inline-flex items-center px-2 py-2 bg-primary text-primary-foreground font-medium text-sm rounded-full hover:bg-primary/90 transition-colors"
              >
                Leer →
              </a>
            </BentoGridItem>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Blog;
