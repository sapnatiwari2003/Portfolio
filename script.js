/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-xmark"></i>';

    } else {

        menuBtn.innerHTML =
            '<i class="fa-solid fa-bars"></i>';
    }

});


/* ================= DARK MODE ================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const icon =
        themeBtn.querySelector("i");

    if (document.body.classList.contains("dark")) {

        icon.className =
            "fa-solid fa-sun";

    } else {

        icon.className =
            "fa-solid fa-moon";
    }

});


/* ================= TYPING EFFECT ================= */

const typing =
    document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "PHP Developer",
    "Python Developer",
    "IT Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const word =
        words[wordIndex];

    if (deleting) {

        typing.textContent =
            word.substring(0, charIndex--);

    } else {

        typing.textContent =
            word.substring(0, charIndex++);
    }


    let speed =
        deleting ? 60 : 100;


    if (!deleting &&
        charIndex === word.length + 1) {

        deleting = true;

        speed = 1200;
    }


    else if (deleting &&
             charIndex === 0) {

        deleting = false;

        wordIndex =
            (wordIndex + 1) %
            words.length;

        speed = 400;
    }


    setTimeout(
        typeEffect,
        speed
    );
}

typeEffect();


/* ================= CONTACT FORM ================= */

const form =
    document.getElementById("contactForm");

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        document.getElementById(
            "message"
        ).textContent =
            "Thank you! Your message has been received.";

        form.reset();
    }
);


/* ================= TOP BUTTON ================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 400) {

            topBtn.classList.add("show");

        } else {

            topBtn.classList.remove("show");
        }
    }
);


topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* ================= NAV ACTIVE ================= */

const sections =
    document.querySelectorAll(
        "section"
    );

const links =
    document.querySelectorAll(
        ".nav-links a"
    );


window.addEventListener(
    "scroll",
    () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );
            }

        });


        links.forEach(link => {

            link.classList.remove(
                "active"
            );

            if (
                link.getAttribute(
                    "href"
                ) === "#" + current
            ) {

                link.classList.add(
                    "active"
                );
            }

        });

    }
);