function markAsDone(todos) {
  const modifiedTodos = [];
  
  todos.forEach(todo => {
    modifiedTodos.push('done - ' + todo);
  });
  
  return modifiedTodos;
}

