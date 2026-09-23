const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu.addEventListener('click', () => {
  const isOpen = nav.dataset.open === 'true';

  if (isOpen) {
    nav.style.display = 'none';
    nav.dataset.open = 'false';
    menu.setAttribute('aria-expanded', 'false');
  } else {
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    nav.style.position = 'absolute';
    nav.style.top = '70px';
    nav.style.right = '4%';
    nav.style.background = '#fff';
    nav.style.padding = '16px';
    nav.style.gap = '16px';
    nav.style.border = '1px solid #e6e9ef';
    nav.style.borderRadius = '12px';
    nav.style.boxShadow = '0 10px 30px rgba(0,0,0,.12)';
    nav.style.zIndex = '100';
    nav.dataset.open = 'true';
    menu.setAttribute('aria-expanded', 'true');
  }
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.style.display = 'none';
    nav.dataset.open = 'false';
    menu.setAttribute('aria-expanded', 'false');
  });
});
