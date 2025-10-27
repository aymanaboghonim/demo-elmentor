import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import founderData from '../assets/data/founder.json';

export function renderFounder() {
  const founder = document.getElementById('founder');

  const updateContent = () => {
    const lang = getCurrentLang();

    // Resolve image path so it works after Vite build (use import.meta.url)
    const resolveImage = (path) => {
      try {
        if (typeof path === 'string' && path.startsWith('/src/')) {
          // convert '/src/assets/...' -> '../assets/...'
          const rel = '../' + path.slice(5);
          return new URL(rel, import.meta.url).href;
        }
        return path;
      } catch (err) {
        return path;
      }
    };

    const socialLinks = founderData.socialLinks
      .map(link => {
        const label = link.label && link.label[lang] ? link.label[lang] : link.name;
        return `
        <a class="social-card" href="${link.url}" target="_blank" rel="noopener noreferrer">
          <span class="social-name">${label}</span>
        </a>
      `;
      })
      .join('');

    founder.innerHTML = `
      <div class="founder-content">
        <h2>${getTranslation('founder.title')}</h2>

        <div class="founder-profile">
          <img src="${resolveImage(founderData.image)}" alt="${founderData.name}" class="founder-image" />

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
