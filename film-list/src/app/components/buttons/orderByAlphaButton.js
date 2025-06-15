import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

export default function OrderByAlphaButton({ movies, setMovies }) {
    const sortByAlpha = () => {
        movies.sort((a, b) => a.title.localeCompare(b.title));
        setMovies([...movies]);
    }
    
    return (
        <button type="button" className={`btn btn-primary ${styles.orderBtn}`} onClick={sortByAlpha}>Alfabetisk ordning</button>
    );
}