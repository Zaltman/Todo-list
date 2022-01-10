import { todoProjects } from '.';
import { domTodoRender } from './dom';
const projectFactory = () => {
  let title = prompt('enter project title');
  if (title == null) {
    return;
  }
  let todoList = [];
  todoList.push(todoFactory());
  return { title, todoList };
};

const todoFactory = () => {
  let title = prompt('enter todo title');
  if (title == null) {
    return;
  }
  let description = prompt('enter description');
  let priority = prompt(
    'Priority from 0 to 4. less important < > more important'
  );
  let dueDate = '2021.10.12';
  let isChecked = false;
  let index = todoProjects.length;
  return { title, description, priority, dueDate, isChecked, index };
};

function newTaskFunction() {}

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
  // console.log(todoProjects[projectIndex].todoList[lastTodoIndex - 1]);

  // console.log(projectIndex);
}
export { getLocalStorage };
export { updateStorage };
export { newTaskFunction };
export { projectFactory };
export { addTodo };
