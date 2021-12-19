const todoFactory = () => {
  let title = prompt('title');
  let description = prompt('description');
  let priority = prompt('Priority from 0 to 4');
  return { title, description, priority };
};

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
  todoArray.push(todoFactory());
  console.table(todoArray);
}

export { todoArray };
export { newTaskFunction };
