import { el } from 'date-fns/locale';
import { todoProjects } from '.';
import { addTodo, projectFactory, updateStorage } from './todo';
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
  //todo container render
  let todoContainer = document.createElement('li');
  todoContainer.dataset.project = x;
  todoContainer.classList.add('todoContainer');
  document.querySelector('ul').appendChild(todoContainer);

  //todo title render
  let todoTitle = document.createElement('div');
  todoTitle.textContent = todoProjects[x].todoList[i].title;
  todoTitle.dataset.project = x;
  todoTitle.dataset.todo = i;
  todoContainer.appendChild(todoTitle);

  //todo description render
  if (todoProjects[x].todoList[i].description) {
    let todoDescription = document.createElement('li');
    todoDescription.textContent = todoProjects[x].todoList[i].description;
    todoDescription.classList.add('todoDescription');
    todoDescription.dataset.project = x;
    document.querySelector('ul').appendChild(todoDescription);
  }
  // isChecked render
  let isChecked = document.createElement('input');
  isChecked.type = 'checkbox';
  isChecked.value = todoProjects[x].todoList[i].isChecked;
  isChecked.classList.add('isChecked');
  isChecked.dataset.project = x;
  isChecked.dataset.todo = i;
  isChecked.addEventListener('click', checkUncheck);
  if (todoProjects[x].todoList[i].isChecked) {
    isChecked.checked = 'checked';
  }
  todoContainer.appendChild(isChecked);

  //todo due date render
  if (todoProjects[x].todoList[i].dueDate) {
    let tododueDate = document.createElement('div');
    tododueDate.textContent = todoProjects[x].todoList[i].dueDate;
    tododueDate.classList.add('tododueDate');
    tododueDate.dataset.project = x;
    todoContainer.appendChild(tododueDate);
  }
}

function selectiveProjectRender(e) {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (element.dataset.project !== projectIndex) {
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

function checkUncheck(e) {
  let projectIndex = e.target.dataset.project;
  let todoIndex = e.target.dataset.todo;
  if (todoProjects[projectIndex].todoList[todoIndex].isChecked) {
    todoProjects[projectIndex].todoList[todoIndex].isChecked = false;
    console.log('works');
  } else {
    todoProjects[projectIndex].todoList[todoIndex].isChecked = true;
  }
  updateStorage();
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
