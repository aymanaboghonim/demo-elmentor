import { getTranslation } from '../components/language-toggle.js';

export function renderHero() {
  const hero = document.getElementById('hero');
  
  const updateContent = () => {
    hero.innerHTML = `
      <h1>${getTranslation('hero.title')}</h1>
      <p>${getTranslation('hero.subtitle')}</p>
      <button class="btn-primary" data-scroll-to="join">
        ${getTranslation('hero.cta')}
      </button>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
