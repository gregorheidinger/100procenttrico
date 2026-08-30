const m=document.querySelector('.menu'),n=document.querySelector('.topbar nav');m?.addEventListener('click',()=>{const o=n.classList.toggle('open');m.setAttribute('aria-expanded',o);m.setAttribute('aria-label',o?'Menu sluiten':'Menu openen')});document.querySelectorAll('.topbar nav a').forEach(a=>a.addEventListener('click',()=>{n.classList.remove('open');m?.setAttribute('aria-expanded','false');m?.setAttribute('aria-label','Menu openen')}));const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));document.getElementById('year').textContent=new Date().getFullYear();

const diner=document.querySelector('#diner .feature-copy');
if(diner){
  const title=diner.querySelector('h2');
  const bigcopy=diner.querySelector('.bigcopy');
  const body=bigcopy?.nextElementSibling;
  if(title) title.innerHTML='Een diner vol muziek,<br><span>humor en verrassingen.</span>';
  if(bigcopy) bigcopy.textContent='Voor het diner én tussen de gangen door verzorgen Toos, Adrie en Stacey het entertainment.';
  if(body) body.innerHTML='De gasten worden volop bij de show betrokken: lekker meezingen, dansen en natuurlijk meedoen met de quiz. En dan is er nog de <strong>Foute Verloting</strong>: iedereen maakt kans op prachtige prijzen. Nou ja… <em>prachtig</em> is misschien een groot woord. 😉<br><br>Wil je de dinershow extra persoonlijk maken? Dan kunnen we een <strong>lied op maat</strong> maken waarin bijvoorbeeld de jarige, het bruidspaar, het bedrijf of een andere speciale gast volop in het zonnetje wordt gezet.<br><br>Zo wordt het niet alleen een gezellig diner, maar een avond waar aan tafel nog lang over nagepraat wordt.';
}
const dinerPhoto=document.querySelector('#diner .mainpic');
if(dinerPhoto){dinerPhoto.src='assets/images/originals/055.jpg';dinerPhoto.alt='100% Trico dinershow';}
const maatwerkPhoto=document.querySelector('#maatwerk .widephoto img');
if(maatwerkPhoto){maatwerkPhoto.src='assets/images/originals/002.png';maatwerkPhoto.alt='100% Trico live';}
const galleryMiddle=document.querySelector('.gallery img:nth-child(2)');
if(galleryMiddle){galleryMiddle.src='assets/images/originals/010.jpg';galleryMiddle.alt='100% Trico live';}
const kerst=document.querySelector('#kerst .christmas-copy');
if(kerst){
  const title=kerst.querySelector('h2');
  const bigcopy=kerst.querySelector('.bigcopy');
  const body=bigcopy?.nextElementSibling;
  if(title) title.textContent='Geen stille nacht.';
  if(bigcopy) bigcopy.textContent='Kerst met 100% Trico is warm, uitbundig en vooral live.';
  if(body) body.innerHTML='<strong>KERSTSHOW</strong><br>Een feestelijk optreden vol bekende kersthits, mooie samenzang, humor en contact met het publiek. Geschikt als zelfstandig optreden, tijdens een diner, of als onderdeel van een kerstfeest of kerstborrel.<br><br><strong>KERST MUZIEKBINGO</strong><br>Bingo, maar dan helemaal in kerstsfeer. Herken o.a. de kersthits, kruis ze af op je bingokaart en zing vooral uit volle borst mee. Natuurlijk zijn er ook prijzen te winnen.<br><br><strong>KERSTPAKKETTEN UITDELEN</strong><br>Maak van het uitdelen van de kerstpakketten een feestje. Combineer het bijvoorbeeld met de Kerst Muziekbingo, waarbij uiteindelijk iedereen tegelijk bingo heeft. En wat is de prijs? Natuurlijk: het kerstpakket! Zo wordt het uitdelen zelf onderdeel van het entertainment.<br><br><strong>IETS BIJZONDERS IN GEDACHTEN?</strong><br>Een medewerker in het zonnetje zetten, een kerstlied op maat of verschillende onderdelen combineren? We maken de kerstshow graag passend bij jullie feest.';
}
const family=document.querySelector('#trico');
if(family && !document.querySelector('#publiek')){
  const audience=document.createElement('section');
  audience.className='audience reveal';
  audience.id='publiek';
  audience.innerHTML='<div class="audience-head"><p class="kicker">ZO ZIET EEN AVONDJE TRICO ERUIT</p><h2>Stilzitten<br><span>is geen optie.</span></h2><p class="bigcopy">Meezingen, lachen, dansen en soms nét iets enthousiaster meedoen dan je van plan was.</p></div><div class="audience-grid"><figure class="audience-main"><img src="assets/images/originals/069.jpg" alt="Publiek tijdens de dinershow van 100% Trico" loading="lazy"></figure><figure><img src="assets/images/originals/034.jpg" alt="Lachende gasten tijdens 100% Trico" loading="lazy"></figure><figure><img src="assets/images/originals/009.jpg" alt="100% Trico in contact met het publiek" loading="lazy"></figure><figure class="audience-wide"><img src="assets/images/originals/007.jpg" alt="Feestende zaal tijdens 100% Trico" loading="lazy"></figure></div>';
  family.insertAdjacentElement('beforebegin',audience);
  io.observe(audience);
}
if(family && !document.querySelector('#techniek')){
  const tech=document.createElement('section');
  tech.className='techni-koos reveal';
  tech.id='techniek';
  tech.innerHTML='<div class="techni-photo"><img src="assets/images/originals/072.jpg" alt="Techni-Koos van 100% Trico" loading="lazy"></div><div class="techni-copy"><p class="kicker">OOK DE TECHNIEK ZIT IN DE FAMILIE</p><h2>Techniek?<br><span>Dat regelt Techni-Koos.</span></h2><p class="bigcopy">Onze neef Techni-Koos zorgt dat Toos, Adrie en Stacey niet alleen gezien, maar vooral ook goed gehoord worden.</p><p>100% Trico beschikt over een eigen professionele geluidsinstallatie en kan daarmee op veel locaties volledig zelfstandig optreden. Van een intiem feestje tot een grotere zaal: we stemmen de techniek af op de locatie en het aantal gasten.</p><p>Is er op locatie al professionele techniek aanwezig? Geen probleem. Dan overleggen we vooraf wat er nodig is en sluiten we daarop aan.</p><ul><li>Eigen geluidsinstallatie mogelijk</li><li>Geschikt voor kleine én grotere gezelschappen</li><li>Techniek afgestemd op de locatie</li><li>Aanwezige techniek? Dan overleggen we vooraf</li></ul><p class="techni-joke">En als er ergens een kabel verkeerd ligt… dan geven we Techni-Koos de schuld. 😉</p></div>';
  family.insertAdjacentElement('afterend',tech);
  io.observe(tech);
}