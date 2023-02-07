import { createSlice } from '@reduxjs/toolkit'
export interface IProduct {
  userProductHistoric:{

      productId: string
      category:string
      name:string
      price: number
      mainPhoto: string
      secondaryPhotos: string[]
      description: string
      specifications: string[]
      rating: number
      evaluationsTotal: number
      isDayOffer: boolean
      isRecommended: boolean
      knownBy: string     // knownBy: string 
  } |  object
} export interface IProductHistoric{
    userProductHistoric:IProduct
 }

const initialState :IProduct = {
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