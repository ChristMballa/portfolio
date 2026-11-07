// Tout est en ancres : un seul fichier HTML, un seul défilement.
const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#experience", label: "Expérience" },
  { href: "#projets", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export function renderHeader() {
  const items = links
    .map(({ href, label }) => `<a href="${href}">${label}</a>`)
    .join("");

  document.getElementById("header").innerHTML = `
    <header class="navbar">
      <div class="container navbar__inner">
        <a href="#accueil" class="logo"> <span class="gradient-text">MBALLA AMOUGOU CHRIST BENOIT</span></a>
        <nav class="nav-links" id="nav-links">${items}</nav>
        <button class="burger" id="burger" aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`;
}

export function renderFooter() {
  document.getElementById("footer").innerHTML = `
    <footer class="footer">
      <div class="container footer__inner">
        <span>© ${new Date().getFullYear()} MBALLA AMOUGOU CHRIST BENOIT*
        
        amougouchristmballa@gmail.com.

        Tous droits réservés.</span>

      </div>
    </footer>`;
}