import styles from "../page.module.css";

export function twelvespread() {
  return (
    <div className={styles.components}>
        <hr className={styles.line}></hr>
        <p></p>
        <h3 className={styles.components}>12 Spread</h3>
        <video width="320" height="240" controls preload="none">
          <source src="./videos/twelveSpread.mp4" type="video/mp4" playsInline />
          Your browser does not support the video tag.
        </video>
        <h4 className={styles.components}>Setup</h4>
        <p>Jumper - Player 2</p>
        <p>Front Lifter - Player 1</p>
        <p>Back Lifter - Player 3</p>
        <img width="320" src="./spreadSetUp.jpg"></img>
        <h4 className={styles.phase}>Phase 1</h4>
        <img width="320" src="./twelveSpreadPhaseOne.jpg"></img>
        <p>Players 1 and 3 move to Player 2 and lift Player 2.</p>
      </div>
  )
}

export default twelvespread;