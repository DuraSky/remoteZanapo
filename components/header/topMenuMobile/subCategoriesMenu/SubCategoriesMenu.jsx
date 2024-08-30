import React from "react";
import Link from "next/link";
import styles from "./subCategoriesMenu.module.scss";

const SubCategoriesMenu = ({ category, onBack, onClose }) => {
  return (
    <div className={styles.subCategoriesContainer}>
      <ul className={styles.subCategoryList}>
        {category.subcategories.map((sub) => (
          <li key={sub.id} className={styles.subCategoryItem}>
            <Link href={`/${sub.id}`}>
              <span onClick={onClose}>{sub.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubCategoriesMenu;
