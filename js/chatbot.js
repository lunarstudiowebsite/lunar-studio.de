const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
const chatClose = document.getElementById("chatClose");
const chatMessages = document.getElementById("chatMessages");

chatToggle.addEventListener("click", () => {
    chatWindow.style.display = "flex";
});

chatClose.addEventListener("click", () => {
    chatWindow.style.display = "none";
});

document.querySelectorAll(".chat-option").forEach(option => {
    option.addEventListener("click", () => {
        const answer = document.createElement("div");
        answer.className = "bot-message";

        switch (option.innerText) {
            case "Was kostet eine Website?":
                answer.innerHTML = "Jede Website ist individuell. Projekte starten bei Lunar Studio in der Regel ab <strong>1.500 €</strong> – je nach Umfang und Anforderungen.";
                break;

            case "Wie läuft die Zusammenarbeit ab?":
                answer.innerHTML = "Nach einem Erstgespräch folgen Konzeption, Design, Umsetzung und Launch – transparent & strukturiert.";
                break;

            case "Wie lange dauert ein Projekt?":
                answer.innerHTML = "Die meisten Webdesign-Projekte dauern zwischen <strong>3 und 6 Wochen</strong>.";
                break;

            case "Webdesign in Oldenburg?":
                answer.innerHTML = "Ja! Lunar Studio bietet professionelles Webdesign für Unternehmen in <strong>Oldenburg & dem Oldenburger Land</strong>.";
                break;
        }

        chatMessages.appendChild(answer);
        option.remove();
    });
});
