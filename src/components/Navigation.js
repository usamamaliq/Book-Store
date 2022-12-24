import { Outlet, Link } from 'react-router-dom';
import human from '../Images/human.png';

const Navigation = () => (
  <div className="mainContainer">
    <h1 className="mainTitle">Bookstore CMS</h1>
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
    <img src={human} className="human" alt="human" />
  </div>
);

export default Navigation;
