import {createSlice,PayloadAction} from '@reduxjs/toolkit'

const initialState:{
    page: string
} = {
    page: 'all'
}

const currentpageSlice = createSlice({
    name:'currentpage',
    initialState,
    reducers:{
        changePage(state,action:PayloadAction<string>){
            state.page = action.payload
        }
    }

})

export default currentpageSlice.reducer
export const {changePage} = currentpageSlice.actions