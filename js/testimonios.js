const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const pagination = document.querySelector('.swiper-pagination');
let currentIndex = 0;

// Variables para los bullets
let bullets = [];

// Variables para deslizamiento
let startX = 0;
let isDragging = false;

// Función para crear indicadores dinámicamente según el tamaño de la pantalla
function createIndicators() {
  // Configurar cuántos indicadores mostrar según el tamaño de la pantalla
  let visibleIndicators;
  const screenWidth = window.innerWidth; // Obtén el ancho actual de la pantalla

  if (screenWidth > 1024) {
    // Pantallas grandes (computadora)
    visibleIndicators = slides.length - 2;
  } else if (screenWidth > 768) {
    // Pantallas medianas (tablet)
    visibleIndicators = slides.length - 1;
  } else {
    // Pantallas pequeñas (móvil)
    visibleIndicators = slides.length; // Mostrar todos
  }

  // Crear indicadores
  pagination.innerHTML = ''; // Limpia los indicadores anteriores
  slides.forEach((_, index) => {
    if (index < visibleIndicators) { // Mostrar solo según el tamaño de pantalla
      const bullet = document.createElement('div');
      bullet.classList.add('swiper-pagination-bullet');
      if (index === 0) bullet.classList.add('active'); // Activa el primero
      bullet.addEventListener('click', () => goToSlide(index));
      pagination.appendChild(bullet);
    }
  });

  // Actualizar la lista de bullets
  bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'));
  updateSwiper(); // Asegurarnos de que esté sincronizado al inicio
}

// Función para mover el slide y actualizar los indicadores
function updateSwiper() {
  const slideWidth = slides[0].offsetWidth;
  swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Mover el contenedor
  bullets.forEach(bullet => bullet.classList.remove('active')); // Desactiva todos los bullets
  if (bullets[currentIndex]) bullets[currentIndex].classList.add('active'); // Activa el bullet correspondiente
}

// Función para ir a un slide específico
function goToSlide(index) {
  currentIndex = index;
  updateSwiper();
}

// Función para mostrar el siguiente slide automáticamente
function showNextSlide() {
  if (currentIndex >= slides.length - 3) {
    currentIndex = 0; // Reinicia al inicio
  } else {
    currentIndex = (currentIndex + 1) % slides.length; // Avanza normalmente
  }
  updateSwiper();
}

// Crear indicadores al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  createIndicators();
  setInterval(showNextSlide, 8000); // Cambio automático cada 8 segundos
});

// Ajustar al redimensionar la pantalla
window.addEventListener('resize', () => {
  createIndicators(); // Recalcula los indicadores
});

// Deslizamiento táctil y con mouse
swiperWrapper.addEventListener('touchstart', e => {
  startX = e.touches[0].clientX;
  isDragging = true;
});

swiperWrapper.addEventListener('touchmove', e => {
  if (!isDragging) return;
  const deltaX = e.touches[0].clientX - startX;
  handleSwipe(deltaX);
});

swiperWrapper.addEventListener('touchend', () => {
  isDragging = false;
});

swiperWrapper.addEventListener('mousedown', e => {
  startX = e.clientX;
  isDragging = true;
});

swiperWrapper.addEventListener('mousemove', e => {
  if (!isDragging) return;
  const deltaX = e.clientX - startX;
  handleSwipe(deltaX);
});

swiperWrapper.addEventListener('mouseup', () => {
  isDragging = false;
});

swiperWrapper.addEventListener('mouseleave', () => {
  isDragging = false;
});

// Función para manejar el deslizamiento
function handleSwipe(deltaX) {
  if (deltaX > 50 && currentIndex > 0) {
    currentIndex--;
    updateSwiper();
    isDragging = false;
  } else if (deltaX < -50 && currentIndex < slides.length - 1) {
    currentIndex++;
    updateSwiper();
    isDragging = false;
  }
}
