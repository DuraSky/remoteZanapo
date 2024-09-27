import React from "react";
import styles from "./buysection.module.scss";

export const BuySection = ({
  availability_text,
  availability_color,
  delivery_date,
  price_f,
}) => {
  return (
    <div className={styles.buyDiv}>
      <div className={styles.delivery}>
        <p style={{ color: availability_color }}>{availability_text}</p>
        <p style={{ color: availability_color }}>{delivery_date}</p>
      </div>

      <p className={styles.price}>{price_f}</p>
      <button className={styles.buyButton}>Koupit</button>
    </div>
  );
};
