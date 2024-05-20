import { BehaviorSubject } from 'rxjs';
import { ToDo } from '../models/todo.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todosSubject: BehaviorSubject<ToDo[]>;
  private dataStore: { todos: ToDo[] } = { todos: [] }; // Store our data in memory

  constructor() {
    this.todosSubject = new BehaviorSubject<ToDo[]>([
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
    ]);
    this.dataStore.todos = this.todosSubject.value;
  }

  get todos() {
    return this.todosSubject.asObservable();
  }

  addTodo(newTodo: ToDo) {
    const todos = this.dataStore.todos;
    todos.push(newTodo);
    this.todosSubject.next(todos);
  }

  // ... Additional methods to modify todos (edit, delete, etc.) ...
}
