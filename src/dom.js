import { isThisWeek } from 'date-fns';
import { todoProjects } from '.';
import { addTodo, projectFactory, todoFactory, updateStorage } from './todo';
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

  //priority render
  let todoPriority = document.createElement('div');
  todoPriority.textContent = todoProjects[x].todoList[i].priority;
  if (todoProjects[x].todoList[i].priority == 0) {
    todoPriority.textContent = 'unimportant';
  }
  if (todoProjects[x].todoList[i].priority == 1) {
    todoPriority.textContent = 'important';
  }
  if (todoProjects[x].todoList[i].priority == 2) {
    todoPriority.textContent = 'very important';
  }
  if (todoProjects[x].todoList[i].priority == 3) {
    todoPriority.textContent = 'URGENT';
  }
  if (
    todoProjects[x].todoList[i].priority < 0 ||
    todoProjects[x].todoList[i].priority > 3
  ) {
    todoPriority.textContent = '';
  }

  todoPriority.classList.add('todoPriority');
  todoContainer.appendChild(todoPriority);

  //todo due date render
  if (todoProjects[x].todoList[i].dueDate) {
    let tododueDate = document.createElement('div');
    tododueDate.textContent = todoProjects[x].todoList[i].dueDate;
    tododueDate.classList.add('tododueDate');
    tododueDate.dataset.project = x;
    todoContainer.appendChild(tododueDate);
  }
  //todo delete button
  let todoDeleteBtn = document.createElement('button');
  todoDeleteBtn.textContent = '🗑';
  todoDeleteBtn.classList.add('recycleBtn');
  todoDeleteBtn.dataset.project = x;
  todoDeleteBtn.dataset.todo = i;
  todoDeleteBtn.addEventListener('click', removeTodo);
  todoContainer.appendChild(todoDeleteBtn);
}
//also adds + Add todo button
function selectiveProjectRender(e) {
  deleteAllDomTodos();
  renderAllDomTodos();
  function checkAndDelete(element) {
    if (element.dataset.project !== projectIndex) {
      element.remove();
    }
  }
  let projectIndex = e.target.dataset.project;
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  todoList.forEach((element) => checkAndDelete(element, projectIndex));

  //add add todo button to todo container.
  let addTodoBtnLi = document.createElement('li');
  addTodoBtnLi.classList.add('addTodoBtnContainer');
  addTodoBtnLi.dataset.project = e.target.dataset.project;
  document.querySelector('.listContainer').appendChild(addTodoBtnLi);
  let addTodoBtn = document.createElement('button');
  addTodoBtn.textContent = '+ Add todo';
  addTodoBtn.classList.add('addTodoBtn');
  addTodoBtn.dataset.project = e.target.dataset.project;
  addTodoBtn.addEventListener('click', newTodoModuleEvent);
  addTodoBtnLi.appendChild(addTodoBtn);
}

function selectiveTimeTodosRender() {}

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
  } else {
    todoProjects[projectIndex].todoList[todoIndex].isChecked = true;
  }
  updateStorage();
}

function removeTodo(e) {
  let projectIndex = e.target.dataset.project;
  let todoIndex = e.target.dataset.todo;
  console.log(todoProjects[projectIndex].todoList[todoIndex]);
  todoProjects[projectIndex].todoList.splice(todoIndex, 1);
  if (todoProjects[projectIndex].todoList.length == 0) {
    todoProjects.splice(projectIndex, 1);
  }
  updateStorage();
  deleteAllDomTodos();
  renderAllDomTodos();
}

function renderAllTodosClick() {
  deleteAllDomTodos();
  renderAllDomTodos();
}

