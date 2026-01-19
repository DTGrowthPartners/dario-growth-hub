import { useEffect } from 'react';
import darioImg from '@/assets/dario-about-desenfoque.png';
import logoImage from '@/assets/logo-dairo-tras.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faChartLine, faBullseye, faLaptopCode, faBolt, faComments } from '@fortawesome/free-solid-svg-icons';

// Enlaces de redes sociales
const socialLinks = [
  {
    icon: faLinkedin,
    href: 'https://www.linkedin.com/in/trasla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    label: 'LinkedIn',
    color: '#0A66C2'
  },
  {
    icon: faInstagram,
    href: 'https://www.instagram.com/dairotraslavina?igsh=MWxibWh2cTl3b3dmZg==',
    label: 'Instagram',
    color: '#E4405F'
  },
  {
    icon: faFacebook,
    href: 'https://www.facebook.com/dairotraslav',
    label: 'Facebook',
    color: '#1877F2'
  },
  {
    icon: faWhatsapp,
    href: 'https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0',
    label: 'WhatsApp',
    color: '#25D366'
  },
];

// Enlaces principales
const mainLinks = [
  {
    title: 'Portafolio & Casos de Éxito',
    description: 'Conoce los proyectos que he ejecutado',
    href: '/',
    icon: faChartLine
  },
  {
    title: 'Meta Ads & Pauta Digital',
    description: 'Campañas que generan resultados reales',
    href: '/ads',
    icon: faBullseye
  },
  {
    title: 'Desarrollo Web',
    description: 'Sitios web enfocados en conversión',
    href: '/web',
    icon: faLaptopCode
  },
  {
    title: 'Sistemas & Automatizaciones',
    description: 'Optimiza tus procesos con IA',
    href: '/servicios/sistemas-automatizaciones',
    icon: faBolt
  },
  {
    title: 'Contáctame por WhatsApp',
    description: 'Hablemos sobre tu proyecto',
    href: 'https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0',
    icon: faComments,
    isExternal: true
  },
];


const LinksPage = () => {
  useEffect(() => {
    document.title = 'Dairo Traslaviña - Links';
  }, []);

  const handleLinkClick = (href: string, isExternal?: boolean) => {
    if (isExternal) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
  };

  const handleDownloadVCard = () => {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
N:Traslaviña;Dairo
FN:Dairo Traslaviña
TEL;TYPE=CELL:+573007189383
EMAIL:dairo@dtgrowthpartners.com
ADR;TYPE=WORK:;;Convention Center, Piso 3 Cartagena;;;;
ORG:DT Growth Partners
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Dairo-Traslavina.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo Section */}
        <div className="text-center mb-8 animate-fadeIn">
          <img
            src={logoImage}
            alt="Dairo Traslaviña Logo"
            className="mx-auto"
            style={{ height: 'min(2rem, 3vh)' }}
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 mb-8 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
          {socialLinks.map((social, index) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-14 h-14 bg-white/5 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label={social.label}
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FontAwesomeIcon
                icon={social.icon}
                className="w-6 h-6 relative z-10 text-primary transition-colors duration-300 group-hover:text-white"
              />
            </a>
          ))}
        </div>

        {/* Profile Photo - Circle */}
        <div className="mb-8 animate-fadeIn text-center" style={{ animationDelay: '0.2s' }}>
          <div className="relative inline-block group cursor-pointer">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse group-hover:bg-primary/40 transition-all duration-500"></div>
            <img
              src={darioImg}
              alt="Dairo Traslaviña"
              className="relative w-40 h-40 rounded-full border-4 border-primary/50 shadow-2xl group-hover:border-primary group-hover:scale-105 transition-all duration-300"
              style={{
                objectFit: 'cover',
                objectPosition: '15% center',
              }}
            />
          </div>
        </div>

        {/* Name and Description */}
        <div className="text-center mb-8 animate-fadeIn" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
            Dairo Traslaviña
          </h1>
          <p className="text-muted-foreground text-lg mb-4">
            Growth · Ads · AI
          </p>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
            Ayudo a empresas a escalar con estrategia, paid media y sistemas de crecimiento.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 justify-center items-center max-w-md mx-auto">
            <a
              href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/50 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30 text-sm w-full sm:w-auto justify-center"
            >
              <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-primary" />
              Contáctame en WhatsApp
            </a>
            <button
              onClick={handleDownloadVCard}
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-border text-white font-medium px-4 py-2 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 text-sm w-full sm:w-auto justify-center whitespace-nowrap"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Descargar contacto
            </button>
          </div>
        </div>

        {/* Main Links */}
        <div className="space-y-4 mb-8">
          {mainLinks.map((link, index) => (
            <button
              key={link.title}
              onClick={() => handleLinkClick(link.href, link.isExternal)}
              className="w-full group relative overflow-hidden bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-border rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/20 text-left animate-fadeIn"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                  <FontAwesomeIcon icon={link.icon} className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                    {link.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.description}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram Preview Section */}
        <div
          className="bg-gradient-to-br from-[#833AB4] via-[#E1306C] to-[#FCAF45] p-[2px] rounded-2xl animate-fadeIn"
          style={{ animationDelay: '1s' }}
        >
          <div className="bg-[#0A0A0A] rounded-2xl p-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <FontAwesomeIcon icon={faInstagram} className="w-6 h-6 text-[#E1306C]" />
                <span className="font-semibold text-lg">@dairotraslavina</span>
              </div>

              {/* Instagram Feed Embed */}
              <div className="mb-6">
                <div className="relative w-full overflow-hidden rounded-lg" style={{ height: '400px' }}>
                  <iframe
                    src="https://www.instagram.com/dairotraslavina/embed"
                    className="w-full h-full border-0"
                    style={{ border: 'none', overflow: 'hidden' }}
                    allow="encrypted-media"
                    title="Instagram Profile"
                  />
                </div>
              </div>

              <a
                href="https://www.instagram.com/dairotraslavina?igsh=MWxibWh2cTl3b3dmZg=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] hover:opacity-90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                Seguir en Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-sm text-muted-foreground/60 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
          <p>© {new Date().getFullYear()} DT Growth Partners</p>
          <p className="mt-2">🚀 Latin roots, global reach.</p>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default LinksPage;
