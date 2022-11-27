import React from "react";
import styles from "./Screen.module.css";

function Screen() {
  return (
    <div>
      <div className={styles.monitor}>
        <div className={styles.innerMonitor} />
      </div>
      <div> </div>
    </div>
  );
}

export default Screen;
