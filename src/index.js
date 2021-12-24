import './style.css';
import { domComponentNameClass, domNewTask, domProjectRender } from './dom.js';
import { newTaskFunction, projectFactory, testProjectLoader } from './todo';

(function pageLoad() {
  document.querySelector('body').appendChild(domComponentNameClass('aside'));
  document.querySelector('body').appendChild(domComponentNameClass('content'));
})();
(function sidebarLoad() {
  function newProjectEvent() {
    todoProjects.push(projectFactory());
    domProjectRender(todoProjects[todoProjects.length - 1]);
    updateStorage(todoProjects);
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

  // let lastTaskContainer;
  // for (let x = 0; x < todoProjects.todoProject.length; x++) {
  //   document
  //     .querySelector('content')
  //     .appendChild(domComponentNameClass('ul', 'taskContainer'));
  //   lastTaskContainer = document.querySelectorAll('.taskContainer');
  //   lastTaskContainer = lastTaskContainer[lastTaskContainer.length - 1];
  //   let newTaskBtn = domComponentNameClass('button', 'addBtn');
  //   newTaskBtn.textContent = '+ Add task';
  //   document;
  //   lastTaskContainer.appendChild(newTaskBtn).addEventListener('click', () => {
  //     newTaskFunction();
  //     domNewTask();
  //   });
  //   (function taskcontainerLoad() {
  //     for (let i = 0; i < todoProjects.todoProject[x].length; i++) {
  //       document
  //         .querySelector('content')
  //         .lastElementChild.appendChild(
  //           domComponentNameClass('li', 'oneTaskContainer')
  //         ).dataset.index = i;
  //       lastTaskContainer.lastElementChild.appendChild(
  //         domComponentNameClass('div', 'taskN')
  //       ).textContent = todoProjects.todoProject[x][i].title;
  //       lastTaskContainer.lastElementChild.appendChild(
  //         domComponentNameClass('div', 'taskD')
  //       ).textContent = todoProjects.todoProject[x][i].description;
  //       lastTaskContainer.lastElementChild.appendChild(
  //         domComponentNameClass('div', 'taskP')
  //       ).textContent = priorityText();
  //       function priorityText() {
  //         if (todoProjects.todoProject[x][i].priority == 0)
  //           return 'Not important';
  //         else if (todoProjects.todoProject[x][i].priority == 1)
  //           return 'Kind of important';
  //         else if (todoProjects.todoProject[x][i].priority == 2)
  //           return 'Important';
  //         else if (todoProjects.todoProject[x][i].priority == 3)
  //           return 'Very important';
  //         else if (todoProjects.todoProject[x][i].priority == 4)
  //           return 'Extremely important';
  //       }
  //     }
  //   })();
  // }
})();

let todoProjects = getLocalStorage();
domProjectRender(todoProjects[todoProjects.length - 1]);
function getLocalStorage() {
  function todoStrToObj(string) {
    var object = JSON.parse(string);
    return object;
  }
  let localStorageObj = localStorage.getItem('strObj');
  localStorageObj = todoStrToObj(localStorageObj);
  return localStorageObj;
}
function updateStorage(ProjectsToUp) {
  function todoObjToStr(ProjectsToUp) {
    var string = JSON.stringify(ProjectsToUp);
    return string;
  }

  localStorage.setItem('strObj', todoObjToStr(ProjectsToUp));
}
