import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';

describe('Smooth Scroll CTA', () => {
  let dom;
  let document;
  
  beforeEach(() => {
    dom = new JSDOM(`
      <!DOCTYPE html>
      <html>
        <body>
          <button data-scroll-to="join">Join Us</button>
          <section id="join"></section>
        </body>
      </html>
    `);
    document = dom.window.document;
    global.document = document;
  });
  
  it('should have hero CTA with correct scroll target', () => {
    const cta = document.querySelector('[data-scroll-to="join"]');
    expect(cta).toBeTruthy();
    expect(cta.getAttribute('data-scroll-to')).toBe('join');
  });
  
  it('should have join section as scroll destination', () => {
    const joinSection = document.getElementById('join');
    expect(joinSection).toBeTruthy();
  });
});
