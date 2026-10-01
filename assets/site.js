const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      navigation.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('[data-contact-form]');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const subject = `Business enquiry from ${data.get('name')}`;
    const body = [
      `Name: ${data.get('name')}`,
      `Email: ${data.get('email')}`,
      `Company: ${data.get('company') || 'Not provided'}`,
      '',
      'Message:',
      data.get('message')
    ].join('\n');

    const mailto = `mailto:abedalrah99@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const status = form.querySelector('.form-status');
    if (status) status.textContent = 'Your email application is opening. Please review and send your message there.';
    window.location.href = mailto;
  });
}
