import React from "react";

import styles from "./categoryText.module.scss";

export const CategoryText = ({
  category,
  showLongDescription,
  toggleDescription,
}) => {
  return (
    <>
      <h2 className={styles.categoryHeading}>{category.name}</h2>
      <div
        className={styles.categoryText}
        dangerouslySetInnerHTML={{ __html: category.description_short }}
      ></div>
      {category.description != null && (
        <>
          <div className={styles.buttonWrapper}>
            <button
              onClick={toggleDescription}
              className={styles.descriptionToggleButton}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
                className={`${styles.arrowIcon} ${
                  showLongDescription ? styles.opened : ""
                }`}
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56z" />
              </svg>
            </button>
          </div>
          <div className={styles.expandingContent}>
            {showLongDescription && (
              <div
                className={styles.categoryText}
                dangerouslySetInnerHTML={{ __html: category.description }}
              />
            )}
          </div>
        </>
      )}
    </>
  );
};
