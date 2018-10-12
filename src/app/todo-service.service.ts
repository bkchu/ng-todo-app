import { Injectable } from '@angular/core';
import { Todo } from './todo.model';
import { Priority } from './priority.enum';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  private todos: Todo[] = [
    new Todo(
      'asdfasdfasfdasdfasdfasfdasdfasdfasfdasdfasdfasfdasdfasdfasfdasdfasdfasfdasdfasdfasfdasdfasdfasfd'
    )
  ];
  constructor() {}

  addTodo(todo: Todo) {
    this.todos.unshift(todo);
    console.log(this.todos);
    return this.todos;
    // May need slice here to return proper data
  }

  removeTodo(index: number) {
    this.todos.splice(index, 1);
    console.log(this.todos);
    return this.todos;
  }

  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }

  getAllTodos() {
    return this.todos;
    console.log(this.todos);
  }
}
