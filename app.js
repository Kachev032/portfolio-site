//Swiper.js code for the projects card swipe effect//
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 2,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
});

//Clicking the cat to show the hidden message//
const clickableImg = document.getElementById("clickable-img");
const hiddenMsg = document.getElementById("hidden-message");

let messageVisible = false;

clickableImg.addEventListener("click", function () {
  if (!messageVisible) {
    hiddenMsg.style.display = "block";
    messageVisible = true;
  }
});

////// Toggle Navbar/////
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
