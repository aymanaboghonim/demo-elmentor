import { getTranslation } from '../components/language-toggle.js';

export function renderActivities() {
  const activities = document.getElementById('activities');
  
  const updateContent = () => {
    const items = getTranslation('activities.items');
    const listItems = items.map(item => `<li>${item}</li>`).join('');
    
    activities.innerHTML = `
      <h2>${getTranslation('activities.title')}</h2>
      <ul>${listItems}</ul>
    `;
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
