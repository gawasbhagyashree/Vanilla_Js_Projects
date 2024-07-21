const toggle=document.querySelector('.nav-toggle')
const toggleLinks=document.querySelector('.links')

toggle.addEventListener('click',function(){
    toggleLinks.classList.toggle('show-links')
})