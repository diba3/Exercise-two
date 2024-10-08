

import data from "./data.json";
import ArticleCard from "./components/articleCard";
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.body}>
      <h1>Articles</h1>
      {data.map((article, i) => (
        <ArticleCard 
        key={i}
        blurb={article.blurb}
        image={article.image}
        publishedDate={article.publishedDate}
         title={article.title}
         id={article.id}
         />
      ))}
    </main>

  );
}
