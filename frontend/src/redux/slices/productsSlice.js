import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datas: [],
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

    AddDatas: (state, action) => {
      state.datas = action.payload
    },
  },
})


export const {AddDatas } = productsSlice.actions

export default productsSlice.reducer