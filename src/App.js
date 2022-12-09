import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Books from './components/Books';
import Categories from './components/Categories';

function App() {
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
