'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import AddMovieForm from './components/form';
import Movies from './components/movies';
import OrderByAlphaButton from './components/buttons/orderByAlphaButton';
import OrderByGradeButton from './components/buttons/orderByGradeButton';

export default function Home() {
  return (
    <div className="container">

        <h1>Min filmlista</h1>
        <AddMovieForm/>

        <hr></hr>

        <h2>Inlagda filmer</h2>

        <Movies/>
        <OrderByAlphaButton/>
        <OrderByGradeButton/>
    </div>
  );
}
