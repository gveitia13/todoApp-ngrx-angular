import {Component, inject, OnInit} from '@angular/core';
import {Todo} from "../models/todo.model";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import {filtrosValidos} from "../../filtro/filtro.actions";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = []
  store = inject(Store<AppState>)
  filtroActual: filtrosValidos = filtrosValidos.todos


  ngOnInit(): void {
    this.store.subscribe(({todos, filtro}) => {
      this.todos = todos
      this.filtroActual = filtro
    })
  }
}
