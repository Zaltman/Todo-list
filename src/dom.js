import { el } from 'date-fns/locale';
import { todoProjects } from '.';
import { addTodo, projectFactory } from './todo';
function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domProjectsRender(x) {
  let projectTitleEl = document.createElement('button');
  projectTitleEl.textContent = todoProjects[x].title;
  projectTitleEl.classList.add('projectTitle');
  projectTitleEl.dataset.project = x;
  projectTitleEl.addEventListener('click', selectiveProjectRender);
  document.querySelector('.projectContainer').appendChild(projectTitleEl);
}

function domTodoRender(i, x) {
  //todo title render
  let todoTitle = document.createElement('li');
  todoTitle.textContent = todoProjects[x].todoList[i].title;
  todoTitle.dataset.projectTodo = x;
  todoTitle.classList.add('todoTitle');
  document.querySelector('ul').appendChild(todoTitle);

  //todo due date render
  if (todoProjects[x].todoList[i].dueDate) {
    let tododueDate = document.createElement('span');
    tododueDate.textContent = todoProjects[x].todoList[i].dueDate;
    tododueDate.classList.add('tododueDate');
    tododueDate.dataset.projectTodo = x;
    todoTitle.appendChild(tododueDate);
  }
  //todo description render
  if (todoProjects[x].todoList[i].description) {
    let todoDescription = document.createElement('li');
    todoDescription.textContent = todoProjects[x].todoList[i].description;
    todoDescription.classList.add('todoDescription');
    todoDescription.dataset.projectTodo = x;
    document.querySelector('ul').appendChild(todoDescription);
  }
}

function selectiveProjectRender(e) {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (element.dataset.projectTodo !== projectIndex) {
      console.log(element);
      element.remove();
    }
  }
  let projectIndex = e.target.dataset.project;
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  todoList.forEach((element) => checkAndDelete(element, projectIndex));
}

function deleteAllDomTodos() {
  function deleteDomEl(element) {
    element.remove();
  }
  let todoContainer = document.querySelector('.listContainer');
  let todoNodes = todoContainer.querySelectorAll('li');
  todoNodes.forEach((element) => deleteDomEl(element));
}

function renderAllDomTodos() {
  for (let x = 0; x < todoProjects.length; x++) {
    for (let i = 0; i < todoProjects[x].todoList.length; i++) {
      domTodoRender(i, x);
    }
  }
}

function renderAllTodosClick() {
  deleteAllDomTodos();
  renderAllDomTodos();
}
export {
  domComponentNameClass,
  domTodoRender,
  domProjectsRender,
  selectiveProjectRender,
  renderAllTodosClick,
};
