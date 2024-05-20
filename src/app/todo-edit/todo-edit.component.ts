import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  todo: ToDo = {
    id: 0,
    title: '',
    description: '',
  };
  editMode: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.editMode = true;
        // Fetch the todo item for editing using the id from the TodoService
        this.todoService.todos.subscribe((todos) => {
          this.todo = todos.find((todo) => todo.id === id) || this.todo;
        });
      }
    });
  }

  submitTodo() {
    if (this.editMode) {
      // Update the existing todo using TodoService
    } else {
      // Create a new todo using TodoService
      this.todo.id = Date.now(); // Mock unique ID for the example
      this.todoService.addTodo(this.todo);
    }
    // Redirect to the TODOs List Page
    this.router.navigate(['/']);
  }
}
