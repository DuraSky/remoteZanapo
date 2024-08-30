import React from "react";
import styles from "./label.module.scss";

export const Label = ({ title, color }) => {
  return (
    <div className={styles.label} style={{ backgroundColor: color }}>
      {title}
    </div>
  );
};
