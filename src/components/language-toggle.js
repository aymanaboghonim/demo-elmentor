import { setDirection } from '../utils/rtl-helpers.js';
import enTranslations from '../i18n/en.json';
import arTranslations from '../i18n/ar.json';

let currentLang = 'en';
const translations = { en: enTranslations, ar: arTranslations };

export function getCurrentLang() {
  return currentLang;
}

export function getTranslation(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    value = value?.[k];
  }
  return value || key;
}

export function switchLanguage(lang) {
  if (lang !== 'en' && lang !== 'ar') return;
  currentLang = lang;
  setDirection(lang);
  
  // Dispatch custom event for sections to re-render
  window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

export function initLanguageToggle() {
  const nav = document.getElementById('nav-header');
  
  const toggleButton = document.createElement('button');
  toggleButton.id = 'lang-toggle';
  toggleButton.className = 'lang-toggle';
  toggleButton.textContent = 'عربي';
  toggleButton.setAttribute('aria-label', 'Switch language');
  
  toggleButton.addEventListener('click', () => {
    const newLang = currentLang === 'en' ? 'ar' : 'en';
    switchLanguage(newLang);
    toggleButton.textContent = newLang === 'en' ? 'عربي' : 'English';
  });
  
  nav.appendChild(toggleButton);
}
