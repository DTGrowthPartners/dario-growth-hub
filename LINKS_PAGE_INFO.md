# 🔗 Página de Links - Estilo Linktree

## 📍 URL de Acceso

**URL completa**: `https://dairotraslavina.com/links`

Esta página NO está vinculada desde ningún botón o menú de la web. Solo se puede acceder mediante el link directo.

## 🎯 Propósito

Página tipo Linktree diseñada para:
- Agregar a tu perfil de Instagram
- Incluir en tarjetas NFC
- Compartir en redes sociales
- Usar como enlace único en bio

## 📱 Contenido de la Página

### 1. Sección de Perfil
- **Foto**: Imagen de la sección "About" (dario-about-desenfoque.png)
- **Nombre**: Dairo Traslaviña
- **Descripción**: "Growth · Ads · AI"
- **Bio**: "Ayudo a empresas a escalar con estrategia, paid media y sistemas de crecimiento."

### 2. Iconos de Redes Sociales
Ubicados horizontalmente debajo del perfil:
- **LinkedIn**: https://www.linkedin.com/in/trasla
- **Instagram**: https://www.instagram.com/dairotraslavina
- **Facebook**: https://www.facebook.com/dairotraslav
- **WhatsApp**: Enlace directo para contacto

### 3. Enlaces Principales
Botones con estilo moderno que incluyen:

1. **📊 Portafolio & Casos de Éxito**
   - Enlace: `https://dairotraslavina.com/`
   - Descripción: "Conoce los proyectos que he ejecutado"

2. **🎯 Meta Ads & Pauta Digital**
   - Enlace: `https://dairotraslavina.com/ads`
   - Descripción: "Campañas que generan resultados reales"

3. **💻 Desarrollo Web**
   - Enlace: `https://dairotraslavina.com/web`
   - Descripción: "Sitios web enfocados en conversión"

4. **⚡ Sistemas & Automatizaciones**
   - Enlace: `https://dairotraslavina.com/servicios/sistemas-automatizaciones`
   - Descripción: "Optimiza tus procesos con IA"

5. **💬 Contáctame por WhatsApp**
   - Enlace: WhatsApp directo
   - Descripción: "Hablemos sobre tu proyecto"

### 4. Preview de Instagram
- **Grid de fotos** (3 columnas con placeholders)
- **Botón "Seguir en Instagram"** con gradiente característico de Instagram
- Enlace directo a: https://www.instagram.com/dairotraslavina

## 🎨 Diseño

### Características Visuales
- **Fondo**: Gradiente oscuro de negro a gris (#0A0A0A a #1A1A1A)
- **Animaciones**:
  - Fade-in secuencial para cada elemento
  - Hover effects en todos los botones
  - Escala y elevación en interacciones
- **Efectos**:
  - Glow effect en la foto de perfil
  - Gradientes en el botón de Instagram
  - Backdrop blur en botones principales
  - Sombras con color primary

### Colores
- **Primary**: Color definido en tu tema (usado para acentos)
- **Instagram Gradient**: #833AB4 → #E1306C → #FCAF45
- **LinkedIn**: #0A66C2
- **Facebook**: #1877F2
- **WhatsApp**: #25D366

## 📲 Casos de Uso

### Para Instagram Bio
Copia este link y agrégalo a tu bio de Instagram:
```
🔗 https://dairotraslavina.com/links
```

### Para Tarjeta NFC
Programa la tarjeta NFC con la URL:
```
https://dairotraslavina.com/links
```

### Para Compartir en Redes Sociales
Comparte el link directamente en:
- Stories de Instagram
- Posts de LinkedIn
- Estados de WhatsApp
- Biografías de TikTok
- Perfiles de Twitter/X

## 🔧 Mantenimiento

### Actualizar Enlaces
Los enlaces se definen en el archivo:
```
src/pages/LinksPage.tsx
```

Busca el array `mainLinks` para modificar:
- Títulos de los botones
- Descripciones
- URLs de destino
- Emojis

### Actualizar Redes Sociales
Los enlaces de redes sociales están en el array `socialLinks`.

### Cambiar Foto de Perfil
Modifica la importación en la línea 2:
```typescript
import darioImg from '@/assets/dario-about-desenfoque.png';
```

## 🚀 Ventajas de esta Implementación

1. **✅ No aparece en navegación**: Página privada, solo accesible por link directo
2. **✅ Responsive**: Funciona perfectamente en móvil y desktop
3. **✅ Animaciones fluidas**: Entrada progresiva de elementos
4. **✅ SEO optimizado**: Título personalizado "Dairo Traslaviña - Links"
5. **✅ Carga rápida**: Sin dependencias pesadas
6. **✅ Diseño moderno**: Inspirado en Linktree pero con tu identidad
7. **✅ Preview de Instagram**: Incluye sección especial con botón de seguir
8. **✅ Fácil de actualizar**: Todo centralizado en un solo archivo

## 📊 Métricas Sugeridas

Para trackear el rendimiento de esta página, considera agregar:
- Google Analytics event tracking en cada botón
- Facebook Pixel para conversiones
- UTM parameters en los enlaces

Ejemplo de evento para Google Analytics:
```typescript
onClick={() => {
  gtag('event', 'click', {
    event_category: 'Links Page',
    event_label: link.title
  });
  handleLinkClick(link.href, link.isExternal);
}}
```

## 🔐 Seguridad

La página no contiene:
- ❌ Formularios
- ❌ Campos de entrada
- ❌ Cookies
- ❌ Autenticación

Solo enlaces externos seguros (`rel="noopener noreferrer"`).

## 📝 Notas Importantes

1. **No agregues esta ruta al menú de navegación**
2. **No la vincules desde el footer**
3. **Úsala solo como enlace directo externo**
4. **Actualiza los enlaces regularmente**
5. **Prueba todos los enlaces después de cualquier cambio**

---

**Creado**: 2026-01-19
**Última actualización**: 2026-01-19
**URL**: https://dairotraslavina.com/links
