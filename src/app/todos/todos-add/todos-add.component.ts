import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { exhaustMap, filter, map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'ge-todos-add',
  templateUrl: './todos-add.component.html',
  styleUrls: ['./todos-add.component.css']
})
export class TodosAddComponent implements OnInit {

  todoForm: FormGroup;

  constructor(private todoService: TodoService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm = this.fb.group({
      userId: ['', Validators.required],
      title: ['', Validators.required],
      completed: ['']
    });

    this.bindFormData();
    this.todoForm.valueChanges.pipe(
      filter(() => this.todoForm.valid),
      exhaustMap((data) => this.todoService.addTodo(data)
      )).subscribe(res => console.log(res));
    // subscribe(data => this.todoService.addTodo(data).subscribe((res) => console.log(res)));
  }

  bindFormData() {
    this.todoService.getTodo().subscribe(data =>
      this.todoForm.patchValue(data)
    )
  }

  addTodo() { }

}
