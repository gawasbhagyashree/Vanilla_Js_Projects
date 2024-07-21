const bannerBtn= document.querySelector('.banner-btn');
const modal= document.querySelector('.modal-overlay');
const modalBtn= document.querySelector('.modal-btn')

bannerBtn.addEventListener('click', function(){
    modal.classList.add('open-modal')
})
modalBtn.addEventListener('click', function(){
    modal.classList.remove('open-modal')
})