const body= document.querySelector('body');
const darkBtn=document.querySelector('.dark-theme');

darkBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-theme');
})

