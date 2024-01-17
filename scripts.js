// Typewriter Effect
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

// Skills Titles
document.addEventListener('DOMContentLoaded', function () {
    const skillsIcons = document.querySelectorAll('.skillsIcons li');

    skillsIcons.forEach((icon) => {
        icon.addEventListener('mouseover', function () {
            const title = document.createElement('span');
            title.className = 'icon-title';
            title.textContent = icon.getAttribute('data-title');
            icon.appendChild(title);
        });

        icon.addEventListener('mouseout', function () {
            const title = icon.querySelector('.icon-title');
            if (title) {
                icon.removeChild(title);
            }
        });
    });
});

// About Me Ease in 

document.addEventListener("DOMContentLoaded", function () {
    let h2Element = document.querySelector(".paragraphWrapper h2");

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5
    };

    let observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                h2Element.style.opacity = 1;
                observer.unobserve(entry.target);
            }
        });
    }, options);

    observer.observe(h2Element);
});
