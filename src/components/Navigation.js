import { Outlet, Link } from 'react-router-dom';

const Navigation = () => (
  <div className="mainContainer">
    <h1 className="mainTile">Bookstore CMS</h1>
    <div className="Navigation">
      <ul className="menu">
        <li className="menuItem">
          <Link to="/">Books</Link>
        </li>
        <li className="menuItem">
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  </div>
);

export default Navigation;
