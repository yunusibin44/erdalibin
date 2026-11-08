(function () {
  const button = document.querySelector('header button');
  const nav = document.querySelector('header nav');
  if (!button || !nav) return;
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'site-primary-navigation');
  nav.id = 'site-primary-navigation';
  button.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('show');
    button.setAttribute('aria-expanded', String(isOpen));
    button.textContent = isOpen ? '×' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('show');
    button.textContent = '☰';
    button.setAttribute('aria-expanded', 'false');
  }));
})();
