# Configuración de Google reCAPTCHA v2

Este documento explica cómo se ha integrado Google reCAPTCHA v2 en el proyecto Dario Growth Hub.

## 📋 Resumen de la Integración

Se ha integrado reCAPTCHA v2 en todos los formularios de contacto del proyecto para protegerlos contra spam y bots.

### Formularios Protegidos

1. **Contact.tsx** - Formulario principal de contacto (`/contact`)
2. **ContactForm.tsx** - Formulario reutilizable usado en:
   - Página de Meta Ads (`/ads`)
   - Página de Desarrollo Web (`/web`)
   - Página de Sistemas y Automatizaciones

## 🔑 Claves de reCAPTCHA

Las claves de reCAPTCHA están configuradas en el archivo `.env.local`:

```env
VITE_RECAPTCHA_SITE_KEY=6LdNpU8sAAAAJV0ZJYyorkdSJp8f68yplrOCaTR
VITE_RECAPTCHA_SECRET_KEY=6LdNpU8sAAAAP5ZneDSJOBSRJJu2jdgGfOdIBKB
```

> ⚠️ **IMPORTANTE**: El archivo `.env.local` está incluido en `.gitignore` y NO se subirá a GitHub. Asegúrate de configurar estas variables en tu entorno de producción.

## 📦 Archivos Creados/Modificados

### Nuevos Archivos

1. **`.env.local`** - Variables de entorno con las claves de reCAPTCHA
2. **`src/components/ReCaptcha.tsx`** - Componente React para renderizar reCAPTCHA
3. **`src/lib/verifyRecaptcha.ts`** - Utilidad para verificación del lado del servidor (referencia)

### Archivos Modificados

1. **`index.html`** - Script de reCAPTCHA agregado
2. **`src/components/Contact.tsx`** - Integración de reCAPTCHA
3. **`src/components/ContactForm.tsx`** - Integración de reCAPTCHA
4. **`src/lib/submitLead.ts`** - Soporte para token de reCAPTCHA
5. **`package.json`** - Dependencia `@types/grecaptcha` agregada

## 🛠️ Cómo Funciona

### 1. Cliente (Frontend)

1. El usuario llena el formulario
2. El componente `<ReCaptcha>` renderiza el widget de Google
3. El usuario completa el desafío de reCAPTCHA
4. Google genera un token que se guarda en el estado
5. Al enviar el formulario, se valida que exista el token
6. El token se envía junto con los datos del formulario

### 2. Servidor (Backend)

Actualmente, el proyecto es solo frontend, por lo que:

- ✅ La casilla de reCAPTCHA previene el envío automático de formularios
- ✅ El token se incluye en el payload enviado al CRM externo
- ⚠️ **Pendiente**: Verificación del token en el servidor

## 🔐 Verificación del Lado del Servidor (Recomendado)

Para máxima seguridad, deberías verificar el token de reCAPTCHA en el servidor.

### Opción 1: Backend Node.js/Express

Crea un endpoint en tu servidor:

```javascript
// server.js o api/verify-recaptcha.js
app.post('/api/verify-recaptcha', async (req, res) => {
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();

  if (data.success) {
    res.json({ success: true });
  } else {
    res.status(400).json({ success: false, errors: data['error-codes'] });
  }
});
```

### Opción 2: Serverless Functions (Vercel/Netlify)

**Vercel Functions** (`api/verify-recaptcha.ts`):

```typescript
import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const { token } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();
  return res.json(data);
}
```

**Netlify Functions** (`netlify/functions/verify-recaptcha.ts`):

```typescript
import { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  const { token } = JSON.parse(event.body || '{}');
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  });

  const data = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
```

### Opción 3: Modificar el CRM Externo

Si tienes acceso al backend del CRM (`https://os.dtgrowthpartners.com`), puedes:

1. Agregar verificación de reCAPTCHA en el endpoint `/api/crm/leads/public`
2. El token ya se está enviando en el payload como `recaptchaToken`
3. Verificar el token antes de guardar el lead

## 🚀 Despliegue en Producción

### Variables de Entorno

Configura estas variables en tu plataforma de hosting:

**Vercel:**
```bash
vercel env add VITE_RECAPTCHA_SITE_KEY
vercel env add VITE_RECAPTCHA_SECRET_KEY
```

**Netlify:**
```bash
# En Netlify UI: Site settings > Environment variables
VITE_RECAPTCHA_SITE_KEY=6LdNpU8sAAAAJV0ZJYyorkdSJp8f68yplrOCaTR
VITE_RECAPTCHA_SECRET_KEY=6LdNpU8sAAAAP5ZneDSJOBSRJJu2jdgGfOdIBKB
```

### Dominios Autorizados

Asegúrate de agregar tu dominio de producción en la consola de Google reCAPTCHA:

1. Ve a https://www.google.com/recaptcha/admin
2. Selecciona tu sitio
3. En "Dominios", agrega:
   - `localhost` (para desarrollo)
   - `dairotraslavina.com` (tu dominio de producción)

## 🧪 Pruebas

### Modo de Prueba

Para probar en desarrollo, puedes usar las claves de prueba de Google:

```env
# Claves de prueba (siempre pasan la validación)
VITE_RECAPTCHA_SITE_KEY=6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI
VITE_RECAPTCHA_SECRET_KEY=6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe
```

### Verificar Funcionamiento

1. Inicia el servidor de desarrollo: `npm run dev`
2. Navega a `http://localhost:8080/contact`
3. Llena el formulario
4. Verifica que aparezca la casilla de reCAPTCHA
5. Completa el desafío
6. El botón "Enviar mensaje" debe habilitarse
7. Envía el formulario
8. Verifica en la consola del navegador que el token se envía

## 📚 Documentación Oficial

- **Documentación del cliente**: https://developers.google.com/recaptcha/docs/display
- **Documentación de verificación**: https://developers.google.com/recaptcha/docs/verify
- **Console de administración**: https://www.google.com/recaptcha/admin

## ❓ Preguntas Frecuentes

### ¿Por qué el botón está deshabilitado?

El botón se habilita solo cuando:
1. Todos los campos requeridos están llenos
2. El usuario ha completado el reCAPTCHA

### ¿Qué pasa si expira el reCAPTCHA?

El token de reCAPTCHA expira después de 2 minutos. Si expira:
- Se muestra un mensaje de error
- El usuario debe resolver el reCAPTCHA nuevamente

### ¿Funciona en producción sin backend?

Sí, pero con limitaciones:
- ✅ Previene bots básicos
- ✅ Reduce spam significativamente
- ⚠️ No verifica el token en el servidor (menos seguro)
- ⚠️ Bots sofisticados podrían bypassear la protección

Para máxima seguridad, implementa la verificación del servidor.

## 🔧 Solución de Problemas

### Error: "grecaptcha is not defined"

**Solución**: Asegúrate de que el script de reCAPTCHA esté cargado en `index.html`:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

### Error: "Invalid site key"

**Solución**: Verifica que `VITE_RECAPTCHA_SITE_KEY` esté correctamente configurada en `.env.local`

### El reCAPTCHA no aparece

**Solución**:
1. Verifica la consola del navegador por errores
2. Asegúrate de que el dominio esté autorizado en Google reCAPTCHA
3. Verifica que el script se cargue correctamente

### El formulario no se envía

**Solución**:
1. Abre la consola del navegador
2. Verifica que el token se genere al completar el reCAPTCHA
3. Revisa que `recaptchaToken` no esté vacío

## 📞 Soporte

Para más ayuda, contacta al equipo de desarrollo o revisa la documentación oficial de Google reCAPTCHA.

---

**Última actualización**: 2026-01-19
