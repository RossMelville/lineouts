import styles from "../page.module.css";

export function twentysixspread() {
  return (
    <div className={styles.components}>
        <hr className={styles.line}></hr>
        <p></p>
        <h3 className={styles.components}>26 Spread</h3>
        <video width="320" height="240" controls preload="none">
          <source src="./videos/twentysixSpread.mp4" type="video/mp4" playsInline />
          Your browser does not support the video tag.
        </video>
        <h4 className={styles.components}>Setup</h4>
        <p>Jumper - Player 3</p>
        <p>Front Lifter - Player 1</p>
        <p>Back Lifter - Player 4</p>
        <img width="320" src="./spreadSetUp.jpg"></img>
        <h4 className={styles.phase}>Phase 1</h4>
        <img width="320" src="./twentysixSpreadPhaseOne.jpg"></img>
        <p> Player 1 moves to Player 2.</p>
        <p>Players 2, 3, and 4 move to player 1</p>
        <h4 className={styles.phase}>Phase 2</h4>
        <img width="320" src="./twentysixSpreadPhaseTwo.jpg"></img>
        <p> Player 2 runs out the line.</p>
        <h4 className={styles.phase}>Phase 3</h4>
        <img width="320" src="./twentysixSpreadPhaseThree.jpg"></img>
        <p> Player 2 moves into the front of the lineout.</p>
        <p>Player 3 moves to the original position of Player 2.</p>
        <p>Players 1 and 4 move to player 3 and lift Player 3</p>
      </div>
  )
}

export default twentysixspread;