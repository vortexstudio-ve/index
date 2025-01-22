const swiperWrapper = document.querySelector('.swiper-wrapper');
const slides = document.querySelectorAll('.swiper-slide');
const pagination = document.querySelector('.swiper-pagination');
let currentIndex = 0;

// Variables para deslizamiento
let startX = 0;
let isDragging = false;

// Crear indicadores
slides.forEach((_, index) => {
if (index < slides.length - 2) { // Mostrar solo hasta el penúltimo menos 1
    const bullet = document.createElement('div');
    bullet.classList.add('swiper-pagination-bullet');
    if (index === 0) bullet.classList.add('active');
    bullet.addEventListener('click', () => goToSlide(index));
    pagination.appendChild(bullet);
}
});


const bullets = Array.from(document.querySelectorAll('.swiper-pagination-bullet'))
.slice(0);


function updateSwiper() {
  const slideWidth = slides[0].offsetWidth;
  swiperWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  bullets.forEach(bullet => bullet.classList.remove('active'));
  bullets[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = index;
  updateSwiper();
}

function showNextSlide() {
// Si el índice actual está en los últimos 3 testimonios, vuelve al inicio
if (currentIndex >= slides.length - 3) {
    currentIndex = 0; // Reinicia al inicio
} else {
    currentIndex = (currentIndex + 1) % slides.length; // Avanza normalmente
}
updateSwiper();
}

// Cambio automático cada 6 segundos
setInterval(showNextSlide, 8000);
/*
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
*/
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

// Ajustar al redimensionar
window.addEventListener('resize', updateSwiper);