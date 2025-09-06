import styles from "./page.module.css";
import twelvespread from "./components/12spread";
import eighteenspread from "./components/18spread";
import twentyonespread from "./components/21spread";
import twentytwospread from "./components/22spread";
import twentyfourspread from "./components/24spread";
import twentyfivespread from "./components/25spread";
import twentysixspread from "./components/26spread";

const twelvespreads = twelvespread()
const eighteenspreads = eighteenspread()
const twentyonespreads = twentyonespread()
const twentytwospreads = twentytwospread()
const twentyfourspreads = twentyfourspread()
const twentyfivespreads = twentyfivespread()
const twentysixspreads = twentysixspread()

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h2>Lineout Calls</h2>
        {twelvespreads}
        {eighteenspreads}
        {twentyonespreads}
        {twentytwospreads}
        {twentyfourspreads}
        {twentyfivespreads}
        {twentysixspreads}
      </main>
    </div>
  );
}
