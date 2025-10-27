import { getTranslation } from '../components/language-toggle.js';

export function renderFounder() {
  const founder = document.getElementById('founder');
  
  const updateContent = () => {
    founder.innerHTML = `
      <div class="founder-content">
        <h2>${getTranslation('founder.title')}</h2>
        <p class="founder-name">${getTranslation('founder.name')}</p>
        <p>${getTranslation('founder.vision')}</p>
      </div>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
