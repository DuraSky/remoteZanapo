import React from "react";

import styles from "./productprice.module.scss";

export const ProductPrice = ({ price }) => {
  return (
    <div className={styles.productPriceSection}>
      <p>Placeholder</p>
      <p className={styles.productPrice}>{price}</p>
    </div>
  );
};
