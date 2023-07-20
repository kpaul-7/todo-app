import { configureStore } from "@reduxjs/toolkit";
import todosSlice from './slices/todos'
import pageSlice from './slices/currentpage'
import themeSlice from './slices/theme'
const store = configureStore({
    reducer:{
        todos: todosSlice,
        page: pageSlice,
        theme: themeSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export default store