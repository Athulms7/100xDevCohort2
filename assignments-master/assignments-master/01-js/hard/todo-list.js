/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }

  // Adds a todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Removes the todo at the given index
  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    } else {
      console.log("Invalid index.");
    }
  }

  // Updates the todo at the given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Invalid index.");
    }
  }

  // Returns all todos
  getAll() {
    return this.todos;
  }

  // Returns the todo at the given index
  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return undefined;
    }
  }

  // Clears all todos
  clear() {
    this.todos = [];
  }
}

const d=new Todo();
d.add("task");
console.log(d.getAll());
module.exports = Todo;
