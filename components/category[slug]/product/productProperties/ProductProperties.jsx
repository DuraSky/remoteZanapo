import React from "react";

import styles from "./productproperties.module.scss";

export const ProductProperties = () => {
  return (
    <div className={styles.propertiesWrapper}>
      <div className={styles.property}>
        <p>Materiál šachové desky:</p>
        <p className={styles.right}>buk / javor</p>
      </div>
    </div>
  );
};
