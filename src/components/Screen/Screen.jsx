import React, { useState } from "react";
import styles from "./Screen.module.css";

function Screen() {
  const [monitorState, setMonitorState] = useState(false);

  const turnMonitor = () => {
    if (!monitorState) setMonitorState(true);
  };
  return (
    <div>
      <div className={styles.monitor}>
        <div className={styles.innerMonitor} />
        <div
          aria-label="Turn on monitor"
          role="button"
          className={
            monitorState ? styles.powerButtonOn : styles.powerButtonOff
          }
          onClick={turnMonitor}
          onKeyDown={turnMonitor}
          tabIndex={0}
        />
      </div>
      <div> </div>
    </div>
  );
}

export default Screen;
