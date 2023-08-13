import { useContext } from 'react';
import { MoviesContext } from '../Context/MoviesContext';
import ListingComponent from '../Components/ListingComponent';

const WatchListMovies = () => {
  const { watchList } = useContext(MoviesContext);
  return (
    <>
      <h2>Watch List</h2>
      <div className='row g-5 m-3'>
        <ListingComponent theList={watchList} />
      </div>
    </>
  );
};
export default WatchListMovies;
