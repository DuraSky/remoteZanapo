import React from "react";
import styles from "./product.module.scss";
import { Label } from "../../carousel/labels/Label";
import Image from "next/image";
import Link from "next/link";
import { Ratings } from "../../carousel/ratings/Ratings";

export const Product = ({ filteredProducts }) => {
  console.log("RECIEVED PROCUTS", filteredProducts);
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, text.lastIndexOf(" ", maxLength)) + "...";
  };
  return (
    <div className={`${styles.allProducts}`}>
      {filteredProducts.map((product) => (
        <div className={`${styles.product} col-3`} key={product.variant_id}>
          <div className={styles.imageWrapper}>
            <Link href={"#"}>
              <Image
                src={`https://zanapo.cz/${product.image}`}
                width={350}
                height={350}
                alt={product.name}
                className={styles.productImage}
              />
            </Link>
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
            <Link href={"#"}>
              <h3 className={styles.productName}>{product.name}</h3>
            </Link>
            <p className={styles.productDescription}>
              {truncateText(product.description_short, 130)}
            </p>

            <div className={styles.productFooter}>
              <Ratings
                ratingAverage={product.rating_average}
                ratingCount={product.rating_count}
                className={styles.productRatings}
              />
              <div className={styles.productPriceSection}>
                <p className={styles.productPrice}>{product.price_f}</p>
                <button className={styles.buyButton}>
                  Do košíku{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 -960 960 960"
                  >
                    <path d="M440-600v-120H320v-80h120v-120h80v120h120v80H520v120zM280-80q-33 0-56.5-23.5T200-160t23.5-56.5T280-240t56.5 23.5T360-160t-23.5 56.5T280-80m400 0q-33 0-56.5-23.5T600-160t23.5-56.5T680-240t56.5 23.5T760-160t-23.5 56.5T680-80M40-800v-80h131l170 360h280l156-280h91L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68.5-39t-1.5-79l54-98-144-304z" />
                  </svg>
                </button>
              </div>
              <div
                className={styles.productAvailability}
                style={{ color: product.availability_color }}
              >
                <p>{product.availability_text}</p>
                <p className={styles.deliveryDate}>{product.delivery_date}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
