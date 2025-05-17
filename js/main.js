        // Coordenadas aproximadas de las ciudades / estados

        const locations = [
            { name: "Jalisco", coords: [20.6597, -103.3496] },
            { name: "Ciudad de México", coords: [19.4326, -99.1332] },
            { name: "Chihuahua", coords: [28.6353, -106.0889] },
            { name: "Aguascalientes", coords: [21.8853, -102.2916] },
            { name: "Coahuila", coords: [27.0587, -101.7068] },
            { name: "Veracruz", coords: [19.1738, -96.1342] },
            { name: "Puebla", coords: [19.0414, -98.2063] },
            { name: "Nuevo León", coords: [25.6751, -100.3189] },
            { name: "Chiapas", coords: [16.7569, -93.1292] },
            { name: "Tabasco", coords: [17.8409, -92.6189] },
            { name: "Campeche", coords: [19.8301, -90.5349] },
            { name: "Zacatecas", coords: [22.7709, -102.5832] },
        ];

        // Crear el mapa centrado en México
        const map = L.map("map").setView([23.6345, -102.5528], 5);

        const orangeIcon = L.icon({
            iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
            shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
            iconSize: [25, 41],    // tamaño del icono
            iconAnchor: [12, 41],  // punto del icono que corresponde a la ubicación exacta
            popupAnchor: [1, -34], // punto donde aparecerá el popup respecto al icono
            shadowSize: [41, 41]   // tamaño de la sombra
        });


        // Agregar capa de mapa (OpenStreetMap)
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Agregar marcadores
        locations.forEach((location) => {
            L.marker(location.coords, { icon: orangeIcon })
                .addTo(map)
                .bindPopup(`<b>${location.name}</b>`);
        });


        ScrollReveal().reveal(".card", {
            duration: 1000,
            distance: "50px",
            easing: "ease-in-out",
            origin: "bottom",
            interval: 200,
        });

        ScrollReveal().reveal(
            ".jumbotron, .container-fluid > .container > .row > div",
            {
                duration: 1200,
                distance: "60px",
                easing: "ease-in-out",
                origin: "bottom",
                interval: 300,
            }
        );


(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

