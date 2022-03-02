const body= document.querySelector('body');
const darkBtn=document.querySelector('.dark-theme');
const menuicon=document.querySelector('.show-content');
const courseContent=document.querySelector('.Course-content');

menuicon.addEventListener('click',()=>{
    menuicon.classList.toggle('courseConten');
});

darkBtn.addEventListener('click', ()=>{
    body.classList.toggle('dark-theme');
})

