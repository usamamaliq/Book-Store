const BookInput = () => (
  <form className="BookInputContainer">
    <input className="BookInput" type="text" name="title" placeholder="Enter Book Title.." />
    <input className="BookInput" type="text" name="author" placeholder="Enter Author Name.." />
    <button className="BookInputButton" type="submit">submit</button>
  </form>
);
export default BookInput;
