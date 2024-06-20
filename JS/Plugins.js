// plugins.js
$(document).ready(function() {
    // Plugin 1: Carrusel de Bootstrap
    $('.carousel').carousel({
        interval: 2000
    });

    // Plugin 2: Efectos de animación
    $('.benefit').hover(
        function() {
            $(this).addClass('animate__animated animate__pulse');
        },
        function() {
            $(this).removeClass('animate__animated animate__pulse');
        }
    );

    // Plugin 3: Integración con WhatsApp
    $('.contact-whatsapp').on('click', function() {
        window.open('https://wa.me/123456789?text=Hola,%20quiero%20realizar%20un%20pedido.');
    });
});

