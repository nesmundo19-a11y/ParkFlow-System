# ❓ FAQ - PREGUNTAS FRECUENTES PARKFLOW

## 🎯 Preguntas Iniciales

### ¿Cómo abro el proyecto?
**R:** Abre el archivo `index.html` en tu navegador:
```
C:\Users\ACER\Documents\Proyecto_ParkFlow\index.html
```

O arrastra el archivo `index.html` sobre tu navegador.

---

### ¿Dónde guarda los datos?
**R:** En **localStorage** del navegador (almacenamiento local):
- **Clave:** `parkflow_reservations`
- **Ubicación:** Perfiles > Historial > Storage > Local Storage
- **Formato:** JSON

⚠️ Si limpias el cache del navegador, se pierden los datos.

---

### ¿Puedo borrar todos los datos?
**R:** Sí, en la consola del navegador (F12):
```javascript
localStorage.clear()
```
O solo los datos de ParkFlow:
```javascript
localStorage.removeItem('parkflow_reservations')
```

---

## 🎨 Preguntas sobre Estilos

### ¿Cómo cambio los colores?
**R:** En `style.css`, modifica las variables CSS al inicio:
```css
:root {
    --gold: #d4af37;     /* Cambia este color */
    --green: #2ecc71;    /* Cambia disponibilidad */
    --red: #e74c3c;      /* Cambia ocupado */
}
```

---

### ¿Por qué se ven cuadrados en lugar de círculos?
**R:** El CSS usa `border-radius: 10px` (esquinas redondeadas).
Para círculos, cambia en `style.css`:
```css
.parking-spot {
    border-radius: 50%;  /* Círculo perfecto */
}
```

---

### ¿Cómo hago el navbar más grande?
**R:** Aumenta el padding en `.navbar`:
```css
.navbar {
    padding: 2rem 2rem;  /* Era 1rem 2rem */
}
```

---

### ¿Puedo cambiar la tipografía?
**R:** En `body`, modifica `font-family`:
```css
body {
    font-family: 'Arial', sans-serif;  /* Era Segoe UI */
}
```

O importa de Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet">
```

---

### ¿Cómo acelero/ralentizo las animaciones?
**R:** Cambia la variable `--transition`:
```css
:root {
    --transition: all 0.3s cubic-bezier(...);  /* 0.3s es la velocidad */
    /* Más rápido: 0.1s */
    /* Más lento: 0.8s */
}
```

---

## ⚙️ Preguntas sobre Funcionamiento

### ¿Cuántos cupos hay?
**R:** 16 cupos en matriz 4x4:
- Fila A: A1, A2, A3, A4
- Fila B: B1, B2, B3, B4
- Fila C: C1, C2, C3, C4
- Fila D: D1, D2, D3, D4

Para cambiar a 6x4 (24 cupos), modifica en `script.js`:
```javascript
for (let row = 0; row < 6; row++) {  // Era 4
    for (let col = 0; col < 4; col++) {
        // ... resto del código
    }
}
```

---

### ¿Qué es el formato de placa? 
**R:** `ABC-123` significa:
- 3 letras mayúsculas: `ABC`
- Guión: `-`
- 3 números: `123`

Ejemplos válidos: `XYZ-789`, `QWE-456`
Ejemplos inválidos: `abc-123` (minúsculas), `AB-1234` (formato incorrecto)

---

### ¿Cómo cambio el formato de placa?
**R:** Modifica el regex en `script.js`:
```javascript
// Actual (ABC-123)
const plateRegex = /^[A-Z]{3}-\d{3}$/;

// Solo números (123456)
const plateRegex = /^\d{6}$/;

// Con letras y números (ABC123)
const plateRegex = /^[A-Z]{3}\d{3}$/;

// Flexible (cualquier cosa)
const plateRegex = /.+/;
```

---

### ¿Puedo agregar más tipos de vehículos?
**R:** Sí, modifica el select en `index.html`:
```html
<select id="vehicleType">
    <option value="">Selecciona tipo de vehículo</option>
    <option value="auto">Auto</option>
    <option value="moto">Moto</option>
    <option value="camion">Camión</option>  <!-- Nuevo -->
    <option value="bicicleta">Bicicleta</option>  <!-- Nuevo -->
</select>
```

---

### ¿Cómo libero un cupo?
**R:** Hay dos maneras:

**Manera 1: Panel Administrador**
1. Abre la consola (F12)
2. Escribe:
```javascript
document.getElementById('adminModal').classList.add('show')
```
3. Ingresa contraseña: `admin123`
4. Libera el cupo

**Manera 2: Desde localStorage**
```javascript
// Ver todas las reservas
console.log(JSON.parse(localStorage.getItem('parkflow_reservations')))

