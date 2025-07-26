const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Jab kisi nav link pe click ho toh menu hide ho jaye
navItems.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


// Enhanced Project Image Gallery with smooth transitions
const images = {
  isro: [
    "assets/Projects/isro1.jpg",
    "assets/Projects/isro2.jpg",
    "assets/Projects/isro4.jpg",
    "assets/Projects/isro5.jpg",
    "assets/Projects/isro6.jpg",
    "assets/Projects/isro7.jpg",
    "assets/Projects/isro8.jpg",
    "assets/Projects/isro9.jpg",
  ],
  robotic: [
    "assets/Projects/robot1.jpg",
    "assets/Projects/Robot2.jpg",
    "assets/Projects/Robot4.jpg",
    "assets/Projects/Robot5.jpg"
  ],
  frontend: [
    "assets/Projects/Front1.png",
    "assets/Projects/Front2.png",
    "assets/Projects/Front3.png",
    "assets/Projects/Front4.png",
    "assets/Projects/Front 5.png",
    "assets/Projects/Front6.png"
  ],
  thermo: [
    "assets/Projects/Digi1.jpg",
    "assets/Projects/Digi2.jpg",
    "assets/Projects/Digi3.jpg"
  ]
};

let currentIndex = {
  isro: 0,
  robotic: 0,
  frontend: 0,
  thermo: 0
};

// Enhanced Gallery Functions
function openGallery(id) {
  const modal = document.getElementById(`gallery-${id}`);
  modal.classList.add("active");
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
  
  // Set initial image
  document.getElementById(`${id}-image`).src = images[id][0];
  currentIndex[id] = 0;
  
  // Update caption
  updateCaption(id);
  
  // Add keyboard event listener
  document.addEventListener('keydown', handleKeyPress);
}

function closeGallery(id) {
  const modal = document.getElementById(`gallery-${id}`);
  modal.classList.remove("active");
  document.body.style.overflow = 'auto'; // Restore scrolling
  
  // Remove keyboard event listener
  document.removeEventListener('keydown', handleKeyPress);
}

function changeImage(id, direction) {
  // Add fade effect
  const imgElement = document.getElementById(`${id}-image`);
  imgElement.style.opacity = '0.5';
  
  setTimeout(() => {
    currentIndex[id] = (currentIndex[id] + direction + images[id].length) % images[id].length;
    imgElement.src = images[id][currentIndex[id]];
    updateCaption(id);
    imgElement.style.opacity = '1';
  }, 150);
}

function updateCaption(id) {
  const captionEl = document.getElementById(`caption-${id}`);
  if (captionEl) {
    captionEl.textContent = `${currentIndex[id] + 1} / ${images[id].length}`;
  }
}

// Keyboard navigation
function handleKeyPress(event) {
  const activeModal = document.querySelector('.gallery-modal.active');
  if (!activeModal) return;
  
  const modalId = activeModal.id.replace('gallery-', '');
  
  switch(event.key) {
    case 'ArrowLeft':
      changeImage(modalId, -1);
      break;
    case 'ArrowRight':
      changeImage(modalId, 1);
      break;
    case 'Escape':
      closeGallery(modalId);
      break;
  }
}

// Close gallery when clicking backdrop
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('gallery-backdrop')) {
    const modal = event.target.closest('.gallery-modal');
    if (modal) {
      const modalId = modal.id.replace('gallery-', '');
      closeGallery(modalId);
    }
  }
});

// Preload images for better performance
function preloadImages() {
  Object.values(images).flat().forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Initialize preloading when page loads
document.addEventListener('DOMContentLoaded', preloadImages);
