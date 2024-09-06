import React from "react";

import styles from "./loadingspinner.module.scss";

export const LoadingSpinner = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>Nacitani more</div>
    </div>
  );
};
