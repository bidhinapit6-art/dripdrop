// Display icons from the Lucide icon library
if (window.lucide) {
    lucide.createIcons();
}

// Display the current year in the footer
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

        menuToggle.innerHTML = isOpen
            ? '<i data-lucide="x"></i>'
            : '<i data-lucide="menu"></i>';

        if (window.lucide) {
            lucide.createIcons();
        }
    });
}

// Contact form validation
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formStatus.textContent = "Please fill in all the fields.";
            formStatus.className = "form-status error";
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            formStatus.textContent =
                "Please enter a valid email address.";
            formStatus.className = "form-status error";
            return;
        }

        formStatus.textContent =
            "Thank you, " + name +
            "! Your form has been validated successfully.";

        formStatus.className = "form-status success";

        contactForm.reset();
    });
}