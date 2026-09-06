(function(){
  const button=document.querySelector('header button'),nav=document.querySelector('header nav');
  button?.setAttribute('aria-expanded','false');
  button?.addEventListener('click',()=>{const open=nav?.classList.toggle('show');button.setAttribute('aria-expanded',String(Boolean(open)));button.textContent=open?'×':'☰'});
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('show');button.textContent='☰';button.setAttribute('aria-expanded','false')}));
  const h1=document.querySelector('h1');
  if(h1){const words=h1.textContent.trim().split(/\s+/);h1.innerHTML=words.map(w=>`<span class="word">${w}</span>`).join(' ');h1.classList.add('word-reveal')}
  const sections=[...document.querySelectorAll('main > section:not(.hero)')];
  sections.forEach((s,i)=>s.classList.add('reveal',i%2?'from-right':'from-left'));
  if('IntersectionObserver' in window){const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target)}}),{threshold:.07,rootMargin:'0px 0px -30px'});sections.forEach(s=>io.observe(s))}else sections.forEach(s=>s.classList.add('is-visible'));
})();
