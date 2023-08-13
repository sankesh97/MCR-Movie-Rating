import { createContext, useState } from 'react';
import useLocalStorage from 'use-local-storage';
import { v4 as uuidv4 } from 'uuid';
import Movies from '../Data/Movies';
import { useNavigate } from 'react-router-dom';

const MoviesContext = createContext();

const MoviesProvider = ({ children }) => {
  const navigate = useNavigate();
  const [MoviesList, setMoviesList] = useLocalStorage('MoviesList', Movies);
  const [starredList, setStarredList] = useLocalStorage('starredList', []);
  const [watchList, setWatchList] = useLocalStorage('watchList', []);
  const [searchText, setSearchText] = useLocalStorage('searchText', '');

  const [GenreList, setGenreList] = useLocalStorage(
    'GenreList',
    Movies.reduce((totalGenres, currentMovie) => {
      let tempGenre = currentMovie.genre.filter(
        (genre) => !totalGenres.includes(genre)
      );
      return totalGenres.concat(...tempGenre);
    }, [])
  );

  const AddMovie = (inputMovie) => {
    setMoviesList((prevState) => [
      ...prevState,
      {
        ...inputMovie,
        id: uuidv4(),
        year: Number(inputMovie.year),
        rating: Number(inputMovie.rating),
        cast: inputMovie.cast.split(','),
        genre: inputMovie.genre.split(','),
        writer: inputMovie.writer.split(','),
      },
    ]);
  };

  //Search Functionality
  const searchMovie = (searchingText) => {
    navigate('/');
    setSearchText(searchingText);
  };

  // Wishlist Functionality
  const addToWishlist = (inputMovie) => {
    setWatchList((prevState) =>
      prevState.find(
        (movie) => movie.id.toString() === inputMovie.id.toString()
      )
        ? [...watchList]
        : [...watchList, inputMovie]
    );
  };

  const removeFromWishlist = (inputMovie) => {
    setWatchList((prevstate) =>
      prevstate.filter(
        (movie) => movie.id.toString() !== inputMovie.id.toString()
      )
    );
  };

  // Starred Functionality
  const addToStarred = (inputMovie) => {
    setStarredList((prevState) =>
      prevState.find(
        (movie) => movie.id.toString() === inputMovie.id.toString()
      )
        ? [...starredList]
        : [...starredList, inputMovie]
    );
  };

  const removeFromStarred = (inputMovie) => {
    setStarredList((prevstate) =>
      prevstate.filter(
        (movie) => movie.id.toString() !== inputMovie.id.toString()
      )
    );
  };

  return (
    <MoviesContext.Provider
      value={{
        MoviesList,
        GenreList,
        starredList,
        watchList,
        searchText,
        addToWishlist,
        removeFromWishlist,
        addToStarred,
        removeFromStarred,
        searchMovie,
        AddMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export { MoviesContext, MoviesProvider };
