import { useContext, useEffect, useState } from 'react';
import { MoviesContext } from '../Context/MoviesContext';
import { useParams } from 'react-router-dom';

const MoviePage = () => {
  const { movieId } = useParams();
  const { MoviesList } = useContext(MoviesContext);
  const [currentMovie, setCurrentMovie] = useState();
  const { addToWishlist, addToStarred, watchList, starredList } =
    useContext(MoviesContext);

  useEffect(() => {
    setCurrentMovie(
      MoviesList.find((movie) => movie.id.toString() === movieId)
    );
  }, []);
  return (
    <div className='card'>
      <div className='card-body'>
        {currentMovie ? (
          <div className='row'>
            <div className='col-4'>
              <img
                src={currentMovie.imageURL}
                alt={currentMovie.title}
                style={{ maxWidth: '100%' }}
              />
            </div>
            <div className='col-8'>
              <h2>{currentMovie.title}</h2>
              <p>{currentMovie.summary}</p>
              <p>Year: {currentMovie.year}</p>
              <p>Genre: {currentMovie.genre.toString()}</p>
              <p>Rating: {currentMovie.rating}</p>
              <p>Director: {currentMovie.director}</p>
              <p>Writer: {currentMovie.writer.toString()}</p>
              <p>Cast: {currentMovie.cast.toString()}</p>
              <div className='d-flex justify-content-between'>
                <button
                  type='button'
                  onClick={() => addToStarred(currentMovie)}
                  disabled={starredList.find(
                    (starredmovie) =>
                      starredmovie.id.toString() === currentMovie.id.toString()
                  )}
                  className='btn btn-dark'
                >
                  {starredList.find(
                    (starredmovie) =>
                      starredmovie.id.toString() === currentMovie.id.toString()
                  )
                    ? 'Starred'
                    : 'Star'}
                </button>
                <button
                  type='button'
                  disabled={watchList.find(
                    (watchListmovie) =>
                      watchListmovie.id.toString() ===
                      currentMovie.id.toString()
                  )}
                  onClick={() => addToWishlist(currentMovie)}
                  className='btn btn-dark'
                >
                  {watchList.find(
                    (watchListmovie) =>
                      watchListmovie.id.toString() ===
                      currentMovie.id.toString()
                  )
                    ? 'Added to Wishlist'
                    : 'Add to Wishlist'}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <p>There is some error. Please contact Site Owner</p>
        )}
      </div>
    </div>
  );
};
export default MoviePage;
