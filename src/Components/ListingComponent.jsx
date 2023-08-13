import MovieCard from './MovieCard';

const ListingComponent = ({ theList }) => {
  return (
    <>
      {theList &&
        theList.map((movie) => (
          <div key={movie.id} className='col-3'>
            <MovieCard movie={movie}></MovieCard>
          </div>
        ))}
    </>
  );
};
export default ListingComponent;
