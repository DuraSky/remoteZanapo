import React, { useState } from "react";
import styles from "./product.module.scss";
import { Label } from "../../carousel/labels/Label";
import Image from "next/image";
import Link from "next/link";
import { LoadingSpinner } from "../../LoadingSpinner/LoadingSpinner";
import { ProductHeader } from "./productHeader/ProductHeader";
import { BuyButton } from "./buyButton/BuyButton";
import { ProductPrice } from "./productPrice/ProductPrice";

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
            <Link href={product.url}>
              <Image
                src={`https://zanapo.cz/${product.image}`}
                width={400}
                height={400}
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

          <ProductHeader
            ratingAverage={product.rating_average}
            ratingCount={product.rating_count}
          />

          <div className={styles.productInfo}>
            <Link href={product.url}>
              <h3 className={styles.productName}>{product.name}</h3>
            </Link>
            <p className={styles.productDescription}>
              {truncateText(product.description_short, 130)}
            </p>

            <div className={styles.productFooter}>
              <ProductPrice price={product.price_f} />
              <BuyButton />
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
