import React from "react";
import styles from "./ratings.module.scss";

export const Ratings = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <div className={styles.stars}>
      {/* Render full stars */}
      {Array(fullStars)
        .fill(null)
        .map((_, index) => (
          <span key={`full-${index}`} className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0"
              />
            </svg>
          </span>
        ))}

      {/* Render half star if needed */}
      {halfStar && (
        <span key="half" className={styles.star}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16.75"
            height="16"
            viewBox="0 0 536 512"
          >
            <path
              fill="currentColor"
              d="M508.55 171.51L362.18 150.2L296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38l-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103l-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68l130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71c18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49l105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6m-121.74 123.2l-18.12 17.62l4.28 24.88l19.52 113.45l-102.13-53.59l-22.38-11.74l.03-317.19l51.03 103.29l11.18 22.63l25.01 3.64l114.23 16.63z"
            />
          </svg>
        </span>
      )}

      {/* Render empty stars */}
      {Array(emptyStars)
        .fill(null)
        .map((_, index) => (
          <span key={`empty-${index}`} className={styles.star}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="16"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M528.1 171.5L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6M388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3l23.7-138.4l-100.6-98l139-20.2l62.2-126l62.2 126l139 20.2z"
              />
            </svg>
          </span>
        ))}
    </div>
  );
};
