const todoFactory = () => {
  title = prompt('title');
  description = prompt('description');
  priority = prompt('Priority from 0 to 4');
  return { title, description, priority };
};

const todoArray = [];

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

export { todoArray };
