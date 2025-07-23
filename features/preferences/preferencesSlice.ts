import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { categories } from '@/constants/categories'
type PreferencesState = {
  darkMode: boolean
  categories: string[]
  favorites: any[]
}

const initialState: PreferencesState = {
  darkMode: false,
  categories: [],
  favorites: []
}

const preferencesSlice = createSlice({
  name: 'preferences',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode
    },
    toggleCategories: (state, action: PayloadAction<string>) => {
      const category = action.payload
      if (state.categories.includes(category)){
        state.categories=state.categories.filter(c=>c!=category)
      }else{
        state.categories.push(category)
      }
    },
    addToFavorites: (state, action: PayloadAction<any>) => {
      const item = action.payload
      if (!state.favorites.find(fav => fav.id === item.id)) {
        state.favorites.push(item)
      }
    },
    removeFromFavorites: (state, action: PayloadAction<string>) => {
      const id = action.payload
      state.favorites = state.favorites.filter(item => item.id !== id)
    }
  }
})

export const {
  toggleDarkMode,
  toggleCategories,
  addToFavorites,
  removeFromFavorites
} = preferencesSlice.actions

export default preferencesSlice.reducer
