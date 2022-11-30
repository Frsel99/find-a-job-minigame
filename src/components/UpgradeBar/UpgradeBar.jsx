import React from "react";
import { useSelector } from "react-redux";
import upgrades from "./upgrades.json";
import styles from "./UpgradeBar.module.css";
import UpgradeItem from "../UpgradeItem/UpgradeItem";

function UpgradeBar() {
  const focusState = useSelector((state) => state.game.focusState);
  const points = useSelector((state) => state.game.points);

  return (
    <div
      className={
        focusState
          ? `${styles.mainContainer}`
          : `${styles.mainContainer} ${styles.containerAnimate}`
      }
    >
      <ul className={styles.itemContainer}>
        <center className={styles.title}>Mejoras</center>
        <center className={styles.title}>{points}</center>
        {upgrades.upgrades &&
          upgrades.upgrades.map((el) => (
            <UpgradeItem
              id={el.id}
              image={el.image}
              description={el.description}
              cost={el.cost}
            />
          ))}
      </ul>
    </div>
  );
}

export default UpgradeBar;
