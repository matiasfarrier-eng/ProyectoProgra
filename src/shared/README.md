Shared: recursos reutilizables entre features

Reglas rápidas:
- Coloca aquí solo componentes, hooks, layouts y utilidades usadas por múltiples features.
- Evita poner lógica de negocio específica de un feature en `shared`.
- Estructura recomendada: `components/`, `ui/`, `layouts/`, `hooks/`, `utils/`, `config/`.

Ejemplos de lo que va en `shared`:
- `Button`, `FeatureShell`, `FeatureCard`
- `shared/config` para configuración compartida (API base, rutas comunes)
