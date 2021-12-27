import { todoProjects } from '.';
const projectFactory = () => {
  let title = prompt('enter project title');
  let todoList = [];
  todoList.push(todoFactory());
  return { title, todoList };
};

const todoFactory = () => {
  let title = prompt('enter todo title');
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

export { getLocalStorage };
export { updateStorage };
export { newTaskFunction };
export { projectFactory };
