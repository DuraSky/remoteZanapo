import React, { useState } from "react";

import styles from "./productuserrating.module.scss";
import { Ratings } from "../../../carousel/ratings/Ratings";
export const ProductUserRating = ({ reviews }) => {
  const [showAll, setShowAll] = useState(false);

  const displayedReviews = showAll ? reviews : reviews.slice(0, 3);

  return (
    <div className={styles.reviewContainer}>
      <h3 className={styles.reviewHeader}>
        Recenze <span>({reviews.length}x)</span>
      </h3>
      {displayedReviews.map((review, index) => (
        <div key={index} className={styles.review}>
          <h4 className={styles.reviewerName}>
            {review.name} {review.surname}
          </h4>
          <Ratings rating={review.rating} />
          <div className={styles.prosAndCons}>
            {review.positives && (
              <div className={styles.positives}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-24-168v-64h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24h64v-64c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64v64c0 13.3-10.7 24-24 24s-24-10.7-24-24"
                  />
                </svg>
                {review.positives}
              </div>
            )}
            {review.negatives && (
              <div className={styles.negatives}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 512a256 256 0 1 0 0-512a256 256 0 1 0 0 512m-72-280h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24"
                  />
                </svg>
                {review.negatives}
              </div>
            )}
          </div>
        </div>
      ))}
      {reviews.length > 3 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className={styles.toggleButton}
        >
          {showAll ? "Skrýt recenze" : "Všechny recenze"}
        </button>
      )}
    </div>
  );
};
