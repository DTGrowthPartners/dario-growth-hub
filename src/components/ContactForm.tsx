"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import { submitLead, saveLeadLocally } from '@/lib/submitLead';
import { ReCaptcha } from '@/components/ReCaptcha';

interface ContactFormProps {
  sourceDetail: string;
  title?: string;
  subtitle?: string;
  description?: string;
  backgroundColor?: string;
}

const ContactForm = ({
  sourceDetail,
  title = "¿Listo para empezar?",
  subtitle = "Contacto",
  description = "Cuéntame sobre tu proyecto y exploraremos cómo puedo ayudarte.",
  backgroundColor = "#0A0A0A"
}: ContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validar reCAPTCHA
    if (!recaptchaToken) {
      toast.error('Por favor, completa el reCAPTCHA');
      return;
    }

    setIsSubmitting(true);

    const leadData = { ...formData, sourceDetail, recaptchaToken };

    // Guardar lead localmente en JSON (localStorage)
    saveLeadLocally(leadData);

    // Enviar datos al CRM de Os.Dt (no bloquea el flujo si falla)
    submitLead(leadData).catch((error) => {
      console.error('Error enviando lead al CRM:', error);
    });

    // Create WhatsApp message
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const companyText = formData.company ? `\n🏢 Empresa: ${formData.company}` : '';
    const phoneText = formData.phone ? `\n📱 Teléfono: ${formData.phone}` : '';

    const whatsappMessage = `Hola! Soy ${fullName} y me gustaría contactarte.

📧 Email: ${formData.email}${phoneText}${companyText}

📍 Origen: ${sourceDetail}

💬 Mensaje:
${formData.message}`;

    const whatsappNumber = '573007189383';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Redirigiendo a WhatsApp...');

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
      setRecaptchaToken('');
    }, 3000);
  };

  const handleRecaptchaVerify = (token: string) => {
    setRecaptchaToken(token);
  };

  const handleRecaptchaExpired = () => {
    setRecaptchaToken('');
    toast.error('El reCAPTCHA ha expirado. Por favor, vuelve a verificarlo.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor }}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
              {subtitle}
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-base text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Form */}
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-2">¡Mensaje recibido!</h3>
              <p className="text-muted-foreground">
                Revisaré tu mensaje y te contactaré pronto.
              </p>
            </div>
          ) : (
            <div className="shadow-input mx-auto w-full rounded-2xl bg-[#111111] p-6 border border-[#222222]">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
                  <LabelInputContainer>
                    <Label htmlFor="firstName">Nombre</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="Tu nombre"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>
                  <LabelInputContainer>
                    <Label htmlFor="lastName">Apellido</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="Tu apellido"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </LabelInputContainer>
                </div>
                <LabelInputContainer>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="tu@email.com"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+57 300 123 4567"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nombre de tu empresa"
                    type="text"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="message">¿En qué puedo ayudarte?</Label>
                  <Input
                    id="message"
                    name="message"
                    placeholder="Cuéntame sobre tu negocio, tus objetivos y los desafíos que enfrentas..."
                    type="text"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </LabelInputContainer>

                <div className="flex justify-center py-4">
                  <ReCaptcha
                    onVerify={handleRecaptchaVerify}
                    onExpired={handleRecaptchaExpired}
                  />
                </div>

                <RippleButton
                  type="submit"
                  size="lg"
                  disabled={isSubmitting || !recaptchaToken}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje →'}
                  <RippleButtonRipples />
                </RippleButton>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};

export default ContactForm;
