import React from "react";

import styles from "./topsellers.module.scss";

import Image from "next/image";

export const TopSellers = ({ bestProducts }) => {
  return (
    <div className={`col-lg-5  ${styles.topProducts}`}>
      <h4 className={styles.topHeading}>Nejprodávanější</h4>
      {bestProducts.map((product) => (
        <div key={product.variant_id} className={styles.productCard}>
          <div className="productImageWrapper">
            <Image
              src={`https://zanapo.cz/${product.image}`}
              alt={product.name}
              width={100}
              height={100}
              className={`${styles.productImage} img-fluid`}
            />
          </div>
          <div className={`${styles.productText} `}>
            <h4 className={styles.productName}>{product.name}</h4>
            <p className={`${styles.productDescription}`}>
              {product.description_short}
            </p>

            <p className={`${styles.productPrice}`}>{product.price_f}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
