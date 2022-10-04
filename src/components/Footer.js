import styles from "./../css/footer.module.css";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <p>&copy; Carter - {new Date().getFullYear()} </p>
        </footer>
    )
}