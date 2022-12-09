/* eslint-disable react/prop-types */
const Book = (props) => {
  const { title, author } = props;
  return (
    <div className="BookContainer">
      <h2 className="bookTitle">{title}</h2>
      <p className="authorName">{author}</p>
      <button className="removeBookButton" type="button">Remove Book</button>
    </div>
  );
};
export default Book;
