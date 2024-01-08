import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adverts: [
    {
      id: 1,
      lat: 48.97716255094716,
      lng: 32.0181187942791,
      title: 'Bed',
      price: '3000',
      desc: 'White bed',
    },
    {
      id: 2,
      lat: 48.396942664091256,
      lng: 32.844290132837294,
      title: 'Table',
      price: '3500',
      desc: 'Red table',
    },
  ],
  filter: '',
};

const advertsSlice = createSlice({
  // Ім'я слайсу
  name: 'adverts',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  reducers: {
    addNewAdvert(state, action) {
      state.adverts.push(action.payload);
    },
    deleteAdvert(state, action) {
      const deleteAdvertIndex = state.adverts.findIndex(
        contact => contact.id === action.payload
      );
      state.adverts.splice(deleteAdvertIndex, 1);
    },
    findAdvert(state, action) {
      state.filter = action.payload;
    },
  },
});

// Генератори екшенів
export const { addNewAdvert, deleteAdvert, findAdvert } = advertsSlice.actions;
// Редюсер слайсу
export const advertsReducer = advertsSlice.reducer;
