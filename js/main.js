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
document.addEventListener("DOMContentLoaded", () => {
    const chatToggle = document.getElementById("chatToggle");
    const chatWindow = document.getElementById("chatWindow");
    const chatClose = document.getElementById("chatClose");

    if (!chatToggle || !chatWindow || !chatClose) {
        console.warn("Chatbot-Elemente nicht gefunden");
        return;
    }

    chatToggle.addEventListener("click", () => {
        chatWindow.classList.toggle("open");
    });

    chatClose.addEventListener("click", () => {
        chatWindow.classList.remove("open");
    });
});


