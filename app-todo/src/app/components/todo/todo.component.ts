import { Component, signal } from '@angular/core';
import { FilterType, TodoModel } from '../../models/todo';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  todoList = signal<TodoModel[]>([
    {
      id: 1,
      title: 'Buy milk',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: 'Buy bread',
      completed: true,
      editing: false,
    },
    {
      id: 3,
      title: 'Buy cheese',
      completed: false,
      editing: false,
    },
  ]);

  filter = signal<FilterType>('all');

  newTodo = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(3)],
  });

  changeFilter(filtetString: FilterType) {
    this.filter.set(filtetString);
  }

  addTodo() {
    const newTodoTitle = this.newTodo.value.trim();
    if (this.newTodo.valid && newTodoTitle !== '') {
      this.todoList.update((prev_todo) => {
        return [
          ...prev_todo,
          { id: Date.now(), title: newTodoTitle, completed: false },
        ];
      });
      this.newTodo.reset();
    } else {
      this.newTodo.reset();
    }
  }

  toggleTodo(todoId: number) {
    this.todoList.update((prev_todos) =>
      prev_todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return { ...todo, editing: false };
      })
    );
  }
}
