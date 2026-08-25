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

const possibilityCopy = document.querySelector('.possibilities-section .possibility-copy p');
if (possibilityCopy) {
  possibilityCopy.textContent = 'Op een feest, verjaardag, camping, Oktoberfest, carnaval, smartlappenfestival of in een zorginstelling kunnen we bijvoorbeeld blokken van ongeveer een half uur zingen. Kies één blok of combineer meerdere stijlen.';
}

const audienceStrip = document.querySelector('.possibilities-section .audience-strip');
if (audienceStrip) {
  ['Oktoberfest', 'Carnaval', 'Smartlappenfestival'].forEach((label) => {
    if (![...audienceStrip.querySelectorAll('span')].some((span) => span.textContent === label)) {
      const item = document.createElement('span');
      item.textContent = label;
      audienceStrip.appendChild(item);
    }
  });
}

const bingoPhoto = document.querySelector('.bingo-photo-main');
if (bingoPhoto) {
  bingoPhoto.src = 'assets/images/originals/004.jpg';
  bingoPhoto.alt = '100% Trico tijdens de Muziekbingo';
}

// Restore the photo groups that were removed when the homepage was restructured.
const actsContainer = document.querySelector('.acts-section .container');
if (actsContainer && !actsContainer.querySelector('.show-photo-grid')) {
  const showPhotos = document.createElement('div');
  showPhotos.className = 'show-photo-grid reveal';
  showPhotos.innerHTML = '<figure class="show-photo show-photo-large"><img src="assets/images/originals/039.jpg" alt="100% Trico tijdens een optreden"></figure><figure class="show-photo"><img src="assets/images/originals/055.jpg" alt="100% Trico live op het podium"></figure><figure class="show-photo"><img src="assets/images/originals/062.jpg" alt="Sfeermoment tijdens een optreden van 100% Trico"></figure>';
  actsContainer.appendChild(showPhotos);
}

const socialSection = document.querySelector('.social-section');
if (socialSection && !document.querySelector('.restored-photo-gallery')) {
  const gallerySection = document.createElement('section');
  gallerySection.className = 'section media-feature-section restored-photo-gallery';
  gallerySection.innerHTML = '<div class="container gallery-grid reveal"><figure class="gallery-item gallery-tall"><img src="assets/images/originals/042.jpg" alt="100% Trico live"></figure><figure class="gallery-item"><img src="assets/images/originals/043.jpg" alt="100% Trico sfeerbeeld"></figure><figure class="gallery-item"><img src="assets/images/originals/065.jpg" alt="100% Trico tijdens een optreden"></figure><figure class="gallery-item gallery-wide"><img src="assets/images/originals/kerst.jpg" alt="100% Trico in kerstsfeer"></figure></div>';
  socialSection.parentNode.insertBefore(gallerySection, socialSection);
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
