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
    }
})

export const {addToHistoric} = historicSlice.actions

export default historicSlice.reducer;