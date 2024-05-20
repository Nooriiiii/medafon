import { Component, OnInit } from '@angular/core';
import { ToDo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
})
export class TodosListComponent implements OnInit {
  todos: ToDo[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoService.todos.subscribe((todos) => {
      this.todos = todos;
    });
  }
}
