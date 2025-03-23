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
    spinner(0);


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


    /**
     * @title Objet de données des services
     * @description Représente une collection de services proposés, chacun avec un texte descriptif et une image associée.
     * 
     * @type {Object.<number, {text: string, img: string}>}
     * @property {string} text - Une brève description du service.
     * @property {string} img - Le chemin du fichier vers l'image représentant le service.
     */


    const services = {
        1: { text: "Financez votre exploitation agricole avec des solutions flexibles et avantageuses.", img: "img/agriculture.jpg" },
        2: { text: "Financez l'achat d'un tracteur ou d'un véhicule professionnel avec des solutions adaptées à votre budget.", img: "img/tractor.jpg" },
        3: { text: "Obtenez un financement adapté pour vos frais de scolarité, logement et matériel éducatif, avec un taux réduit et des modalités de remboursement flexibles.", img: "img/education.jpg" },
        4: { text: "Réalisez votre projet immobilier grâce à nos financements flexibles.", img: "img/real-estate.jpg" },
        5: { text: "Faites fructifier votre argent grâce à des comptes d'épargne à haut rendement et des solutions en cryptomonnaie.", img: "img/crypto.jpg" },
        6: { text: "Accédez facilement à vos fonds grâce à nos solutions de retrait flexibles et sécurisées adaptées à vos besoins financiers.", img: "img/retrait.jpg" },
        7: { text: "Bénéficiez d’un financement pour couvrir vos frais médicaux et hospitaliers.", img: "img/medical.jpg" },
        8: { text: "Offrez-vous des vacances de rêve avec un prêt adapté à votre budget.", img: "img/vacation.jpg" }
    };

    function showServiceDetails() {
        const serviceList = document.getElementById("serviceList");
        const selectedValue = serviceList.value;
        const detailsDiv = document.getElementById("serviceDetails");
        const detailsText = document.getElementById("detailsText");
        const serviceImage = document.getElementById("serviceImage");

        if (selectedValue) {
            detailsText.textContent = services[selectedValue].text;
            serviceImage.src = services[selectedValue].img;
            serviceImage.style.display = "block";
            detailsDiv.classList.remove("d-none");
        } else {
            detailsDiv.classList.add("d-none");
        }
    }




})(jQuery);
