import styles from './styles.module.css';

export default function Movie({ movie, deleteMovie }) {
    return (
        <li className={styles.movieLi}>
            {movie.title}
            <img src="/delete.png" alt="Kryss" className={styles.deleteIcon} onClick={() => { deleteMovie(movie.title) }} />
            {Array.from({length: movie.rating}, (_, index) => (
                <img key={index} src="star.png" alt="Stjärna" />
            ))}
        </li>
    );
}