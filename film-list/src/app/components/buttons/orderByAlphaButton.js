import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

export default function OrderByAlphaButton() {
    return (
        <button type="button" className={`btn btn-primary ${styles.orderBtn}`}>Alfabetisk ordning</button>
    );
}