function NewProjectModuleEvent() {
  let modalContainer = document.createElement('div');
  modalContainer.setAttribute('id', 'myModal');
  modalContainer.classList.add('modal');
  document.querySelector('body').append(modalContainer);

  let modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');
  modalContainer.appendChild(modalContent);

  let closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = `&times;`;
  closeBtn.addEventListener('click', closeModal);
  modalContent.appendChild(closeBtn);

  let modalText = document.createElement('p');
  modalText.classList.add('modalText');
  modalText.textContent = 'Enter new project details';
  modalContent.appendChild(modalText);

  let inputsContainer = document.createElement('div');
  inputsContainer.classList.add('inputsContainer');
  modalContent.appendChild(inputsContainer);

  let inputProjectTitle = document.createElement('input');
  inputProjectTitle.type = 'text';
  inputProjectTitle.classList.add('modalInput');
  inputProjectTitle.setAttribute('id', 'inputProjectTitle');
  inputProjectTitle.placeholder = 'Enter project title';
  inputsContainer.appendChild(inputProjectTitle);

  let inputTodoTitle = document.createElement('input');
  inputTodoTitle.type = 'text';
  inputTodoTitle.setAttribute('id', 'inputTodoTitle');
  inputTodoTitle.classList.add('modalInput');
  inputTodoTitle.placeholder = 'Enter todo title';
  inputsContainer.appendChild(inputTodoTitle);

  let inputTodoDescription = document.createElement('input');
  inputTodoDescription.type = 'text';
  inputTodoDescription.classList.add('modalInput');
  inputTodoDescription.setAttribute('id', 'inputTodoDescription');
  inputTodoDescription.placeholder = 'Enter todo description';
  inputsContainer.appendChild(inputTodoDescription);

  let inputTodoPriorityContainer = document.createElement('label');
  inputTodoPriorityContainer.setAttribute('id', 'priorityLabel');
  inputTodoPriorityContainer.setAttribute('for', 'inputTodoPriority');
  inputsContainer.appendChild(inputTodoPriorityContainer);

  let inputTodoPriority = document.createElement('select');
  inputTodoPriority.classList.add('modalInput');
  inputTodoPriority.setAttribute('id', 'choosePriority');
  inputsContainer.appendChild(inputTodoPriority);

  let inputDate = document.createElement('input');
  inputDate.classList.add('modalInput');
  inputDate.type = 'date';
  inputDate.setAttribute('id', 'inputDate');
  inputDate.placeholder = 'click calendar to choose due date';
  inputsContainer.appendChild(inputDate);

  let submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('submitBtn');
  submitBtn.addEventListener('click', submitNewProjectClick);
  modalContent.append(submitBtn);

  let option0 = document.createElement('option');
  option0.setAttribute('value', '');
  option0.textContent = 'Please choose priority';
  inputTodoPriority.appendChild(option0);

  let option1 = document.createElement('option');
  option1.setAttribute('value', 'low');
  option1.textContent = 'Unimportant';
  inputTodoPriority.appendChild(option1);

  let option2 = document.createElement('option');
  option2.setAttribute('value', 'normal');
  option2.textContent = 'Important';
  inputTodoPriority.appendChild(option2);

  let option3 = document.createElement('option');
  option3.setAttribute('value', 'high');
  option3.textContent = 'Very important';
  inputTodoPriority.appendChild(option3);

  let option4 = document.createElement('option');
  option4.setAttribute('value', 'none');
  option4.textContent = '';
  inputTodoPriority.appendChild(option4);

  modalContainer.style.display = 'block';
  function closeModal() {
    modalContainer.style.display = 'none';
  }
  function submitNewProjectClick() {
    submitNewProject();
    closeModal();
  }
}

