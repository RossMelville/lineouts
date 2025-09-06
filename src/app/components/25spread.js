import styles from "../page.module.css";

export function twentyfivespread() {
  return (
    <div className={styles.components}>
        <hr className={styles.line}></hr>
        <p></p>
        <h3 className={styles.components}>25 Spread</h3>
        <video width="320" height="240" controls preload="none">
          <source src="./videos/twentyfiveSpread.mp4" type="video/mp4" playsInline />
          Your browser does not support the video tag.
        </video>
        <h4 className={styles.components}>Setup</h4>
        <p>Jumper - Player 3</p>
        <p>Front Lifter - Player 1</p>
        <p>Back Lifter - Player 4</p>
        <img width="320" src="./spreadSetUp.jpg"></img>
        <h4 className={styles.phase}>Phase 1</h4>
        <img width="320" src="./twentyfiveSpreadPhaseOne.jpg"></img>
        <p> Players 1 and 3 move to Player 2 and feint to lift Player 2.</p>
        <h4 className={styles.phase}>Phase 2</h4>
        <img width="320" src="./twentyfiveSpreadPhaseTwo.jpg"></img>
        <p> Player 2 jumps out the line.</p>
        <h4 className={styles.phase}>Phase 3</h4>
        <img width="320" src="./twentyfiveSpreadPhaseThree.jpg"></img>
        <p> Player 2 moves into the front of the lineout.</p>
        <p>Player 3 moves to their original position.</p>
        <p>Players 1 and 4 move to player 3 and lift Player 3</p>
      </div>
  )
}

export default twentyfivespread;