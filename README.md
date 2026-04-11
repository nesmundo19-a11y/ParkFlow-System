# ParkFlow

## Elevator Pitch
ParkFlow es un sistema de gestión de estacionamiento que optimiza el parqueo institucional a través de un tablero en tiempo real. La plataforma facilita la reserva y liberación de cupos con una experiencia visual clara, mejorando la organización del flujo vehicular y reduciendo la congestión en instalaciones públicas o privadas.

## Arquitectura Visual
El layout principal de ParkFlow utiliza **CSS Grid** para el mapa de cupos, lo que permite una cuadrícula de estacionamiento responsiva y ordenada. La barra de navegación y los elementos de interfaz emplean **Flexbox** para lograr un alineado fluido y una estructura adaptable en todos los tamaños de pantalla.

## Historias de Usuario
- **Visualización de estados**: Como usuario, quiero ver el tablero en tiempo real con cupos libres, motos y vehículos ocupados para conocer el estado actual del estacionamiento de inmediato.
- **Registro de reserva**: Como visitante, quiero seleccionar un cupo disponible, ingresar mi placa y tipo de vehículo, y confirmar la reserva para asegurar mi espacio.
- **Gestión administrativa de salida**: Como administrador, quiero gestionar la liberación de cupos ocupados a través de un panel seguro para controlar salidas y mantener la disponibilidad actualizada.

## Taller de Roles
- **Néstor Granadillo**: Project Manager
- **Savier Berrio Medina**: Frontend Lead

## Stack Tecnológico
- **HTML5**: Base semántica del proyecto y estructura de la interfaz.
- **CSS3**: Estilos modernos con **Flexbox** y **CSS Grid** para diseño responsivo y experiencia visual cuidada.
- **JavaScript Vanilla**: Lógica de interacción, validación de formularios, control de modales y actualización de estado.
- **Web Storage (localStorage)**: Persistencia de datos en el navegador para conservar reservas entre sesiones sin servidor.
