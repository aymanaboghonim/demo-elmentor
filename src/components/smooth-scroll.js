/**
 * Smooth scroll utility for internal navigation
 */

export function initSmoothScroll() {
  document.addEventListener('click', (e) => {
    const target = e.target.closest('[data-scroll-to]');
    if (!target) return;
    
    e.preventDefault();
    const sectionId = target.getAttribute('data-scroll-to');
    const section = document.getElementById(sectionId);
    
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
}
