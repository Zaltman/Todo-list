import { todoProjects } from '.';
import { addTodo } from './todo';
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
  console.log(projectTitleEl);
  document.querySelector('.projectContainer').appendChild(projectTitleEl);
}

function domTodoRender(i, x) {
  let todoTitle = document.createElement('li');
  todoTitle.textContent = todoProjects[x].todoList[i].title;
  document.querySelector('ul').appendChild(todoTitle);
}
export { domComponentNameClass, domTodoRender, domProjectsRender };
