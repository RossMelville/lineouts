import styles from "../page.module.css";

export function eighteenspread() {
  return (
    <div className={styles.components}>
        <hr className={styles.line}></hr>
        <p></p>
        <h3 className={styles.components}>18 Spread</h3>
        <video width="320" height="240" controls preload="none">
          <source src="./videos/eighteenSpread.mp4" type="video/mp4" playsInline />
          Your browser does not support the video tag.
        </video>
        <h4 className={styles.components}>Setup</h4>
        <p>Jumper - Player 2</p>
        <p>Front Lifter - Player 1</p>
        <p>Back Lifter - Player 3</p>
        <img width="320" src="./spreadSetUp.jpg"></img>
        <h4 className={styles.phase}>Phase 1</h4>
        <img width="320" src="./twelveSpreadPhaseOne.jpg"></img>
        <p> Players 1 and 3 move to Player 2.</p>
        <p>Player 3 touches Player 2 on the hip to indicate they are there.</p>
        <h4 className={styles.phase}>Phase 2</h4>
        <img width="320" src="./eighteenSpreadPhaseTwo.jpg"></img>
        <p> Players 1, 2, and 3 move to Player 1s Original position (5m line).</p>
        <p>Players 1 and 3 lift Player 2</p>
      </div>
  )
}

export default eighteenspread;