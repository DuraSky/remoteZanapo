import React, { useState, useEffect } from "react";
import styles from "./mobileFilterComponent.module.scss";

export const MobileFilterComponent = ({
  filterCategories,
  handleCheckboxChange,
  filteredProductsCount,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isSliding, setIsSliding] = useState(false);

  const handleOpenFilters = () => {
    setIsActive(true);
    setIsSliding(true);
    setTimeout(() => setIsSliding(false), 300);
  };

  const handleCloseFilters = () => {
    setIsSliding(true);
    setTimeout(() => {
      setIsSliding(false);
      setIsActive(false);
    }, 300);
  };

  return (
    <div>
      <button className={styles.filterButton} onClick={handleOpenFilters}>
        Filtrovat Produkty
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 -960 960 960"
        >
          <path d="M400-240v-80h160v80zM240-440v-80h480v80zM120-640v-80h720v80z" />
        </svg>
      </button>

      {isActive && (
        <div className={styles.overlay}>
          <div
            className={`${styles.mobileFilterContainer} ${
              isActive ? styles.active : ""
            }`}
          >
            <div className={styles.mobileHeader}>
              <p>Filtrovat Produkty</p>
              <button
                className={styles.closeButton}
                onClick={handleCloseFilters}
              >
                X
              </button>
            </div>
            <div
              className={`${styles.menuContent} ${
                isSliding ? styles.sliding : ""
              }`}
            >
              <ul>
                {filterCategories.map((category, catIdx) => (
                  <li key={catIdx}>
                    <div className={styles.filterCategory}>
                      <p>{category.title}</p>
                      <ul>
                        {category.filter_items.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <label>
                              <input
                                type="checkbox"
                                checked={item.is_in_filter}
                                onChange={() =>
                                  handleCheckboxChange(catIdx, itemIdx)
                                }
                              />
                              {item.name} ({item.items_count})
                            </label>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.displayButtonWrapper}>
                <button
                  className={styles.displayButton}
                  onClick={handleCloseFilters}
                >
                  Zobrazit {filteredProductsCount} produktů
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
