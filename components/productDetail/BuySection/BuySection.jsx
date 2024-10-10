import React, { useState } from "react";
import styles from "./buysection.module.scss";

export const BuySection = ({
  availability_text,
  availability_color,
  delivery_date,
  price_f,
}) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantitity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className={styles.buyDiv}>
      <div className={styles.delivery}>
        <div className={styles.deliveryIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="16"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h16c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"
            />
          </svg>
          <p>Možnosti doručení</p>
        </div>
        <div
          style={{ color: availability_color }}
          className={styles.availibity}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8m0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42s-42-18.804-42-42s18.804-42 42-42m56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12z"
            />
          </svg>
          <p>{availability_text}</p>
        </div>
      </div>

      <div className={styles.priceAndBuy}>
        <p className={styles.price}>{price_f}</p>
        <div className={styles.inputGroup}>
          <input
            type="number"
            value={quantity}
            className={styles.quantityInput}
            size="2"
            onChange={(e) => {
              const value = parseInt(e.target.value, 10);
              if (!isNaN(value) && value > 0) {
                setQuantity(value);
              }
            }}
          />
          <div className={styles.buyQuantity}>
            <button
              onClick={() => {
                increaseQuantitity();
              }}
              className={styles.quantityButton}
            >
              +
            </button>
            <button
              onClick={() => {
                decreaseQuantity();
              }}
              className={styles.quantityButton}
            >
              -
            </button>
          </div>
          <button className={styles.buyButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28.13"
              height="20"
              viewBox="0 0 576 512"
            >
              <path
                fill="white"
                d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058c14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701c14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24M312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24m112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24m-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24"
              />
            </svg>
            Vložit do košíku
          </button>
        </div>
      </div>
    </div>
  );
};
