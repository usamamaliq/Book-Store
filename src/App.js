import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Categories from './components/Categories';
import { getBooks } from './redux/books/books';

function App() {
  const dispatch = useDispatch();
  dispatch(getBooks()).unwrap();

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
