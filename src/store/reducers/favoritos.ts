import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../services/api'

type FavoritosState = {
  favoritos: Produto[]
}

const initialState: FavoritosState = {
  favoritos: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    toggleFavorito: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const existe = state.favoritos.find((p) => p.id === produto.id)
      if (existe) {
        state.favoritos = state.favoritos.filter((p) => p.id !== produto.id)
      } else {
        state.favoritos.push(produto)
      }
    }
  }
})

export const { toggleFavorito } = favoritosSlice.actions
export default favoritosSlice.reducer
