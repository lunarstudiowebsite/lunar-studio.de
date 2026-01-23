const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatClose = document.getElementById("chatClose");

chatToggle.addEventListener("click", () => {
    chatWindow.classList.toggle("active");
});

chatClose.addEventListener("click", () => {
    chatWindow.classList.remove("active");
});
