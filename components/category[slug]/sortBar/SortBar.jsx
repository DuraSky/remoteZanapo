import React from "react";

import styles from "./sortBar.module.scss";

export const SortBar = () => {
  return (
    <div className={styles.sortBar}>
      <ul>
        <li>
          <input type="checkbox" />
          Doporucujeme
        </li>
        <li>
          <input type="checkbox" />
          Doporucujeme
        </li>
        <li>
          <input type="checkbox" />
          Doporucujeme
        </li>
      </ul>
    </div>
  );
};
