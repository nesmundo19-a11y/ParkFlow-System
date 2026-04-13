# ParkFlow

## Elevator Pitch

1. El **"Cerebro"** del Estilo (Variables **:root**)
Variables Globales (:root).Centralizamos toda la identidad visual (colores dorado y negro, sombras y transiciones). Esto permite que el código sea mantenible: si quiero cambiar el color de la marca, lo hago en una sola línea y todo el sitio se actualiza.

2. Estructura Base (**Reset y Body**)
El Reset para limpiar márgenes del navegador y la configuración del Body. Aquí es donde aplicamos el primer CSS Grid para definir que la página siempre tenga un Header arriba, el Contenido en el medio y el Footer abajo, ocupando el 100% de la altura de la pantalla."

3. Componentes de Interfaz (**Navbar y Hero**)
Componentes visuales.Navbar usa Flexbox para separar el logo de los enlaces de forma automática. La sección Hero, donde usamos animaciones (@keyframes) para que el ícono flote, dándole dinamismo y un toque moderno a la bienvenida del usuario.

4. Paneles de Información (**Status y Guía**)
Paneles de estado y la guía de inducción. Aquí usamos de nuevo Grillas Responsivas. Cada tarjeta tiene efectos de hover para que el usuario sienta que la interfaz reacciona a sus acciones.

5. El Corazón Técnico (**Parking Map - Grid de Cupos**)
El Mapa de Parqueo. Está construido íntegramente con un Grid dinámico. Los estados **'Libre' (verde)** y **'Ocupado' (rojo)** se diferencian visualmente con gradientes modernos, y todo se ajusta automáticamente al tamaño del dispositivo."

6. Capas de Interacción (**Modales y Notificaciones**)
Los Modales y Notificaciones. Usamos posicionamiento fixed y backdrop-filter para crear ese efecto de desenfoque cuando se abre un formulario de reserva, manteniendo el enfoque del usuario.

7.El Cierre (**Footer y Media Queries**)
El Footer enfocado en Maicao y, lo más importante, las Media Queries. Aquí es donde el código se adapta a tablets, computadores y celulares

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

## Historias de Usuario
- **Como conductor**, quiero ver cupos disponibles en tiempo real para ahorrar tiempo y localizar rápidamente dónde estacionar.
- **Como visitante**, quiero reservar un cupo con mi placa y tipo de vehículo para asegurar el espacio antes de llegar.
- **Como administrador**, quiero liberar cupos ocupados desde un panel de control para mantener la disponibilidad actualizada y la operación eficiente.

## Taller de Roles
* **Néstor Granadillo:** Gerente de Proyecto (Project Manager).
* **Savier Berrio:** Líder de Desarrollo Frontend.

## 🛠️ Arquitectura Técnica
Para garantizar el cumplimiento de los criterios de **Factibilidad y Coherencia**, el sistema ha sido desarrollado bajo el siguiente stack:

* **HTML5 Semántico:** Estructura clara y accesible para cada sección del producto.
* **CSS3 Moderno:** * **CSS Grid:** Implementado en el layout principal (`body`) y en el tablero de cupos dinámico.
    * **Flexbox:** Utilizado en barras de navegación, tarjetas de estado y controles internos.
    * **Diseño High-End:** Paleta de colores Negro Mate y Dorado para una estética profesional.
* **JavaScript (Vanilla):** Lógica pura para la gestión de modales, notificaciones y validación de formularios sin dependencias externas.
* **Web Storage:** Preparado para la persistencia de datos local, asegurando la viabilidad técnica del proyecto.
