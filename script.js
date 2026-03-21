/* =============================================
   PARKFLOW - SISTEMA DE GESTION DE ESTACIONAMIENTO
   JavaScript ES6 | localStorage | Real-time Updates
   ============================================= */

// ========== CONFIGURACION GLOBAL ==========

const STORAGE_KEY = 'parkflow_reservations';
const ADMIN_PASSWORD = 'admin123';
let selectedSpotId = null;
let selectedSpotData = null;

// ========== INICIALIZACION ==========

document.addEventListener('DOMContentLoaded', () => {
    console.log('ParkFlow iniciando...');
    
    // Inicializar en orden correcto
    initializeParkingMap();
    loadReservationsFromStorage();
    updateParkingStats();
    setupFormHandlers();
    setupEventListeners();
    
    console.log('Sistema listo');
});

// ========== MAPA DE PARQUEO ==========

function initializeParkingMap() {
    const gridParqueo = document.getElementById('grid-parqueo');
    if (!gridParqueo) {
        console.error('Error: No se encontro grid-parqueo');
        return;
    }

    gridParqueo.innerHTML = '';
    const totalSpots = 16;
    
    for (let i = 0; i < totalSpots; i++) {
        const row = String.fromCharCode(65 + Math.floor(i / 4));
        const col = (i % 4) + 1;
        const spotId = row + col;
        
        const spot = createSpot(spotId);
        gridParqueo.appendChild(spot);
    }
    
    console.log('Creados ' + totalSpots + ' cupos');
}

function createSpot(spotId) {
    const spot = document.createElement('div');
    const spotText = document.createElement('div');
    spotText.className = 'spot-text';
    
    const spotIdDiv = document.createElement('div');
    spotIdDiv.className = 'spot-id';
    spotIdDiv.textContent = spotId;
    
    const statusDiv = document.createElement('div');
    statusDiv.className = 'spot-status';
    statusDiv.textContent = 'LIBRE';
    
    spotText.appendChild(spotIdDiv);
    spotText.appendChild(statusDiv);
    spot.appendChild(spotText);
    
    spot.id = spotId;
    spot.className = 'spot free';
    spot.dataset.status = 'free';
    spot.dataset.plate = '';
    spot.dataset.type = '';
    
    spot.addEventListener('click', handleSpotClick);
    
    return spot;
}

function handleSpotClick(event) {
    const spot = event.currentTarget;
    const spotId = spot.id;
    
    if (spot.classList.contains('free')) {
        openReservationModal(spotId);
    } else if (spot.classList.contains('occupied')) {
        openAdminModal(spotId);
    }
}

// ========== MODAL DE RESERVACION ==========

function openReservationModal(spotId) {
    selectedSpotId = spotId;
    
    const modal = document.getElementById('reservationModal');
    const spotInfo = document.querySelector('.spot-info strong');
    const plate = document.getElementById('vehiclePlate');
    const carRadio = document.getElementById('vehicleCar');
    
    if (spotInfo) spotInfo.textContent = spotId;
    if (plate) plate.value = '';
    if (carRadio) carRadio.checked = true;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    console.log('Modal de reserva abierto para', spotId);
}

