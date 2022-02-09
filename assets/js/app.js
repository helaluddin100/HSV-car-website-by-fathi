// NICE SELECT 
$(document).ready(function() {
    $('select').niceSelect();
});

// ================occastion=============
var swiper = new Swiper(".occastion-slider", {
    slidesPerView: 2.3,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
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
        $(".menu-header").addClass("navbar-fixed");
    } else {
        $(".menu-header").removeClass("navbar-fixed");
    }
});

// Hamburger-menu
$('.hamburger-menu').on('click', function() {
    $('.hamburger-menu .line-top, #menu').toggleClass('current');
    $('.hamburger-menu .line-center').toggleClass('current');
    $('.hamburger-menu .line-bottom').toggleClass('current');
});