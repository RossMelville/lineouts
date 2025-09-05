import styles from "./page.module.css";
import twelvespread from "./components/12spread";
import eighteenspread from "./components/18spread";

const twelvespreads = twelvespread()
const eighteenspreads = eighteenspread()

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Lineout Calls</h2>
        {twelvespreads}
        {eighteenspreads}
      </main>
    </div>
  );
}
