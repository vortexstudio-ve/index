    // Función para controlar el loader
    window.onload = function() {
        setTimeout(function() {
          // Inicia el desvanecimiento del loader después de 18 segundos
          const loader = document.getElementById('loader');
          loader.style.opacity = '0'; // Reduce la opacidad a 0 para desvanecerse
          setTimeout(function() {
            loader.style.display = 'none'; // Oculta completamente el loader después del desvanecimiento
            document.getElementById('content').style.display = 'block'; // Muestra el contenido
          }, 2500); // Espera 2 segundos para finalizar la transición
        }, 1000); // Inicia el desvanecimiento tras 18 segundos
      };