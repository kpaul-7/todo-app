import {createSlice,CaseReducer,PayloadAction} from '@reduxjs/toolkit'
import { todo } from '../../types/types'
import { stat } from 'fs'

type typeTodos = {
    todos: todo[]
}
const initialState: typeTodos  = {
    todos: []
}



const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers:{
        saveTodos(state,action: PayloadAction<todo>){
            state.todos = [
                ...state.todos,
                action.payload
            ]
        },
        changeActiveStatus(state,action: PayloadAction<string>){
            state.todos = state.todos.map(todo=>{
                if(todo.id === action.payload){
                    todo.isCompleted = !todo.isCompleted
                }
                return todo
            })
        },
        clearComplete(state){
            state.todos = state.todos.filter(todo=>!todo.isCompleted)
        },
        deleteTodo(state,action:PayloadAction<string>){
            state.todos = state.todos.filter(todo => todo.id !== action.payload )
        }

    }
})


export default todosSlice.reducer

export const {saveTodos,changeActiveStatus,clearComplete,deleteTodo} = todosSlice.actions