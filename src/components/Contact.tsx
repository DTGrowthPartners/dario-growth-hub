"use client";
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';
import { RippleButton, RippleButtonRipples } from '@/components/animate-ui/components/buttons/ripple';
import { BackgroundLines } from '@/components/ui/background-lines';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    setIsSubmitting(true);

    // Create WhatsApp message
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();
    const companyText = formData.company ? `\n🏢 Empresa: ${formData.company}` : '';
    const phoneText = formData.phone ? `\n📱 Teléfono: ${formData.phone}` : '';

    const whatsappMessage = `Hola! Soy ${fullName} y me gustaría contactarte.

📧 Email: ${formData.email}${phoneText}${companyText}

💬 Mensaje:
${formData.message}`;

    const whatsappNumber = '573007189383';
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Simulate brief loading
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast.success('Redirigiendo a WhatsApp...');

    // Reset form after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <BackgroundLines className="md:min-h-screen flex items-center bg-[#0A0A0A]" svgOptions={{ duration: 12 }}>
      <section id="contacto" className="w-full py-[5vh] md:py-20 lg:py-24 relative z-10">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <p className="text-primary font-semibold text-sm tracking-wider uppercase mb-3">
                Contacto
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Hablemos de crecimiento
              </h2>
              <p className="text-base text-muted-foreground">
                Solo para founders y negocios que quieran escalar con estrategia sólida.
                Cuéntame sobre tu proyecto y exploraremos cómo puedo ayudarte.
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
              <div className="shadow-input mx-auto w-full rounded-2xl bg-card p-6 border border-border">
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

                  <RippleButton
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
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
    </BackgroundLines>
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

export default Contact;
