// src/components/nav-bar.js
import { getTranslation, getCurrentLang } from './language-toggle.js';

const SECTIONS = [
  { id: 'hero', labelKey: 'nav.home' },
  { id: 'about', labelKey: 'nav.about' },
  { id: 'circles', labelKey: 'nav.circles' },
  { id: 'activities', labelKey: 'nav.activities' },
  { id: 'founder', labelKey: 'nav.founder' },
  { id: 'news', labelKey: 'nav.news' },
  { id: 'join', labelKey: 'nav.join' }
];

export function renderNavBar() {
  const nav = document.getElementById('nav-header');
  if (!nav) return;

  // Remove all children except language toggle (if present)
  Array.from(nav.children).forEach(child => {
    if (!child.classList.contains('lang-toggle')) nav.removeChild(child);
  });

  const navList = document.createElement('ul');
  navList.className = 'main-nav';

  SECTIONS.forEach(section => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#${section.id}`;
    a.setAttribute('data-scroll-to', section.id);
    a.textContent = getTranslation(section.labelKey);
    a.setAttribute('tabindex', '0');
    a.setAttribute('role', 'link');
    li.appendChild(a);
    navList.appendChild(li);
  });

  nav.insertBefore(navList, nav.firstChild);
}

export function initNavBar() {
  renderNavBar();
  window.addEventListener('languageChanged', renderNavBar);
}
