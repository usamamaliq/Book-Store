import React from 'react';

import Book from './Book';
import BookInput from './BookInput';

const Books = () => (
  <div className="BooksContainer">
    <Book title="Awaken the Giant Within" author="Anthony Robins" />
    <BookInput />
  </div>
);
export default Books;
