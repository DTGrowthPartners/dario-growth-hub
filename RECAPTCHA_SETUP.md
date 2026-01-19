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
VITE_RECAPTCHA_SITE_KEY=6LdNpU8sAAAAAJV02JYyorkdSJp8F68yplrOCaTR
VITE_RECAPTCHA_SECRET_KEY=6LdNpU8sAAAAAP5ZneDSJOBSRJJu2jdgGfOdIBKB
```

> ⚠️ **IMPORTANTE**: El archivo `.env.local` está incluido en `.gitignore` y NO se subirá a GitHub. Asegúrate de configurar estas variables en tu entorno de producción.
>
> ✅ **NOTA**: Estas claves funcionan tanto para `www.dairotraslavina.com` como para `dairotraslavina.com`

## 📦 Archivos Creados/Modificados

### Nuevos Archivos

1. **`.env.local`** - Variables de entorno con las claves de reCAPTCHA
2. **`src/components/ReCaptcha.tsx`** - Componente React optimizado para renderizar reCAPTCHA sin parpadeos
3. **`src/config/recaptcha.ts`** - Configuración centralizada con fallback hardcoded
4. **`src/lib/verifyRecaptcha.ts`** - Utilidad para verificación del lado del servidor (referencia)

### Archivos Modificados

1. **`index.html`** - Script de reCAPTCHA agregado
2. **`src/components/Contact.tsx`** - Integración de reCAPTCHA con callbacks optimizados (useCallback)
3. **`src/components/ContactForm.tsx`** - Integración de reCAPTCHA con callbacks optimizados (useCallback)
4. **`src/lib/submitLead.ts`** - Soporte para token de reCAPTCHA
5. **`package.json`** - Dependencia `@types/grecaptcha` agregada

### Optimizaciones de Rendimiento

El componente ReCaptcha está optimizado para evitar parpadeos y re-renderizados innecesarios:
- ✅ Usa `React.memo` para evitar re-renders cuando las props no cambian
- ✅ Usa `useRef` para mantener callbacks actualizados sin re-renderizar
- ✅ Los componentes padre usan `useCallback` para memoizar las funciones callback
- ✅ El widget de reCAPTCHA se monta una sola vez y persiste durante toda la sesión del formulario

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

### ✅ Funcionamiento Automático

**Buena noticia**: La integración está configurada para funcionar automáticamente en producción SIN necesidad de configurar variables de entorno.

La clave pública (Site Key) está incluida como fallback en `src/config/recaptcha.ts`, por lo que:
- ✅ Funciona en desarrollo (localhost)
- ✅ Funciona en producción (sin configuración adicional)
- ✅ Funciona en ambos dominios: `dairotraslavina.com` y `www.dairotraslavina.com`

### Variables de Entorno (Opcional)

Si prefieres usar variables de entorno, puedes configurarlas en tu plataforma de hosting:

**Vercel:**
```bash
vercel env add VITE_RECAPTCHA_SITE_KEY
vercel env add VITE_RECAPTCHA_SECRET_KEY
```

**Netlify:**
```bash
# En Netlify UI: Site settings > Environment variables
VITE_RECAPTCHA_SITE_KEY=6LdNpU8sAAAAAJV02JYyorkdSJp8F68yplrOCaTR
VITE_RECAPTCHA_SECRET_KEY=6LdNpU8sAAAAAP5ZneDSJOBSRJJu2jdgGfOdIBKB
```

> **Nota**: Si no configuras las variables de entorno, el sistema usará automáticamente las claves hardcoded en el código.

### Dominios Autorizados

✅ **Ya configurado**: Las claves actuales funcionan para ambos dominios:
   - `localhost` (para desarrollo)
   - `dairotraslavina.com`
   - `www.dairotraslavina.com`

Si necesitas agregar más dominios, ve a https://www.google.com/recaptcha/admin

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

### 🚨 El reCAPTCHA no aparece en producción (pero sí en localhost)

**Problema Común**: Este es el error más frecuente cuando se despliega a producción.

**Solución Implementada**:
- ✅ La clave pública está hardcoded como fallback en `src/config/recaptcha.ts`
- ✅ Ya no es necesario configurar variables de entorno
- ✅ Funciona automáticamente en producción

**Si aún no aparece, verifica**:
1. Abre la consola del navegador (F12)
2. Busca el mensaje: `🔑 Cargando reCAPTCHA con site key: 6LdNpU8sAAAAAJV02JYy...`
3. Verifica que no haya errores relacionados con reCAPTCHA
4. Asegúrate de que el dominio esté en la lista de dominios autorizados en Google reCAPTCHA

**Checklist de depuración**:
```
✅ El script de reCAPTCHA está en index.html
✅ src/config/recaptcha.ts existe y tiene la clave correcta
✅ El componente ReCaptcha importa RECAPTCHA_CONFIG
✅ El dominio está autorizado en console.cloud.google.com
```

### Error: "grecaptcha is not defined"

**Solución**: Asegúrate de que el script de reCAPTCHA esté cargado en `index.html`:

```html
<script src="https://www.google.com/recaptcha/api.js" async defer></script>
```

### Error: "Invalid site key"

**Causas posibles**:
1. La clave en `src/config/recaptcha.ts` es incorrecta
2. El dominio no está autorizado en Google reCAPTCHA Console

**Solución**:
- Verifica que la clave sea: `6LdNpU8sAAAAAJV02JYyorkdSJp8F68yplrOCaTR`
- Autoriza tu dominio en https://www.google.com/recaptcha/admin

### El reCAPTCHA no aparece (general)

**Solución**:
1. Verifica la consola del navegador por errores
2. Asegúrate de que el dominio esté autorizado en Google reCAPTCHA
3. Verifica que el script se cargue correctamente (Network tab)
4. Limpia caché y recarga (Ctrl + Shift + R)

### El formulario no se envía

**Solución**:
1. Abre la consola del navegador
2. Verifica que el token se genere al completar el reCAPTCHA
3. Revisa que `recaptchaToken` no esté vacío
4. Busca el mensaje `✅ reCAPTCHA renderizado exitosamente`

### El reCAPTCHA parpadea al escribir en el formulario

**Problema**: El widget de reCAPTCHA desaparece y reaparece al llenar los campos del formulario.

**Causa**: Re-renderizados innecesarios del componente ReCaptcha causados por callbacks que se recrean en cada render.

**Solución Implementada**:
- ✅ El componente `ReCaptcha` usa `React.memo` para evitar re-renders innecesarios
- ✅ Los callbacks (`onVerify`, `onExpired`, `onError`) están memoizados con `useCallback`
- ✅ Las referencias a los callbacks se mantienen estables usando `useRef`
- ✅ El widget se monta una sola vez y no se resetea hasta que se envíe el formulario

**Si el problema persiste**:
1. Verifica que los componentes `Contact.tsx` y `ContactForm.tsx` usen `useCallback`
2. Asegúrate de que `ReCaptcha.tsx` use `React.memo`
3. Limpia el caché del navegador y recarga la página

## 📞 Soporte

Para más ayuda, contacta al equipo de desarrollo o revisa la documentación oficial de Google reCAPTCHA.

---

**Última actualización**: 2026-01-19
