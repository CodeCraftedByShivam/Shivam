  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });



// ✅ Project Image Gallery
const images = {
  isro: [
    "assets/Projects/isro1.jpg",
    "assets/Projects/isro2.jpg",
    "assets/Projects/isro3.jpg",
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
    "assets/Projects/robot4.jpg",
    "assets/Projects/robot5.jpg"
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

// ✅ Open Gallery + Show 1st Image + Set Caption
function openGallery(id) {
  document.getElementById(`gallery-${id}`).classList.add("active");
  document.getElementById(`${id}-image`).src = images[id][0];
  currentIndex[id] = 0;

  // Caption update on open
  const captionEl = document.getElementById(`caption-${id}`);
  if (captionEl) {
    captionEl.textContent = `1 / ${images[id].length}`;
  }
}

// ✅ Close Gallery
function closeGallery(id) {
  document.getElementById(`gallery-${id}`).classList.remove("active");
}

// ✅ Change Image + Update Caption
function changeImage(id, direction) {
  currentIndex[id] =
    (currentIndex[id] + direction + images[id].length) % images[id].length;
  document.getElementById(`${id}-image`).src = images[id][currentIndex[id]];

  // Caption update on slide
  const captionEl = document.getElementById(`caption-${id}`);
  if (captionEl) {
    captionEl.textContent = `${currentIndex[id] + 1} / ${images[id].length}`;
  }
}



// ✅ GSAP ANIMATION IN ACHIEVEMENT SECTION
// (Add this only if you have GSAP and achievements section)
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".achievement-card", {
//   scrollTrigger: {
//     trigger: ".achievements-section",
//     start: "top 80%",
//     toggleActions: "play none none reverse",
//   },
//   opacity: 0,
//   y: 50,
//   duration: 1,
//   stagger: 0.3
// });
