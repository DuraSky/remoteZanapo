import React from "react";
import styles from "./productproperties.module.scss";

export const ProductProperties = ({ features }) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <div className={styles.propertiesWrapper}>
      {features.map((feature, index) => (
        <div key={index} className={styles.property}>
          <p>{feature.name}:</p>
          <p className={styles.right}>{feature.value}</p>
        </div>
      ))}
    </div>
  );
};
