import { useEffect, useRef, memo } from 'react';
import { RECAPTCHA_CONFIG } from '@/config/recaptcha';

interface ReCaptchaProps {
  onVerify: (token: string) => void;
  onExpired?: () => void;
  onError?: () => void;
}

export const ReCaptcha = memo(({ onVerify, onExpired, onError }: ReCaptchaProps) => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const callbacksRef = useRef({ onVerify, onExpired, onError });

  // Actualizar las callbacks sin causar re-render
  useEffect(() => {
    callbacksRef.current = { onVerify, onExpired, onError };
  }, [onVerify, onExpired, onError]);

  useEffect(() => {
    const loadRecaptcha = () => {
      if (window.grecaptcha && recaptchaRef.current && widgetIdRef.current === null) {
        try {
          console.log('🔑 Cargando reCAPTCHA con site key:', RECAPTCHA_CONFIG.siteKey.substring(0, 20) + '...');

          widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
            sitekey: RECAPTCHA_CONFIG.siteKey,
            callback: (token: string) => callbacksRef.current.onVerify(token),
            'expired-callback': () => callbacksRef.current.onExpired?.(),
            'error-callback': () => callbacksRef.current.onError?.(),
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

    // Cleanup: NO resetear el widget para evitar parpadeos
    return () => {
      // Solo limpiamos cuando el componente se desmonta completamente
    };
  }, []); // Sin dependencias - solo se ejecuta una vez

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
});

ReCaptcha.displayName = 'ReCaptcha';

// Hook para exponer el método reset
export const useRecaptcha = () => {
  const recaptchaRef = useRef<{ reset: () => void }>(null);
  return recaptchaRef;
};
