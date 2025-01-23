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


