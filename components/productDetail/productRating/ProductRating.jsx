import React from "react";

import { ProductUserRating } from "./productUserRating/ProductUserRating";

import styles from "./productrating.module.scss";
import { ReviewSummary } from "./reviewSummary/ReviewSummary";

export const ProductRating = ({ ratings }) => {
  return (
    <div className={styles.productRating}>
      <h3>Hodnocení produktu</h3>

      <div className="row mx-2">
        <div className="col-8">
          <ProductUserRating reviews={ratings} />
        </div>
        <div className="col-4">
          <ReviewSummary reviews={ratings} />
        </div>
      </div>
    </div>
  );
};
