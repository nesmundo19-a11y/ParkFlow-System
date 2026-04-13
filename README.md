# 🦅 ParkFlow - Sistema de Gestión de Estacionamiento Inteligente

> **Proyecto de Ingeniería de Sistemas** > **Ubicación:** Nodo Comercial - Maicao, La Guajira  
> **Estado:** Fase de Documentación y Prototipado Funcional

---

## 📝 1. Información General
* **Nombre del Proyecto:** ParkFlow
* **Metodología:** Ágil (Scrum)
* **Enfoque:** Optimización de movilidad urbana y logística comercial.

---

## 🚨 2. Descripción del Problema
En el municipio de **Maicao**, la gestión de estacionamientos se realiza mayoritariamente de forma empírica y manual, lo que genera saturación vehicular, pérdida de tiempo para los conductores y falta de datos precisos para los administradores.

**ParkFlow** resuelve esta problemática digitalizando el control de cupos en tiempo real. Mediante una arquitectura técnica moderna, permitimos visualizar la disponibilidad inmediata, reduciendo la congestión en las zonas comerciales y profesionalizando la administración de parqueaderos locales.

---

## 🎯 3. Público Objetivo
1.  **Administradores de Estacionamientos:** Propietarios en Maicao que necesitan modernizar su control de ingresos, salidas y ocupación total.
2.  **Conductores (Locales y Visitantes):** Usuarios que buscan una experiencia de parqueo rápida, segura y asistida por tecnología en el sector comercial.

---

## 👥 4. Listado de Integrantes y Roles
| Integrante | Rol | Responsabilidad Principal |
| :--- | :--- | :--- |
| **Néstor Granadillo** | **Project Manager** | Gestión del Backlog, Arquitectura de Software y Lógica de Negocio. |
| **Savier Berrio** | **Frontend Lead** | Desarrollo de Interfaz (UI), Experiencia de Usuario (UX) y Maquetación. |

---

## 🏗️ 5. Arquitectura Técnica (Layout & Estructura)

El código ha sido organizado siguiendo un orden lógico de ingeniería para garantizar la mantenibilidad y escalabilidad:

### ⚙️ El "Cerebro" (Variables `:root`)
Centralizamos la identidad visual mediante variables globales. Esto permite que el sistema sea fácil de actualizar visualmente (colores negro mate y dorado) desde un solo punto.

### 📐 Estructura Base (`Reset` & `Body`)
Implementamos un sistema de **CSS Grid** en el `body` para definir una estructura de tres bloques coherentes:
* **Header:** Navegación persistente y branding.
* **Main:** Contenedor dinámico de la lógica (Dashboard y Mapa).
* **Footer:** Información de contacto y validación de sede local.

### ⚡ Componentes de Interfaz (`Navbar` & `Hero`)
* **Flexbox:** Utilizado para la distribución proporcional y responsiva de los elementos de navegación.
* **@Keyframes:** Animaciones personalizadas para mejorar la interactividad y el "feeling" profesional de la plataforma.

### 📊 Gestión de Estados (`Status` & `Parking Grid`)
Implementamos un **Grid Dinámico** con `auto-fit` y `minmax` para el mapa de cupos. Esto asegura que la plataforma sea **100% Responsiva**, adaptándose perfectamente desde monitores de escritorio hasta dispositivos móviles en la calle.

---

## 📖 6. Historias de Usuario
* **Conductor:** "Quiero visualizar los cupos libres en tiempo real para ahorrar tiempo y combustible".
* **Administrador:** "Quiero registrar ingresos y salidas de forma ágil para tener control exacto del inventario".
* **Usuario Nuevo:** "Quiero ver la ubicación y contacto de la sede en Maicao para confiar en el servicio".

---
*© 2026 ParkFlow | Ingeniería de Sistemas - Universidad de la Guajira*