// Remover una reserva específica
const reserved = JSON.parse(localStorage.getItem('parkflow_reservations'));
const newList = reserved.filter(r => r.spotId !== 'A1');  // Remover A1
localStorage.setItem('parkflow_reservations', JSON.stringify(newList));
```

---

### ¿Qué pasa si hago clic en un cupo ocupado?
**R:** Nada. Los cupos ocupados (rojos) no abren modal.
El código verifica:
```javascript
if (spot && !spot.classList.contains('available')) {
    showErrorNotification('Este cupo está ocupado');
    return;
}
```

---

## 🔐 Preguntas sobre Admin

### ¿Cuál es la contraseña de admin?
**R:** `admin123`

### ¿Cómo cambio la contraseña?
**R:** En `script.js`, busca:
```javascript
const ADMIN_PASSWORD = 'admin123';
```

Cambia a:
```javascript
const ADMIN_PASSWORD = 'miPassword123';
```

⚠️ Guarda los cambios en `script.js`

---

### ¿Cómo protejo mejor la contraseña?
**R:** ⚠️ **No es seguro hardcodear en JavaScript.**

Para producción, usa:
- Backend con autenticación (Node.js, Django, etc.)
- JWT tokens
- Base de datos

---

## 📱 Preguntas sobre Responsividad

### ¿Es responsive (mobile-friendly)?
**R:** Sí, tiene breakpoints para:
- Desktop: > 1024px
- Tablet: 768px - 1024px
- Móvil: 480px - 768px
- Micro: < 480px

Prueba presionando F12 y ajustando el tamaño.

---

### ¿Por qué se ve raro en móvil?
**R:** Verifica los breakpoints en `style.css`:
```css
@media (max-width: 768px) {
    /* Estilos para tablets */
}

@media (max-width: 480px) {
    /* Estilos para móviles */
}
```

Agrega más estilos si es necesario.

---

## 🎬 Preguntas sobre Navegación

### ¿Por qué el scroll no funciona?
**R:** Verifica:
1. El link tiene `href="#nombreSeccion"`
2. La sección existe con `id="nombreSeccion"`
3. El JavaScript tiene `setupEventListeners()`

Ejemplo:
```html
<!-- Link -->
<a href="#induccion">Inducción</a>

<!-- Sección -->
<section id="induccion">...</section>
```

---

### ¿Cómo hago que el scroll sea más rápido?
**R:** En `script.js`, modifica:
```javascript
window.scrollTo({
    top: offsetTop,
    behavior: 'instant'  // Era 'smooth'
});
```

O usa `smooth` pero ajusta el offset:
```javascript
const offsetTop = section.getBoundingClientRect().top + window.scrollY - 40;
```

---

### ¿Puedo agregar más links en navbar?
**R:** Sí:
```html
<nav>
    <a href="#inicio">Inicio</a>
    <a href="#induccion">Inducción</a>
    <a href="#mision">Misión</a>      <!-- Nuevo -->
    <a href="#contacto">Contacto</a>
    <button class="btn-reserva" onclick="scrollToReserva()">+ Reservar</button>
</nav>
```

Y crea la sección:
```html
<section id="mision">
    <h2>Nuestra Misión</h2>
    <!-- Contenido -->
</section>
```

---

## 🔧 Preguntas sobre Desarrollo

### ¿Cómo veo errores?
**R:** Presiona F12 y ve la pestaña "Console":
```
Ctrl + Shift + J (Windows/Linux)
Cmd + Option + J (Mac)
```

Verás errores en rojo y logs en azul.

---

### ¿Cómo depuro código?
**R:** En la consola (F12):
```javascript
// Ver variable
console.log(reservations);

// Ver tabla formateada
console.table(reservations);

// Ver objeto completo
console.dir(element);

// Poner breakpoint
debugger;  // El código se pausa aquí

// Condicional
console.assert(condition, 'Mensaje si falla');
```

---

### ¿Cómo guardo mis cambios sin perder el código original?
**R:** Usa Git o backup manual:
```powershell
# Copiar archivos
Copy-Item -Path "Proyecto_ParkFlow" -Destination "Proyecto_ParkFlow_v1_backup" -Recurse
```

---

### ¿Puedo usar este código en mis proyectos?
**R:** ✅ Sí, es código educativo. Puedes:
- Copiar y modificar
- Aprender patrones
- Usar en proyectos personales

Solo recuerda dar crédito si lo publicas.

---

## 🐛 Preguntas sobre Bugs

### El scroll no es suave, salta abruptamente
**R:** Comúnmente ocurre por:
1. Múltiples listeners en el mismo elemento
2. Falta de `e.stopPropagation()`
3. `scroll-margin-top` no configurado

Verifica en `style.css`:
```css
section {
    scroll-margin-top: 80px;  /* Importante */
}
```

Y en `setupEventListeners()`:
```javascript
e.stopPropagation();  // Debe estar presente
```

---

### Cuando hago clic en un cupo, no abre el modal
**R:** Revisa:
1. El cupo tiene clase `available`?
2. El ID del cupo es correcto (A1-D4)?
3. La función `openReservationModal()` existe?

En consola, verifica:
```javascript
// Ver todos los cupos
console.log(document.querySelectorAll('.parking-spot'));

