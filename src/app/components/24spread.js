import styles from "../page.module.css";

export function twentyfourspread() {
  return (
    <div className={styles.components}>
        <hr className={styles.line}></hr>
        <p></p>
        <h3 className={styles.components}>24 Spread</h3>
        <video width="320" height="240" controls preload="none">
          <source src="./videos/twentyfourSpread.mp4" type="video/mp4" playsInline />
          Your browser does not support the video tag.
        </video>
        <h4 className={styles.components}>Setup</h4>
        <p>Jumper - Player 3</p>
        <p>Front Lifter - Player 1</p>
        <p>Back Lifter - Player 4</p>
        <img width="320" src="./spreadSetUp.jpg"></img>
        <h4 className={styles.phase}>Phase 1</h4>
        <img width="320" src="./twentyfourSpreadPhaseOne.jpg"></img>
        <p> Players 2 and 4 move to Player 3.</p>
        <h4 className={styles.phase}>Phase 2</h4>
        <img width="320" src="./twentyfourSpreadPhaseTwo.jpg"></img>
        <p> Player 2 moves out the line.</p>
        <p>Players 3 and 4 move to Player 1</p>
        <p>Player 1 moves towards Player 3</p>
        <h4 className={styles.phase}>Phase 3</h4>
        <img width="320" src="./twentyfourSpreadPhaseThree.jpg"></img>
        <p>Player 2 moves into Player 4 original position.</p>
        <p>Players 1 and 4 lift Player 3</p>
      </div>
  )
}

export default twentyfourspread;