import React from "react";
import styles from "./product.module.scss";
import { Label } from "../../carousel/labels/Label";
import Image from "next/image";
import Link from "next/link";
import { Ratings } from "../../carousel/ratings/Ratings";

export const Product = ({ filteredProducts }) => {
  return (
    <div className={`${styles.allProducts}`}>
      {filteredProducts.map((product) => (
        <div className={`${styles.product} col-3`} key={product.variant_id}>
          <Link href={"#"}>
            <div className={styles.imageWrapper}>
              <Image
                src={`https://zanapo.cz/${product.image}`}
                width={350}
                height={350}
                alt={product.name}
                className={styles.productImage}
              />
              <div className={styles.labelsContainer}>
                {product.labels &&
                  product.labels.map((label, labelIndex) => (
                    <Label
                      key={labelIndex}
                      title={label.title}
                      color={label.color}
                    />
                  ))}
              </div>
            </div>
            <div className={styles.productInfo}>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.productDescription}>
                {product.description_short}
              </p>

              <div className={styles.productFooter}>
                <Ratings
                  ratingAverage={product.rating_average}
                  ratingCount={product.rating_count}
                  className={styles.productRatings}
                />
                <div className={styles.productPriceSection}>
                  <p className={styles.productPrice}>{product.price_f}</p>
                  <button className={styles.buyButton}>Koupit</button>
                </div>
                <div
                  className={styles.productAvailability}
                  style={{ color: product.availability_color }}
                >
                  <p>{product.availability_text}</p>
                  <p className={styles.deliveryDate}>
                    Můžete mít v pondělí 2. 9.
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