// Ver si hay errores
// Abre Console y revisa
```

---

### Los datos no persisten al recargar
**R:** localStorage debe estar habilitado. Verifica:
```javascript
// En consola
JSON.parse(localStorage.getItem('parkflow_reservations'))
```

Si devuelve `null`, los datos no se guardaron.
Revisa si hay error en:
```javascript
localStorage.setItem('parkflow_reservations', JSON.stringify(reservations));
```

---

### El modal no cierra con ESC
**R:** Verifica que existe el listener en `setupFormHandlers()`:
```javascript
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
    }
});
```

---

## 📚 Preguntas sobre Aprendizaje

### ¿Por dónde empiezo a estudiar el código?
**R:** Orden recomendado:
1. Lee `DOCUMENTACION.md` (visión general)
2. Abre `index.html` en editor (entiende estructura)
3. Lee `style.css` (empieza con variables)
4. Lee `script.js` (función por función)
5. Estudia `EJEMPLOS_CODIGO.md` (practica)
6. Modifica cosas pequeñas (experimenta)

---

### ¿Qué debo aprender primero: HTML, CSS o JavaScript?
**R:** En este orden:
1. **HTML** - Estructura (tags, atributos, IDs)
2. **CSS** - Diseño (colores, layouts, animaciones)
3. **JavaScript** - Interactividad (eventos, DOM, datos)

---

### ¿Cómo práctico?
**R:** Desafíos progresivos:
1. **Fácil:** Cambia colores y textos
2. **Medio:** Agrega una sección nueva
3. **Difícil:** Crea un contador diferente
4. **Avanzado:** Conecta con una API backend

---

### ¿Dónde aprendo más?
**R:** Recursos recomendados:
- **HTML:** MDN Web Docs - HTML
- **CSS:** MDN Web Docs - CSS
- **JavaScript:** JavaScript.info
- **Práctica:** FreeCodeCamp, Codecademy

---

### ¿Cuánto tiempo toma entender todo?
**R:** Depende de tu nivel:
- **Principiante:** 2-4 semanas (estudiando 1-2 horas diarias)
- **Intermedio:** 3-5 días (repaso rápido)
- **Avanzado:** < 1 día

---

## 🚀 Preguntas sobre Mejoras

### ¿Cómo agrego más funcionalidades?
**R:** Seguir estos pasos:
1. Agregar HTML (estructura)
2. Agregar CSS (estilos)
3. Agregar JavaScript (lógica)
4. Probar en navegador
5. Revisar console (F12)

---

### ¿Cómo conecto a una base de datos?
**R:** Necesitas:
1. Backend (Node, Python, PHP, etc.)
2. API (endpoints REST o GraphQL)
3. Fetch en JavaScript:
```javascript
fetch('https://api.ejemplo.com/reservations')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

---

### ¿Puedo publicar esto en internet?
**R:** Sí, pero necesitas:
1. **Hosting** (Netlify, Vercel, GitHub Pages - gratis)
2. **Dominio** (opcional, cuesta dinero)
3. **Backend** (si necesitas conectar BD)

Para hosting gratuito:
- Sube a GitHub
- Conecta Netlify o Vercel
- Deploy automático ✅

---

### ¿Cómo hago que sea una app de escritorio?
**R:** Usa Electron:
```javascript
// Electron convierte cualquier web app a desktop app
// Mac, Windows, Linux
```

Pero requiere aprendizaje adicional.

---

## 💡 Tips Finales

### Tip 1: Usa DevTools (F12)
- **Console:** Ver errores y usar comandos
- **Elements:** Inspeccionar HTML/CSS
- **Network:** Ver llamadas API
- **Storage:** Ver localStorage

### Tip 2: Comenta tu código
```javascript
// Esta función reserva un cupo
function reserveSpot(spotId) {
    // ... código
}
```

### Tip 3: Usa nombres descriptivos
```javascript
// ❌ Malo
const x = 5;
const fn = () => {};

// ✅ Bueno
const totalSpots = 16;
const openReservationModal = () => {};
```

### Tip 4: Prueba en diferentes navegadores
- Chrome
- Firefox
- Safari
- Edge

### Tip 5: Mantén el código limpio
```javascript
// Elimina consoles.log() antes de producción
// Agrupa funciones relacionadas
// Reutiliza código (DRY - Don't Repeat Yourself)
```

---

**¿Tienes más preguntas? Revisa la DOCUMENTACION.md para información detallada. 📖**
