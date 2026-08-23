const heroLayoutStylesheet = document.createElement('link');
heroLayoutStylesheet.rel = 'stylesheet';
heroLayoutStylesheet.href = 'hero-layout.css';
document.head.appendChild(heroLayoutStylesheet);

const heroHeadline = document.querySelector('.hero-copy h1');
if (heroHeadline) {
  heroHeadline.innerHTML = '100% MUZIEK. 100% HUMOR. <span>100% TRICO.</span>';
}

const actsHeading = document.querySelector('.acts-section .section-heading');
if (actsHeading) {
  const eyebrow = actsHeading.querySelector('.eyebrow');
  const title = actsHeading.querySelector('h2');
  const intro = actsHeading.querySelector('p:not(.eyebrow)');
  if (eyebrow) eyebrow.textContent = 'Welke show past bij jullie?';
  if (title) title.textContent = 'Van Muziekbingo tot Dinershow of live feestmuziek.';
  if (intro) intro.textContent = 'Van een compleet avondprogramma tot een korter optreden: we kijken naar de gelegenheid, het publiek en de beschikbare tijd en maken het programma op maat.';
}

const bingoPhoto = document.querySelector('.bingo-photo-main');
if (bingoPhoto) {
  bingoPhoto.src = 'assets/images/originals/004.jpg';
  bingoPhoto.alt = '100% Trico tijdens de Muziekbingo';
}

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();
