import {Component, inject, OnInit} from '@angular/core';
import {Todo} from "../models/todo.model";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  store = inject(Store<AppState>)

  ngOnInit(): void {
    this.store.select('todos').subscribe(todos => this.todos = todos)
  }
}
