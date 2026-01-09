import darioImg from '../assets/dario-about-desenfoque.png';

const stats = [
  { value: '+$5M USD', label: 'en ventas generadas para clientes' },
  { value: '+$250K USD', label: 'gestionados en campañas de paid media' },
  { value: '25+', label: 'proyectos de crecimiento ejecutados' },
  { value: '10x', label: 'ROI máximo obtenido en un proyecto' },
];

const About = () => {

  return (
    <section id="sobre-mi" className="min-h-screen flex items-center bg-[#0A0A0A] relative py-16 lg:py-0">
      {/* Image */}
      <div className="absolute top-0 right-0 bottom-0 w-[45%] hidden lg:block">
        <div className="relative h-full w-full">
          <div className="relative shadow-xl h-full overflow-hidden">
            <img
              src={darioImg}
              alt="Dario Traslaviña"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: 'center center',
                transform: 'scale(1.15) translateX(-15%)',
                transformOrigin: 'center center'
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(0deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(180deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%)]"></div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-8 relative z-10 h-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Title - Mobile */}
          <div className="order-1 lg:hidden text-center">
            <h2 className="text-xl font-bold tracking-wide uppercase mb-3 text-primary">
              ¿Cómo te puedo ayudar?
            </h2>
          </div>
          {/* Image - Mobile */}
          <div className="order-2 lg:hidden relative">
            <img
              src={darioImg}
              alt="Dario Traslaviña"
              className="w-full h-auto object-cover"
              style={{
                objectPosition: '35% center'
              }}
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(0deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%),linear-gradient(180deg,#0A0A0A_0%,#0A0A0A_5%,transparent_25%,transparent_75%,#0A0A0A_95%,#0A0A0A_100%)]"></div>
          </div>
          {/* Content - Mobile first */}
          <div className="order-3 lg:order-1 lg:flex-1">
            <h2 className="hidden lg:block text-xl lg:text-2xl font-bold tracking-wide uppercase mb-6 text-primary">
              ¿Cómo te puedo ayudar?
            </h2>

            {/* Main intro */}
            <div className="space-y-4 lg:space-y-4 text-foreground text-base lg:text-lg leading-relaxed -mt-12 lg:mt-0 text-center lg:text-left">
              <p className="font-medium">
                Si tu empresa ya vende pero se estancó en un techo de crecimiento,<br />
                te ayudo a romperlo.
              </p>
              <p>
                Construyo sistemas de crecimiento basados en datos que convierten<br />
                tu inversión en marketing en ventas predecibles.
              </p>
              <p>
                Combino paid media, activos digitales y automatización para que tu equipo<br />
                deje de apagar incendios y pueda enfocarse en escalar.
              </p>
            </div>

            {/* How I work */}
            <div className="mt-10 lg:mt-12">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">Cómo trabajo</h3>
              <div className="space-y-5">
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">1.</span>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Diagnóstico con datos reales</p>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Analizamos tus funnels, métricas y rentabilidad antes de invertir<br />
                      un peso más.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">2.</span>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Sistema de crecimiento integrado</p>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      No "hacks" sueltos: conecto campañas, CRM y automatizaciones<br />
                      en un sistema que genera ventas todos los días.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-primary font-bold text-xl flex-shrink-0">3.</span>
                  <div>
                    <p className="text-foreground font-semibold mb-1">Optimización continua</p>
                    <p className="text-muted-foreground text-sm lg:text-base">
                      Te acompaño semana a semana, midiendo lo que importa:<br />
                      CAC, ROAS y revenue. No clics.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 lg:mt-12">
              <h3 className="text-xl lg:text-2xl font-semibold text-foreground mb-6 text-center lg:text-left">Experiencia en números</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <p className="text-3xl lg:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                    <p className="text-sm lg:text-base text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10 lg:mt-12 text-center lg:text-left">
              <a
                href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors duration-200"
              >
                Agenda una llamada
              </a>
              <p className="mt-4 text-xs text-muted-foreground/60">Respuesta en menos de 24 horas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
