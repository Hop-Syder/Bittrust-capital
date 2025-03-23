(function ($) {
    "use strict";

    // Spinner
    // Spinner (chargement)
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initialiser wowjs
    new WOW().init();


    // Navbar fixe
    $(window).scroll(function () {
        if ($(window).width() > 992) {
            if ($(this).scrollTop() > 45) {
                $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
            } else {
                $('.sticky-top .container').removeClass('shadow-sm').css('max-width', $('.topbar .container').width());
            }
        } else {
            $('.sticky-top .container').addClass('shadow-sm').css('max-width', '100%');
        }
    });


    // Carrousel de l'en-tête (Hero Header)
    $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 2000,
        center: false,
        dots: false,
        loop: true,
        margin: 0,
        nav: true,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ]
    });



    // Carrousel des projets
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });

    // Carrousel des témoignages
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav: false,
        navText: [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });


    // Compteur des faits
    $('[data-toggle="counter-up"]').counterUp({
        delay: 5,
        time: 2000
    });



    // Bouton retour en haut
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    document.addEventListener('DOMContentLoaded', () => {
        const navLinks = document.querySelectorAll('.nav-item.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.forEach(nav => {
                    nav.classList.remove('active');
                });
                link.classList.add('active');
            });
        });
    });




})(jQuery);
