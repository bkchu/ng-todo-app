import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Todo[] = [];

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {
    this.list = this.todoService.getAllTodos();
  }
}
