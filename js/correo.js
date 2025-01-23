const btnEnvio = document.getElementById("enviarCorreo");

btnEnvio.addEventListener("click", function (e) {
    e.preventDefault();

    const nombreProyecto = document.getElementById('nombreProyecto');
    const detallesProyecto = document.getElementById('detallesProyecto');
    const telefono = document.getElementById('telefono');

    // Validar que los campos no estén vacíos
    if (!nombreProyecto.value.trim()) {
        nombreProyecto.reportValidity();
        return;
    }
    if (!detallesProyecto.value.trim()) {
        detallesProyecto.reportValidity();
        return;
    }
    if (!telefono.value.trim()) {
        telefono.reportValidity();
        return;
    }

    // Si todos los campos están llenos, preparar los datos
    const subject = encodeURIComponent("Nuevo Proyecto");
    const body = encodeURIComponent(`Nombre del proyecto: ${nombreProyecto.value}\nDetalles del proyecto: ${detallesProyecto.value}\nTeléfono: ${telefono.value}`);
    const email = "iqsebas4202@gmail.com";

    // URL para Gmail App
    const gmailAppLink = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`;
    // URL para Gmail Web
    const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

    // Intento de abrir la app de Gmail
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        window.location.href = gmailAppLink;
        setTimeout(() => {
            // Si no funciona la app, abre Gmail Web
            window.open(gmailWebLink, '_blank');
        }, 500);
    } else {
        // Si no es móvil, abrir Gmail Web directamente
        window.open(gmailWebLink, '_blank');
    }
});
