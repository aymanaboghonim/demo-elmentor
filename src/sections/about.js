import { getTranslation } from '../components/language-toggle.js';

export function renderAbout() {
  const about = document.getElementById('about');
  
  const updateContent = () => {
    about.innerHTML = `
      <h2>${getTranslation('about.title')}</h2>
      <p>${getTranslation('about.content')}</p>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
