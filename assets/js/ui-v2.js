(function(){
  const button=document.querySelector('header button');
  const nav=document.querySelector('header nav');
  button?.addEventListener('click',()=>{
    const open=nav?.classList.toggle('show');
    button.setAttribute('aria-expanded',String(Boolean(open)));
    button.textContent=open?'×':'☰';
  });
  const sections=[...document.querySelectorAll('main > section')];
  sections.forEach((section,index)=>section.classList.add('reveal',index%2?'from-right':'from-left'));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}}),{threshold:.08,rootMargin:'0px 0px -40px'});
    sections.forEach(section=>observer.observe(section));
  }else sections.forEach(section=>section.classList.add('is-visible'));
})();
