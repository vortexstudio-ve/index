    // Función para ocultar el loader y mostrar el contenido
    window.onload = function() {
        setTimeout(function() {
          // Oculta el loader
          document.getElementById('loader').style.display = 'none';
          // Muestra el contenido
          document.getElementById('content').style.display = 'block';
        }, 5000); // Espera 20 segundos
      };