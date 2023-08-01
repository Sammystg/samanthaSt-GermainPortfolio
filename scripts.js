const text = "front end web developer";
let charIndex = 0;
const h3Element = document.getElementById("typewriter");

function typeWriter() {
    if (charIndex < text.length) {
        h3Element.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();