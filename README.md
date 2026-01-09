# Dario Growth Hub

Sitio web oficial de Dario, especialista en growth marketing y estrategias de crecimiento empresarial.

## Descripción

Dario Growth Hub es una plataforma web que presenta los servicios de consultoría en growth marketing, estudios de caso, blog y información de contacto de Dario. El sitio está diseñado para mostrar expertise en estrategias de crecimiento y ayudar a empresas a escalar sus operaciones.

## Tecnologías

Este proyecto está construido con:

- **Vite** - Herramienta de build rápida y servidor de desarrollo
- **TypeScript** - Tipado estático para JavaScript
- **React 18** - Biblioteca de interfaz de usuario
- **Tailwind CSS** - Framework de CSS utility-first
- **shadcn/ui** - Componentes UI reutilizables y accesibles
- **React Router** - Enrutamiento para aplicaciones React
- **React Hook Form** - Gestión de formularios
- **Lucide React** - Iconos modernos
- **Recharts** - Librería de gráficos

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd dario-growth-hub
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```

4. **Construir para producción**
   ```bash
   npm run build
   ```

5. **Vista previa de la build de producción**
   ```bash
   npm run preview
   ```

## Scripts Disponibles

- `npm run dev` - Ejecuta el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run build:dev` - Construye la aplicación en modo desarrollo
- `npm run lint` - Ejecuta ESLint para revisar el código
- `npm run preview` - Vista previa de la build de producción

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes de shadcn/ui
│   ├── Header.tsx      # Encabezado del sitio
│   ├── Hero.tsx        # Sección hero
│   ├── About.tsx       # Sección sobre Dario
│   ├── CaseStudies.tsx # Estudios de caso
│   ├── Blog.tsx        # Sección del blog
│   ├── Contact.tsx     # Formulario de contacto
│   └── Footer.tsx      # Pie de página
├── pages/              # Páginas de la aplicación
│   ├── Index.tsx       # Página principal
│   ├── BlogPost.tsx    # Página de post del blog
│   └── NotFound.tsx    # Página 404
├── hooks/              # Custom hooks
├── lib/                # Utilidades y configuraciones
├── assets/             # Imágenes y recursos estáticos
├── App.tsx             # Componente principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales
```

## Características

- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **SEO Optimizado**: Estructura semántica y meta tags optimizados
- **Componentes Modulares**: Arquitectura de componentes reutilizables
- **Formularios Funcionales**: Contacto y newsletter con validación
- **Navegación Fluida**: Transiciones suaves entre secciones
- **Temas Claro/Oscuro**: Soporte para modo oscuro
- **Performance Optimizado**: Carga rápida y bundle optimizado

## Servicios de Dario

- **Growth Marketing Strategy**
- **Conversion Rate Optimization**
- **Data Analytics & Insights**
- **Customer Acquisition**
- **Retention & Loyalty Programs**
- **Growth Experiments & Testing**

## Desarrollo

Para contribuir al proyecto:

1. Asegúrate de tener Node.js y npm instalados
2. Clona el repositorio
3. Instala las dependencias con `npm install`
4. Ejecuta `npm run dev` para el desarrollo
5. Haz tus cambios y prueba que todo funcione
6. Ejecuta `npm run lint` para verificar el código
7. Construye el proyecto con `npm run build`

## Licencia

Este proyecto es privado y todos los derechos están reservados.

## Contacto

Para más información sobre los servicios de Dario o consultas sobre el sitio web, visita la sección de contacto en el sitio web.
