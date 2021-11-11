new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  // // If we need pagination
  // pagination: {
  //   el: ".swiper-pagination",
  // },
  spaceBetween: 5,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
new Swiper(".swiperok", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  slidesPerView: 4,
  freeMode: true,
  spaceBetween: 0,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1850: {
      slidesPerView: 3.8,
    },
    1750: {
      slidesPerView: 3.5,
    },
    1650: {
      slidesPerView: 3.3,
    },
    1550: {
      slidesPerView: 3.1,
    },
    1450: {
      slidesPerView: 2.8,
    },
    1350: {
      slidesPerView: 2.6,
    },
    1250: {
      slidesPerView: 2.4,
    },
    1150: {
      slidesPerView: 2.3,
    },
    1050: {
      slidesPerView: 2.2,
    },
    992: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 1.9,
    },
    900: {
      slidesPerView: 1.8,
    },
    850: {
      slidesPerView: 1.7,
    },
    800: {
      slidesPerView: 1.6,
    },
    750: {
      slidesPerView: 1.5,
    },
    700: {
      slidesPerView: 1.4,
    },
    650: {
      slidesPerView: 1.3,
    },
    576: {
      slidesPerView: 1.2,
    },
    546: {
      slidesPerView: 1.1,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

new Swiper(".logo", {
  direction: "horizontal",
  slidesPerView: 4,

  // grid: {
  //   fill: "row",
  //   rows: 2,
  // },
  breakpoints: {
    1440: {
      slidesPerView: 4,
    },
    1259: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2.5,
    },
    576: {
      slidesPerView: 2,
    },
    425: {
      slidesPerView: 1.5,
    },
    380: {
      slidesPerView: 1.3,
    },
    320: {
      slidesPerView: 1,
    },
  },
});
// let imgp1 = document.querySelector(".img_p1");
// let img1 = document.querySelector(".img_1");
// let imgp2 = document.querySelector(".img_p2");
// let search = document.querySelector(".search");
// console.log(imgp1);
// console.log(search);
// img1.onmouseover = function () {
//   imgp1.style.display = "none";
//   imgp2.style.display = "none";
//   search.style.display = "block";
//   img1.style.opacity = "1";
// };
// img1.onmouseout = function () {
//   imgp1.style.display = "block";
//   imgp2.style.display = "block";
//   search.style.display = "none";
//   img1.style.opacity = "0.65";
// };

// let imgp1 = document.querySelector(".search");
// let img1 = document.querySelector(".img_1");
// imgp1.onclick = function () {
//   imgp1.style.display = "none";
//   // img1.style.transform = "scale(2)";
// };
const nav = document.querySelector(".nav");
const navUl = document.querySelector(".nav_ul");
const headerTel = document.querySelector(".header_tel");
window.onscroll = function () {
  if (scrollY > 100) {
    // nav.style.background = "rgba($color: #333333, $alpha: 0.75)";
    navUl.style.margin = "25px 0 0 0";
    nav.style.background = "rgba(51,51,51, 0.75)";
    headerTel.style.margin = "25px 0 0 0";
  } else if (scrollY < 100) {
    navUl.style.margin = "50px 0 0 0";
    nav.style.background = "rgba(51,51,51, 0)";
    headerTel.style.margin = "50px 0 0 0";
  }
};
// $(document).ready(function () {
//   $(".mobile_btn").click(function (event) {
//     $(".mobile_btn").toggleClass("active");
//   });
// });

const button = document.querySelector(".mobile_btn");
const info = document.querySelector(".contact_info");
const body = document.querySelector("body");
const navok = document.querySelector(".nav_ul");
const navik = document.querySelector(".messenger");
const tel = document.querySelector(".header_tel");

button.addEventListener("click", () => {
  button.classList.toggle("active");
  info.classList.toggle("info_menu");
  body.classList.toggle("info_ok");
  navok.classList.toggle("nav_ul_style");
  navik.classList.toggle("messenger_style");
  tel.classList.toggle("tel");
});
