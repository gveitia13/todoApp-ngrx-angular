import {Todo} from "./todos/models/todo.model";
import {ActionReducerMap} from "@ngrx/store";
import {todoReducer} from "./todos/todo.reducers";
import {filtrosValidos} from "./filtro/filtro.actions";
import {filtroReducer} from "./filtro/filtro.reducers";

export interface AppState {
  todos: Todo[],
  filtro: any
}

export const appReducers: ActionReducerMap<AppState> = {
  todos: todoReducer,
  filtro: filtroReducer
}
