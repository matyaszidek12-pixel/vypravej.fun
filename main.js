
const BASE = location.pathname.includes('/vypravej.fun/') ? '/vypravej.fun/' : './';
document.addEventListener('DOMContentLoaded',()=>{
  const path=location.pathname;
  document.querySelectorAll('.navlinks a').forEach(a=>{
    if(a.getAttribute('href') && path.endsWith(a.getAttribute('href'))) a.classList.add('active');
  });
  const year=document.querySelector('[data-year]'); if(year) year.textContent=new Date().getFullYear();
});
function esc(s){return String(s).replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]))}
