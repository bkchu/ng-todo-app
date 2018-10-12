import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo.model';
import { Priority } from '../priority.enum';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  priorities = [Priority.Low, Priority.Medium, Priority.High];
  todo = '';
  currentPriority = Priority.Low;

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {}

  addTodo() {
    if (this.todo) {
      this.todoService.addTodo(
        new Todo(this.todo, false, this.currentPriority)
      );
      this.todo = '';
    }
  }
}
