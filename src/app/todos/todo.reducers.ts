import {Todo} from "./models/todo.model";
import {Action, createReducer, on} from "@ngrx/store";
import {borrar, crear, editar, limpiarTodos, toggle, toggleAll} from "./todo.actions";

export const estadoInicial: Todo[] = [
  new Todo('Ir al trabajo temprano'),
  new Todo('Vencer a Thanos')
]

const _todoReducer = createReducer(estadoInicial,
  on(crear, (state, {texto}) => [...state, new Todo(texto)]),

  on(limpiarTodos, state => state.filter(todo => !todo.completado)),

  on(toggle, (state, {id}) =>
    state.map(todo => todo.id === id ? {...todo, completado: !todo.completado} : todo)),

  on(editar, (state, {id, texto}) =>
    state.map(todo => todo.id === id ? {...todo, texto: texto} : todo)),

  on(borrar, (state, {id}) => state.filter(todo => todo.id !== id)),

  on(toggleAll, (state, {completado}) =>
    state.map(todo => ({...todo, completado: completado})))
)

export function todoReducer(state: Todo[] | undefined, action: Action) {
  return _todoReducer(state, action)
}
