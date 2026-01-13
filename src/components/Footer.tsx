import { Link, useLocation } from 'react-router-dom';
import logoImage from '@/assets/logo-dairo-tras.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const navLinks = [
  { href: 'inicio', label: 'Inicio' },
  { href: 'sobre-mi', label: '¿Cómo te puedo ayudar?' },
  { href: 'servicios', label: 'Servicios' },
  { href: 'casos', label: 'Casos de Éxito' },
  { href: 'contacto', label: 'Contacto' },
];

const socialLinks = [
  { icon: faLinkedin, href: 'https://www.linkedin.com/in/trasla?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  { icon: faInstagram, href: 'https://www.instagram.com/dairotraslavina?igsh=MWxibWh2cTl3b3dmZg==', label: 'Instagram' },
  { icon: faFacebook, href: 'https://www.facebook.com/dairotraslav', label: 'Facebook' },
  { icon: faWhatsapp, href: 'https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0', label: 'WhatsApp' },
];

const Footer = () => {
  const location = useLocation();

  // Check if we're on the home page
  const isHomePage = location.pathname === '/';

  // Get the correct href based on current location
  const getHref = (sectionId: string) => {
    if (isHomePage) {
      return `#${sectionId}`;
    }
    // For any other page, redirect to home with anchor
    return `/#${sectionId}`;
  };

  return (
    <footer className="bg-[#0A0A0A] text-white py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16 mb-10">
          {/* Logo & Description */}
          <div>
            <Link to="/">
              <img src={logoImage} alt="Dario Traslaviña" className="h-8 mb-4 brightness-0 invert hover:opacity-80 transition-opacity" />
            </Link>
            <p className="text-white text-sm leading-relaxed">
              Founder & Growth Partner. Ayudando a empresas ambiciosas a escalar
              con estrategia, paid media y sistemas de crecimiento.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Navegación</h4>
            <nav className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  className="text-sm text-white hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Sígueme</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-white text-center md:text-left">
            © {new Date().getFullYear()} DT Growth Partners. 🚀 Latin roots, global reach.
          </p>
          <p className="text-xs sm:text-sm text-white">
            Founder & Growth Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
