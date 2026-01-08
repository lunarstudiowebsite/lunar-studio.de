// Burger Menü
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Aktive Navigation automatisch setzen
const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.nav-links a').forEach(link => {
    const linkPage = link.getAttribute('href');

    if (linkPage === currentPage || (linkPage === "index.html" && currentPage === "")) {
        link.classList.add('active');
    }
});
