const menuBtn=document.querySelector('.hamburger');
const navList=document.querySelector('.nav-list');
if(menuBtn&&navList){menuBtn.addEventListener('click',()=>navList.classList.toggle('show'));}

document.querySelectorAll('form').forEach(form=>{
  form.addEventListener('submit',e=>{
    e.preventDefault();
    alert('Hvala! Vaša poruka je uspješno poslana.');
    form.reset();
  });
});
