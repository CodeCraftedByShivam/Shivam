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


// ✅ Project Image Gallery
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

function openGallery(id) {
  document.getElementById(`gallery-${id}`).classList.add("active");
  document.getElementById(`${id}-image`).src = images[id][0];
  currentIndex[id] = 0;

  const captionEl = document.getElementById(`caption-${id}`);
  if (captionEl) {
    captionEl.textContent = `1 / ${images[id].length}`;
  }
}

function closeGallery(id) {
  document.getElementById(`gallery-${id}`).classList.remove("active");
}

function changeImage(id, direction) {
  currentIndex[id] =
    (currentIndex[id] + direction + images[id].length) % images[id].length;
  document.getElementById(`${id}-image`).src = images[id][currentIndex[id]];

  const captionEl = document.getElementById(`caption-${id}`);
  if (captionEl) {
    captionEl.textContent = `${currentIndex[id] + 1} / ${images[id].length}`;
  }
}
