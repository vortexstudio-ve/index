function enviarWhatsApp(event) {
    event.preventDefault();
    
    const nombreProyecto = document.getElementById('nombreProyecto').value;
    const detallesProyecto = document.getElementById('detallesProyecto').value;
    const telefono = document.getElementById('telefono').value;
    
    const mensaje = `*Nuevo Proyecto*%0A%0A` +
                   `*Nombre del Proyecto:*%0A${nombreProyecto}%0A%0A` +
                   `*Detalles del Proyecto:*%0A${detallesProyecto}%0A%0A` +
                   `*Teléfono de Contacto:*%0A${telefono}`;
    
    const numeroWhatsApp = '584245542026';
    
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    const urlWhatsAppBusiness = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensaje}`;
    
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
        try {
            window.location.href = urlWhatsApp;
            setTimeout(() => {
                window.location.href = urlWhatsAppBusiness;
            }, 500);
        } catch (e) {
            window.open(urlWhatsAppBusiness, '_blank');
        }
    } else {
        window.open(urlWhatsApp, '_blank');
    }
} 