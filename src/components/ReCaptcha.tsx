import { useEffect, useRef } from 'react';
import { RECAPTCHA_CONFIG } from '@/config/recaptcha';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  onExpired?: () => void;
  onError?: () => void;
}

export const ReCaptcha = ({ onVerify, onExpired, onError }: ReCaptchaProps) => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && widgetIdRef.current === null) {
        try {
          console.log('🔑 Cargando reCAPTCHA con site key:', RECAPTCHA_CONFIG.siteKey.substring(0, 20) + '...');

          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: RECAPTCHA_CONFIG.siteKey,
            callback: onVerify,
            'expired-callback': onExpired,
            'error-callback': onError,
          });

          console.log('✅ reCAPTCHA renderizado exitosamente');
        } catch (error) {
          console.error('❌ Error rendering reCAPTCHA:', error);
        }
      }
    };

    // Si grecaptcha ya está disponible, renderizar inmediatamente
    if (window.grecaptcha?.ready) {
      window.grecaptcha.ready(loadRecaptcha);
    } else {
      // Esperar a que se cargue el script
      const interval = setInterval(() => {
        if (window.grecaptcha?.ready) {
          window.grecaptcha.ready(loadRecaptcha);
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }

    return () => {
      if (widgetIdRef.current !== null && window.grecaptcha) {
        try {
          window.grecaptcha.reset(widgetIdRef.current);
        } catch (error) {
          console.error('Error resetting reCAPTCHA:', error);
        }
      }
    };
  }, [onVerify, onExpired, onError]);

  const reset = () => {
    if (widgetIdRef.current !== null && window.grecaptcha) {
      window.grecaptcha.reset(widgetIdRef.current);
    }
  };

  return (
    <>
      <div ref={recaptchaRef} className="g-recaptcha"></div>
    </>
  );
};

// Hook para exponer el método reset
export const useRecaptcha = () => {
  const recaptchaRef = useRef<{ reset: () => void }>(null);
  return recaptchaRef;
};
