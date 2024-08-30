import React from "react";
import styles from "./filterComponent.module.scss";

export const FilterComponent = ({ filterCategories, handleCheckboxChange }) => {
  if (!filterCategories || filterCategories.length === 0) {
    return <div>Filtry nenačteny</div>;
  }

  return (
    <div className={` ${styles.filter}`}>
      {filterCategories.map((category, catIdx) => (
        <div key={catIdx} className={styles.filterCategory}>
          <h4>{category.title}</h4>
          <ul className={styles.filterList}>
            {category.filter_items.map((item, itemIdx) => (
              <li key={itemIdx} className={styles.filterItem}>
                <label>
                  <input
                    type="checkbox"
                    checked={item.is_in_filter}
                    onChange={() => handleCheckboxChange(catIdx, itemIdx)}
                  />
                  {item.name} ({item.items_count})
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
