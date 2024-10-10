import React, { useContext, useState } from "react";
import { LanguageContext } from "../../contexts/LanguageContext";
import TopMenuMobile from "../topMenuMobile/TopMenuMobile";

import styles from "./iconmenu.module.scss";

export const IconMenu = () => {
  const { currentTranslations } = useContext(LanguageContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={`row align-items-center ${styles.iconmenu} `}>
      <div className={`col-4 d-md-none order-1 ${styles.icon}`}>
        <img src={currentTranslations.logo} alt="" />
      </div>

      <div
        className={`col-2 col-md-5 order-2 px-0 ${styles.icon}`}
        id={styles.first}
      >
        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6.196 17.485q1.275-.918 2.706-1.451T12 15.5t3.098.534t2.706 1.45q.99-1.024 1.593-2.42Q20 13.666 20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.667.603 3.063t1.593 2.422M12 12.5q-1.263 0-2.132-.868Q9 10.763 9 9.5t.868-2.132T12 6.5t2.132.868Q15 8.237 15 9.5t-.868 2.132T12 12.5m0 8.5q-1.883 0-3.525-.701q-1.642-.7-2.858-1.916q-1.215-1.216-1.916-2.858T3 12t.701-3.525t1.916-2.858t2.858-1.916T12 3t3.525.701t2.858 1.916q1.215 1.216 1.916 2.858T21 12t-.701 3.525t-1.916 2.858q-1.216 1.215-2.858 1.916T12 21"></path>
        </svg> */}
        <img
          src="https://files.smartsuppcdn.com/files/agents/avatars/393225-CDDq6rAv4L.jpg?size=80"
          alt=""
        />
        <div className={styles.supportText}>
          <div>
            <strong>+420 706 694 133</strong>
          </div>
          <span>(po - pá: 8:00 - 16:00)</span>
        </div>
      </div>

      <div
        className={`col-2 col-md-3 order-3 px-0 icon ${styles.icon}`}
        id={styles.second}
      >
        <div className={`${styles.counterHeader}`}>
          <span className={`${styles.counter}`} id={styles.counterOne}>
            0
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8"
            ></path>
          </svg>
        </div>
      </div>

      <div className={`col-2 col-md-4 col-lg-4 order-4 px-0 ${styles.icon}`}>
        <div className={`${styles.counterHeader}`}>
          <span className={`${styles.counter}`} id={styles.counterTwo}>
            0
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M22 9h-4.79l-4.38-6.56a.997.997 0 0 0-1.66.01L6.79 9H2c-.55 0-1 .45-1 1c0 .09 0 .18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1M12 4.8L14.8 9H9.2zM18.5 19h-13l-2.19-8H20.7zM12 13c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"
            ></path>
          </svg>
        </div>
        <span id={styles.cartPrice}>0 Kč</span>
      </div>

      <div
        className={`col-2 d-lg-none order-5 order-md-5 ${styles.icon} `}
        id={styles.mobileMenu}
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
        >
          <path d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z" />
        </svg>
      </div>
      {isMenuOpen && <TopMenuMobile onClose={handleCloseMenu} />}
    </div>
  );
};
