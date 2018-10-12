import { Priority } from './priority.enum';

export class Todo {
  constructor(
    public todo: string,
    public completed: boolean = false,
    public priority: Priority = Priority.Low
  ) {}
}
