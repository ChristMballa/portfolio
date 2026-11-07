(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{href:`#accueil`,label:`Accueil`},{href:`#experience`,label:`Expérience`},{href:`#projets`,label:`Projets`},{href:`#contact`,label:`Contact`}];function t(){let t=e.map(({href:e,label:t})=>`<a href="${e}">${t}</a>`).join(``);document.getElementById(`header`).innerHTML=`
    <header class="navbar">
      <div class="container navbar__inner">
        <a href="#accueil" class="logo"> <span class="gradient-text">MBALLA AMOUGOU CHRIST BENOIT</span></a>
        <nav class="nav-links" id="nav-links">${t}</nav>
        <button class="burger" id="burger" aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>`}function n(){document.getElementById(`footer`).innerHTML=`
    <footer class="footer">
      <div class="container footer__inner">
        <span>© ${new Date().getFullYear()} MBALLA AMOUGOU CHRIST BENOIT*
        
        amougouchristmballa@gmail.com.

        Tous droits réservés.</span>

      </div>
    </footer>`}t(),n();var r=document.getElementById(`burger`),i=document.getElementById(`nav-links`);r.addEventListener(`click`,()=>{r.classList.toggle(`open`),i.classList.toggle(`open`)}),i.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{r.classList.remove(`open`),i.classList.remove(`open`)})});var a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&(e.target.classList.add(`is-visible`),a.unobserve(e.target))})},{threshold:.15});document.querySelectorAll(`.reveal`).forEach(e=>a.observe(e));var o=i.querySelectorAll(`a`),s=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&o.forEach(t=>{t.classList.toggle(`active`,t.getAttribute(`href`)===`#${e.target.id}`)})})},{rootMargin:`-45% 0px -50% 0px`});document.querySelectorAll(`main section[id]`).forEach(e=>s.observe(e));var c=`237659002681`,l=document.getElementById(`wa-form`);l.addEventListener(`submit`,e=>{e.preventDefault();let t=`Bonjour, je suis ${l.elements.name.value.trim()}.\n\n${l.elements.message.value.trim()}`,n=`https://wa.me/${c}?text=${encodeURIComponent(t)}`;window.open(n,`_blank`,`noopener`)});