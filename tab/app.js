
const btns = document.querySelectorAll('.tab-btn')

const about = document.querySelector('.about')

const articles = document.querySelectorAll('.content')

//? listening to event on about

about.addEventListener('click', function (e) {
    //? i want to select the button by its data attribute
    const btnDataName = e.target.dataset.name
    console.log(btnDataName)

    //? if its not undefined, that it, a button is clicked on
    if (btnDataName) {

        //? first remove active class from all buttons
        btns.forEach(btn => {
            btn.classList.remove('active')
        });
        //?  then add active class only on the clicked button
        e.target.classList.add('active')

        //?   hide all the articles with active class
        articles.forEach(article => {
            article.classList.remove('active')
        })
        //? since in index.html, the div with class content, also has id, this id is equal to the btnDataName
       const element=document.getElementById(btnDataName)
       console.log(element)

        //? Adding the active class only on this article.
       element.classList.add('active')

    }

})