function scrollToMenu(){
  document.getElementById('menu').scrollIntoView({behavior:'smooth'});
}

const form=document.getElementById('contactForm');
const msg=document.getElementById('msg');
form.addEventListener('submit',e=>{
  e.preventDefault();
  msg.innerText='Mahadsanid! Fariintaada waa la helay ☕';
  form.reset();
});