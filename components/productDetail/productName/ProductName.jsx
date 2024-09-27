import React from "react";
import { RatingsStyle2 } from "../../ratingStyle2/RatingsStyle2";
import styles from "./productName.module.scss";

export const ProductName = ({ name, ratingAvg, ratingCount }) => {
  return (
    <div className={styles.nameAndRating}>
      <h3>{name}</h3>
      <div className={styles.rating}>
        <RatingsStyle2 ratingAverage={ratingAvg} ratingCount={ratingCount} />
      </div>
    </div>
  );
};
