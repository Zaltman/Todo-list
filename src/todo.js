const todoFactory = () => {
  let title = prompt('title');
  let description = prompt('description');
  let priority = prompt(
    'Priority from 0 to 4. less important < > more important'
  );
  return { title, description, priority };
};
// const todoProjects = [];
// todoProjects[0] = todoArray
let todoArray = [];

todoArray.push({
  title: 'Go to work',
  description: 'Do the job',
  priority: '4',
});

todoArray.push({
  title: 'Get from work',
  description: 'Do your own job',
  priority: '3',
});

function newTaskFunction() {
  console.table('aina');
  todoArray.push(todoFactory());
}

export { todoArray };
export { newTaskFunction };
