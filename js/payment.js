/* function procesarPago(metodoPago) {
    switch(metodoPago) {
        case 'paypal':
            alert('Redirigiendo a PayPal...');
            // Aquí iría tu lógica de integración con PayPal
            break;
        case 'binance':
            alert('Redirigiendo a Binance Pay...');
            // Aquí iría tu lógica de integración con Binance
            break;
    }
} */


    let productoSeleccionado = null;

    // Captura el producto seleccionado cuando se abre el modal
    const modal = document.getElementById('pagoModal');
    modal.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget; // Botón que abrió el modal
        productoSeleccionado = button.getAttribute('data-producto'); // Obtener el producto

        // Personalizar el título del modal basado en el producto seleccionado
        const modalTitle = modal.querySelector('.modal-title');
        modalTitle.textContent = "Selecciona tu método de pago para " + productoSeleccionado.charAt(0).toUpperCase() + productoSeleccionado.slice(1);

        // Actualizar la visibilidad de los botones de pago según el producto seleccionado
        updatePaymentButtons();
    });

    // Función para actualizar los botones de pago
    function updatePaymentButtons() {
        // Ocultar todos los botones de pago
        document.getElementById('payPalProducto1').classList.add('d-none');
        document.getElementById('payPalProducto2').classList.add('d-none');
        document.getElementById('payPalProducto3').classList.add('d-none');

        // Mostrar solo el botón correspondiente al producto seleccionado
        if (productoSeleccionado === 'WhatsApp con IA') {
            document.getElementById('payPalProducto1').classList.remove('d-none');
        } else if (productoSeleccionado === 'Instagram y Facebook con IA') {
            document.getElementById('payPalProducto2').classList.remove('d-none');
        } else if (productoSeleccionado === 'Atención al cliente Web con IA') {
            document.getElementById('payPalProducto3').classList.remove('d-none');
        }
    }

/*    // Función que se llama al procesar el pago
    function procesarPago(metodo, producto) {
        alert(`Procesando pago para ${producto} con ${metodo}`);
        // Aquí se podría agregar la lógica para el procesamiento del pago
    }*/