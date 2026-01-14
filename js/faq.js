document.addEventListener("DOMContentLoaded", () => {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            const answer = question.nextElementSibling;
            const isOpen = answer.classList.contains("open");

            document.querySelectorAll(".faq-answer").forEach(a => {
                a.classList.remove("open");
                a.style.maxHeight = null;
            });

            if (!isOpen) {
                answer.classList.add("open");
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});
