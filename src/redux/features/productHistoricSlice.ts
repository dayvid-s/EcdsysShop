import { createSlice } from '@reduxjs/toolkit'
import { IProduct } from './cartSlice';

 export interface IProductHistoric{
    userProductHistoric:Array<IProduct>
 }

const initialState={
  userProductHistoric:[]
}

const  historicSlice = createSlice({
  name: 'historic',
  initialState,
  reducers:{
    addToHistoric(state, action ){
      state.userProductHistoric.push(action.payload)
    },
    clearHistoric(state){
      state.userProductHistoric= []
    },
  }
})

export const {addToHistoric,clearHistoric} = historicSlice.actions

export default historicSlice.reducer