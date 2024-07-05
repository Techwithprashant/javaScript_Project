function myFunction() {
  let element = document.body;
  element.classList.toggle('dark-mode')
}
let todoList = [
  {
    item:'By Milk',
    dueDate:'05/07/2024'
  }, 
  {
    item:'Go to College',
    dueDate:'05/07/2024'
  },
  {
    item:'Go to Ducat',
    dueDate:'06/07/2024'
  },
];
displayItems();

function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;
  let todoDate =dateElement.value;
  todoList.push({item: todoItem, dueDate:todoDate});
  inputElement.value='';
  dateElement.value='';
  displayItems();
}

function displayItems() {
  let containerElement = document.querySelector('.todo-container');

  let newHtml = '';
  for(let i =0; i < todoList.length; i++){
    let {item,dueDate} =todoList[i];
    newHtml +=`
    <span>${item}</span>
    <span>${dueDate}</span>
    <button class="btn-delete" onClick="todoList.splice(${i}, 1);
    displayItems();
    ">Delete</button>
    `
  }
  containerElement.innerHTML = newHtml;
}
