'use client'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import AddMovieForm from './components/form';
import Movie from './components/movie/movie';
import OrderByAlphaButton from './components/buttons/orderByAlphaButton';
import OrderByGradeButton from './components/buttons/orderByGradeButton';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  console.log(movies);

  function deleteMovie(title) {
    setMovies(movies.filter((movie) => movie.title !== title));
  }

  function orderRating(a, b) {
    return a > b ? -1 : 0;
  }

  return (
    <div className="container">
      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie}/>

      <hr></hr>

      <h2>Inlagda filmer</h2>

      <ul id={styles.movies}>
        {movies.map((movie) => (
          <Movie key={movie.title} movie={movie} deleteMovie={deleteMovie}/>
        ))}
      </ul>
      <OrderByAlphaButton movies={movies} setMovies={setMovies}/>
      <OrderByGradeButton orderRating={orderRating} movies={movies} setMovies={setMovies}/>
    </div>
  );
}
