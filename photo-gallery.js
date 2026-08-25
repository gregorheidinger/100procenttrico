(() => {
  const css = document.createElement('link');
  css.rel = 'stylesheet';
  css.href = 'photo-gallery.css';
  document.head.appendChild(css);

  const social = document.querySelector('.social-section');
  if (!social || document.querySelector('.trico-photo-gallery')) return;

  const section = document.createElement('section');
  section.className = 'trico-photo-gallery';
  section.setAttribute('aria-label', "Foto's van 100% Trico");
  section.innerHTML = `<div class="container"><div class="gallery-intro"><p class="eyebrow">100% Trico in actie</p><h2>Sfeer, muziek en vooral veel plezier.</h2><p>Een paar momenten van optredens, publiek en de typische Trico-gezelligheid.</p></div><div class="trico-photo-grid"><figure><img src="assets/images/originals/039.jpg" alt="100% Trico tijdens een optreden" loading="lazy"></figure><figure><img src="assets/images/originals/055.jpg" alt="100% Trico live op het podium" loading="lazy"></figure><figure><img src="assets/images/originals/062.jpg" alt="Sfeermoment tijdens een optreden van 100% Trico" loading="lazy"></figure><figure><img src="assets/images/originals/042.jpg" alt="100% Trico live" loading="lazy"></figure><figure><img src="assets/images/originals/043.jpg" alt="Sfeerbeeld van 100% Trico" loading="lazy"></figure></div></div>`;
  social.parentNode.insertBefore(section, social);
})();