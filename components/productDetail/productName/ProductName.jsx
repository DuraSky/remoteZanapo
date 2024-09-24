import React from "react";
import { Ratings } from "../../carousel/ratings/Ratings";

import styles from "./productName.module.scss";

export const ProductName = ({ name, ratingAvg, ratingCount }) => {
  return (
    <div className={styles.nameAndRating}>
      <h3>{name}</h3>
      <div className={styles.rating}>
        <Ratings ratingAverage={ratingAvg} ratingCount={ratingCount} />
      </div>
    </div>
  );
};
