import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./variants.module.scss";

export const Variants = ({ variants, name }) => {
  console.log({ variants });
  return (
    <div className={styles.variantsContainer}>
      {variants.map((variant) => (
        <Link
          href={variant.url}
          key={variant.variant_id}
          className={`${styles.variant} ${
            name === variant.name ? styles.activeVariant : ""
          }`}
        >
          <Image
            src={`https://zanapo.cz/${variant.image}`}
            height={60}
            width={60}
          />
          {variant.name}
        </Link>
      ))}
    </div>
  );
};
