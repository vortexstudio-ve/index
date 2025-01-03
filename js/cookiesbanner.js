// script.js

// Verificar si el usuario ya aceptó las cookies
function checkCookieConsent() {
    const consent = localStorage.getItem('cookies_accepted');
    if (consent === 'true') {
        // Si ya aceptó, no mostrar el banner
        document.getElementById('cookie-banner').style.display = 'none';
    } else {
        // Si no ha aceptado, mostrar el banner
        document.getElementById('cookie-banner').style.display = 'block';
    }
}

// Guardar la aceptación de cookies en el localStorage
function acceptCookies() {
    localStorage.setItem('cookies_accepted', 'true');
    document.getElementById('cookie-banner').style.display = 'none';
}

// Asignar el evento de aceptación del botón
document.getElementById('accept-cookies').addEventListener('click', acceptCookies);

// Verificar la aceptación de cookies al cargar la página
window.onload = checkCookieConsent;
