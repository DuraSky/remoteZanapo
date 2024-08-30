import React from "react";

import Image from "next/image";
import Link from "next/link";

import styles from "./categorySubMenu.module.scss";

export const CategorySubMenu = ({ category }) => {
  return (
    <div className="col-12">
      {category.subcategories && category.subcategories.length > 0 && (
        <div className="row">
          {category.subcategories.map((subcategory) => (
            <div key={subcategory.id} className="col-6 col-sm-3  col-lg-2 mb-3">
              <Link href={subcategory.url}>
                <div className={`${styles.subcategoryCard}`}>
                  <Image
                    src={`https://zanapo.cz/${subcategory.image}`}
                    alt={subcategory.name}
                    width={60}
                    height={60}
                    className={`${styles.subcategoryImage} img-fluid`}
                  />
                  <h3 className={styles.subcategoryName}>{subcategory.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
