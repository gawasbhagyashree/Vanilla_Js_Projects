const sidebar =document.querySelector('.sidebar')
const sideToggle =document.querySelector('.side-toggle')
const sideClose =document.querySelector('.side-close')

sideToggle.addEventListener('click', function(){
    sidebar.classList.toggle('show-sidebar')
})

sideClose.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})