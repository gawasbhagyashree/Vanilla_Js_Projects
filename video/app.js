
const btn= document.querySelector('.switch-btn');
const video=document.querySelector('.video-container')

btn.addEventListener('click', function(e){
    let control=e.currentTarget
    // console.log(control)
    if(!control.classList.contains("slide")){
        control.classList.add('slide')
        video.pause()
    }
    else{
        control.classList.remove('slide')
        video.play()
    }
})