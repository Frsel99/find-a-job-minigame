import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLEFOCUS, ADDPOINT } from "../../redux/actions";
import styles from "./Screen.module.css";
import powerButton from "./powerButton.svg";

function Screen() {
  const dispatch = useDispatch();
  const [monitorState, setMonitorState] = useState(false);
  const [focusStates, setFocusState] = useState(true);
  const upgrades = useSelector((state) => state.game.upgrades);

  const turnMonitor = () => {
    setTimeout(() => {
      setMonitorState(true);
      if (focusStates) {
        setFocusState(false);
        dispatch(TOGGLEFOCUS());
      }
    }, 50);
  };

  const clickMonitor = () => {
    if (monitorState) dispatch(ADDPOINT(upgrades[1] + 1));
  };

  return (
    <div>
      <div className={styles.monitor}>
        <div
          className={
            !monitorState
              ? `${styles.innerMonitor}`
              : `${styles.innerMonitor} ${styles.monitorOn}`
          }
          aria-label="Press to start finding a job"
          role="button"
          onClick={clickMonitor}
          onKeyDown={clickMonitor}
          tabIndex={0}
        >
          <img
            className={
              !monitorState
                ? `${styles.backImg}`
                : `${styles.backImg} ${styles.backImgOn}`
            }
            src="https://c4.wallpaperflare.com/wallpaper/696/274/479/gradient-green-blue-violet-wallpaper-preview.jpg"
            alt="404 Not Found"
          />
        </div>
        <img
          className={
            !monitorState
              ? styles.powerIcon
              : `${styles.powerIcon} ${styles.powerIconOn}`
          }
          src={powerButton}
          alt="404"
        />
        <div
          aria-label="Turn on monitor"
          role="button"
          className={
            monitorState ? styles.powerButtonOn : styles.powerButtonOff
          }
          onMouseDown={turnMonitor}
          onKeyDown={turnMonitor}
          tabIndex={0}
        >
          <div
            className={focusStates ? styles.focusPoint : styles.focusPointOff}
          />
        </div>
      </div>
    </div>
  );
}

export default Screen;
