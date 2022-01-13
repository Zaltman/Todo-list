import './style.css';
import {
  domComponentNameClass,
  domTodoRender,
  domProjectsRender as domProjectRender,
  renderAllTodosClick,
  NewProjectModuleEvent,
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
  newProjectBtnElement.addEventListener('click', NewProjectModuleEvent);
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

//gets required info for local storage and then stores it
getLocalStorage();
updateStorage();

export { todoProjects };
