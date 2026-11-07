import "./styles/base.css";
import "./styles/layout.css";
import "./styles/home.css";
import "./styles/page.css";
import "./styles/experience.css";
import "./styles/sections.css";
import "./styles/contact.css";
import "./styles/projects.css";
import { renderHeader, renderFooter } from "./components.js";

renderHeader();
renderFooter();

// ----- Menu burger (mobile) -----
const burger = document.getElementById("burger");
const nav = document.getElementById("nav-links");

burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  nav.classList.toggle("open");
});

// Referme le menu mobile quand on clique sur un lien
nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("open");
    nav.classList.remove("open");
  });
});

// ----- Animation d'apparition au scroll -----
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target); // on n'anime qu'une fois
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// ----- Onglet actif selon la section visible (scroll spy) -----
const navLinks = nav.querySelectorAll("a");

const spyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  },
  // Une section est "active" quand elle croise une bande au milieu de l'écran
  { rootMargin: "-45% 0px -50% 0px" }
);

document.querySelectorAll("main section[id]").forEach((section) => spyObserver.observe(section));

// ----- Formulaire de contact → WhatsApp -----
const PHONE = "237659002681"; // format international, sans + ni espaces
const form = document.getElementById("wa-form");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // empêche le rechargement de la page

  const name = form.elements.name.value.trim();
  const message = form.elements.message.value.trim();

  const text = `Bonjour, je suis ${name}.\n\n${message}`;
  const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;

  window.open(url, "_blank", "noopener");
});