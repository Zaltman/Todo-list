import './style.css';
import { domComponentNameClass } from './dom.js';
import { todoArray } from './todo';

(function pageLoad() {
  document.querySelector('body').appendChild(domComponentNameClass('aside'));
  document.querySelector('body').appendChild(domComponentNameClass('content'));

  (function sidebarLoad() {
    document
      .querySelector('aside')
      .appendChild(domComponentNameClass('button', 'addBtn')).textContent =
      '+ Create new task';

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
      .appendChild(domComponentNameClass('div', 'taskContainer'));
    (function taskcontainerLoad() {
      document
        .querySelector('.taskContainer')
        .appendChild(domComponentNameClass('div', 'task')).textContent =
        todoArray[0].title;
    })();
  })();
})();
