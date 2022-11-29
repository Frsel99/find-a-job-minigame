import React from "react";
import upgrades from "./upgrades.json";
import styles from "./UpgradeBar.module.css";

function UpgradeBar() {
  return (
    <div className={styles.mainContainer}>
      <ul className={styles.itemContainer}>
        <center className={styles.title}>Mejoras</center>
        {upgrades.upgrades &&
          upgrades.upgrades.map((el) => (
            <li className={styles.item} key={el.id}>
              <div
                className={styles.itemImg}
                style={{ backgroundColor: el.image }}
              />
              <h3>Mejora {el.id}</h3>
              <p>{el.description}</p>
              <h4>
                Precio: <span>{el.cost}</span>
              </h4>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default UpgradeBar;
