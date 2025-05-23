        // Coordenadas aproximadas de las ciudades / estados

        const btn = document.getElementById('btnBackToTop');
  btn.style.display = 'none'; // oculto al inicio

  window.addEventListener('scroll', () => {
    if(window.scrollY > 200) {
      btn.style.display = 'block';
      btn.style.opacity = '0.6';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('mouseenter', () => btn.style.opacity = '1');
  btn.addEventListener('mouseleave', () => btn.style.opacity = '0.6');

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
const offcanvas = document.getElementById("offcanvas");
const langOptions = document.querySelectorAll(".language-option");

// Traduce usando el archivo JSON
async function translatePage(lang) {
  const response = await fetch('lang.json');
  const data = await response.json();
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[lang] && data[lang][key]) {
      el.textContent = data[lang][key];
    }
  });
}

// Marca el idioma activo
function updateActiveLang(lang) {
  langOptions.forEach(opt => {
    opt.classList.toggle("active", opt.dataset.lang === lang);
  });
}

// Selección de idioma: actualiza UI, idioma, menú y almacenamiento
async function selectLanguage(lang) {
  localStorage.setItem("language", lang); // Usamos una sola clave
  updateActiveLang(lang);
  await translatePage(lang);
  toggleOffcanvas(); // Cierra el offcanvas
}

// Cierra/abre el menú lateral
function toggleOffcanvas() {
  offcanvas.classList.toggle("active");
}

// Al cargar la página
document.addEventListener("DOMContentLoaded", async () => {
  const savedLang = localStorage.getItem('language') || 'es';
  updateActiveLang(savedLang);
  await translatePage(savedLang);
});

// Eventos de los botones
langOptions.forEach(opt => {
  opt.addEventListener("click", () => {
    const lang = opt.dataset.lang;
    selectLanguage(lang);
  });
});



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

