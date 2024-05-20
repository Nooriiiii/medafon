import { Component } from '@angular/core';
import { ToDo } from '../models/todo.model';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css',
})
export class TodosListComponent {
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
}
