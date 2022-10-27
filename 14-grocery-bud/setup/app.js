// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit',addItem);
//clear items
clearBtn.addEventListener('click', clearItems);

// ****** FUNCTIONS **********
function addItem(e){
    // Makes sure you don't try to submit to a backend which is default
    e.preventDefault();
    const value = grocery.value;
    const id = new Date().getTime().toString();
    // if(value !== '' && editFlag === false){} IS THE SAME AS
    if(value && !editFlag){
        const element = document.createElement('article');
        element.classList.add('grocery-item');
        const attr = document.createAttribute('data-id');
        attr.value = id
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <div class="btn-container">
        <button type="button" class="edit-btn">
            <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
            <i class="fas fa-trash"></i>
        </button>
        </div>`;
        list.appendChild(element);
        displayAlert('item added to list', 'success');
        container.classList.add("show-container");
        addToLocalStorage(id,value);
        setBackToDefault();
    }
    else if(value && editFlag){}
    else{
        displayAlert('Please enter value', 'danger');
    }
}

// display alert
function displayAlert(text, action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    
    setTimeout(function() {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1000);
}

function clearItems(){
    const items = document.querySelectorAll('.grocery-item');

    if(items.length > 0){
        items.forEach(function(item) {
            list.removeChild(item);
        });
    }
    container.classList.remove('show-container');
    displayAlert('empty list', 'success');
    setBackToDefault();
    //localStorage.removeItem('list');
}

function setBackToDefault(){
    grocery.value = '';
    editFlag = false;
    editID = '';
    submitBtn.textContent = 'Submit';
    
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value){
    console.log('added');
}
// ****** SETUP ITEMS **********
