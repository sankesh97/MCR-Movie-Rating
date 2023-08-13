import { useContext, useState } from 'react';
import { MoviesContext } from '../Context/MoviesContext';

const AddMovies = () => {
  const { AddMovie } = useContext(MoviesContext);
  const [formValues, setFormValues] = useState({
    title: '',
    summary: '',
    year: '',
    cast: '',
    genre: '',
    rating: '',
    director: '',
    writer: '',
    imageURL: '',
  });

  const formOnChangeHandler = (event) => {
    setFormValues((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  };

  return (
    <div className='card'>
      <div className='card-header'>Add Movie</div>
      <div className='card-body'>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            AddMovie(formValues);
          }}
        >
          <div className='mb-3'>
            <label htmlFor='title' className='form-label'>
              Title
            </label>
            <input
              type='text'
              className='form-control'
              id='title'
              onChange={formOnChangeHandler}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='summary' className='form-label'>
              Summary
            </label>
            <textarea
              className='form-control'
              id='summary'
              rows='3'
              onChange={formOnChangeHandler}
            ></textarea>
          </div>
          <div className='mb-3'>
            <label htmlFor='year' className='form-label'>
              Year
            </label>
            <input
              type='number'
              className='form-control'
              id='year'
              onChange={formOnChangeHandler}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='cast' className='form-label'>
              Cast
            </label>
            <input
              type='text'
              className='form-control'
              id='cast'
              aria-describedby='castText'
              onChange={formOnChangeHandler}
            />
            <div id='castText' className='form-text'>
              Please add the cast names comma seperated.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='genre' className='form-label'>
              Genre
            </label>
            <input
              type='text'
              className='form-control'
              id='genre'
              aria-describedby='genreText'
              onChange={formOnChangeHandler}
            />
            <div id='genreText' className='form-text'>
              Please add the genre names comma seperated.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='writer' className='form-label'>
              Writer
            </label>
            <input
              type='text'
              className='form-control'
              id='writer'
              aria-describedby='writerText'
              onChange={formOnChangeHandler}
            />
            <div id='writerText' className='form-text'>
              Please add the writer names comma seperated.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='rating' className='form-label'>
              Rating
            </label>
            <input
              type='number'
              className='form-control'
              id='rating'
              onChange={formOnChangeHandler}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='director' className='form-label'>
              Director
            </label>
            <input
              type='text'
              className='form-control'
              id='director'
              onChange={formOnChangeHandler}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='imageURL' className='form-label'>
              Image URL
            </label>
            <input
              type='text'
              className='form-control'
              id='imageURL'
              onChange={formOnChangeHandler}
            />
          </div>
          <button type='submit' className='btn btn-dark'>
            Add Movie
          </button>
        </form>
      </div>
    </div>
  );
};
export default AddMovies;
