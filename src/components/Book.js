import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import circle from '../Images/circle.png';

const Book = (props) => {
  const dispatch = useDispatch();

  const { title, author, itemId } = props;

  const removeBookHandler = (e) => {
    e.preventDefault();
    dispatch(removeBook(itemId));
  };

  return (
    <>
      <div className="bookMainContainer">
        <div className="BookContainer">
          <h3 className="category">Story</h3>
          <h2 className="bookTitle">{title}</h2>
          <p className="authorName">{author}</p>
          <div className="ButtonCotainer">
            <button type="button">Comments</button>
            <div className="verticalLine" />
            <button
              id={itemId}
              onClick={removeBookHandler}
              className="removeBookButton"
              type="button"
            >
              Remove Book
            </button>
            <div className="verticalLine" />
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="percentContainer">
          <img src={circle} className="circleImage" alt="circle" />
          <div className="percentInnerContainer">
            <h2 className="percentTitle">0%</h2>
            <h2 className="complete">COMPLETED</h2>
          </div>
        </div>
        <div className="dividerLine" />
        <div className="progressContainer">
          <h3 className="chapterTitle">CURRENT CHAPTER</h3>
          <h3 className="Chapter">Introduction</h3>
          <button className="progressButton" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;
