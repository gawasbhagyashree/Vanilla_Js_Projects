


//? info  

//> console.log


const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const groceryInput = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const groceryContainer = document.querySelector('.grocery-container')
const groceryList = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')


let editElement
let editFlag = false
let editId = ''


form.addEventListener('submit', addItem)

//****** FUNCTIONS ******//


//1)function => ADD Items to the List 

function addItem(e) {

    // ? Prevents the default form submission action, which would normally send the form data and reload the page.

    e.preventDefault()

    //? 1) accessing the input value

    const groceryInputValue = groceryInput.value

    //? 2) setting up id
    const id = new Date().getTime().toString()

    //? if the input value is not empty and not editing, add item to the list 
    if (groceryInputValue !== '' && editFlag === false) {

        //>console.log('add item to the grocery list')

        //?  creating the element dynamycally
        const element = document.createElement('article')

        element.classList.add('grocery-item')

        //? creating the data-listItemId and setting its value to id
        const attribute = document.createAttribute('data-listItemId')
        attribute.value = id

        //?   setting the attribute to the element
        element.setAttributeNode(attribute)

        //?   adding the innerHtml to the element 

        element.innerHTML =
            ` <p class="titile">${groceryInputValue}</p>

                <div class="btn-container">
                  <button class="edit-btn" type="button">
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="delete-btn" type="button">
                    <i class="fas fa-trash"></i>
                  </button>
                </div>`

        //?  appending the element to the groceryList
        groceryList.appendChild(element)

        //? display alert success
        displayAlert('Item is added to the list', 'success')

        //? change visibility of the grocery-container to visible
        groceryContainer.classList.add('show-container')

    }

    //? if input value is not empty and editing
    else if (groceryInputValue !== '' && editFlag === true) {

        //> console.log('I am editing')
    }

    //? if input value is empty
    else {

        //> console.log('Input is empty')
        displayAlert('please enter value, Input is empty', 'danger')
    }
}

// 2) function => display the alert function

//?  text= text the alert is going to display, action is the classList added to alert
function displayAlert(text, action) {

    alert.textContent = text;
    alert.classList.add(`alert-${action}`)

    //? remove the alert after some time

    setTimeout(function () {
        alert.textContent = '';
        alert.classList.remove(`alert-${action}`)
    }, 1000)

}

