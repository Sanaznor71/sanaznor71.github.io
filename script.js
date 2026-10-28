const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.primary-navigation');
if (toggle && navigation) {
  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    navigation.classList.toggle('is-open', !isOpen);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = String(new Date().getFullYear());
