import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import gatheringsData from '../assets/data/gatherings.json';

export function renderGatherings() {
  const gatherings = document.getElementById('gatherings');

  const updateContent = () => {
    const lang = getCurrentLang();

    const events = gatheringsData.events
      .map(event => `
        <div class="gathering-card">
          <img src="${event.image}" alt="${event.title[lang]}" class="gathering-image" />
          <div class="gathering-info">
            <h3>${event.title[lang]}</h3>
            <p class="gathering-location">${event.location[lang]}</p>
            <p class="gathering-date">${event.date[lang]}</p>
          </div>
        </div>
      `)
      .join('');

    gatherings.innerHTML = `
      <h2>${getTranslation('gatherings.title')}</h2>
      <p class="gatherings-subtitle">${getTranslation('gatherings.subtitle')}</p>
      <div class="gatherings-grid">
        ${events}
      </div>
    `;
  };

  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
