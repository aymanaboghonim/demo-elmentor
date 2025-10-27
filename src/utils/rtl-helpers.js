/**
 * RTL (Right-to-Left) helper utilities for Arabic language support
 */

export function setDirection(lang) {
  const html = document.documentElement;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  html.setAttribute('dir', dir);
  html.setAttribute('lang', lang);
}

export function getDirection() {
  return document.documentElement.getAttribute('dir') || 'ltr';
}

export function isRTL() {
  return getDirection() === 'rtl';
}
