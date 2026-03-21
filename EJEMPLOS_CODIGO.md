# 💻 EJEMPLOS DE CÓDIGO - PARKFLOW

## 📚 Ejemplos Prácticos Organizados por Tema

---

## 1️⃣ HTML - ESTRUCTURA BÁSICA

### Ejemplo 1: Navbar Pegajoso (Sticky)
```html
<header class="navbar">
    <div class="logo">PARK<span>FLOW</span></div>
    <nav>
        <a href="#inicio">Inicio</a>
        <a href="#induccion">Inducción</a>
        <a href="#contacto">Contacto</a>
        <button class="btn-reserva" onclick="scrollToReserva()">+ Reservar</button>
    </nav>
</header>
```

**Lecciones:**
- Links internos con `href="#sectionId"`
- Button vs Anchor: Button para actions, Anchor para navegación
- Classes para estilos, IDs para JavaScript

---

### Ejemplo 2: Sección con ID (Para scroll)
```html
<section id="induccion" class="induction">
    <h2>Guía de Ingreso</h2>
    <div class="induction-steps">
        <!-- Contenido -->
    </div>
</section>
```

**Lecciones:**
- Cada sección debe tener un `id` único
- El `id` se usa para scroll suave desde navbar

---

### Ejemplo 3: Elemento Reutilizable (Cupo)
```html
<div class="parking-spot available" data-spot-id="A1">
    <span>A1</span>
</div>
```

**Lecciones:**
- `data-*` para guardar metadata
- Classes para estilos dinámicos (available/occupied)
- Contenedor div para flexibilidad

---

## 2️⃣ CSS - ESTILOS PROFESIONALES

### Ejemplo 1: Variables CSS (Temas)
```css
:root {
    --gold: #d4af37;
    --dark: #000000;
    --green: #2ecc71;
    --red: #e74c3c;
    --transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

body {
    background-color: var(--dark);
    color: var(--white);
}

.btn-primary {
    background: var(--gold);
    transition: var(--transition);
}
```

**Ventajas:**
- ✅ Cambiar tema en un solo lugar
- ✅ Reutilizar valores
- ✅ Código más limpio

---

### Ejemplo 2: Flexbox para Navbar
```css
nav {
    display: flex;
    gap: 2rem;
    align-items: center;
    flex-wrap: wrap;
}

nav a {
    padding: 0.5rem 1rem;
    text-decoration: none;
    color: white;
    transition: var(--transition);
}

nav a:hover {
    color: var(--gold);
    transform: translateY(-2px);
}
```

**Conceptos:**
- `display: flex` - layout horizontal
- `gap` - espacio entre elementos
- `align-items: center` - centrar verticalmente
- `flex-wrap: wrap` - quebrar en móvil

---

### Ejemplo 3: Grid para Cupos
```css
.parking-map {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

.parking-spot {
    aspect-ratio: 1 / 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    transition: var(--transition);
}

.parking-spot.available {
    background-color: var(--green);
}

.parking-spot.available:hover {
    transform: scale(1.05);
}

.parking-spot.occupied {
    background-color: var(--red);
    cursor: not-allowed;
}
```

**Conceptos:**
- `grid-template-columns: repeat(4, 1fr)` - 4 columnas iguales
- `aspect-ratio: 1/1` - cuadrados
- Estados: `.available`, `.occupied`
- Efectos hover: `scale`, `transform`

---

### Ejemplo 4: Animaciones Suaves
```css
@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.modal.show {
    animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
    animation: slideUp 0.3s ease-in-out;
}
```

**Conceptos:**
- `@keyframes` - define la animación
- `from` / `to` - estados inicial/final
- `animation: name duration timing`

---

