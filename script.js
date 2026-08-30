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