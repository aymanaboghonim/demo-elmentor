import { getTranslation } from '../components/language-toggle.js';

export function renderFooter() {
  const footer = document.getElementById('footer');
  
  const updateContent = () => {
    footer.innerHTML = `
      <p><strong>Elmentor Program</strong></p>
      <p>${getTranslation('footer.copyright')}</p>
      <p>${getTranslation('footer.social')}</p>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
