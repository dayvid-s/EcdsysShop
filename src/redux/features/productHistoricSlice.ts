import { createSlice } from "@reduxjs/toolkit";

const initialState={
    userProductHistoric:[]
}

const  historicSlice = createSlice({
    name: 'historic',
    initialState,
    reducers:{
        addToHistoric(state, action){
            state.userProductHistoric.push(action.payload);
        },
        clearHistoric(state,action){
            state.userProductHistoric= []
        },
    }
})

export const {addToHistoric,clearHistoric} = historicSlice.actions

export default historicSlice.reducer;