function closeReservationModal() {
    document.getElementById('reservationModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedSpotId = null;
}

// ========== MODAL DE ADMINISTRADOR ==========

function openAdminModal(spotId) {
    selectedSpotId = spotId;
    const adminContent = document.getElementById('adminContent');
    
    if (!adminContent) {
        console.error('Error: No se encontro adminContent');
        return;
    }
    
    let htmlContent = '';
    htmlContent += '<div class=\"admin-password-container\">';
    htmlContent += '<p>Ingresa la contrasena de administrador</p>';
    htmlContent += '<input type=\"password\" id=\"adminPassword\" placeholder=\"Contrasena\" class=\"form-control\">';
    htmlContent += '<div class=\"form-actions\">';
    htmlContent += '<button class=\"btn-verify\" id=\"verifyAdminBtn\"><i class=\"fas fa-check\"></i> Verificar</button>';
    htmlContent += '<button class=\"btn-cancel\" id=\"cancelAdminBtn\"><i class=\"fas fa-times\"></i> Cancelar</button>';
    htmlContent += '</div>';
    htmlContent += '</div>';
    
    adminContent.innerHTML = htmlContent;
    
    document.getElementById('adminModal').classList.add('active');
    document.body.style.overflow = 'hidden';
    
    document.getElementById('verifyAdminBtn').addEventListener('click', () => {
        const password = document.getElementById('adminPassword').value;
        validateAdminPassword(spotId, password);
    });
    
    document.getElementById('cancelAdminBtn').addEventListener('click', closeAdminModal);
    
    console.log('Modal admin abierto para', spotId);
}

function closeAdminModal() {
    document.getElementById('adminModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    selectedSpotId = null;
}

function validateAdminPassword(spotId, password) {
    if (password !== ADMIN_PASSWORD) {
        showErrorNotification('Contrasena incorrecta');
        document.getElementById('adminPassword').value = '';
        console.warn('Intento fallido de acceso admin');
        return;
    }
    
    displayExitPanel(spotId);
}

function displayExitPanel(spotId) {
    const adminContent = document.getElementById('adminContent');
    const spot = document.getElementById(spotId);
    const reservationData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}')[spotId];
    
    const plate = reservationData?.plate || 'N/A';
    const type = reservationData?.type || 'Auto';
    const timestamp = reservationData?.timestamp || 'N/A';
    const timeStr = new Date(timestamp).toLocaleTimeString('es-ES');
    
    let htmlContent = '';
    htmlContent += '<div class=\"admin-confirmation\">';
    htmlContent += '<h3 style=\"color: var(--gold); margin: 1.5rem 0;\">Acceso Autorizado</h3>';
    htmlContent += '<div class=\"spot-info\"><p>Cupo: <strong>' + spotId + '</strong></p></div>';
    htmlContent += '<div class=\"plate-display\">';
    htmlContent += '<p style=\"color: #888; font-size: 0.9rem;\">Placa Registrada</p>';
    htmlContent += '<div class=\"plate-number\">' + plate + '</div>';
    htmlContent += '</div>';
    htmlContent += '<div class=\"vehicle-info\">';
    htmlContent += '<div class=\"info-item\">';
    htmlContent += '<i class=\"fas fa-' + (type === 'moto' ? 'motorcycle' : 'car') + '\" style=\"color: #888;\"></i>';
    htmlContent += '<p>Tipo: <span class=\"value\">' + type.toUpperCase() + '</span></p>';
    htmlContent += '</div>';
    htmlContent += '<div class=\"info-item\">';
    htmlContent += '<i class=\"fas fa-clock\" style=\"color: #888;\"></i>';
    htmlContent += '<p>Hora: <span class=\"value\" style=\"font-size: 0.9rem;\">' + timeStr + '</span></p>';
    htmlContent += '</div>';
    htmlContent += '</div>';
    htmlContent += '<div class=\"form-actions\">';
    htmlContent += '<button class=\"btn-release\" onclick=\"releaseSpotwithConfirm(\'' + spotId + '\')\"><i class=\"fas fa-arrow-right\"></i> LIBERAR CUPO</button>';
    htmlContent += '<button class=\"btn-cancel\" onclick=\"closeAdminModal()\"><i class=\"fas fa-times\"></i> Cancelar</button>';
    htmlContent += '</div>';
    htmlContent += '</div>';
    
    adminContent.innerHTML = htmlContent;
    
    console.log('Panel de salida mostrado para', spotId);
}

function releaseSpotwithConfirm(spotId) {
    const confirmed = confirm('Confirmar liberacion del cupo ' + spotId + '?');
    if (confirmed) {
        releaseSpot(spotId);
        closeAdminModal();
    }
}

// ========== GESTION DE RESERVAS ==========

function setupFormHandlers() {
    // Agregar listeners de formulario SOLO UNA VEZ
    const form = document.getElementById('reservationForm');
    if (form && !form.dataset.listenersAdded) {
        form.dataset.listenersAdded = 'true';
        form.addEventListener('submit', handleReservationSubmit);
    }
    
    // Cerrar modales con overlay - usar event delegation
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        const overlay = modal.querySelector('.modal-overlay');
        const closeBtn = modal.querySelector('.modal-close');
        
        if (overlay && !overlay.dataset.listenerAdded) {
            overlay.dataset.listenerAdded = 'true';
            overlay.addEventListener('click', (e) => {
                if (e.target === overlay) {
                    if (modal.id === 'reservationModal') closeReservationModal();
                    if (modal.id === 'adminModal') closeAdminModal();
                }
            });
        }
        
        if (closeBtn && !closeBtn.dataset.listenerAdded) {
            closeBtn.dataset.listenerAdded = 'true';
            closeBtn.addEventListener('click', () => {
                if (modal.id === 'reservationModal') closeReservationModal();
                if (modal.id === 'adminModal') closeAdminModal();
            });
        }
    });
    
    // Cerrar con ESC - solo una escucha global
    if (!document.body.dataset.escListenerAdded) {
        document.body.dataset.escListenerAdded = 'true';
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeReservationModal();
                closeAdminModal();
            }
        });
    }
}

function handleReservationSubmit(e) {
    e.preventDefault();
    
    const plate = document.getElementById('vehiclePlate').value.trim().toUpperCase();
    const vehicleType = document.querySelector('input[name=\"vehicleType\"]:checked')?.value || 'auto';
    
    if (!plate || !validatePlateFormat(plate)) {
        showErrorNotification('Formato de placa invalido. Ejemplo: ABC-123');
        return;
    }
    
    reserveSpot(selectedSpotId, plate, vehicleType);
}

