import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adverts: [
    {
        id: 1,
        title: "Товар 1",
        desc: "Описание товара 1",
        price: 25.99,
        lat: 50.4501, // Харьков
        lng: 30.5234,
      },
      {
        id: 2,
        title: "Товар 2",
        desc: "Описание товара 2",
        price: 19.99,
        lat: 48.8566, // Киев
        lng: 2.3522,
      },
      {
        id: 3,
        title: "Товар 3",
        desc: "Описание товара 3",
        price: 15.49,
        lat: 49.8397, // Львов
        lng: 24.0297,
      },
      {
        id: 4,
        title: "Товар 4",
        desc: "Описание товара 4",
        price: 30.99,
        lat: 46.4825, // Одесса
        lng: 30.7233,
      },
      {
        id: 5,
        title: "Товар 5",
        desc: "Описание товара 5",
        price: 12.99,
        lat: 48.9226, // Днепр
        lng: 35.0656,
      },
      {
        id: 6,
        title: "Товар 6",
        desc: "Описание товара 6",
        price: 22.49,
        lat: 49.5535, // Запорожье
        lng: 25.5948,
      },
      {
        id: 7,
        title: "Товар 7",
        desc: "Описание товара 7",
        price: 18.99,
        lat: 47.8388, // Хмельницкий
        lng: 32.6349,
      },
      {
        id: 8,
        title: "Товар 8",
        desc: "Описание товара 8",
        price: 24.99,
        lat: 48.5044, // Чернигов
        lng: 32.2656,
      },
      {
        id: 9,
        title: "Товар 9",
        desc: "Описание товара 9",
        price: 28.99,
        lat: 49.5937, // Житомир
        lng: 28.7407,
      },
      {
        id: 10,
        title: "Товар 10",
        desc: "Описание товара 10",
        price: 16.99,
        lat: 50.7472, // Луцк
        lng: 25.3253,
      },
      {
        id: 11,
        title: "Товар 11",
        desc: "Описание товара 11",
        price: 23.99,
        lat: 49.9808, // Черкассы
        lng: 31.8166,
      },
      {
        id: 12,
        title: "Товар 12",
        desc: "Описание товара 12",
        price: 20.49,
        lat: 48.4422, // Черновцы
        lng: 25.7326,
      },
      {
        id: 13,
        title: "Товар 13",
        desc: "Описание товара 13",
        price: 14.99,
        lat: 50.6198, // Ивано-Франковск
        lng: 26.2516,
      },
      {
        id: 14,
        title: "Товар 14",
        desc: "Описание товара 14",
        price: 27.49,
        lat: 48.6208, // Каменец-Подольский
        lng: 26.1856,
      },
      {
        id: 15,
        title: "Товар 15",
        desc: "Описание товара 15",
        price: 17.99,
        lat: 49.5537, // Тернополь
        lng: 25.5949,
      },
      {
        id: 16,
        title: "Товар 16",
        desc: "Описание товара 16",
        price: 21.99,
        lat: 50.6161, // Ужгород
        lng: 22.3158,
      },
      {
        id: 17,
        title: "Товар 17",
        desc: "Описание товара 17",
        price: 19.49,
        lat: 48.4539, // Винница
        lng: 27.2434,
      },
      {
        id: 18,
        title: "Товар 18",
        desc: "Описание товара 18",
        price: 26.99,
        lat: 50.7479, // Ровно
        lng: 25.3259,
      },
      {
        id: 19,
        title: "Товар 19",
        desc: "Описание товара 19",
        price: 15.99,
        lat: 49.5744, // Херсон
        lng: 34.5810,
      },
      {
        id: 20,
        title: "Товар 20",
        desc: "Описание товара 20",
        price: 23.49,
        lat: 48.9077, // Сумы
        lng: 34.7981,
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
