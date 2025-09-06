import styles from "../page.module.css";

export function twentyonespread() {
  return (
    <div className={styles.components}>
        <hr className={styles.line}></hr>
        <p></p>
        <h3 className={styles.components}>21 Spread</h3>
        <video width="320" height="240" controls preload="none">
          <source src="./videos/twentyoneSpread.mp4" type="video/mp4" playsInline />
          Your browser does not support the video tag.
        </video>
        <h4 className={styles.components}>Setup</h4>
        <p>Jumper - Player 3</p>
        <p>Front Lifter - Player 2</p>
        <p>Back Lifter - Player 4</p>
        <img width="320" src="./spreadSetUp.jpg"></img>
        <h4 className={styles.phase}>Phase 1</h4>
        <img width="320" src="./twentyoneSpreadPhaseOne.jpg"></img>
        <p>Players 3 and 4 move to Player 2.</p>
        <p>Players 2 and 4 lift Player 3.</p>
      </div>
  )
}

export default twentyonespread;