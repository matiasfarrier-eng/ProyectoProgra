# Convenciones de nomenclatura

## Archivos y carpetas

- Carpetas: `kebab-case`
- Componentes React: `PascalCase`
- Hooks y utilidades: `camelCase`
- Services, stores, queries y schemas: `kebab-case`

## Componentes

Ejemplos:

- `UserCard.tsx`
- `ProductTable.tsx`
- `LoginForm.tsx`

## Hooks

Ejemplos:

- `useAuth.ts`
- `useProducts.ts`
- `useDebouncedValue.ts`

## Stores

Ejemplos:

- `authStore.ts`
- `productsStore.ts`
- `usersStore.ts`

## Services

Ejemplos:

- `auth.service.ts`
- `users.service.ts`
- `products.service.ts`

## Schemas

Ejemplos:

- `login.schema.ts`
- `product.schema.ts`
- `user.schema.ts`

## Queries

Ejemplos:

- `users.query.ts`
- `products.query.ts`

## Types

Ejemplos:

- `auth.types.ts`
- `user.types.ts`
- `product.types.ts`

## Arquitectura por features

- `src/features/` es el núcleo del proyecto.
- Cada feature debe contener sus propias `api`, `components`, `hooks`, `pages`, `queries`, `schemas`, `services`, `store`, `types` y `utils`.
- No uses carpetas globales de `components/`, `hooks/`, `services/`, `pages/` fuera de `src/features/`.
- `src/shared/` solo debe contener lo que realmente se comparte entre varias features.
- `src/app/` debe estar reservado para el bootstrap de la aplicación, rutas y providers.
- `src/config/` debe estar reservado para configuración global de infraestructura.

## Alias y rutas

- `@app/*` para recursos de aplicación global
- `@config/*` para configuración e infraestructura
- `@features/*` para módulos del dominio funcional
- `@shared/*` para componentes y utilidades compartidas
