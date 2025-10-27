import { getTranslation } from '../components/language-toggle.js';

export function renderJoin() {
  const join = document.getElementById('join');
  
  const updateContent = () => {
    join.innerHTML = `
      <h2>${getTranslation('join.title')}</h2>
      <p>${getTranslation('join.subtitle')}</p>
      <div class="coming-soon">
        <p><strong>📧 Contact form coming soon!</strong></p>
        <p>For now, reach out to us directly at: <a href="mailto:hello@elmentor.com" style="color: white; text-decoration: underline;">hello@elmentor.com</a></p>
      </div>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
