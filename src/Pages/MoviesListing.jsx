import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MoviesContext } from '../Context/MoviesContext';
import MovieCard from '../Components/MovieCard';

const MoviesListing = () => {
  const { GenreList, MoviesList, searchText } = useContext(MoviesContext);
  const [ManageFilter, setManageFilter] = useState({
    genre: 'All Genre',
    year: 'Release Year',
    rating: 'Rating',
  });

  useEffect(() => {}, []);
  const ReleaseYearList = [
    1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
    2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013,
    2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ];
  const RatingList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const filterHandler = (event) => {
    setManageFilter((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <>
      <div className='d-flex justify-content-between'>
        <h2>Movies</h2>
        <select
          onChange={filterHandler}
          id='genre'
          value={ManageFilter.genre}
          className='form-select'
          style={{ width: 'auto' }}
        >
          <option>All Genre</option>
          {GenreList &&
            GenreList.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
        </select>
        <select
          onChange={filterHandler}
          id='year'
          value={ManageFilter.year}
          className='form-select'
          style={{ width: 'auto' }}
        >
          <option>Release Year</option>
          {ReleaseYearList &&
            ReleaseYearList.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
        <select
          onChange={filterHandler}
          id='rating'
          value={ManageFilter.rating}
          className='form-select'
          style={{ width: 'auto' }}
        >
          <option>Rating</option>
          {RatingList &&
            RatingList.map((rating) => (
              <option key={rating} value={rating}>
                {rating}
              </option>
            ))}
        </select>
        <Link className='btn btn-dark'>Add a Movie</Link>
      </div>
      <div className='row g-5 m-3'>
        {MoviesList &&
          MoviesList.filter((movie) =>
            ManageFilter.genre !== 'All Genre'
              ? movie.genre.includes(ManageFilter.genre)
              : true
          )
            .filter((movie) =>
              ManageFilter.year !== 'Release Year'
                ? movie.year.toString() === ManageFilter.year.toString()
                : true
            )
            .filter((movie) =>
              ManageFilter.rating !== 'Rating'
                ? movie.rating.toString() >= ManageFilter.rating.toString()
                : true
            )
            .filter((movie) =>
              searchText === ''
                ? true
                : movie.title
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  movie.cast
                    .toString()
                    .toLowerCase()
                    .includes(searchText.toLowerCase()) ||
                  movie.director
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
            )
            .map((movie) => (
              <div key={movie.id} className='col-3'>
                <MovieCard movie={movie}></MovieCard>
              </div>
            ))}
      </div>
    </>
  );
};
export default MoviesListing;
