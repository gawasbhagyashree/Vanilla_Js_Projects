const menu = [
    {
        id: 1,
        title: "buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/item-1.jpeg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id: 2,
        title: "diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/item-2.jpeg",
        desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
        id: 3,
        title: "godzilla milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/item-3.jpeg",
        desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
        id: 4,
        title: "country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/item-4.jpeg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
        id: 5,
        title: "egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/item-5.jpeg",
        desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
        id: 6,
        title: "oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/item-6.jpeg",
        desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "bacon overflow",
        category: "breakfast",
        price: 8.99,
        img: "./images/item-7.jpeg",
        desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
        id: 8,
        title: "american classic",
        category: "lunch",
        price: 12.99,
        img: "./images/item-8.jpeg",
        desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
        id: 9,
        title: "quarantine buddy",
        category: "shakes",
        price: 16.99,
        img: "./images/item-9.jpeg",
        desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container')

//> const filterBtns = document.querySelectorAll('.filter-btn')



window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(menu)
    displayBtns()
})

//?  function to display menu items
function displayMenuItems(x) {
    const displayArray = x.map(item => {

        return `<article class="menu-item">

                <img src="${item.img}" alt="" class="photo">

                <div class="item-info">
                    <header class="item-header">
                        <h4>${item.title} </h4>
                        <h4 class="price">
                            $${item.price}
                        </h4>
                    </header>
                    <p class="item-text">
                       ${item.desc}
                    </p>
                </div>
            </article>`
    })
    //>   console.log(displayArray)

    //?  creates and returns a new string by concatenating all of the elements in this array, separated by commas or a specified separator string. 
    displayAllMenu = displayArray.join('')
    sectionCenter.innerHTML = displayAllMenu;
}


function displayBtns() {
    //? getting unique categories using forEach


    // const arrayOfUniqueCategories = ['all']

    // menu.forEach(item => {
    //     if (!uniqueArray.includes(item.category)) {
    //         uniqueArray.push(item.category)
    //     }
    // })

    // console.log(uniqueArray)


    //? getting unique categories using reduce()

    const arrayOfUniqueCategories = menu.reduce((acc, item) => {
        if (!acc.includes(item.category)) {
            acc.push(item.category)
        }
        return acc
    }, ['all'])
    //> console.log(arrayOfUniqueCategories)


    //? dynamically displaying the btns
    const categoryBtns = arrayOfUniqueCategories.map(category => {
        return `<button type="button" class="filter-btn" data-category=${category}>
                ${category}
            </button>`
    }).join('')
    //> console.log(categoryBtns)

    btnContainer.innerHTML = categoryBtns

    const filterBtns = btnContainer.querySelectorAll('.filter-btn')
    console.log(filterBtns)

    //? for each of the buttons, when clicked should filter items according to their category

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function (e) {
            const btnCategory = e.currentTarget.dataset.category
            //> console.log("btnCategory:" +btnCategory)

            //? creates an array menuCategory 
            const menuCategory = menu.filter(item => {
                // console.log(item.category)
                if (item.category === btnCategory) {
                    return item
                }
            })
            //> console.log("menuCategory array:"+menuCategory)

            if (btnCategory === 'all') {
                displayMenuItems(menu)
            }
            else {
                displayMenuItems(menuCategory)
            }
        })
    })


}

