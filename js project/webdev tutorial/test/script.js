const text = document.querySelector('.text')
const checkbox = document.querySelector('#check')
const Input = document.querySelector('#inputField');
const todoList =document.querySelector('.todoList')
// const todoItem = document.querySelector('todoItem')
const todoContainer = document.querySelector('.container')
const enterButton = document.querySelector('#enter')


// CREATE ELEMENTS 


// const itemElement = document.createElement('il')


// const listElement = document.createElement('ul');

    // Create todo item elements
    // const todoItem = document.createElement('li');
    // todoItem.classList.add('todo-item');

  
    // text.classList.add('text');
    // text.textContent = 'My todo List';

    // const controls = document.createElement('div');
    // controls.classList.add('controls');

    // const checkDiv = document.createElement('div');
    // checkDiv.classList.add('check');

   
    // checkbox.type = 'checkbox';
    // checkbox.id = 'check';

    // const label = document.createElement('label');
    // label.htmlFor = 'check';

    // const deleteButton = document.createElement('button');
    // deleteButton.classList.add('delete');
    // deleteButton.textContent = 'delete';

    // Append elements to their respective parents
    // checkDiv.appendChild(checkbox);
    // checkDiv.appendChild(label);
    // controls.appendChild(checkDiv);
    // controls.appendChild(deleteButton);
    // todoItem.appendChild(text);
    // todoItem.appendChild(controls);
    // todoList.appendChild(todoItem);

const ul = document.createElement('ul');
const li = document.createElement('li');

const p = document.createElement('p');
p.className = 'text';
p.textContent = 'My dynamic todo item'

const controlsDiv = document.createElement('div');
controlsDiv.className = 'controls';

const checkDiv = document.createElement('div');
checkDiv.className = 'check'

const checkbox2 = document.createElement('input');
checkbox.type = 'checkbox';

// APPENDING
checkDiv.appendChild(checkbox)

controlsDiv.appendChild(checkDiv)
li.appendChild(p);
li.appendChild(controlsDiv) ;

ul.appendChild(li);

todoContainer.appendChild(ul)





checkbox.addEventListener('change', ()=>{
    if (checkbox.checked) {
        text.style.textDecoration = 'line-through';
        text.style.color = 'red';
    } else {
        text.style.textDecoration = 'none';
        text.style.color = 'white';
    }
})

// ill create a function for thed submit button to addTodoItem
// also a delete todo fpr the delete button
// toggle complete state for checkbox
// local storage

const todoListArray = [];

const newTodoItem = {
    text : `${Input}`,
    completed : false,

}

todoListArray.push(newTodoItem)

// THIS PUSHES AN ITEM TO THE ARRAY


