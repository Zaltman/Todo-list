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
function testProjectLoader() {
  let todoProjects = [];

  todoProjects[0] = {};
  todoProjects[0].todoList = [];

  todoProjects[0].title = 'Test project title1';
  todoProjects[0].todoList[0] = {};
  todoProjects[0].todoList[0].title = 'Test todoList title';
  todoProjects[0].todoList[0].description = 'Test todoList description';
  todoProjects[0].todoList[0].priority = '4';
  todoProjects[0].todoList[0].dueDate = '2021.10.12';
  todoProjects[0].todoList[0].isChecked = false;
  return todoProjects;
}

function newTaskFunction() {}

export { newTaskFunction };
export { testProjectLoader };
export { projectFactory };
