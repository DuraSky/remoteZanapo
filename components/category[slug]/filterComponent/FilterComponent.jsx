import React, { useEffect, useState } from "react";
import styles from "./filterComponent.module.scss";
import { PriceSlider } from "../../priceSlider/PriceSlider";

export const FilterComponent = ({
  filterCategories,
  handleCheckboxChange,
  priceFilter,
}) => {
  const [openCategories, setOpenCategories] = useState([]);
  const [showMoreCategories, setShowMoreCategories] = useState([]);

  useEffect(() => {
    setOpenCategories(filterCategories.map(() => true));
    setShowMoreCategories(filterCategories.map(() => false));
  }, [filterCategories]);

  const toggleCategory = (index) => {
    setOpenCategories((prevState) =>
      prevState.map((isOpen, i) => (i === index ? !isOpen : isOpen))
    );
  };

  const toggleShowMore = (index) => {
    setShowMoreCategories((prevState) =>
      prevState.map((isShown, i) => (i === index ? !isShown : isShown))
    );
  };

  if (!filterCategories || filterCategories.length === 0) {
    return <div>Filtry nenačteny</div>;
  }

  return (
    <div className={styles.filter}>
      <PriceSlider
        priceFilter={priceFilter}
        handleCheckboxChange={handleCheckboxChange}
      />
      {filterCategories.map((category, catIdx) => {
        const isShowMore = showMoreCategories[catIdx];
        const displayedItems = isShowMore
          ? category.filter_items
          : category.filter_items.slice(0, 6);

        return (
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
                {displayedItems.map((item, itemIdx) => {
                  // Convert items_count to a number for comparison
                  const itemCount = parseInt(item.items_count, 10);
                  const isDisabled = !item.is_in_filter && itemCount === 0;

                  return (
                    <li
                      key={itemIdx}
                      className={`${styles.filterItem} ${
                        isDisabled ? styles.disabled : ""
                      }`}
                    >
                      <label>
                        <input
                          type="checkbox"
                          checked={item.is_in_filter}
                          onChange={() => handleCheckboxChange(catIdx, itemIdx)}
                          disabled={isDisabled}
                        />
                        <span>
                          {item.name} ({item.items_count})
                        </span>
                      </label>
                    </li>
                  );
                })}
              </ul>

              {category.filter_items.length > 6 && (
                <div className={styles.showMoreWrapper}>
                  {" "}
                  {/* Centering wrapper */}
                  <button
                    onClick={() => toggleShowMore(catIdx)}
                    className={styles.showMoreBtn}
                  >
                    {isShowMore ? "Zobrazit méně" : "Zobrazit více"}
                    <span
                      className={`${styles.arrow} ${
                        isShowMore ? styles.open : ""
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
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
