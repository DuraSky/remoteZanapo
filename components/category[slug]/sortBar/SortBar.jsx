import React from "react";
import styles from "./sortBar.module.scss";

export const SortBar = ({ sortLinks, handleCheckboxChange }) => {
  // console.log(sortLinks, "dsfgdfg");
  if (!sortLinks || sortLinks.length === 0) {
    return <div>Načítání...</div>;
  }

  return (
    <div className={styles.sortBar}>
      <ul>
        {sortLinks.map((sortLink, index) => (
          <li key={index}>
            <label>
              <input
                type="checkbox"
                name="sort"
                checked={sortLink.checked}
                onChange={() => handleCheckboxChange(null, null, sortLink.link)}
              />
              {sortLink.title}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
