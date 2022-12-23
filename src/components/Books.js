import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import BookInput from './BookInput';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <>
      <div className="BooksContainer">
        {books.map((book) => (
          <Book
            key={book.id}
            title={book.title}
            author={book.author}
            id={book.id}
          />
        ))}
        <BookInput />
      </div>
    </>
  );
};
export default Books;
