const todoFactory = () => {
  let title = prompt('title');
  let description = prompt('description');
  let priority = prompt(
    'Priority from 0 to 4. less important < > more important'
  );
  return { title, description, priority };
};
const todoProjects = {};
todoProjects.todoProject = [];
todoProjects.todoProject[0] = [];

todoProjects.todoProject[0].push({
  title: 'Go to work',
  description: 'Do the job',
  priority: '4',
});

todoProjects.todoProject[0].push({
  title: 'Get from work',
  description: 'Do your own job',
  priority: '3',
});

todoProjects.todoProject[1] = [];

todoProjects.todoProject[1].push({
  title: 'Go to second work',
  description: 'Do the second job',
  priority: '2',
});

todoProjects.todoProject[1].push({
  title: 'Get from second work',
  description: 'Do your own second job',
  priority: '1',
});

todoProjects.todoProject[2] = [];

todoProjects.todoProject[2].push({
  title: 'Go to second work2',
  description: 'Do the second job',
  priority: '1',
});

todoProjects.todoProject[2].push({
  title: 'Get from second work2',
  description: 'Do your own second job',
  priority: '0',
});

function newTaskFunction() {
  console.table('aina');
  todoProjects.todoProject.push(todoFactory());
}

export { todoProjects };
export { newTaskFunction };
