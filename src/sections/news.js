import { getTranslation, getCurrentLang } from '../components/language-toggle.js';
import newsData from '../assets/data/news.json';

export function renderNews() {
  const news = document.getElementById('news');
  
  const updateContent = () => {
    if (newsData.length === 0) {
      news.innerHTML = `
        <h2>${getTranslation('news.title')}</h2>
        <p class="news-fallback">${getTranslation('news.fallback')}</p>
      `;
    } else {
      const lang = getCurrentLang();

      const items = newsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(item => {
          const title = item.title && item.title[lang] ? item.title[lang] : (item.title || '');
          const summary = item.summary && item.summary[lang] ? item.summary[lang] : (item.summary || '');
          const link = item.externalLink || item.link || '';

          return `
          <div class="news-item">
            <h3>${title}</h3>
            <p class="news-date">${new Date(item.date).toLocaleDateString()}</p>
            <p>${summary}</p>
            ${link ? `<a href="${link}" target="_blank" rel="noopener">Read more</a>` : ''}
          </div>
        `;
        })
        .join('');
      
      news.innerHTML = `
        <h2>${getTranslation('news.title')}</h2>
        <div class="news-grid">${items}</div>
      `;
    }
  };
  
  updateContent();
  window.addEventListener('languageChanged', updateContent);
}
