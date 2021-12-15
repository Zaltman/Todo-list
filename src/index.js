import './style.css';
import { domComponentNameClass } from './dom.js';

document.querySelector('body').appendChild(domComponentNameClass('aside'));
document.querySelector('body').appendChild(domComponentNameClass('content'));

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
