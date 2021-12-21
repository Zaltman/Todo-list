import { todoProjects } from './todo';

function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domNewTask() {
  document
    .querySelector('.taskContainer')
    .appendChild(
      domComponentNameClass('li', 'oneTaskContainer')
    ).dataset.index = todoProjects.todoProject[0].length;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskN')
    ).textContent =
    todoProjects.todoProject[0][todoProjects.todoProject[0].length - 1].title;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskD')
    ).textContent =
    todoProjects.todoProject[0][
      todoProjects.todoProject[0].length - 1
    ].description;
  document
    .querySelector('.taskContainer')
    .lastElementChild.appendChild(
      domComponentNameClass('div', 'taskP')
    ).textContent = priorityText();
  function priorityText() {
    if (
      todoProjects.todoProject[0][todoProjects.todoProject[0].length - 1] == 0
    )
      return 'Not important';
    else if (
      todoProjects.todoProject[0][todoProjects.todoProject[0].length - 1]
        .priority == 1
    )
      return 'Kind of important';
    else if (
      todoProjects.todoProject[0][todoProjects.todoProject[0].length - 1]
        .priority == 2
    )
      return 'Important';
    else if (
      todoProjects.todoProject[0][todoProjects.todoProject[0].length - 1]
        .priority == 3
    )
      return 'Very important';
    else if (
      todoProjects.todoProject[0][todoProjects.todoProject[0].length - 1]
        .priority == 4
    )
      return 'Extremely important';
  }
}

export { domComponentNameClass };
export { domNewTask };
