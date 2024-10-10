import React from "react";

import styles from "./productrating.module.scss";

export const ProductRating = () => {
  return (
    <div className={styles.productRating}>
      <h3>Hodnocení produktu</h3>

      <div>Recenze</div>
    </div>
  );
};
