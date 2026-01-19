/**
 * Verifica el token de reCAPTCHA en el lado del servidor
 *
 * IMPORTANTE: Esta función requiere un backend para funcionar correctamente.
 * Google reCAPTCHA requiere que la verificación se haga desde el servidor
 * para mantener segura la clave secreta.
 *
 * Opciones de implementación:
 *
 * 1. Si usas un backend Node.js/Express:
 *    - Crea un endpoint POST /api/verify-recaptcha
 *    - El endpoint debe recibir el token del cliente
 *    - Hacer la petición a Google desde el servidor
 *    - Retornar el resultado al cliente
 *
 * 2. Si usas serverless functions (Vercel, Netlify):
 *    - Crea una función serverless
 *    - Usa esta función como referencia
 *    - La clave secreta estará segura en las variables de entorno del servidor
 *
 * 3. Si no tienes backend:
 *    - Por ahora, la validación del lado del cliente es suficiente para reducir spam
 *    - El simple hecho de tener reCAPTCHA activo detiene bots básicos
 *    - Considera implementar un backend simple en el futuro
 */

interface RecaptchaVerificationResponse {
  success: boolean;
  challenge_ts?: string;
  hostname?: string;
  'error-codes'?: string[];
}

/**
 * Verifica un token de reCAPTCHA con la API de Google
 * NOTA: Esta función DEBE ejecutarse en el servidor, no en el cliente
 */
export async function verifyRecaptchaToken(token: string): Promise<boolean> {
  const secretKey = import.meta.env.VITE_RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error('VITE_RECAPTCHA_SECRET_KEY no está configurada');
    return false;
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data: RecaptchaVerificationResponse = await response.json();

    if (data.success) {
      console.log('✅ reCAPTCHA verificado exitosamente');
      return true;
    } else {
      console.error('❌ Error verificando reCAPTCHA:', data['error-codes']);
      return false;
    }
  } catch (error) {
    console.error('❌ Error en la verificación de reCAPTCHA:', error);
    return false;
  }
}

/**
 * Función de ejemplo para implementar en un backend Node.js/Express
 *
 * @example
 * ```typescript
 * // En tu servidor Node.js/Express:
 * app.post('/api/verify-recaptcha', async (req, res) => {
 *   const { token } = req.body;
 *
 *   if (!token) {
 *     return res.status(400).json({ success: false, message: 'Token requerido' });
 *   }
 *
 *   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
 *
 *   try {
 *     const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
 *       method: 'POST',
 *       headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
 *       body: `secret=${secretKey}&response=${token}`,
 *     });
 *
 *     const data = await response.json();
 *
 *     if (data.success) {
 *       res.json({ success: true, message: 'reCAPTCHA verificado' });
 *     } else {
 *       res.status(400).json({
 *         success: false,
 *         message: 'Verificación de reCAPTCHA fallida',
 *         errors: data['error-codes']
 *       });
 *     }
 *   } catch (error) {
 *     res.status(500).json({
 *       success: false,
 *       message: 'Error del servidor al verificar reCAPTCHA'
 *     });
 *   }
 * });
 * ```
 */
export const serverSideVerificationExample = `
// Ejemplo de implementación del lado del servidor
// Ver comentarios en el código para más detalles
`;
