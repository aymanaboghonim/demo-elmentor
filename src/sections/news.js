import { getTranslation } from '../components/language-toggle.js';
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
      const items = newsData
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .map(item => `
          <div class="news-item">
            <h3>${item.title}</h3>
            <p class="news-date">${new Date(item.date).toLocaleDateString()}</p>
            <p>${item.summary}</p>
            ${item.link ? `<a href="${item.link}" target="_blank">Read more</a>` : ''}
          </div>
        `)
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
