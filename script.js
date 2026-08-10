/* =========================================================
   PORTFOLIO JAVASCRIPT
========================================================= */


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");


function updateActiveNav() {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}


window.addEventListener("scroll", updateActiveNav);

updateActiveNav();



/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const revealElements = document.querySelectorAll(
    ".section-label, .section-title, .about-grid, .skill-card, .project-card, .contact-description, .contact-buttons"
);


revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

});


const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});



/* =========================================================
   PROJECT CARD STAGGER ANIMATION
========================================================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.12}s`;

});



/* =========================================================
   SKILL CARD STAGGER ANIMATION
========================================================= */

const skillCards =
    document.querySelectorAll(".skill-card");


skillCards.forEach((card, index) => {

    card.style.transitionDelay =
        `${index * 0.08}s`;

});



/* =========================================================
   NAVBAR BACKGROUND ON SCROLL
========================================================= */

const navbar =
    document.querySelector(".navbar");


function updateNavbar() {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(8, 11, 20, 0.92)";

    } else {

        navbar.style.background =
            "rgba(8, 11, 20, 0.78)";

    }

}


window.addEventListener("scroll", updateNavbar);

updateNavbar();



/* =========================================================
   SMOOTH INTERNAL LINKS
========================================================= */

document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });



/* =========================================================
   PROJECT IMAGE ERROR HANDLING
========================================================= */

const projectImages =
    document.querySelectorAll(".project-image img");


projectImages.forEach((image) => {

    image.addEventListener("error", function () {

        this.style.display = "none";

        const parent =
            this.parentElement;

        parent.style.display = "flex";

        parent.style.alignItems = "center";

        parent.style.justifyContent = "center";

        parent.innerHTML = `
            <span style="
                color: #687388;
                font-size: 0.85rem;
            ">
                Project preview unavailable
            </span>
        `;

    });

});



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
    document.querySelector(".footer p");


if (yearElement) {

    const currentYear =
        new Date().getFullYear();

    yearElement.innerHTML =
        `© ${currentYear} Hassnain Haider.
         Built with passion for Generative AI.`;

}