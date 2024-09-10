import React, { useState } from "react";
import styles from "./product.module.scss";
import { Label } from "../../carousel/labels/Label";
import Image from "next/image";
import Link from "next/link";
import { Ratings } from "../../carousel/ratings/Ratings";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";

export const Product = ({ filteredProducts }) => {
  const [loading, setLoading] = useState(true);

  //console.log("RECIEVED PROCUTS", filteredProducts);
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, text.lastIndexOf(" ", maxLength)) + "...";
  };

  const isLoading = !filteredProducts || filteredProducts.length === 0;

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
                    width="36"
                    height="32"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="white"
                      d="M504.717 320H211.572l6.545 32h268.418c15.401 0 26.816 14.301 23.403 29.319l-5.517 24.276C523.112 414.668 536 433.828 536 456c0 31.202-25.519 56.444-56.824 55.994c-29.823-.429-54.35-24.631-55.155-54.447c-.44-16.287 6.085-31.049 16.803-41.548H231.176C241.553 426.165 248 440.326 248 456c0 31.813-26.528 57.431-58.67 55.938c-28.54-1.325-51.751-24.385-53.251-52.917c-1.158-22.034 10.436-41.455 28.051-51.586L93.883 64H24C10.745 64 0 53.255 0 40V24C0 10.745 10.745 0 24 0h102.529c11.401 0 21.228 8.021 23.513 19.19L159.208 64H551.99c15.401 0 26.816 14.301 23.403 29.319l-47.273 208C525.637 312.246 515.923 320 504.717 320M408 168h-48v-40c0-8.837-7.163-16-16-16h-16c-8.837 0-16 7.163-16 16v40h-48c-8.837 0-16 7.163-16 16v16c0 8.837 7.163 16 16 16h48v40c0 8.837 7.163 16 16 16h16c8.837 0 16-7.163 16-16v-40h48c8.837 0 16-7.163 16-16v-16c0-8.837-7.163-16-16-16"
                    />
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
