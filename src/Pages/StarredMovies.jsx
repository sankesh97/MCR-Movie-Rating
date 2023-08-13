import { useContext } from 'react';
import { MoviesContext } from '../Context/MoviesContext';
import ListingComponent from '../Components/ListingComponent';

const StarredMovies = () => {
  const { starredList } = useContext(MoviesContext);
  return (
    <>
      <h2>Starred List</h2>
      <div className='row g-5 m-3'>
        <ListingComponent theList={starredList} />
      </div>
    </>
  );
};
export default StarredMovies;
