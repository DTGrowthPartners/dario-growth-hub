import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/logo-dairo-tras.png';

const navLinks = [
  { href: 'inicio', label: 'Inicio' },
  { href: 'sobre-mi', label: '¿Cómo te puedo ayudar?' },
  { href: 'casos', label: 'Casos de Éxito' },
  { href: 'blog', label: 'Blog' },
  { href: 'dt-growth', label: 'DT Growth Partners' },
  { href: 'contacto', label: 'Contacto' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if we're on a blog post page
  const isBlogPost = location.pathname.startsWith('/blog/') && location.pathname !== '/blog';

  // Get the correct href based on current location
  const getHref = (sectionId: string) => {
    if (isBlogPost) {
      return `/#${sectionId}`;
    }
    return `#${sectionId}`;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile Menu Button - Left side */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FontAwesomeIcon icon={faXmark} size="lg" /> : <FontAwesomeIcon icon={faBars} size="lg" />}
          </button>

          {/* Logo - Centered on mobile */}
          <a
            href={getHref('inicio')}
            onClick={handleNavClick}
            className="flex items-center"
          >
            <img
              src={logoImage}
              alt="Dario Traslaviña"
              className="h-5 lg:h-8 brightness-0 invert"
            />
          </a>

          {/* Spacer for balance on mobile (same width as menu button) */}
          <div className="lg:hidden w-9"></div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={getHref(link.href)}
                onClick={handleNavClick}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a
                href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                ¡Hablemos Hoy!
              </a>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={getHref(link.href)}
                  onClick={handleNavClick}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a
                    href="https://api.whatsapp.com/send/?phone=573007189383&text=Hola%2C%20Dairo.%20Te%20contacto%20desde%20tu%20sitio%20web%20y%20estoy%20interesado%20en%20una%20consultor%C3%ADa%20sobre%20%5Bespecificar%20tema%5D&type=phone_number&app_absent=0"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleNavClick}
                  >
                    ¡Hablemos Hoy!
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
