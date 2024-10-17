const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  //Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

//close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

//close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/*Initializing Swiper */
let swiper = new Swiper(".slider-wrapper" , {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  //pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  //Navigation arrows
  navigation: {
    nextEl : ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /*Responsive breakfast */
  breakpoints : {
    0:{
      slidesPreView: 1,
    },
    768: {
      slidesPreView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});