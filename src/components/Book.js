import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, id } = props;
  return (
    <>
      <div className="BookContainer">
        <h2 className="bookTitle">{title}</h2>
        <p className="authorName">{author}</p>
        <button id={id} className="removeBookButton" type="button">Remove Book</button>
      </div>
    </>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
