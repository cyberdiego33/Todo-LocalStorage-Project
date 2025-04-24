'use strict';



// Step 1: Create a getmessage function

const getMessage = function() {
    const input = document.getElementById('inputTodo');
    const textContent = input.value;
    return textContent;
};

const removeMessage = function() {
    const input = document.getElementById('inputTodo');
    input.value = null;
};

// const createTodo = function() {
//     const message = getMessage();
//     const unOrderedLi = document.querySelector('ul');
//     unOrderedLi.innerHTML += `
//             <div style="display: flex; margin-top: 10px;">
//                 <li>${message}</li>
//                 <button>delete</button>
//             </div>`
// };

const displayLocalStorage = function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        
        const message = localStorage.getItem(`${key}`) ;
        const unOrderedLi = document.querySelector('ul');
        unOrderedLi.innerHTML += `
                <div style="display: flex; margin-top: 10px;">
                    <li>${message}</li>
                    <button id="${key}" onclick="deleteTodo(this)">delete</button>
                </div>`
    };
};

const globalDisplay = function() {
    localStorage.length && displayLocalStorage();
};

globalDisplay();  // this runs first to display existing mes..

const updateDisplayTodo = function() {
    const unOrderedLi = document.querySelector('ul');
    unOrderedLi.innerHTML = null; // clears first message
    // then displays them again to update 
    displayLocalStorage();
};

const displayTodo = function() { //
    const message = getMessage();

    if (message) { // ensures that empty messages don't enter
        const indexSeconds = Date.now();
        localStorage.setItem(indexSeconds, message);
    
        updateDisplayTodo();
        console.log(localStorage.getItem(`${indexSeconds}`));
        removeMessage();
    }
    
};

const deleteTodo = function(button) {

    const key = button.id;
    localStorage.removeItem(`${key}`);

    updateDisplayTodo();
};


// localStorage.clear();
console.log(localStorage.length)