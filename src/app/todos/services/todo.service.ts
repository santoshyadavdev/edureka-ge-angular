import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('https://jsonplaceholder.typicode.com/todos', todo);
  }

  getTodo() {
    let todo: Todo = {
      userId: 4,
      // completed: true,
      title: 'dgfhbkjsfghkj'
    }
    return of(todo);
  }
}
