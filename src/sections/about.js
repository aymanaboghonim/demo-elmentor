import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import aboutData from '../assets/data/about.json';

export function renderAbout() {
  const about = document.getElementById('about');

  const updateContent = () => {
    const lang = getCurrentLang();

    const coreValues = aboutData.coreValues
      .map(value => `<li>${value[lang]}</li>`)
      .join('');

    const offerings = aboutData.offerings
      .map(offering => `<li>${offering[lang]}</li>`)
      .join('');

    about.innerHTML = `
      <h2>${getTranslation('about.title')}</h2>

      <div class="about-section">
        <h3>Mission</h3>
        <p>${aboutData.mission[lang]}</p>
      </div>

      <div class="about-section">
        <h3>Vision</h3>
        <p>${aboutData.vision[lang]}</p>
      </div>

      <div class="about-section">
        <h3>Core Values</h3>
        <ul>${coreValues}</ul>
      </div>

      <div class="about-section">
        <h3>What We Offer</h3>
        <ul>${offerings}</ul>
      </div>
    `;
  };

  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
