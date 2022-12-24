import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD = 'books/books/ADD';
const REMOVE = 'books/books/REMOVE';
const GET_BOOKS = 'books/books/GET_BOOKS';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Kfh3ucGJ4fU4lhzKnoIQ/books';

const dataRefactor = (data) => {
  const newObject = Object.entries(data).map(
    ([key, value]) => Object.assign(value[0], { item_id: key }),
  );
  return newObject;
};
export const createBook = createAsyncThunk(ADD,
  async (payload) => {
    await axios.post(BASE_URL, payload);
    return payload;
  });

export const removeBook = createAsyncThunk(REMOVE,

  async (itemId) => {
    await axios.delete(`${BASE_URL}/${itemId}`);
    return itemId;
  });

export const getBooks = createAsyncThunk(GET_BOOKS,
  async () => {
    const response = await axios.get(BASE_URL);
    const payload = dataRefactor(response.data);
    return payload;
  });

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case `${GET_BOOKS}/fulfilled`:
      if (action.payload === '') {
        return [];
      }
      return [
        ...action.payload,
      ];
    case `${ADD}/fulfilled`:
      return [
        ...state,
        action.payload,
      ];
    case `${REMOVE}/fulfilled`:
      return [
        ...state.filter((item) => item.item_id !== action.payload),
      ];
    default:
      return state;
  }
}
