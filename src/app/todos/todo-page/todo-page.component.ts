import {Component, inject} from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../app.reducer";
import {toggleAll} from "../todo.actions";

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {
  completado = false
  private store = inject(Store<AppState>)


  toggleAll() {
    this.completado = !this.completado
    this.store.dispatch(toggleAll({completado: this.completado}))
  }
}
