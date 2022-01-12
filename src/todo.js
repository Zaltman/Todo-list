import { todoProjects } from '.';
import { domTodoRender } from './dom';
import { format } from 'date-fns';
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
    'Priority from 0 to 3. less important < > more important'
  );
  let dueDate = format(new Date(), 'yyyy-MM-dd');
  // function (){
  //   let year = prompt('Enter due date year');
  //   if (year > 3000 || year < 2000) return alert('incorrect year');
  //   let month = prompt('Enter due date month');
  //   if
  //   let day = prompt('Enter due date year');
  // };

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

let dateTest = format(new Date(), 'yyyy-MM-dd');

console.log(dateTest);

export { getLocalStorage };
export { updateStorage };
export { newTaskFunction };
export { projectFactory };
export { addTodo };
