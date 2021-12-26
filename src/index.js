import './style.css';
import { domComponentNameClass, domNewTask, domProjectRender } from './dom.js';
import {
  newTaskFunction,
  projectFactory,
  testProjectLoader,
  getLocalStorage,
  updateStorage,
} from './todo';

(function pageLoad() {
  document.querySelector('body').appendChild(domComponentNameClass('aside'));
  document.querySelector('body').appendChild(domComponentNameClass('content'));
})();
let todoProjects = getLocalStorage();
if (!todoProjects) {
  todoProjects = [];
}
(function sidebarLoad() {
  function newProjectEvent() {
    todoProjects.push(projectFactory());
    domProjectRender(todoProjects[todoProjects.length - 1]);
    updateStorage();
  }

  let newProjectBtn = domComponentNameClass('button');
  newProjectBtn.setAttribute('id', 'newProjectBtn');
  document.querySelector('aside').appendChild(newProjectBtn).textContent =
    '+ New project';
  let newProjectBtnElement = document.getElementById('newProjectBtn');
  newProjectBtnElement.addEventListener('click', newProjectEvent);
  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'today';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'tomorrow';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'this week';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'next week';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'this month';

  document
    .querySelector('aside')
    .appendChild(domComponentNameClass('button', 'taskList')).textContent =
    'All tasks';
})();
(function contentLoad() {
  document
    .querySelector('content')
    .appendChild(domComponentNameClass('ul', 'taskContainer'));
})();
(function domAllProjectsRender() {
  for (let i = 0; i < todoProjects.length; i++) {
    domProjectRender(todoProjects[i]);
  }
})();
getLocalStorage();
updateStorage();

export { todoProjects };
