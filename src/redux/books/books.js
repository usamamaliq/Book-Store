const ADD = 'books/books/ADD';
const REMOVE = 'books/books/REMOVE';

const initialState = [
  {
    title: 'Awaken the Giant Within',
    author: 'Anthony Robins',
    id: 1,
  },
  {
    title: 'Harry Potter',
    author: 'J.K Rowlings',
    id: 2,
  },
];

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD:
      return state;
    case REMOVE:
      return state;
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
