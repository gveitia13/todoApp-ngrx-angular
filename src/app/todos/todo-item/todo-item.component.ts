import {Component, ElementRef, Input, OnInit, ViewChild, inject} from '@angular/core';
import {Todo} from "../models/todo.model";
import {FormControl, Validators} from "@angular/forms";
import {AppState} from "../../app.reducer";
import {Store} from "@ngrx/store";
import * as actions from "../todo.actions";
import {borrar} from "../todo.actions";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {
  private store = inject(Store<AppState>)

  @Input() todo!: Todo
  @ViewChild('inputFisico') txtInputFisico: ElementRef | undefined

  chkCompletado: FormControl = new FormControl<boolean>(false)
  txtInput: FormControl = new FormControl<string>('')
  editando: boolean = false

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completado)
    this.txtInput = new FormControl(this.todo.texto, Validators.required)

    this.chkCompletado.valueChanges.subscribe((valor => {
      this.store.dispatch(actions.toggle({id: this.todo.id}))
    }))
  }

  editar() {
    this.editando = true
    this.txtInput.setValue(this.todo.texto)
    setTimeout(() => this.txtInputFisico?.nativeElement.select(), 1)

  }

  terminarEdicion() {
    this.editando = false
    if (this.txtInput.invalid || this.txtInput.value === this.todo.texto)
      return
    this.store.dispatch(actions.editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }))
  }

  borrar() {
    this.store.dispatch(actions.borrar({id: this.todo.id}))
  }
}
