import { todoProjects } from '.';
import { domTodoRender } from './dom';
import { format } from 'date-fns';

const projectFactory = () => {
  let title = document.querySelector('#inputProjectTitle').value;
  if (title == null) {
    title = 'title missing';
  }
  let todoList = [];
  todoList.push(todoFactory());
  return { title, todoList };
};
const todoFactory = () => {
  let title = document.querySelector('#inputTodoTitle').value;
  if (title == null) {
    title = 'title missing';
  }
  let description = document.querySelector('#inputTodoDescription').value;
  let priority = document.querySelector('#choosePriority').value;
  let dueDate = document.querySelector('#inputDate').value;
  if (!dueDate) {
    dueDate = '';
  }

  let isChecked = false;
  let index = todoProjects.length;
  return { title, description, priority, dueDate, isChecked, index };
};

function getLocalStorage() {
  function todoStrToObj(string) {
    var object = JSON.parse(string);
    return object;
  }
  if (todoStrToObj) {
    let localStorageObj = localStorage.getItem('strObj');
    localStorageObj = todoStrToObj(localStorageObj);
    return localStorageObj;
  } else return (todoProjects = []);
}
function updateStorage() {
  function todoObjToStr() {
    var string = JSON.stringify(todoProjects);
    return string;
  }

  localStorage.setItem('strObj', todoObjToStr(todoProjects));
}

function addTodo(e) {
  let projectIndex = e.target.dataset.project;
  todoProjects[projectIndex].todoList.push(todoFactory());
  let lastTodoIndex = todoProjects[projectIndex].todoList.length - 1;
  updateStorage();
  domTodoRender(lastTodoIndex, projectIndex);
}

export { getLocalStorage };
export { updateStorage };

export { projectFactory };
export { todoFactory };
export { addTodo };
