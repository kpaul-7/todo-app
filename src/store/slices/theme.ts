import {createSlice } from '@reduxjs/toolkit'
import { stat } from 'fs'
const initialState:{
    theme: string
} = {
    theme: 'light'
}
const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers:{
        changeTheme(state){
            if(state.theme === 'light'){
                state.theme = 'dark'
            }else{
                state.theme = 'light'
            }
        }
    }
})

export default themeSlice.reducer

export const {changeTheme} = themeSlice.actions