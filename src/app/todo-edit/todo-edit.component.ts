import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrl: './todo-edit.component.css',
})
export class TodoEditComponent {
  todo: ToDo = {
    id: 0,
    title: '',
    description: '',
  };

  todos: ToDo[] = [
    {
      id: 1,
      title: 'Grocery Shopping',
      description: 'Buy milk, bread, and eggs from the supermarket.',
    },
    {
      id: 2,
      title: 'Read a Book',
      description: 'Finish reading the last chapter of "The Great Gatsby".',
    },
    {
      id: 3,
      title: 'Workout',
      description: 'Go for a 30-minute run in the park.',
    },
    {
      id: 4,
      title: 'Angular Project',
      description:
        'Work on the new feature implementation for the Angular app.',
    },
    {
      id: 5,
      title: 'Cook Dinner',
      description: 'Prepare a healthy meal with vegetables and chicken.',
    },
  ];

  editMode: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.editMode = true;
        console.log(params['id']);
        // Load the todo item for editing using the id
        // This is where you would fetch the todo from your todos array or service
        this.todo = this.fetchTodoById(+params['id']);
      }
    });
  }

  fetchTodoById(id: number): ToDo {
    return this.todos.find((todo) => todo.id === id) as ToDo;
  }

  submitTodo() {
    if (this.editMode) {
      // Update the existing todo
    } else {
      // Create a new todo
      this.todo.id = Date.now(); // Mock unique ID for the example
      // Add the new todo to your todos array or service
    }
    // Redirect to the TODOs List Page
    this.router.navigate(['/']);
  }
}
