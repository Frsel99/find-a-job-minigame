import React, { useState } from "react";
import styles from "./Screen.module.css";

function Screen() {
  const [monitorState, setMonitorState] = useState(false);
  const [focusStates, setFocusState] = useState(true);

  const turnMonitor = () => {
    setTimeout(() => {
      setMonitorState(true);
      setFocusState(false);
    }, 50);
  };

  return (
    <div>
      <div className={focusStates ? styles.focusPoint : styles.focusPointOff} />
      <div className={styles.monitor}>
        <div className={styles.innerMonitor} />
        <div
          aria-label="Turn on monitor"
          role="button"
          className={
            monitorState ? styles.powerButtonOn : styles.powerButtonOff
          }
          onMouseDown={turnMonitor}
          onKeyDown={turnMonitor}
          tabIndex={0}
        />
      </div>
    </div>
  );
}

export default Screen;
