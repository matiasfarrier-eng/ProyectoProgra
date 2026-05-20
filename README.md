# Plantilla Frontend Empresarial

Esta plantilla es una base profesional para proyectos frontend con React, TypeScript y Vite. Está diseñada para aplicaciones escalables y fáciles de mantener, con separación clara de responsabilidades y arquitectura híbrida por features y capas.

## Stack tecnológico

- React
- TypeScript
- Vite
- React Router
- React Hook Form
- Zod
- Zustand
- TanStack Query
- TanStack Table
- Axios
- Tailwind CSS
- shadcn/ui (patrón de diseño de componentes)
- Lucide React

## Arquitectura

La arquitectura principal es **Feature-Based Architecture**. Esto significa que el proyecto se organiza principalmente por dominios de negocio en `src/features`, no por tipos de archivos globales.

Cada feature encapsula su propio dominio y responsabilidades internas:

- `features/auth/`
- `features/users/`
- `features/products/`

Cada feature puede contener:

- `api/`
- `components/`
- `hooks/`
- `pages/`
- `queries/`
- `schemas/`
- `services/`
- `store/`
- `types/`
- `utils/`

Solo los elementos verdaderamente reutilizables entre múltiples features van en `src/shared/`, como botones genéricos, layouts globales, utilidades comunes y componentes UI compartidos.

`src/app/` contiene la configuración de arranque y rutas de la aplicación, `src/config/` contiene la infraestructura de configuración y `src/styles/` la hoja de estilos global.

## Estructura de carpetas

```text
src/
├── app/
│   ├── AppRoutes.tsx
│   ├── providers/
│   │   └── AppProviders.tsx
│   └── pages/
│       └── DashboardPage.tsx
├── config/
│   ├── api.ts
│   ├── axios.ts
│   └── env.ts
├── features/
│   ├── auth/
│   ├── users/
│   └── products/
├── shared/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   └── ui/
├── styles/
│   └── global.css
├── assets/
├── App.tsx
├── main.tsx
└── index.css
```

## Instalación

```bash
npm install
```

## Scripts disponibles

```bash
npm run dev
npm run build
npm run lint
npm run format
```

## Convenciones

Las convenciones principales están documentadas en `CONVENTIONS.md`.

## Escalabilidad

Esta plantilla está pensada para crecer de forma ordenada:

- Nuevos módulos se agregan en `src/features/{feature}`
- Los servicios y esquemas se mantienen independientes por dominio
- El proveedor global de queries y el router se configuran de forma centralizada
- El tipado estricto y las validaciones Zod evitan errores tempranos
- Los componentes compartidos permiten reutilización sin duplicar lógica

## Buenas prácticas incluidas

- Hooks personalizados que encapsulan lógica de consulta
- Stores de Zustand para estado local de cada feature
- Cliente Axios configurado desde un módulo de infraestructura
- Enrutado declarativo con React Router
- Copia de configuración de ESLint y Prettier
- Alias de TypeScript y Vite para importaciones limpias
