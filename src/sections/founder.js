import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import founderData from '../assets/data/founder.json';
// Prefer static import for image so bundlers resolve it reliably
import founderImg from '../assets/images/founder/mohamed-radwan.png';

export function renderFounder() {
  const founder = document.getElementById('founder');

  const updateContent = () => {
    const lang = getCurrentLang();

    // Use static import when available; otherwise fall back to resolving JSON path
    const resolveImage = (path) => {
      if (founderImg) return founderImg;
      try {
        if (typeof path === 'string' && path.startsWith('/src/')) {
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
