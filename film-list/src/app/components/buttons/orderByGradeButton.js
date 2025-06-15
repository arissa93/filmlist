import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

export default function OrderByGradeButton({ orderRating, movies, setMovies }) {
    const sortByGrade = () => {
        movies.sort((a,b) => orderRating(a.rating, b.rating));
        setMovies([...movies]);
    }
    
    return (
        <button type="button" className={`btn btn-primary ${styles.orderBtn}`} onClick={sortByGrade}>Betygsordning</button>
    );
}