### Ejemplo 5: Responsive Design
```css
/* Desktop (por defecto) */
.hero {
    display: flex;
    gap: 3rem;
    flex-wrap: wrap;
}

.hero-text h1 {
    font-size: 2.5rem;
}

/* Tablets */
@media (max-width: 768px) {
    .hero {
        flex-direction: column;
        padding: 2rem 1rem;
    }
    
    .hero-text h1 {
        font-size: 1.8rem;
    }
}

/* Móviles */
@media (max-width: 480px) {
    .parking-map {
        grid-template-columns: repeat(2, 1fr);
    }
    
    nav {
        flex-direction: column;
        width: 100%;
    }
}
```

**Conceptos:**
- Mobile-first: estilos base aplican en móvil
- `@media` queries para pantallas más grandes
- Cambiar: layout, tamaño de fuente, número de columnas

---

## 3️⃣ JAVASCRIPT - INTERACTIVIDAD

### Ejemplo 1: Seleccionar Elementos
```javascript
// Por ID (único)
const modal = document.getElementById('reservationModal');

// Por clase
const spots = document.querySelectorAll('.parking-spot');

// Por selector complejo
const availableSpots = document.querySelectorAll('.parking-spot.available');

// Primer elemento que coincida
const firstSpot = document.querySelector('.parking-spot');
```

---

### Ejemplo 2: Trabajar con Clases
```javascript
const spot = document.getElementById('A1');

// Agregar clase
spot.classList.add('occupied');

// Remover clase
spot.classList.remove('available');

// Toggle (agregar si no existe, remover si existe)
spot.classList.toggle('highlight');

// Verificar si tiene clase
if (spot.classList.contains('available')) {
    console.log('Cupo disponible');
}
```

---

### Ejemplo 3: Event Listeners (Escuchar Clics)
```javascript
// Forma básica
button.addEventListener('click', function() {
    console.log('Botón clickeado');
});

// Con arrow function
button.addEventListener('click', () => {
    console.log('Botón clickeado');
});

// Con parámetro de evento
button.addEventListener('click', (e) => {
    console.log('Evento:', e);
    e.preventDefault();  // Prevenir comportamiento default
});
```

---

### Ejemplo 4: Event Delegation (Escuchar Múltiples Elementos)
```javascript
// ❌ Malo - O(n) listeners (uno por cada spot)
document.querySelectorAll('.parking-spot').forEach(spot => {
    spot.addEventListener('click', () => {
        console.log('Spot clickeado');
    });
});

// ✅ Óptimo - O(1) listener centralizado
document.addEventListener('click', (e) => {
    // Buscar el elemento más cercano que tiene la clase
    const spot = e.target.closest('.parking-spot');
    if (spot) {
        console.log('Spot clickeado:', spot);
    }
});
```

**Ventajas de Event Delegation:**
- ✅ Mejor performance
- ✅ Funciona con elementos nuevos
- ✅ Menos código

---

### Ejemplo 5: Manipular el DOM
```javascript
// Cambiar texto
element.textContent = 'Nuevo texto';
element.innerHTML = '<strong>HTML aquí</strong>';

// Cambiar atributos
element.setAttribute('id', 'newId');
element.getAttribute('href');
element.dataset.spotId = 'A1';  // Acceder a data-*

// Cambiar estilos
element.style.backgroundColor = 'red';
element.style.color = 'white';
element.classList.add('highlight');

// Crear elementos
const div = document.createElement('div');
div.textContent = 'Contenido';
div.classList.add('spot');
parent.appendChild(div);
```

---

### Ejemplo 6: LocalStorage (Guardar Datos)
```javascript
// Estructura de datos
const reservations = [
    { spotId: 'A1', plate: 'ABC-123', type: 'auto' },
    { spotId: 'B2', plate: 'XYZ-789', type: 'moto' }
];

// Guardar en localStorage (convertir a JSON)
localStorage.setItem('parkflow_reservations', JSON.stringify(reservations));

// Cargar de localStorage (convertir de JSON)
const saved = localStorage.getItem('parkflow_reservations');
const loaded = saved ? JSON.parse(saved) : [];

// Verificar si existe
if (localStorage.getItem('parkflow_reservations')) {
    console.log('Datos encontrados');
}

// Limpiar
localStorage.removeItem('parkflow_reservations');
localStorage.clear();  // Borrar todo
```

