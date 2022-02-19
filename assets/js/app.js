// NICE SELECT 
$(document).ready(function() {
    $('select').niceSelect();
});
// ==============MOBILE MENU==============
const menuBtn = document.querySelector('.hamburger-menu');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});
// ===================menu toggle ============
$(".hamburger-menu").click(function() {
    $(".mobile-menu").toggleClass("active");
});
// ================occastion=============
var swiper = new Swiper(".occastion-slider", {
    slidesPerView: 1,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    breakpoints: {
        680: {
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
        992: {
            slidesPerView: 1.9,
            spaceBetween: 30,
        },
        1170: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        }
    },
});


// ==================preview slider ===========
var swiper = new Swiper(".product-view-slider", {
    autoplay: {
        delay: 2000,
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },

});


// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 55) {
        $(".topheader").addClass("navbar-fixed");
    } else {
        $(".topheader").removeClass("navbar-fixed");
    }
});



// =================service slider ================
var swiper = new Swiper(".service-slider", {

    slidesPerView: 1,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 10,

        },
        840: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1170: {
            slidesPerView: 4,
            spaceBetween: 30,
            
        }
    },
});

// ====================filter menu active ===========
$(".filter-one li").click(function() {
    $(".filter-one li").removeClass("active");
    $(this).addClass("active");
});
$(".filter-tow li").click(function() {
    $(".filter-tow li").removeClass("active");
    $(this).addClass("active");
});

// =============car show=========
var swiper = new Swiper(".car-show-thumbnel", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  var swiper2 = new Swiper(".car-show", {
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });

//   ==============RELATED CAR SLIDER=============
var swiper = new Swiper(".relatedProduct", {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
  });

