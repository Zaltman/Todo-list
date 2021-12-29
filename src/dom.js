import { todoProjects } from '.';
import { addTodo } from './todo';
function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domProjectRender(todoProject, i) {
  let containerSelector = `[data-container-index='${i}']`;
  let domProjectTitle = document.createElement('h3');
  domProjectTitle.textContent = todoProject.title;
  domProjectTitle.classList.add('projectTitle');
  document.querySelector(containerSelector).appendChild(domProjectTitle);

  let domTodoListTitle = document.createElement('div');
  domTodoListTitle.textContent = todoProject.todoList[0].title;
  domTodoListTitle.classList.add('todoListTitle');
  document.querySelector(containerSelector).appendChild(domTodoListTitle);

  let domTodoListDescription = document.createElement('div');
  domTodoListDescription.textContent = todoProject.todoList[0].description;
  domTodoListDescription.classList.add('todoListDescription');
  document.querySelector(containerSelector).appendChild(domTodoListDescription);

  let domTodoListPriority = document.createElement('div');
  domTodoListPriority.textContent = (function () {
    if (todoProject.todoList[0].priority == '0') return 'Not important';
    else if (todoProject.todoList[0].priority == '1')
      return 'Kind of important';
    else if (todoProject.todoList[0].priority == '2') return 'Important';
    else if (todoProject.todoList[0].priority == '3') return 'Very important';
    else if (todoProject.todoList[0].priority == '4')
      return 'Extremely important';
    else return 'Priority missing';
  })();
  domTodoListPriority.classList.add('todoListPriority');
  document.querySelector(containerSelector).appendChild(domTodoListPriority);

  let domTodoListDueDate = document.createElement('div');
  domTodoListDueDate.textContent = todoProject.todoList[0].dueDate;
  domTodoListDueDate.classList.add('todoListDueDate');
  document.querySelector(containerSelector).appendChild(domTodoListDueDate);

  let domTodoListIsChecked = document.createElement('div');
  domTodoListIsChecked.textContent = todoProject.todoList[0].isChecked;
  domTodoListIsChecked.classList.add('todoListIsChecked');
  document.querySelector(containerSelector).appendChild(domTodoListIsChecked);

  let domProjectAddTodoBtn = document.createElement('button');
  domProjectAddTodoBtn.textContent = '+ Add task';
  domProjectAddTodoBtn.classList.add('addTaskBtn');
  domProjectAddTodoBtn.dataset.index = i;
  domProjectAddTodoBtn.addEventListener('click', addTodo);
  document.querySelector(containerSelector).appendChild(domProjectAddTodoBtn);
}

function domTodoListTitleF(todoProjectIndex, i) {
  let domElement = document.createElement('div');
  domElement.textContent = todoProjects[todoProjectIndex].todoList[i].title;
  domElement.classList.add('todoListTitle');
  let containerSelector = `[data-container-index='${todoProjectIndex}']`;
  document.querySelector(containerSelector).appendChild(domElement);
}
function domTodoListDescriptionF(todoProjectIndex, i) {
  let domElement = document.createElement('div');
  domElement.textContent =
    todoProjects[todoProjectIndex].todoList[i].description;
  domElement.classList.add('todoListDescription');
  let containerSelector = `[data-container-index='${todoProjectIndex}']`;
  document.querySelector(containerSelector).appendChild(domElement);
}
function domTodoListPriorityF(todoProjectIndex, i) {
  let domElement = document.createElement('div');
  domElement.textContent = todoProjects[todoProjectIndex].todoList[i].priority;
  domElement.classList.add('todoListPriority');
  let containerSelector = `[data-container-index='${todoProjectIndex}']`;
  document.querySelector(containerSelector).appendChild(domElement);
}
function domTodoListDueDateF(todoProjectIndex, i) {
  let domElement = document.createElement('div');
  domElement.textContent = todoProjects[todoProjectIndex].todoList[i].dueDate;
  domElement.classList.add('todoListDueDate');
  let containerSelector = `[data-container-index='${todoProjectIndex}']`;
  document.querySelector(containerSelector).appendChild(domElement);
}
function domTodoListIsCheckedF(todoProjectIndex, i) {
  let domElement = document.createElement('div');
  domElement.textContent = todoProjects[todoProjectIndex].todoList[i].isChecked;
  domElement.classList.add('todoListIsChecked');
  let containerSelector = `[data-container-index='${todoProjectIndex}']`;
  document.querySelector(containerSelector).appendChild(domElement);
}
function domProjectTodosRender(todoProjectIndex) {
  if (todoProjects[todoProjectIndex].todoList.length > 1) {
    for (let i = 1; i < todoProjects[todoProjectIndex].todoList.length; i++) {
      domTodoListTitleF(todoProjectIndex, i);
      domTodoListDescriptionF(todoProjectIndex, i);
      domTodoListPriorityF(todoProjectIndex, i);
      domTodoListDueDateF(todoProjectIndex, i);
      domTodoListIsCheckedF(todoProjectIndex, i);

      console.log(todoProjects[0].todoList);
    }
  }
}

export { domComponentNameClass };

export { domProjectRender, domProjectTodosRender };