---

### Ejemplo 7: Trabajar con Arrays
```javascript
// Buscar elemento
const found = reservations.find(r => r.spotId === 'A1');

// Filtrar
const autos = reservations.filter(r => r.type === 'auto');
const motos = reservations.filter(r => r.type === 'moto');

// Contar
const total = reservations.length;
const occupied = reservations.filter(r => r.spotId).length;

// Agregar
reservations.push({ spotId: 'A1', plate: 'ABC-123' });

// Remover (mejor forma)
reservations = reservations.filter(r => r.spotId !== 'A1');

// Mapear (transformar)
const plates = reservations.map(r => r.plate);

// Verificar si existe alguno
const hasMotos = reservations.some(r => r.type === 'moto');

// Verificar si todos cumplen condición
const allValid = reservations.every(r => r.plate);
```

---

### Ejemplo 8: Validación con Regex
```javascript
// Formato placa: ABC-123
const plateRegex = /^[A-Z]{3}-\d{3}$/;

const valid = plateRegex.test('ABC-123');    // true
const invalid = plateRegex.test('abc-123');  // false

// Email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// URL
const urlRegex = /^https?:\/\/.+/;

// Solo números
const numberRegex = /^\d+$/;

// Uso en validación
if (!plateRegex.test(plate)) {
    showErrorNotification('Formato de placa inválido');
}
```

---

### Ejemplo 9: Funciones Modernas
```javascript
// Arrow function
const add = (a, b) => a + b;

// Destructuring
const { spotId, plate, type } = reservation;

// Default parameters
function reserve(spotId, vehicleType = 'auto') {
    console.log(spotId, vehicleType);
}

// Template literals
const message = `Cupo ${spotId} reservado para ${plate}`;

// Optional chaining
const type = reservation?.type ?? 'desconocido';

// Spread operator
const newReservations = [...reservations, newOne];
const copy = { ...reservation };
```

---

### Ejemplo 10: Control de Flujo
```javascript
// if/else
if (spot.classList.contains('available')) {
    reserve(spotId);
} else {
    showError('Cupo ocupado');
}

// Operador ternario
const status = available ? 'Disponible' : 'Ocupado';

// Switch
switch (vehicleType) {
    case 'auto':
        count++;
        break;
    case 'moto':
        count++;
        break;
    default:
        console.log('Tipo desconocido');
}

// try/catch
try {
    const data = JSON.parse(localStorage.getItem('data'));
} catch (error) {
    console.error('Error al parsear JSON:', error);
}
```

---

## 4️⃣ FUNCIONES PERSONALIZADAS

### Ejemplo 1: Mostrar Notificación
```javascript
function showNotification(message, type = 'success') {
    // Crear elemento
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Agregar al DOM
    document.body.appendChild(notification);
    
    // Remover después de 3 segundos
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Usar
showNotification('¡Reserva exitosa!', 'success');
showNotification('Error al reservar', 'error');
```

---

### Ejemplo 2: Validar Formulario
```javascript
function validateReservation(plate, vehicleType) {
    // Validar placa
    const plateRegex = /^[A-Z]{3}-\d{3}$/;
    if (!plateRegex.test(plate)) {
        showNotification('Formato de placa inválido', 'error');
        return false;
    }
    
    // Validar tipo
    if (vehicleType !== 'auto' && vehicleType !== 'moto') {
        showNotification('Tipo de vehículo inválido', 'error');
        return false;
    }
    
    return true;
}
```

---

