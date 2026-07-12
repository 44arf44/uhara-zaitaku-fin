document.addEventListener("DOMContentLoaded", () => {

    const button = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {

        const isOpen = nav.classList.toggle("is-open");

        button.classList.toggle("is-open", isOpen);

        button.setAttribute("aria-expanded", isOpen);

    });

    nav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("is-open");

            button.classList.remove("is-open");

            button.setAttribute("aria-expanded", "false");

        });

    });

});