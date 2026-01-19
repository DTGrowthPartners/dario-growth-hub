/**
 * Configuración de Google reCAPTCHA v2
 *
 * La Site Key es pública y segura para exponer en el código del cliente.
 * La Secret Key debe mantenerse SOLO en el servidor.
 */

export const RECAPTCHA_CONFIG = {
  // Site Key (pública - segura para el frontend)
  siteKey: import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LdNpU8sAAAAAJV02JYyorkdSJp8F68yplrOCaTR',

  // Esta configuración permite que reCAPTCHA funcione en:
  // - localhost (desarrollo)
  // - dairotraslavina.com (producción)
  // - www.dairotraslavina.com (producción con www)
} as const;

// Validación en desarrollo
if (import.meta.env.DEV) {
  console.log('📋 reCAPTCHA Config:', {
    siteKey: RECAPTCHA_CONFIG.siteKey.substring(0, 20) + '...',
    source: import.meta.env.VITE_RECAPTCHA_SITE_KEY ? 'env variable' : 'hardcoded fallback'
  });
}
