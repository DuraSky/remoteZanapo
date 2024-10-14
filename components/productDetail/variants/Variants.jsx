import React from "react";
import Link from "next/link";
import styles from "./variants.module.scss";

export const Variants = ({ variants }) => {
  return (
    <ul className={styles.variantsContainer}>
      {variants.map((variant) => (
        <li>
          <Link href={variant.url} key={variant.variant_id} passHref>
            {variant.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
