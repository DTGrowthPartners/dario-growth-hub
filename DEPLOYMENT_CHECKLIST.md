# ✅ Checklist de Despliegue - reCAPTCHA

## Antes de Desplegar

- [x] Claves de reCAPTCHA configuradas en el código
- [x] Fallback hardcoded implementado en `src/config/recaptcha.ts`
- [x] Script de reCAPTCHA agregado en `index.html`
- [x] Componentes de formulario actualizados

## Después de Desplegar

### 1. Verificar que reCAPTCHA funcione

1. Abre tu sitio en producción: `https://dairotraslavina.com/contact`
2. Abre la consola del navegador (F12)
3. Busca estos mensajes:
   - `🔑 Cargando reCAPTCHA con site key: 6LdNpU8sAAAAAJV02JYy...`
   - `✅ reCAPTCHA renderizado exitosamente`

### 2. Si NO aparece el reCAPTCHA

**Paso 1: Verifica la consola**
- ¿Hay algún error relacionado con reCAPTCHA?
- ¿Aparece el mensaje de carga?

**Paso 2: Verifica el dominio en Google reCAPTCHA**
1. Ve a https://www.google.com/recaptcha/admin
2. Selecciona tu sitio
3. Verifica que estos dominios estén autorizados:
   - `dairotraslavina.com`
   - `www.dairotraslavina.com`
   - `localhost` (para desarrollo)

**Paso 3: Limpia caché**
- Presiona `Ctrl + Shift + R` (o `Cmd + Shift + R` en Mac)
- Esto fuerza la recarga sin caché

**Paso 4: Verifica el build**
- Asegúrate de que `src/config/recaptcha.ts` esté incluido en el build
- Verifica que el script en `index.html` se esté cargando

### 3. Prueba el formulario completo

1. Llena todos los campos del formulario
2. Completa el reCAPTCHA
3. Haz clic en "Enviar mensaje"
4. Deberías:
   - Ver el mensaje de éxito
   - Ser redirigido a WhatsApp
   - El lead debería guardarse en localStorage

### 4. Verifica en diferentes páginas

Prueba el reCAPTCHA en todas estas páginas:
- [ ] `/contact` - Formulario principal
- [ ] `/ads` - Formulario de Meta Ads
- [ ] `/web` - Formulario de Desarrollo Web

## 🐛 Problemas Comunes

### "Invalid domain for site key"

**Causa**: El dominio no está autorizado en Google reCAPTCHA

**Solución**:
1. Ve a https://www.google.com/recaptcha/admin
2. Agrega tu dominio a la lista de dominios permitidos

### El reCAPTCHA no aparece pero no hay errores

**Causa**: El script de reCAPTCHA no se cargó

**Solución**:
1. Verifica en Network tab (F12 > Network) que se cargue `api.js`
2. Busca: `https://www.google.com/recaptcha/api.js`
3. Si falla, verifica tu conexión a internet o firewall

### El build no incluye el archivo de configuración

**Causa**: Vite puede no estar incluyendo `src/config/recaptcha.ts`

**Solución**:
1. Haz un nuevo build: `npm run build`
2. Verifica que el archivo se importe correctamente
3. Despliega de nuevo

## 📊 Monitoreo

### Logs a buscar en la consola

✅ **Funcionando correctamente**:
```
📋 reCAPTCHA Config: { siteKey: '6LdNpU8sAAAAAJV02JYy...', source: 'hardcoded fallback' }
🔑 Cargando reCAPTCHA con site key: 6LdNpU8sAAAAAJV02JYy...
✅ reCAPTCHA renderizado exitosamente
```

❌ **Con errores**:
```
❌ Error rendering reCAPTCHA: [mensaje de error]
```

## 🎯 Objetivo

Después de desplegar, el reCAPTCHA debe:
- ✅ Aparecer en todos los formularios
- ✅ Funcionar en ambos dominios (con y sin www)
- ✅ Bloquear el envío del formulario hasta completarse
- ✅ Incluir el token en el payload del CRM

## 📞 Contacto

Si después de seguir todos estos pasos el reCAPTCHA aún no funciona:
1. Revisa la documentación completa en `RECAPTCHA_SETUP.md`
2. Verifica los logs en la consola del navegador
3. Contacta al equipo de desarrollo con los logs de error

---

**Última actualización**: 2026-01-19
