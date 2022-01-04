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
  // console.log(projectTitleEl);
  document.querySelector('.projectContainer').appendChild(projectTitleEl);
}

function domTodoRender(i, x) {
  let todoTitle = document.createElement('li');
  todoTitle.textContent = todoProjects[x].todoList[i].title;
  todoTitle.dataset.projectTodo = x;
  document.querySelector('ul').appendChild(todoTitle);
}

function selectiveProjectRender(e) {
  function checkAndDelete(element) {
    //delete displayed todos and render all todos, then check and delete proper ones
    function deleteAndRenderAll() {
      function deleteDomEl(element) {
        element.remove();
      }
      let todoContainer = document.querySelector('.listContainer');
      let todoNodes = todoContainer.querySelectorAll('li');
      todoNodes.forEach((element) => deleteDomEl(element));
    }
    deleteAndRenderAll();
    for (let x = 0; x < todoProjects.length; x++) {
      for (let i = 0; i < todoProjects[x].todoList.length; i++) {
        domTodoRender(i, x);
      }
    }
    if (element.dataset.projectTodo !== projectIndex) {
      element.remove();
    }
    console.log(element.dataset.projectTodo);
    console.log(projectIndex);
  }
  let projectIndex = e.target.dataset.project;
  let listContainer = document.querySelector('.listContainer');
  let todoList = listContainer.querySelectorAll('li');
  // console.log(todoList);
  todoList.forEach((element) => checkAndDelete(element, projectIndex));
}
export {
  domComponentNameClass,
  domTodoRender,
  domProjectsRender,
  selectiveProjectRender,
};
