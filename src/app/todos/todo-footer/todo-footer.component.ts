import {Component, inject, OnInit} from '@angular/core';
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as actions from "../../filtro/filtro.actions";
import {Todo} from "../models/todo.model";
import {limpiarTodos} from "../todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {
  private store = inject(Store<AppState>)

  filtroActual: actions.filtrosValidos = actions.filtrosValidos.todos

  filtros: actions.filtrosValidos[] = [
    actions.filtrosValidos.todos,
    actions.filtrosValidos.completados,
    actions.filtrosValidos.pendientes,
  ]
  pendientes = 0

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filtroActual = state.filtro
      this.pendientes = state.todos.filter((todo: Todo) => !todo.completado).length
    })
  }

  cambiarFiltro(filtro: actions.filtrosValidos) {
    this.store.dispatch(actions.setFiltro({filtro}))
  }

  limpiarCompletados() {
    this.store.dispatch(limpiarTodos())
  }
}
