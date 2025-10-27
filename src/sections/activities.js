import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import activitiesData from '../assets/data/activities.json';

export function renderActivities() {
  const activities = document.getElementById('activities');

  const updateContent = () => {
    const lang = getCurrentLang();

    const categories = activitiesData.categories
      .map(category => {
        const items = category.items
          .map(item => `<li>${item[lang]}</li>`)
          .join('');

        return `
          <div class="activity-category">
            <h3>${category.name[lang]}</h3>
            <ul>${items}</ul>
          </div>
        `;
      })
      .join('');

    activities.innerHTML = `
      <h2>${getTranslation('activities.title')}</h2>
      <div class="activities-grid">
        ${categories}
      </div>
    `;
  };

  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
