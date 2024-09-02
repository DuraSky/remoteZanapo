import React, { useEffect, useState } from "react";
import styles from "./filterComponent.module.scss";

export const FilterComponent = ({ filterCategories, handleCheckboxChange }) => {
  const [openCategories, setOpenCategories] = useState([]);

  useEffect(() => {
    setOpenCategories(filterCategories.map(() => true));
  }, [filterCategories]);

  const toggleCategory = (index) => {
    setOpenCategories((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  if (!filterCategories || filterCategories.length === 0) {
    return <div>Filtry nenačteny</div>;
  }

  return (
    <div className={styles.filter}>
      {filterCategories.map((category, catIdx) => (
        <div key={catIdx} className={styles.filterCategory}>
          <h4
            onClick={() => toggleCategory(catIdx)}
            className={styles.categoryTitle}
          >
            {category.title}
            <span
              className={`${styles.arrow} ${
                openCategories[catIdx] ? styles.open : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 -960 960 960"
                className={styles.arrowIcon}
              >
                <path d="M480-344 240-584l56-56 184 184 184-184 56 56z"></path>
              </svg>
            </span>
          </h4>
          <div
            className={`${styles.filterContent} ${
              openCategories[catIdx] ? styles.open : styles.closed
            }`}
          >
            <ul className={styles.filterList}>
              {category.filter_items.map((item, itemIdx) => (
                <li key={itemIdx} className={styles.filterItem}>
                  <label>
                    <input
                      type="checkbox"
                      checked={item.is_in_filter}
                      onChange={() => handleCheckboxChange(catIdx, itemIdx)}
                    />
                    <span>
                      {item.name} ({item.items_count})
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
