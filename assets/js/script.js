const menu=document.querySelector('.bi-list')
const navbar=document.querySelector('nav ul')
const cross=document.querySelector('.bi-x-circle')

menu.addEventListener('click', () => {
    navbar.style.transform = 'translateX(0)';
})

cross.addEventListener('click', () => {
    navbar.style.transform = 'translateX(300px)';
})


 