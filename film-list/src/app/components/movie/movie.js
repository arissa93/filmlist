import styles from './styles.module.css';

export default function Movie({ movie, deleteMovie }) {
    return (
        <li className={styles.movieLi} data-grade={movie.rating} data-title={movie.title}>
            {movie.title}
            <img src="/delete.png" alt="Kryss" className={styles.deleteIcon} onClick={() => { deleteMovie(movie.title) }} />
        </li>
    );
}