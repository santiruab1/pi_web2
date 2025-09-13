# Mi App - Proyecto Next.js

Una aplicación web moderna construida con Next.js 14, TypeScript, y Tailwind CSS que implementa una arquitectura completa con autenticación, dashboard, gestión de productos y más.

## 🚀 Características

- **Next.js 14** con App Router
- **TypeScript** para tipado estático
- **Tailwind CSS** para estilos
- **Arquitectura modular** bien organizada
- **Autenticación completa** (login/registro)
- **Dashboard interactivo** con análisis
- **Gestión de productos** con catálogo
- **Componentes reutilizables**
- **Hooks personalizados**
- **Context API** para estado global
- **Middleware** para protección de rutas
- **Tests unitarios** con Jest y Testing Library

## 📁 Estructura del Proyecto

```
/project-root
├── /app                    # Carpeta principal para App Router
│   ├── /api               # Rutas de API
│   ├── /auth              # Módulo de autenticación
│   ├── /dashboard         # Módulo de dashboard
│   ├── /products          # Módulo de productos
│   ├── globals.css        # Estilos globales
│   ├── layout.tsx         # Layout raíz
│   ├── page.tsx           # Página raíz (home)
│   └── not-found.tsx      # Página 404 personalizada
├── /components            # Componentes reutilizables
│   ├── /ui               # Componentes de UI genéricos
│   ├── /layout           # Componentes de layout
│   ├── /auth             # Componentes de autenticación
│   └── /products         # Componentes de productos
├── /lib                   # Utilidades y funciones
├── /hooks                 # Hooks personalizados
├── /context              # Contextos para estado global
├── /middleware           # Middleware de Next.js
├── /styles               # Estilos modulares
├── /tests                # Pruebas unitarias
└── /public               # Archivos estáticos
```

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone <repository-url>
cd pi_web2
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. Configura las variables de entorno:
```bash
cp .env.example .env.local
```

4. Ejecuta el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📱 Rutas Principales

### Públicas
- `/` - Página de inicio
- `/products` - Catálogo de productos
- `/products/[id]` - Detalle de producto
- `/auth/login` - Inicio de sesión
- `/auth/register` - Registro

### Protegidas (requieren autenticación)
- `/dashboard` - Dashboard principal
- `/dashboard/analytics` - Análisis y métricas
- `/dashboard/settings` - Configuración de usuario

### API
- `/api/users` - Gestión de usuarios
- `/api/products` - Gestión de productos
- `/api/auth/*` - Endpoints de autenticación

## 🧪 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia el servidor de desarrollo
npm run build        # Construye la aplicación para producción
npm run start        # Inicia el servidor de producción
npm run lint         # Ejecuta ESLint
npm run lint:fix     # Ejecuta ESLint y corrige errores automáticamente

# Testing
npm run test         # Ejecuta todos los tests
npm run test:watch   # Ejecuta tests en modo watch
npm run test:coverage # Ejecuta tests con reporte de cobertura

# Utilidades
npm run type-check   # Verifica tipos de TypeScript
npm run analyze      # Analiza el bundle de la aplicación
```

## 🎨 Componentes Principales

### UI Components
- **Button** - Botón reutilizable con variantes
- **Input** - Campo de entrada con validación
- **Card** - Contenedor con sombra y padding

### Layout Components
- **Header** - Navegación principal
- **Footer** - Pie de página
- **Sidebar** - Barra lateral para dashboard

### Feature Components
- **LoginForm** - Formulario de inicio de sesión
- **RegisterForm** - Formulario de registro
- **ProductCard** - Tarjeta de producto
- **ProductDetails** - Detalles completos del producto

## 🔧 Hooks Personalizados

- **useAuth** - Gestión de autenticación
- **useFetchData** - Peticiones HTTP reutilizables
- **usePaginatedData** - Datos con paginación
- **useMutation** - Mutaciones (POST, PUT, DELETE)

## 🌐 Context Providers

- **AuthContext** - Estado de autenticación global
- **ThemeContext** - Gestión de tema (claro/oscuro)

## 🛡️ Middleware

El middleware protege rutas y añade headers de seguridad:
- Redirecciona usuarios no autenticados
- Protege rutas API
- Añade headers de seguridad (CSP, CORS, etc.)

## 🧪 Testing

El proyecto incluye tests unitarios para:
- Componentes UI
- Funciones de utilidad
- Hooks personalizados

Ejecutar tests:
```bash
npm run test
```

## 🎯 Configuración de TypeScript

Configuración estricta con:
- Tipado estático completo
- Interfaces bien definidas
- Tipos compartidos en `/lib/types.ts`

## 🎨 Estilos

- **Tailwind CSS** para utilidades
- **CSS Modules** para componentes específicos
- **Modo oscuro** soportado
- **Responsive design** en todos los componentes

## 📦 Dependencias Principales

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework CSS
- **React Hook Form** - Gestión de formularios
- **Jest & Testing Library** - Testing

## 🚀 Despliegue

### Vercel (Recomendado)
1. Conecta tu repositorio con Vercel
2. Configura las variables de entorno
3. Despliega automáticamente

### Docker
```bash
docker build -t mi-app .
docker run -p 3000:3000 mi-app
```

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- Tu Nombre - [@tu-usuario](https://github.com/tu-usuario)

## 🆘 Soporte

Si tienes alguna pregunta o problema, por favor abre un [issue](https://github.com/tu-usuario/pi_web2/issues).
