const navbar = ()=>{
    const burguer = document.querySelector('.burguer')
const navLinks = document.querySelector('.nav-links')

burguer.addEventListener('click', ()=>{
    navLinks.classList.toggle('nav-active')
})}

navbar()