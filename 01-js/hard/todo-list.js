/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todoList = [];
  }

  add(todo) {
    this.todoList.push(todo);
  }

  remove(indexOfTodo) { 
    this.todoList.splice(indexOfTodo, 1);
  }
  
  update(index, updatedTodo) { 
    this.todoList[index] = updatedTodo;
  }

  getAll() { 
    return this.todoList;
  }

  get(indexOfTodo) {
    return this.todoList[indexOfTodo];
  }

  clear() { 
    this.todoList = [];
  }

}

module.exports = Todo;
