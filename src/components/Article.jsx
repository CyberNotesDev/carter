import styles from "./../css/article.module.css";

export default function Article({image, title, description, by}) {
    return (
        <section className={styles.sectionContainer}>
            <article className={styles.articleContainer}>
                <img src={image} alt="Space" className={styles.articleImage}/>
                <div>
                    <h2>{title}</h2>
                    <br />
                    {description}
                    <div>
                        <br />
                        <p>By: {by}</p>
                    </div>
                </div>
            </article>
        </section>
    )
}