import React from "react";
import styles from "./reviewsummary.module.scss";
import { Ratings } from "../../../carousel/ratings/Ratings";

export const ReviewSummary = ({ reviews }) => {
  const totalReviews = reviews.length;

  const averageRating =
    totalReviews > 0
      ? (reviews.reduce((sum, review) => sum + review.rating, 0) /
          (totalReviews * 5)) *
        100
      : 100;

  const averageStars =
    totalReviews > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews
      : 0;

  const starCounts = [5, 4, 3, 2, 1].map(
    (star) => reviews.filter((review) => review.rating === star).length
  );

  return (
    <div className={styles.reviewSummary}>
      <div className={styles.overallRating}>
        <div className={styles.ratingHeader}>
          <p>{averageRating.toFixed(1)}%</p>
        </div>

        <div className={styles.starsHeader}>
          <Ratings rating={averageStars} />
          <p className={styles.totalReviews}>{totalReviews} hodnocení</p>
        </div>
      </div>

      <button className={styles.addReviewButton}>
        {" "}
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
        Přidat hodnocení
      </button>

      <div className={styles.ratingBars}>
        {[5, 4, 3, 2, 1].map((star) => {
          const count = starCounts[5 - star];
          const percentage =
            totalReviews > 0 ? (count / totalReviews) * 100 : 0;

          return (
            <div key={star} className={styles.ratingRow}>
              <span>
                <Ratings rating={star} />
              </span>
              <div className={styles.barContainer}>
                <div
                  className={styles.barFill}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <span>{count} x</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
