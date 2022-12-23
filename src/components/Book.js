import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = (props) => {
  const dispatch = useDispatch();
  const { title, author, id } = props;
  return (
    <>
      <div className="BookContainer">
        <h2 className="bookTitle">{title}</h2>
        <p className="authorName">{author}</p>
        <button
          id={id}
          onClick={(e) => {
            e.preventDefault();
            dispatch(removeBook(id));
          }}
          className="removeBookButton"
          type="button"
        >
          Remove Book
        </button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Book;
