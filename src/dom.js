function domComponentNameClass(name, className) {
  const element = document.createElement(name);
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function domProjectRender(todoProject) {
  let domProjectTitle = document.createElement('h3');
  domProjectTitle.textContent = todoProject.title;
  domProjectTitle.classList.add('projectTitle');
  document.querySelector('.taskContainer').appendChild(domProjectTitle);

  let domTodoListTitle = document.createElement('div');
  domTodoListTitle.textContent = todoProject.todoList[0].title;
  domTodoListTitle.classList.add('todoListTitle');
  document.querySelector('.taskContainer').appendChild(domTodoListTitle);

  let domTodoListDescription = document.createElement('div');
  domTodoListDescription.textContent = todoProject.todoList[0].description;
  domTodoListDescription.classList.add('todoListDescription');
  document.querySelector('.taskContainer').appendChild(domTodoListDescription);

  let domTodoListPriority = document.createElement('div');
  domTodoListPriority.textContent = (function () {
    if (todoProject.todoList[0].priority == '0') return 'Not important';
    else if (todoProject.todoList[0].priority == '1')
      return 'Kind of important';
    else if (todoProject.todoList[0].priority == '2') return 'Important';
    else if (todoProject.todoList[0].priority == '3') return 'Very important';
    else if (todoProject.todoList[0].priority == '4')
      return 'Extremely important';
    else return 'Priority missing';
  })();
  domTodoListPriority.classList.add('todoListPriority');
  document.querySelector('.taskContainer').appendChild(domTodoListPriority);

  let domTodoListDueDate = document.createElement('div');
  domTodoListDueDate.textContent = todoProject.todoList[0].dueDate;
  domTodoListDueDate.classList.add('todoListDueDate');
  document.querySelector('.taskContainer').appendChild(domTodoListDueDate);

  let domTodoListIsChecked = document.createElement('div');
  domTodoListIsChecked.textContent = todoProject.todoList[0].isChecked;
  domTodoListIsChecked.classList.add('todoListIsChecked');
  document.querySelector('.taskContainer').appendChild(domTodoListIsChecked);
}

export { domComponentNameClass };

export { domProjectRender };
