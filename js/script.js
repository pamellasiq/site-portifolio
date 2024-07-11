function toggleMenu() {
    var menu = document.getElementById('navResponsive');
    var hamburguer = document.getElementById('menuHamburguer');
    menu.classList.toggle('open');
    hamburguer.classList.toggle('change');
}

document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Developer and Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    var typed = new Typed(".typed-element", options);
});