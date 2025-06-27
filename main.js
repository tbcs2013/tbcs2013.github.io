const header = document.querySelector("header");

//toggle menu on smaller screens
const menuOpen = document.getElementById("menuOpen");
const menuClose = document.getElementById("menuClose");
const nav = document.querySelector("nav");
menuOpen.addEventListener("click", function () {
  nav.classList.add("opened");
  menuClose.style.display = "flex";
  menuOpen.style.display = "none";
});
menuClose.addEventListener("click", function () {
  nav.classList.remove("opened");
  menuOpen.style.display = "flex";
  menuClose.style.display = "none";
});

//check if window is already scrolled after refresh
if (window.scrollY > 0) {
  header.classList.add("scrolled");
}
//change header background on scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Add particle effect to hero section
function createParticles() {
  const hero = document.querySelector(".hero");
  for (let i = 0; i < 70; i++) {
    const particle = document.createElement("div");
    particle.style.position = "absolute";
    particle.style.zIndex = "-1";
    particle.style.width = "4px";
    particle.style.height = "4px";
    particle.style.backgroundColor = "white";
    particle.style.borderRadius = "50%";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animation = `float ${
      3 + Math.random() * 4
    }s ease-in-out infinite`;
    particle.style.animationDelay = Math.random() * 2 + "s";
    hero.appendChild(particle);
  }
}

// Initialize particles
window.addEventListener("load", createParticles);
