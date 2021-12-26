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
  return { title, description, priority, dueDate, isChecked };
};

function newTaskFunction() {}

export { newTaskFunction };
export { projectFactory };
