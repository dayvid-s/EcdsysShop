import { createSlice } from '@reduxjs/toolkit'

type Product = {
  productId: string;
  category: string;
  name: string;
  price: number;
  mainPhoto: string;
  secondaryPhotos: string[];
  description: string;
  specifications: string[];
  rating: number;
  evaluationsTotal: number;
  isDayOffer: boolean;
  isRecommended: boolean;
  knownBy: string;
}


export interface IuserProductHistoric {
  userProductHistoric: Product[] | []
}
export interface IuserAction {
  state: Product
  action: Product
}

const initialState: IuserProductHistoric = {
  userProductHistoric: []
}

const historicSlice = createSlice({
  name: 'historic',
  initialState,
  reducers: {
    addToHistoric(state, action): IuserAction {

      state.userProductHistoric.push(action.payload)
    },
    clearHistoric(state) {
      state.userProductHistoric = []
    },
  }
})

export const { addToHistoric, clearHistoric } = historicSlice.actions

export default historicSlice.reducer