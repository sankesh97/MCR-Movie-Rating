import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { MoviesContext } from '../Context/MoviesContext';

const Header = () => {
  const { searchMovie } = useContext(MoviesContext);
  const ActiveChecker = ({ isActive }) =>
    isActive
      ? 'nav-link active text-decoration-none'
      : 'nav-link text-decoration-none';
  return (
    <nav
      className='navbar bg-dark border-bottom border-body'
      data-bs-theme='dark'
    >
      <div className='container d-flex justify-content-between'>
        <span className='navbar-brand mb-0 h1'>IMDB</span>
        <input
          type='text'
          placeholder='Search movies by title, cast and director...'
          style={{ minWidth: '400px' }}
          onChange={(event) => {
            searchMovie(event.target.value);
          }}
        ></input>
        <div>
          <ul className='nav nav-pills'>
            <li className='nav-item'>
              <NavLink to='/' className={ActiveChecker}>
                Movies
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/watchlist' className={ActiveChecker}>
                Watch List
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to='/starred' className={ActiveChecker}>
                Starred Movies
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
