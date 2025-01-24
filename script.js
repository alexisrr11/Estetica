const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function autoSlide() {
  currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
  showSlide(currentIndex);
}

// Start the automatic slider
setInterval(autoSlide, 5000); // Change slide every 5 seconds

const contenidoNav = document.querySelector(".navbar");
const icon = document.querySelector(".hamburguesa");

contenidoNav.classList.add("menu");

icon.addEventListener('click',()=>{
  contenidoNav.classList.toggle("menu")
})

// Nueva funcionalidad

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".section");

  const observar = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observar.unobserve(entry.target);
          }
      });
  });

  elements.forEach(element => observar.observe(element));
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({
          behavior: "smooth",
          block: "start"
      });
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function () {
      const elements = document.querySelectorAll(".hidden");
      elements.forEach(element => {
          element.classList.remove("hidden");
          element.classList.add("visible");
      });
  });
});
