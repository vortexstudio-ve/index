function procesarPago(metodoPago) {
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
} 