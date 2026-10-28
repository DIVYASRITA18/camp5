document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#navLinks');
  if (toggle && nav) toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  const form = document.querySelector('#newsletterForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    form.querySelector('.form-message').textContent = 'Thanks for joining our list — this demo form does not send data.';
    form.reset();
  });
});