function newTodoModuleEvent(e) {
  let projectIndex = e.target.dataset.project;
  let modalContainer = document.createElement('div');
  modalContainer.setAttribute('id', 'myModal');
  modalContainer.classList.add('modal');
  document.querySelector('body').append(modalContainer);

  let modalContent = document.createElement('div');
  modalContent.classList.add('modalContent');
  modalContainer.appendChild(modalContent);

  let closeBtn = document.createElement('span');
  closeBtn.classList.add('close');
  closeBtn.innerHTML = `&times;`;
  closeBtn.addEventListener('click', closeModal);
  modalContent.appendChild(closeBtn);

  let modalText = document.createElement('p');
  modalText.classList.add('modalText');
  modalText.textContent = 'Enter new todo details';
  modalContent.appendChild(modalText);

  let inputsContainer = document.createElement('div');
  inputsContainer.classList.add('inputsContainer');
  modalContent.appendChild(inputsContainer);

  // let inputProjectTitle = document.createElement('input');
  // inputProjectTitle.type = 'text';
  // inputProjectTitle.classList.add('modalInput');
  // inputProjectTitle.setAttribute('id', 'inputProjectTitle');
  // inputProjectTitle.placeholder = 'Enter project title';
  // inputsContainer.appendChild(inputProjectTitle);

  let inputTodoTitle = document.createElement('input');
  inputTodoTitle.type = 'text';
  inputTodoTitle.setAttribute('id', 'inputTodoTitle');
  inputTodoTitle.classList.add('modalInput');
  inputTodoTitle.placeholder = 'Enter todo title';
  inputsContainer.appendChild(inputTodoTitle);

  let inputTodoDescription = document.createElement('input');
  inputTodoDescription.type = 'text';
  inputTodoDescription.classList.add('modalInput');
  inputTodoDescription.setAttribute('id', 'inputTodoDescription');
  inputTodoDescription.placeholder = 'Enter todo description';
  inputsContainer.appendChild(inputTodoDescription);

  let inputTodoPriorityContainer = document.createElement('label');
  inputTodoPriorityContainer.setAttribute('id', 'priorityLabel');
  inputTodoPriorityContainer.setAttribute('for', 'inputTodoPriority');
  inputsContainer.appendChild(inputTodoPriorityContainer);

  let inputTodoPriority = document.createElement('select');
  inputTodoPriority.classList.add('modalInput');
  inputTodoPriority.setAttribute('id', 'choosePriority');
  inputsContainer.appendChild(inputTodoPriority);

  let inputDate = document.createElement('input');
  inputDate.classList.add('modalInput');
  inputDate.type = 'date';
  inputDate.setAttribute('id', 'inputDate');
  inputDate.placeholder = 'click calendar to choose due date';
  inputsContainer.appendChild(inputDate);

  let submitBtn = document.createElement('button');
  submitBtn.textContent = 'Submit';
  submitBtn.classList.add('submitBtn');
  submitBtn.dataset.project = projectIndex;
  submitBtn.addEventListener('click', submitNewTodoClick);
  modalContent.append(submitBtn);

  // let priorityList = document.createElement('option');
  // priorityList.setAttribute('id', 'priorityList');
  // modalContent.appendChild(priorityList);

  let option0 = document.createElement('option');
  option0.setAttribute('value', '');
  option0.textContent = 'Please choose priority';
  inputTodoPriority.appendChild(option0);

  let option1 = document.createElement('option');
  option1.setAttribute('value', 'low');
  option1.textContent = 'Unimportant';
  inputTodoPriority.appendChild(option1);

  let option2 = document.createElement('option');
  option2.setAttribute('value', 'normal');
  option2.textContent = 'Important';
  inputTodoPriority.appendChild(option2);

  let option3 = document.createElement('option');
  option3.setAttribute('value', 'high');
  option3.textContent = 'Very important';
  inputTodoPriority.appendChild(option3);

  let option4 = document.createElement('option');
  option4.setAttribute('value', 'none');
  option4.textContent = 'none';
  inputTodoPriority.appendChild(option4);

  modalContainer.style.display = 'block';
  function closeModal() {
    modalContainer.style.display = 'none';
  }

  function submitNewTodoClick(e) {
    submitNewTodo(e);
    closeModal();
  }
}

function submitNewTodo(e) {
  let projectIndex = e.target.dataset.project;
  todoProjects[projectIndex].todoList.push(todoFactory());
  console.log(todoProjects[projectIndex].todoList);
  let lastTodoIndex = todoProjects[projectIndex].todoList.length - 1;
  // console.log(todoProjects[projectIndex - 1].todoList[lastTodoIndex]);
  domTodoRender(lastTodoIndex, projectIndex);
  updateStorage();
}

function submitNewProject() {
  todoProjects.push(projectFactory());
  if (todoProjects[todoProjects.length - 1]) {
    updateStorage();
    domProjectsRender(todoProjects.length - 1);
    domTodoRender(
      todoProjects[todoProjects.length - 1].todoList.length - 1,
      todoProjects.length - 1
    );
  }
  updateStorage();
}
export {
  domComponentNameClass,
  domTodoRender,
  domProjectsRender,
  selectiveProjectRender,
  renderAllTodosClick,
  NewProjectModuleEvent,
};
