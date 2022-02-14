// NICE SELECT 
$(document).ready(function() {
    $('select').niceSelect();
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


// ===================menu toggle ============
$(".hamburger-menu").click(function() {
    $(".mobile-menu").addClass("active");
});
$(".menu-close").click(function() {
    $(".mobile-menu").removeClass("active");
});

// =================service slider ================
var swiper = new Swiper(".service-slider", {

    slidesPerView: 1,
    breakpoints: {
        680: {
            slidesPerView: 2,
            spaceBetween: 30,

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