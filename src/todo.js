const todoFactory = (title, description) => {
  title = prompt('title');
  description = prompt('description');
  return { title, description };
};
