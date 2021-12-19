import './style.css';
import { domComponentNameClass } from './dom.js';
import { newTaskFunction, todoArray } from './todo';

(function pageLoad() {
  document.querySelector('body').appendChild(domComponentNameClass('aside'));
  document.querySelector('body').appendChild(domComponentNameClass('content'));
})();
(function sidebarLoad() {
  let newTaskBtn = domComponentNameClass('button', 'addBtn');
  newTaskBtn.textContent = '+ Create task';
  document
    .querySelector('aside')
    .appendChild(newTaskBtn)
    .addEventListener('click', newTaskFunction);

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
(function taskcontainerLoad() {
  for (let i = 0; i < todoArray.length; i++) {
    document
      .querySelector('.taskContainer')
      .appendChild(
        domComponentNameClass('li', 'oneTaskContainer')
      ).dataset.index = i;
    document
      .querySelector('.taskContainer')
      .lastElementChild.appendChild(
        domComponentNameClass('div', 'taskN')
      ).textContent = todoArray[i].title;
    document
      .querySelector('.taskContainer')
      .lastElementChild.appendChild(
        domComponentNameClass('div', 'taskD')
      ).textContent = todoArray[i].description;
    document
      .querySelector('.taskContainer')
      .lastElementChild.appendChild(
        domComponentNameClass('div', 'taskP')
      ).textContent = todoArray[i].priority;
  }
})();
