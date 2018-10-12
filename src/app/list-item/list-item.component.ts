import { Component, OnInit, Input } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';
import { Priority } from '../priority.enum';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input()
  index: number;

  @Input()
  todo: string;

  @Input()
  completed: boolean;

  @Input()
  priority: Priority;

  constructor(private todoService: TodoServiceService) {}

  ngOnInit() {}

  toggleComplete() {
    this.todoService.toggleCompletion(this.index);
  }

  delete() {
    this.todoService.removeTodo(this.index);
  }
}
