import './assets/styles/globals.css';
import './assets/styles/sections.css';
import { initLanguageToggle } from './components/language-toggle.js';
import { initSmoothScroll } from './components/smooth-scroll.js';
import { renderHero } from './sections/hero.js';
import { renderAbout } from './sections/about.js';
import { renderCircles } from './sections/circles.js';
import { renderActivities } from './sections/activities.js';
import { renderFounder } from './sections/founder.js';
import { renderNews } from './sections/news.js';
import { renderJoin } from './sections/join.js';
import { renderFooter } from './sections/footer.js';

// Bootstrap application
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  // Build main layout shell
  app.innerHTML = `
    <nav id="nav-header"></nav>
    <main>
      <section id="hero"></section>
      <section id="about"></section>
      <section id="circles"></section>
      <section id="activities"></section>
      <section id="founder"></section>
      <section id="news"></section>
      <section id="join"></section>
    </main>
    <footer id="footer"></footer>
  `;

  // Render sections
  renderHero();
  renderAbout();
  renderCircles();
  renderActivities();
  renderFounder();
  renderNews();
  renderJoin();
  renderFooter();

  // Initialize shared components
  initLanguageToggle();
  initSmoothScroll();
});
