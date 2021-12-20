import { todoArray } from './todo';

function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domNewTask() {
  console.log(todoArray);
  console.log(todoArray.length);
  console.log(todoArray[todoArray.length - 1]);
  document
    .querySelector('.taskContainer')
    .appendChild(
      domComponentNameClass('li', 'oneTaskContainer')
    ).dataset.index = todoArray.length;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskN')
    ).textContent = todoArray[todoArray.length - 1].title;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskD')
    ).textContent = todoArray[todoArray.length - 1].description;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskP')
    ).textContent = priorityText();
  function priorityText() {
    if (todoArray[todoArray.length - 1].priority == 0) return 'Not important';
    else if (todoArray[todoArray.length - 1].priority == 1)
      return 'Kind of important';
    else if (todoArray[todoArray.length - 1].priority == 2) return 'Important';
    else if (todoArray[todoArray.length - 1].priority == 3)
      return 'Very important';
    else if (todoArray[todoArray.length - 1].priority == 4)
      return 'Extremely important';
  }
}

export { domComponentNameClass };
export { domNewTask };
