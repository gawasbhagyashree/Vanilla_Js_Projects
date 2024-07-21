// 1) getBoundingClientReact()
// 2)window.scrollY
// 3)offsetTop
// 4)window.scrollTo()





// ******************ADD THE DATE IN FOOTER***********************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

// ****************For 800px and less show toggle and drop-down links in the nav
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', function () {
    // linksContainer.classList.toggle('show-links')

    // OR if the height of the linksContainer has to be dynamically changed here in Js, instead of using show-links with a set height in CSS

    const linksContainerHeight = linksContainer.getBoundingClientRect().height
    // console.log(containerHeight)

    const linksHeight = links.getBoundingClientRect().height
    // console.log(linksHeight)

    if (linksContainerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`
    }
    else {
        linksContainer.style.height = 0
    }
})


// ************ Add the fixed-nav class to the navbar **********
// if the scrollY value is bigger than the height of the navbar then add the fixed-nav class

const nav= document.getElementById('nav')

const topLink=document.querySelector('.top-link')

window.addEventListener('scroll', function(){
    const scrollHeight=window.scrollY
    // console.log(scrollHeight)
    const navHeight=nav.getBoundingClientRect().height
    // console.log(navHeight)
    if(scrollHeight>navHeight){
        nav.classList.add('fixed-nav')
    }
    else{
        nav.classList.remove('fixed-nav')
    }

    // Similarly show the toplink only when a certain scrollY is reached, here we take 500
    if(scrollHeight>=500){
        topLink.classList.add('show-topLink')
    }
    else{
        topLink.classList.remove('show-topLink')
    }
})


// ************ Smooth Scroll *****************
const scrollLinks =document.querySelectorAll('.scroll-link')

scrollLinks.forEach(link=>{
    link.addEventListener('click', function(e){
        // preventing default behavious
        e.preventDefault()

        //navigating to that exact section 
        const idOfLink=e.currentTarget.getAttribute("href").slice(1)

        const section=document.getElementById(idOfLink)

        const navHeight=nav.getBoundingClientRect().height

        const linksContainerHeight=linksContainer.getBoundingClientRect().height

        let position=section.offsetTop-navHeight
// console.log(position)
 
        const fixedNav=nav.classList.contains('fixed-nav')
        if(!fixedNav){
            position=position-navHeight
        }

        // 112 id the normal navHeight. if its bigger that means there are links drop-down
        if(navHeight>112){
            position=position+linksContainerHeight
        }

        window.scrollTo({
            left:0,
            top: position
        })

        // to close the links once its clicked on 
        linksContainer.style.height=0

    })
})
