document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            navLinks.forEach(link => link.classList.remove("active"));
            navLinks[index].classList.add("active");
        }
    });
});

//Typewriter 
function typeWriterEffect(elementId, text, speed) {
    let i = 0;
    const element = document.getElementById(elementId);

    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const myText = "Olá! Sou Pedro, O Desenvolvedor.";
    typeWriterEffect('typewriter-text', myText, 100);
});



