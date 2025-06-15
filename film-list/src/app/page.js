'use client'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import AddMovieForm from './components/form';
import Movies from './components/movies';
import OrderByAlphaButton from './components/buttons/orderByAlphaButton';
import OrderByGradeButton from './components/buttons/orderByGradeButton';

export default function Home() {
  const [movies, setMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies((prevMovies) => [...prevMovies, movie]);
  };

  console.log(movies)

  return (
    <div className="container">

      <h1>Min filmlista</h1>
      <AddMovieForm addMovie={addMovie}/>

      <hr></hr>

      <h2>Inlagda filmer</h2>

      <Movies movies={movies} />
      <OrderByAlphaButton />
      <OrderByGradeButton />
    </div>
  );
}
