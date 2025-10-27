import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import founderData from '../assets/data/founder.json';

export function renderFounder() {
  const founder = document.getElementById('founder');

  const updateContent = () => {
    const lang = getCurrentLang();

    const socialLinks = founderData.socialLinks
      .map(link => `
        <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link">
          ${link.name}
        </a>
      `)
      .join('');

    founder.innerHTML = `
      <div class="founder-content">
        <h2>${getTranslation('founder.title')}</h2>

        <div class="founder-profile">
          <img src="${founderData.image}" alt="${founderData.name}" class="founder-image" />

          <div class="founder-info">
            <h3 class="founder-name">${founderData.name}</h3>
            <p class="founder-title">${founderData.title[lang]}</p>
            <p class="founder-bio">${founderData.bio[lang]}</p>

            <div class="founder-social">
              ${socialLinks}
            </div>
          </div>
        </div>
      </div>
    `;
  };

  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
