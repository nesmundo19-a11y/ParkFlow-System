# ParkFlow

## Elevator Pitch
ParkFlow es una plataforma de gestión de estacionamiento diseñada para transformar la movilidad urbana de Maicao. Con una interfaz limpia, cobertura local y control en tiempo real, el proyecto demuestra una solución profesional que reduce congestión, mejora la experiencia del conductor y refuerza la operación comercial de la zona.

## Arquitectura Visual
El proyecto utiliza un layout principal basado en **CSS Grid** para organizar el `body` en tres áreas clave: `header`, `main` y `footer`. Esta grilla garantiza que cada bloque del sistema tenga una posición estable, una relación semántica clara y una adaptación natural en distintos tamaños de pantalla.

- `body` con `grid-template-rows: auto 1fr auto` define la estructura general del proyecto.
- `main` se sostiene con una combinación de **CSS Grid** para el tablero de cupos y las secciones de estado, permitiendo una distribución adaptable de tarjetas.
- Las barras de navegación, tarjetas de estado y acciones de reserva utilizan **Flexbox** para centrar contenido, alinear iconos y gestionar espacios internos con precisión.

### Diagrama de Arquitectura

```text
+-----------------------------------------+
| HEADER: Navbar + Marca + Navegación      |
+-----------------------------------------+
| MAIN: Hero + Dashboard + Inducción +     |
|       Parking Grid                       |
+-----------------------------------------+
| FOOTER: Contacto + Tarjeta Nodo Logístico|
+-----------------------------------------+
```

El diseño visual coincide con la lógica de programación solicitada, pues cada sección refleja el flujo del usuario: desde la bienvenida y explicación del servicio, hasta el tablero de reservas y la entrega profesional del footer. El uso de grillas y contenedores flexibles demuestra factibilidad técnica con HTML5, CSS3 y JavaScript puro.

## Historias de Usuario
- **Como conductor**, quiero ver cupos disponibles en tiempo real para ahorrar tiempo y localizar rápidamente dónde estacionar.
- **Como visitante**, quiero reservar un cupo con mi placa y tipo de vehículo para asegurar el espacio antes de llegar.
- **Como administrador**, quiero liberar cupos ocupados desde un panel de control para mantener la disponibilidad actualizada y la operación eficiente.

## Taller de Roles
- **Néstor Granadillo**: Project Manager
- **Savier Berrio**: Frontend Lead

## Arquitectura Técnica
- **HTML5**: Estructura semántica y clara para cada sección del producto.
- **CSS3**: Uso de **Grid** para el layout principal y el tablero de cupos, con **Flexbox** en barras de navegación, tarjetas y controles internos.
- **JavaScript Puro**: Interactividad de reservas, validaciones y modales sin dependencias externas.
- **Vanilla Web Storage**: Preparado para persistir datos en el navegador sin servidores ajenos.
