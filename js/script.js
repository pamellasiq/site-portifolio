function toggleMenu() {
    var menu = document.getElementById('navResponsive');
    var hamburguer = document.getElementById('menuHamburguer');
    menu.classList.toggle('open');
    hamburguer.classList.toggle('change');
}

function togglePortfolioLayer(element) {
    element.classList.toggle('show-layer');
}

document.addEventListener('DOMContentLoaded', function() {
    const portfolioBoxes = document.querySelectorAll('.portifolio-box');

    portfolioBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Toggle the show-layer class on the clicked box
            this.classList.toggle('show-layer');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var options = {
        strings: ["Developer and Designer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true
    };

    var typed = new Typed(".typed-element", options);
});