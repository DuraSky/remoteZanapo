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
                </svg>{" "}
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
          {showAll ? (
            <>
              Skrýt recenze
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="16"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="m240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495L69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001"
                />
              </svg>
            </>
          ) : (
            <>
              Všechny recenze
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="16"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
                />
              </svg>
            </>
          )}
        </button>
      )}
    </div>
  );
};
