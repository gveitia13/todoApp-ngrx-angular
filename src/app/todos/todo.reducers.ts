import {Todo} from "./models/todo.model";
import {Action, createReducer, on} from "@ngrx/store";
import {crear} from "./todo.actions";

export const estadoInicial: Todo[] = [
  new Todo('Ir al trabajo temprano'),
  new Todo('Vencer a Thanos')
]

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)])
)

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action)
}