### Ejemplo 3: Actualizar Contadores
```javascript
function updateStats() {
    // Cargar datos
    const reservations = JSON.parse(
        localStorage.getItem('parkflow_reservations') || '[]'
    );
    
    // Calcular
    const freeSpots = 16 - reservations.length;
    const motorcycles = reservations.filter(r => r.type === 'moto').length;
    const cars = reservations.filter(r => r.type === 'auto').length;
    
    // Actualizar HTML
    document.getElementById('freeSpotsCount').textContent = freeSpots;
    document.getElementById('motorcyclesCount').textContent = motorcycles;
    document.getElementById('carsCount').textContent = cars;
}
```

---

### Ejemplo 4: Scroll Suave
```javascript
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (!section) return;
    
    // Calcular offset (80px es la altura del navbar)
    const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
    
    // Scroll suave
    window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
    });
}

// Usar
scrollToSection('reserva');  // Scroll a sección de reservas
```

---

### Ejemplo 5: Generar Matriz de Cupos
```javascript
function generateParkingMap() {
    const container = document.getElementById('parkingMap');
    container.innerHTML = '';  // Limpiar
    
    // Filas A-D, Columnas 1-4
    for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 4; col++) {
            // Generar ID: A1, A2, ..., D4
            const spotId = String.fromCharCode(65 + row) + (col + 1);
            
            // Crear elemento
            const spot = document.createElement('div');
            spot.className = 'parking-spot available';
            spot.textContent = spotId;
            spot.dataset.spotId = spotId;
            spot.onclick = () => requestReservation(spotId);
            
            container.appendChild(spot);
        }
    }
}
```

---

## 5️⃣ PATRONES AVANZADOS

### Patrón: Deduplicación de Listeners
```javascript
// Prevenir listeners duplicados
function addEventListenerOnce(element, event, handler) {
    if (element.dataset.listenerAdded) {
        return;  // Ya existe
    }
    
    element.dataset.listenerAdded = 'true';
    element.addEventListener(event, handler);
}

// Usar
addEventListenerOnce(modal, 'click', handler);
addEventListenerOnce(modal, 'click', handler);  // No se agrega nuevamente
```

---

### Patrón: Delegación de Eventos
```javascript
// Escuchar clicks en CUALQUIER elemento con clase 'parking-spot'
document.addEventListener('click', (e) => {
    const spot = e.target.closest('.parking-spot');
    
    if (!spot) return;  // No fue un spot
    
    // Aquí manejamos el click en spot
    const spotId = spot.dataset.spotId;
    handleSpotClick(spotId);
});
```

---

### Patrón: Ciclo de Vida con DOMContentLoaded
```javascript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Inicializar estructura
    initializeParkingMap();
    
    // 2. Cargar datos guardados
    loadReservationsFromStorage();
    
    // 3. Actualizar visualización
    updateParkingDisplay();
    updateStats();
    
    // 4. Configurar eventos
    setupEventListeners();
});
```

---

### Patrón: Caché de Datos
```javascript
let reservationsCache = null;

function getReservations() {
    if (reservationsCache) {
        return reservationsCache;  // Usar caché
    }
    
    const data = localStorage.getItem('parkflow_reservations') || '[]';
    reservationsCache = JSON.parse(data);
    return reservationsCache;
}

function saveReservations(data) {
    localStorage.setItem('parkflow_reservations', JSON.stringify(data));
    reservationsCache = data;  // Actualizar caché
}
```

---

## 📝 Desafíos de Práctica

### 1. Modifica el color principal
🔹 Cambia `--gold: #d4af37` a otro color en `:root`

### 2. Agrega una nueva sección
🔹 Crea una sección nueva con ID único
🔹 Agrega link en navbar
🔹 Verifica que el scroll funcione

### 3. Modifica la validación de placa
🔹 Cambia el regex para aceptar otro formato
🔹 Ej: solo números, o con guiones diferentes

### 4. Agrega un cupo más
🔹 Modifica el grid de 4x4 a 5x4
🔹 Genera 20 cupos en lugar de 16

### 5. Crea una nueva modal
🔹 Duplicate `reservationModal`
🔹 Cambia contenido
🔹 Configura sus botones

---

**¡Practica estos ejemplos! 💪**