function reserveSpot(spotId, plate, vehicleType) {
    const spot = document.getElementById(spotId);
    if (!spot) return;
    
    const reservations = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    
    reservations[spotId] = {
        plate: plate,
        type: vehicleType,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    
    spot.classList.remove('free');
    spot.classList.add('occupied');
    spot.dataset.status = 'occupied';
    spot.dataset.plate = plate;
    spot.dataset.type = vehicleType;
    
    let innerHTML = '';
    innerHTML += '<div class=\"spot-text\">';
    innerHTML += '<div class=\"spot-id\">' + spotId + '</div>';
    innerHTML += '<div class=\"spot-status\">OCUPADO</div>';
    innerHTML += '</div>';
    spot.innerHTML = innerHTML;
    
    updateParkingStats();
    showSuccessNotification('RESERVA CONFIRMADA: Cupo ' + spotId + ' - Placa: ' + plate);
    closeReservationModal();
    
    console.log('Spot reservado:', spotId, plate);
}

function releaseSpot(spotId) {
    const spot = document.getElementById(spotId);
    if (!spot) return;
    
    const reservations = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const plate = reservations[spotId]?.plate || 'DESCONOCIDA';
    
    delete reservations[spotId];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reservations));
    
    spot.classList.remove('occupied');
    spot.classList.add('free');
    spot.dataset.status = 'free';
    spot.dataset.plate = '';
    spot.dataset.type = '';
    
    let innerHTML = '';
    innerHTML += '<div class=\"spot-text\">';
    innerHTML += '<div class=\"spot-id\">' + spotId + '</div>';
    innerHTML += '<div class=\"spot-status\">LIBRE</div>';
    innerHTML += '</div>';
    spot.innerHTML = innerHTML;
    
    updateParkingStats();
    showSuccessNotification('CUPO LIBERADO: ' + spotId + ' - Placa: ' + plate);
    
    console.log('Spot liberado:', spotId);
}

// ========== PERSISTENCIA ==========

function loadReservationsFromStorage() {
    const reservations = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    
    Object.entries(reservations).forEach(([spotId, data]) => {
        const spot = document.getElementById(spotId);
        if (spot) {
            spot.classList.remove('free');
            spot.classList.add('occupied');
            spot.dataset.status = 'occupied';
            spot.dataset.plate = data.plate;
            spot.dataset.type = data.type;
            
            let innerHTML = '';
            innerHTML += '<div class=\"spot-text\">';
            innerHTML += '<div class=\"spot-id\">' + spotId + '</div>';
            innerHTML += '<div class=\"spot-status\">OCUPADO</div>';
            innerHTML += '</div>';
            spot.innerHTML = innerHTML;
        }
    });
    
    console.log('Reservas cargadas:', Object.keys(reservations).length);
}

// ========== DASHBOARD EN TIEMPO REAL ==========

function updateParkingStats() {
    const spots = document.querySelectorAll('.spot');
    let freeCount = 0;
    let motorcycleCount = 0;
    let carCount = 0;
    
    spots.forEach(spot => {
        if (spot.classList.contains('free')) {
            freeCount++;
        } else {
            const type = spot.dataset.type;
            if (type === 'moto') {
                motorcycleCount++;
            } else {
                carCount++;
            }
        }
    });
    
    // Actualizar display
    const freeElement = document.getElementById('freeSpotsCount');
    const motoElement = document.getElementById('motorcyclesCount');
    const carElement = document.getElementById('carsCount');
    
    if (freeElement) freeElement.textContent = freeCount;
    if (motoElement) motoElement.textContent = motorcycleCount;
    if (carElement) carElement.textContent = carCount;
    
    console.log('Stats: Libres=' + freeCount + ', Motos=' + motorcycleCount + ', Autos=' + carCount);
}

// ========== VALIDACION ==========

function validatePlateFormat(plate) {
    // Formato: ABC-123 o ABC123
    const regex = /^[A-Z]{3}-?\d{3}$/;
    return regex.test(plate);
}

function setupEventListeners() {
    // Manejo centralizado de navegacion - OPTIMIZADO sin duplicados
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (!link) return;
        
        const href = link.getAttribute('href');
        const validSections = ['#inicio', '#induccion', '#reserva', '#contacto'];
        
        if (validSections.includes(href)) {
            e.preventDefault();
            e.stopPropagation();
            
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);
            
            if (section) {
                // Scroll suave con offset para navbar sticky
                const offsetTop = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
}

// Funcion optimizada para scroll a reserva
function scrollToReserva() {
    const reservaSection = document.getElementById('reserva');
    if (reservaSection) {
        const offsetTop = reservaSection.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// ========== NOTIFICACIONES ==========

function showSuccessNotification(message) {
    showNotification(message, 'success');
}

function showErrorNotification(message) {
    showNotification(message, 'error');
}

function showNotification(message, type) {
    if (!type) type = 'success';
    
    const notification = document.createElement('div');
    notification.className = 'notification ' + type;
    
    const iconClass = type === 'success' ? 'check-circle' : 'exclamation-circle';
    const title = type === 'success' ? 'EXITO' : 'ERROR';
    
    let html = '';
    html += '<i class=\"fas fa-' + iconClass + '\"></i>';
    html += '<div class=\"notification-content\">';
    html += '<h4>' + title + '</h4>';
    html += '<p>' + message + '</p>';
    html += '</div>';
    
    notification.innerHTML = html;
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('show'), 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 400);
    }, 3500);
}

console.log('ParkFlow System Loaded v2.0 - FIXED');
