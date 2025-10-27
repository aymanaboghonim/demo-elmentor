import { getTranslation, getCurrentLang } from './language-toggle.js';

// Replace with your actual Formspree endpoint
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';

export async function handleFormSubmit(e) {
  e.preventDefault();
  
  const form = e.target;
  const formData = new FormData(form);
  const messageDiv = document.getElementById('form-message');
  
  // Add locale and timestamp
  const payload = {
    name: formData.get('name'),
    email: formData.get('email'),
    role: formData.get('role'),
    message: formData.get('message') || '',
    locale: getCurrentLang(),
    timestamp: new Date().toISOString()
  };
  
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    
    if (response.ok) {
      messageDiv.textContent = getTranslation('join.form.success');
      messageDiv.className = 'form-message success';
      messageDiv.style.display = 'block';
      form.reset();
    } else {
      throw new Error('Submission failed');
    }
  } catch (error) {
    messageDiv.textContent = getTranslation('join.form.error');
    messageDiv.className = 'form-message error';
    messageDiv.style.display = 'block';
  }
  
  // Hide message after 5 seconds
  setTimeout(() => {
    messageDiv.style.display = 'none';
  }, 5000);
}
