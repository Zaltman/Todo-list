import './style.css';
import {
  domComponentNameClass,
  domTodoRender,
  domProjectsRender as domProjectRender,
  renderAllTodosClick,
} from './dom.js';
import { projectFactory, getLocalStorage, updateStorage } from './todo';

//load sidebar and content containers
(function pageLoad() {
  document.querySelector('body').appendChild(domComponentNameClass('aside'));
  document.querySelector('body').appendChild(domComponentNameClass('content'));

  let listContainer = document.createElement('ul');
  listContainer.classList.add('listContainer');
  document.querySelector('content').append(listContainer);
})();

// get local storage, if none, make empty array
let todoProjects = getLocalStorage();
if (!todoProjects) {
  todoProjects = [];
}

// load sidebar buttons

//
// !!! fix error after todolist prompt cancel
//
(function sidebarLoad() {
  function newProjectEvent() {
    todoProjects.push(projectFactory());
    if (todoProjects[todoProjects.length - 1]) {
      updateStorage();
      domProjectRender(todoProjects.length - 1);
      domTodoRender(
        todoProjects[todoProjects.length - 1].todoList.length - 1,
        todoProjects.length - 1
      );
    }
  }

  let newProjectBtn = domComponentNameClass('button');
  newProjectBtn.setAttribute('id', 'newProjectBtn');
  document.querySelector('aside').appendChild(newProjectBtn).textContent =
    '+ New project';
  let newProjectBtnElement = document.getElementById('newProjectBtn');
  newProjectBtnElement.addEventListener('click', openModal);
  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'today';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'this week';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'this month';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('div', 'projectContainer'));

  let allTasksEl = domComponentNameClass('button', 'projectTitle');
  allTasksEl.addEventListener('click', renderAllTodosClick);
  document
    .querySelector('.projectContainer')
    .appendChild(allTasksEl).textContent = 'All tasks';
})();

//load projects on sidebar and todos on main content
(function contentLoad() {
  for (let x = 0; x < todoProjects.length; x++) {
    domProjectRender(x);
    for (let i = 0; i < todoProjects[x].todoList.length; i++) {
      domTodoRender(i, x);
    }
  }
})();
//projectFactory > projectTitle. todoFactory > title, description, priority, dueDate

let modalContainer = document.createElement('div');
modalContainer.setAttribute('id', 'myModal');
modalContainer.classList.add('modal');
document.querySelector('body').append(modalContainer);

let modalContent = document.createElement('div');
modalContent.classList.add('modalContent');
modalContainer.appendChild(modalContent);

let closeBtn = document.createElement('span');
closeBtn.classList.add('close');
closeBtn.innerHTML = `&times;`;
closeBtn.addEventListener('click', closeModal);
modalContent.appendChild(closeBtn);

let modalText = document.createElement('p');
modalText.classList.add('modalText');
modalText.textContent = 'test text';
modalContent.appendChild(modalText);

let inputProjectTitle = document.createElement('input');
inputProjectTitle.type = 'text';
inputProjectTitle.classList.add('inputProjectTitle');
inputProjectTitle.placeholder = 'Enter project title';
modalContent.appendChild(inputProjectTitle);

let inputTodoTitle = document.createElement('input');
inputTodoTitle.type = 'text';
inputTodoTitle.classList.add('inputTodoTitle');
inputTodoTitle.placeholder = 'Enter todo title';
modalContent.appendChild(inputTodoTitle);

let inputTodoDescription = document.createElement('input');
inputTodoDescription.type = 'text';
inputTodoDescription.classList.add('inputTodoDescription');
inputTodoDescription.placeholder = 'Enter todo description';
modalContent.appendChild(inputTodoDescription);

let inputTodoPriorityContainer = document.createElement('label');
inputTodoPriorityContainer.textContent = 'priority, 1 <> 5';
inputTodoPriorityContainer.setAttribute('for', 'inputTodoPriority');
modalContent.appendChild(inputTodoPriorityContainer);

let inputTodoPriority = document.createElement('input');
inputTodoPriority.type = 'number';
inputTodoPriority.setAttribute('min', '1');
inputTodoPriority.setAttribute('max', '5');
inputTodoPriority.setAttribute('id', 'inputTodoPriority');
inputTodoPriority.classList.add('inputTodoPriority');
inputTodoPriorityContainer.appendChild(inputTodoPriority);

let inputDate = document.createElement('input');
inputDate.type = 'date';
inputDate.classList.add('dateInput');
modalContent.appendChild(inputDate);

function openModal() {
  modalContainer.style.display = 'block';
}

function closeModal() {
  console.log(inputDate.value);

  modalContainer.style.display = 'none';
}

//gets required info for local storage and then stores it
getLocalStorage();
updateStorage();

export { todoProjects };
