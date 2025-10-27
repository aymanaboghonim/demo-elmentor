import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import circlesData from '../assets/data/circles.json';

export function renderCircles() {
  const circles = document.getElementById('circles');
  
  const updateContent = () => {
    const lang = getCurrentLang();
    
    const cards = circlesData
      .sort((a, b) => a.order - b.order)
      .map(circle => `
        <div class="circle-card">
          <h3>${circle.name[lang]}</h3>
          <p>${circle.description[lang]}</p>
        </div>
      `)
      .join('');
    
    circles.innerHTML = `
      <h2>${getTranslation('circles.title')}</h2>
      <div class="circles-grid">
        ${cards}
      </div>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
