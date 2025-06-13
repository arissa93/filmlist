import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles.module.css";

export default function OrderByGradeButton() {
    return (
        <button type="button" className={`btn btn-primary ${styles.orderBtn}`}>Betygsordning</button>
    );
}