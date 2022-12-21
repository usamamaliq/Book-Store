
const ADD = 'books/books/ADD';
const REMOVE = 'books/books/REMOVE';


export default function reducer(state = [], action = {}) {
    switch (action.type) {
      case ADD:
        return state
      case REMOVE:
        return state
      default:
        return state;
    }
  }
export const createBook = (book) => ({
  type: ADD,
  text: book,
});

export const removeBook = (book) => ({
  type: REMOVE,
  text: book,
});
