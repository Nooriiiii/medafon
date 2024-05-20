import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css'],
})
export class TodoEditComponent implements OnInit {
  todoForm: FormGroup;
  editMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {
    this.todoForm = this.fb.group({
      id: [0],
      title: ['', Validators.required],
      description: [''],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.editMode = true;
        this.todoService.getTodoById(id).subscribe((todo) => {
          if (todo) {
            this.todoForm.setValue(todo);
          }
        });
      }
    });
  }

  submitTodo() {
    if (this.editMode) {
      this.todoService.updateTodo(this.todoForm.value);
    } else {
      this.todoService.addTodo(this.todoForm.value);
    }
    this.router.navigate(['/']);
  }
}
