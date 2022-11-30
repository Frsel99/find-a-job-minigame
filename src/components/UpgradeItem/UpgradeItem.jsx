import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADDUPGRADE } from "../../redux/actions";
import styles from "./UpgradeItem.module.css";

// eslint-disable-next-line react/prop-types
function UpgradeItem({ id, image, description, cost }) {
  const upgrades = useSelector((state) => state.game.upgrades);
  const points = useSelector((state) => state.game.points);
  const dispatch = useDispatch();

  const addUpgrade = () => {
    if (points >= cost) dispatch(ADDUPGRADE(id, cost));
  };

  return (
    <li
      onClick={addUpgrade}
      onKeyDown={addUpgrade}
      aria-label="Press to start finding a job"
      // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
      role="button"
      className={styles.item}
      key={id}
    >
      <div className={styles.itemImg} style={{ backgroundColor: image }} />
      <h3>Mejora {id}</h3>
      <p>{description}</p>
      <h4 className={styles.cost}>
        Costo: <span>{cost}</span>
      </h4>
      <h4 className={styles.adquired}>x{upgrades[id]}</h4>
    </li>
  );
}

export default UpgradeItem;
