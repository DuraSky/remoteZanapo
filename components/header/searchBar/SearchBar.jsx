import React, { useEffect } from "react";
import styles from "./searchbar.module.scss";

export const SearchBar = () => {
  useEffect(() => {
    const inputElement = document.querySelector(`.${styles.searchInput}`);
    const placeholderTexts = ["Dřevěné šachy", "Stolní hry", "Kouzelné čtění"];
    let currentTextIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const currentText = placeholderTexts[currentTextIndex];
      if (isDeleting) {
        if (charIndex > 0) {
          charIndex--;
          inputElement.placeholder = currentText.substring(0, charIndex);
        } else {
          isDeleting = false;
          currentTextIndex = (currentTextIndex + 1) % placeholderTexts.length;
        }
      } else {
        if (charIndex < currentText.length) {
          charIndex++;
          inputElement.placeholder = currentText.substring(0, charIndex);
        } else {
          isDeleting = true;
        }
      }
      setTimeout(type, isDeleting ? 100 : 100);
    };

    type();
  }, []);

  return (
    <div className={`col-12 ${styles.searchCol}`}>
      <div className={styles.searchIcon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="m19.485 20.154l-6.262-6.262q-.75.639-1.725.989t-1.96.35q-2.402 0-4.066-1.663T3.808 9.503T5.47 5.436t4.064-1.667t4.068 1.664T15.268 9.5q0 1.042-.369 2.017t-.97 1.668l6.262 6.261zM9.539 14.23q1.99 0 3.36-1.37t1.37-3.361t-1.37-3.36t-3.36-1.37t-3.361 1.37t-1.37 3.36t1.37 3.36t3.36 1.37"
          ></path>
        </svg>
      </div>
      <input type="text" className={styles.searchInput} />
      <button className={styles.searchButton}>Hledat</button>
    </div>
  );
};

export default SearchBar;
