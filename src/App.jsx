import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const handleFilter = ({ title, rating }) => {
    const filtered = movies.filter(movie => 
      (title ? movie.title.toLowerCase().includes(title.toLowerCase()) : true) &&
      (rating ? movie.rating >= rating : true)
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      <button onClick={() => addMovie({
        title: 'New Movie',
        description: 'Description of the new movie',
        posterURL: 'https://example.com/poster.jpg',
        rating: 5
      })}>
        Add Movie
      </button>
    </div>
  );
};

export default App;
