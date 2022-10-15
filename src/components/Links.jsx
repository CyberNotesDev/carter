import { Link } from "react-router-dom";
import style from "./../css/links.module.css";

export default function Links() {
  return (
    <main className={style.main}>
        <section className={style.section}>
            <Link to="/carter/vote">Vote</Link>
            <Link to="/carter/philosophy">Philosophy</Link>
            <Link to="/carter/merch">Merch</Link>
            <Link to="/carter/contact">Contact</Link>
        </section>
    </main>
  );
}
