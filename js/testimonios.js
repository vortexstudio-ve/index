const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const pagination = document.querySelector('.swiper-pagination');
let currentIndex = 0;

// Variables para los bullets
let bullets = [];

// Función para crear indicadores dinámicamente según el tamaño de la pantalla
function createIndicators() {
  let visibleIndicators;
  const screenWidth = window.innerWidth;

  if (screenWidth >= 1024) {
    // Pantallas grandes (computadora)
    visibleIndicators = slides.length - 2;
  } else if (screenWidth >= 768) {
    // Pantallas medianas (tablet)
    visibleIndicators = slides.length - 1;
  } else if (screenWidth >= 375){
    // Pantallas pequeñas (móvil)
    visibleIndicators = slides.length ; // Mostrar todos
  }

  // Crear indicadores
  pagination.innerHTML = ''; // Limpia los indicadores anteriores
  slides.forEach((_, index) => {
    if (index < visibleIndicators) {
      const bullet = document.createElement('div');
      bullet.classList.add('swiper-pagination-bullet');
      if (index === 0) bullet.classList.add('active');
      bullet.addEventListener('click', () => goToSlide(index));
      pagination.appendChild(bullet);
    }
  });

  // Actualizar la lista de bullets
  bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'));
  updateSwiper();
}

// Función para mover el slide y actualizar los indicadores
function updateSwiper() {
  const slideWidth = slides[0].offsetWidth;
  swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  bullets.forEach(bullet => bullet.classList.remove('active'));
  if (bullets[currentIndex]) bullets[currentIndex].classList.add('active');
}

// Función para ir a un slide específico
function goToSlide(index) {
  currentIndex = index;
  updateSwiper();
}

// Función para avanzar en vista de computadora
function showNextSlideDesktop() {
  if (currentIndex >= slides.length - 3) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSwiper();
}

// Función para avanzar en vista de tablet
function showNextSlideTablet() {
  if (currentIndex >= slides.length - 2) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSwiper();
}

// Función para avanzar en vista móvil
function showNextSlideMobile() {
  if (currentIndex >= slides.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  updateSwiper();
}

// Función para manejar el cambio automático según el tamaño de pantalla
function autoShowNextSlide() {
  const screenWidth = window.innerWidth;
  if (screenWidth >= 1024) {
    showNextSlideDesktop(); // Computadora
  } else if (screenWidth >= 768) {
    showNextSlideTablet(); // Tablet
  } else if (screenWidth >= 375){
    showNextSlideMobile(); // Móvil
  }
}

// Configuración inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  createIndicators();
  setInterval(autoShowNextSlide, 6000); // Cambio automático cada 8 segundos
});

// Ajustar al redimensionar la pantalla
window.addEventListener('resize', () => {
  createIndicators();
  updateSwiper();
});

// Deslizamiento táctil y con mouse
let startX = 0;
let isDragging = false;

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
