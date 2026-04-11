# 🎯 CHEAT SHEET - PARKFLOW QUICK REFERENCE

## 📌 Colores del Sistema
```css
--gold: #d4af37          /* Principal */
--dark: #000000          /* Fondo */
--green: #2ecc71         /* Disponible */
--red: #e74c3c           /* Ocupado */
```

## 🎮 IDs de Secciones
```html
id="inicio"      → Hero section (arriba)
id="induccion"   → Guía 3 pasos
id="reserva"     → Mapa de estacionamiento
id="contacto"    → Footer
```

## 🔑 localStorage
```javascript
// Guardar
localStorage.setItem('parkflow_reservations', JSON.stringify(reservaciones));

// Cargar
const reservaciones = JSON.parse(localStorage.getItem('parkflow_reservations'));

// Limpiar
localStorage.clear();
```

## 🎨 Clases CSS Útiles
```css
.navbar              → Barra de navegación sticky
.hero                → Sección principal
.parking-spot        → Cupo de estacionamiento
.available           → Cupo disponible
.occupied            → Cupo ocupado
.modal               → Ventana emergente
.btn-reserva         → Botón de acción
.notification        → Mensaje de notificación
```

## ⚙️ Funciones Principales

### Inicializar sistema
```javascript
initializeParkingMap()      // Crear 16 cupos
loadReservationsFromStorage() // Cargar datos
updateParkingStats()        // Actualizar contadores
setupEventListeners()       // Configurar navegación
setupFormHandlers()         // Configurar modales
```

### Abrir/Cerrar Modales
```javascript
// Abirir modal de reserva
document.getElementById('reservationModal').classList.add('show');

// Cerrar modal
document.getElementById('reservationModal').classList.remove('show');

// Abirir modal de admin
document.getElementById('adminModal').classList.add('show');
```

### Mostrar Notificaciones
```javascript
showSuccessNotification('¡Éxito!');   // Verde
showErrorNotification('Error');       // Rojo
```

### Validar Placa
```javascript
const plateRegex = /^[A-Z]{3}-\d{3}$/;
// Válido: ABC-123
// Inválido: abc-123, AB12, ABC-12
```

## 📊 Estructura de Datos - Reservación
```javascript
{
    spotId: "A1",                           // Cupo (A1-D4)
    plate: "ABC-123",                       // Placa
    type: "auto",                           // "auto" o "moto"
    timestamp: "2026-03-21T14:30:00.000Z"  // Fecha/Hora ISO
}
```

## 🚀 Eventos Principales

### Click en Cupo
```javascript
.parking-spot.onclick = () => openReservationModal(spotId)
```

### Submit Formulario
```javascript
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Procesar reserva
});
```

### Cerrar Modal (ESC)
```javascript
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modal.classList.remove('show');
    }
});
```

## 🔐 Credenciales Admin
```
Usuario: (cualquiera)
Contraseña: admin123
```

## 📱 Breakpoints Responsivos
```css
Desktop:  > 1024px
Tablet:   768px - 1024px
Móvil:    480px - 768px
Micro:    < 480px
```

## ✅ Condiciones Comunes

### Validar Cupo Disponible
```javascript
const spot = document.querySelector(`[data-spot-id="${spotId}"]`);
if (spot && spot.classList.contains('available')) {
    // Cupo disponible
}
```

### Contar Cupos Usados
```javascript
const occupied = reservations.length;
const free = 16 - occupied;
```

### Buscar Reservación por Placa
```javascript
const reservation = reservations.find(r => r.plate === plate);
```

### Filtrar por Tipo de Vehículo
```javascript
const motorcycles = reservations.filter(r => r.type === 'moto');
const cars = reservations.filter(r => r.type === 'auto');
```

## 🎬 Transiciones CSS
```css
--transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

/* Uso */
transition: var(--transition);

/* Transformaciones comunes */
transform: translateY(-3px);    /* Subir en hover */
transform: scale(1.05);         /* Aumentar tamaño */
transform: rotate(90deg);       /* Girar */
```

## 🌐 CDNs Utilizados
```html
Font Awesome 6.0.0:
https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css
```

## 🛠️ Atajos del Navegador (DevTools)

### Ver localStorage
```javascript
// En consola:
JSON.parse(localStorage.getItem('parkflow_reservations'))
```

### Borrar datos
```javascript
localStorage.clear()
```

### Abrir modal manualmente
```javascript
document.getElementById('adminModal').classList.add('show')
```

### Cambiar tema dinámicamente
```javascript
document.documentElement.style.setProperty('--gold', '#ff6b6b')
```

## 📊 Matriz de Cupos
```
Fila A: A1, A2, A3, A4
Fila B: B1, B2, B3, B4
Fila C: C1, C2, C3, C4
Fila D: D1, D2, D3, D4
```

## 🔍 Debugging Útil

### Verificar si existen datos guardados
```javascript
console.log(localStorage.getItem('parkflow_reservations'));
```

### Ver todas las reservas
```javascript
console.table(JSON.parse(localStorage.getItem('parkflow_reservations')));
```

### Simular una reserva
```javascript
const mockReservation = {
    spotId: "A1",
    plate: "TEST-001",
    type: "auto",
    timestamp: new Date().toISOString()
};
reservations.push(mockReservation);
localStorage.setItem('parkflow_reservations', JSON.stringify(reservations));
```

## 🎯 Flujo de Reservación
```
1. Usuario hace clic en cupo verde
   ↓
2. Se abre modal de reservación
   ↓
3. Usuario ingresa placa + tipo de vehículo
   ↓
4. Validación de formato de placa
   ↓
5. Guardar en localStorage
   ↓
6. Actualizar visualización (cupo → rojo)
   ↓
7. Mostrar notificación de éxito
   ↓
8. Actualizar contadores
```

## 💡 Tips de Estudio

### Para aprender HTML:
- Lee `index.html` sección por sección
- Entiende las IDs y clases
- Identifica la estructura semántica

### Para aprender CSS:
- Empieza con variables (--gold, etc)
- Luego flexbox/grid
- Finalmente animaciones

### Para aprender JavaScript:
- Empieza con funciones simples
- Luego event handling
- Finalmente localStorage y manipulación de datos

### Para aprender Responsive:
- Abre DevTools (F12)
- Cambia tamaño de pantalla
- Observa cómo cambian los breakpoints

---

**Keep this file nearby while studying! 📚**
