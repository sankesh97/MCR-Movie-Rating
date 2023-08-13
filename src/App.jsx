import { Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import MoviesListing from './Pages/MoviesListing';
import WatchListMovies from './Pages/WatchListMovies';
import StarredMovies from './Pages/StarredMovies';
import MoviePage from './Pages/MoviePage';

function App() {
  return (
    <div className='container-fluid p-0 bg-light'>
      <Header />
      <div className='m-3'>
        <Routes>
          <Route path='/' element={<MoviesListing />}></Route>
          <Route path='/watchlist' element={<WatchListMovies />}></Route>
          <Route path='/starred' element={<StarredMovies />}></Route>
          <Route path='/movies/:movieId' element={<MoviePage />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
