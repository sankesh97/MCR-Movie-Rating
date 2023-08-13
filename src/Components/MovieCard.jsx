import { useContext } from 'react';
import { MoviesContext } from '../Context/MoviesContext';
import { Link, useLocation } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  const {
    addToWishlist,
    removeFromWishlist,
    addToStarred,
    removeFromStarred,
    watchList,
    starredList,
  } = useContext(MoviesContext);
  const location = useLocation();
  return (
    <div className='card' style={{ width: 'auto' }}>
      <Link to={`/movies/${movie.id}`}>
        <img
          src={movie.imageURL}
          className='card-img-top'
          style={{ height: '400px' }}
          alt={movie.title}
        />
      </Link>
      <div className='card-body text-center'>
        <h5 className='card-title'>
          <Link
            to={`/movies/${movie.id}`}
            className='text-decoration-none text-dark'
          >
            {movie.title}
          </Link>
        </h5>
        <p className='card-text'>
          <Link
            to={`/movies/${movie.id}`}
            className='text-decoration-none text-dark'
          >
            {movie.summary}
          </Link>
        </p>
        {location.pathname === '/' ? (
          <div className='d-flex justify-content-between'>
            <button
              type='button'
              onClick={() => addToStarred(movie)}
              disabled={starredList.find(
                (starredmovie) =>
                  starredmovie.id.toString() === movie.id.toString()
              )}
              className='btn btn-dark'
            >
              {starredList.find(
                (starredmovie) =>
                  starredmovie.id.toString() === movie.id.toString()
              )
                ? 'Starred'
                : 'Star'}
            </button>
            <button
              type='button'
              disabled={watchList.find(
                (watchListmovie) =>
                  watchListmovie.id.toString() === movie.id.toString()
              )}
              onClick={() => addToWishlist(movie)}
              className='btn btn-dark'
            >
              {watchList.find(
                (watchListmovie) =>
                  watchListmovie.id.toString() === movie.id.toString()
              )
                ? 'Added to WatchList'
                : 'Add to WatchList'}
            </button>
          </div>
        ) : null}
        {location.pathname === '/watchlist' && (
          <button
            type='button'
            onClick={() => removeFromWishlist(movie)}
            className='btn btn-dark'
          >
            Remove from Watchlist
          </button>
        )}
        {location.pathname === '/starred' && (
          <button
            type='button'
            onClick={() => removeFromStarred(movie)}
            className='btn btn-dark'
          >
            Unstar
          </button>
        )}
      </div>
    </div>
  );
};
export default MovieCard;
