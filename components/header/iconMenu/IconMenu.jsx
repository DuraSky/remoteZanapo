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
        className={`col-2 col-md-3 order-2 px-0 ${styles.icon}`}
        id={styles.first}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M6.196 17.485q1.275-.918 2.706-1.451T12 15.5t3.098.534t2.706 1.45q.99-1.024 1.593-2.42Q20 13.666 20 12q0-3.325-2.337-5.663T12 4T6.337 6.338T4 12q0 1.667.603 3.063t1.593 2.422M12 12.5q-1.263 0-2.132-.868Q9 10.763 9 9.5t.868-2.132T12 6.5t2.132.868Q15 8.237 15 9.5t-.868 2.132T12 12.5m0 8.5q-1.883 0-3.525-.701q-1.642-.7-2.858-1.916q-1.215-1.216-1.916-2.858T3 12t.701-3.525t1.916-2.858t2.858-1.916T12 3t3.525.701t2.858 1.916q1.215 1.216 1.916 2.858T21 12t-.701 3.525t-1.916 2.858q-1.216 1.215-2.858 1.916T12 21"></path>
        </svg>
      </div>

      <div
        className={`col-2 col-md-3 order-3 px-0 icon ${styles.icon}`}
        id={styles.second}
      >
        <div className={`${styles.counterHeader}`}>
          <span className={`${styles.counter}`} id={styles.counterOne}>
            0
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M25.825 2.076C24.505 2.318 23.5 3.93 23.5 3.93s-1.015-1.612-2.324-1.854c-3.258-.59-4.598 2.37-4.06 4.572c.697 2.834 3.725 5.414 5.348 6.626a1.72 1.72 0 0 0 2.072 0c1.623-1.212 4.651-3.792 5.349-6.626c.538-2.202-.802-5.162-4.06-4.572M2.96 11.697C4.35 8.451 9.105 5.51 15.462 5.999a.5.5 0 0 0 .077-.997C8.895 4.49 3.649 7.549 2.04 11.303a.5.5 0 1 0 .919.394m25.921-.495a.5.5 0 0 0-.784.621c.72.908.98 1.82.94 2.682c-.041.873-.39 1.734-.95 2.518c-1.133 1.585-3.054 2.753-4.657 2.982a.5.5 0 1 0 .142.99c1.897-.271 4.051-1.603 5.328-3.39c.644-.902 1.084-1.944 1.135-3.053c.052-1.118-.293-2.264-1.154-3.35m-16.874 3.692s1.558-2.415 3.586-2.779c5.014-.889 7.071 3.547 6.222 6.851c-1.122 4.444-6.139 8.747-8.535 10.593a2.087 2.087 0 0 1-2.565-.001c-2.396-1.848-7.413-6.155-8.536-10.592c-.829-3.304 1.238-7.74 6.242-6.85c2.028.363 3.586 2.778 3.586 2.778"></path>
          </svg>
        </div>
      </div>

      <div className={`col-2 col-md-4 col-lg-6 order-4 px-0 ${styles.icon}`}>
        <div className={`${styles.counterHeader}`}>
          <span className={`${styles.counter}`} id={styles.counterTwo}>
            0
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
              // fill-rule="evenodd"
              d="M19.148 5.25H5.335l-1.18-2.115A.75.75 0 0 0 3.5 2.75H2a.75.75 0 0 0 0 1.5h1.06l1.164 2.088L6.91 12.28l.003.006l.237.523l-2.697 2.877a.75.75 0 0 0 .462 1.258l2.458.281a40.68 40.68 0 0 0 9.254 0l2.458-.28a.75.75 0 0 0-.17-1.491l-2.458.28a39.256 39.256 0 0 1-8.914 0l-.975-.11l1.98-2.112a.768.768 0 0 0 .053-.064l.752.098c1.055.138 2.122.165 3.182.08a9.29 9.29 0 0 0 6.366-3.268l.579-.685a.734.734 0 0 0 .053-.072l1.078-1.642c.764-1.164-.071-2.71-1.463-2.71M8.656 11.944a.484.484 0 0 1-.377-.278l-.002-.003l-2.22-4.913h13.09a.25.25 0 0 1 .21.387l-1.053 1.604l-.549.65a7.79 7.79 0 0 1-5.338 2.741c-.957.076-1.919.052-2.87-.072z"
              // clip-rule="evenodd"
            ></path>
            <path d="M6.5 18.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M16 20a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0"></path>
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
