import React from "react";

import Image from "next/image";

import styles from "./benefits.module.scss";

export const Benefits = () => {
  return (
    <section className="container-fluid">
      <div className={styles.benefitsWrapper}>
        <div className={styles.benefit}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="m440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26a175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57M255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432"
              />
            </svg>
          </div>
          <div className={styles.benefitText}>
            <p>Jsme přímí dovozci od výrobce</p>
            <p className={styles.subText}>Z výrobny přimo k vám</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="72"
              height="64"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M259.3 17.8L194 150.2L47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103l-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5l105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2L316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0"
              />
            </svg>
          </div>
          <div className={styles.benefitText}>
            <p>Prémiová kvalita produktů</p>
            <p className={styles.subText}>dbáme na kvalitu produktů</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15C-7.534 4.736 3.562-3.248 8 1.314"
              />
            </svg>
          </div>
          <div className={styles.benefitText}>
            <p>100% spokojenost</p>
            <p className={styles.subText}>ověřeno zákazníky, heureka.cz</p>
          </div>
        </div>

        <div className={styles.benefit}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="64"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M624 352h-16V243.9c0-12.7-5.1-24.9-14.1-33.9L494 110.1c-9-9-21.2-14.1-33.9-14.1H416V48c0-26.5-21.5-48-48-48H112C85.5 0 64 21.5 64 48v48H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h272c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H40c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h208c4.4 0 8 3.6 8 8v16c0 4.4-3.6 8-8 8H64v128c0 53 43 96 96 96s96-43 96-96h128c0 53 43 96 96 96s96-43 96-96h48c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16M160 464c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m320 0c-26.5 0-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48m80-208H416V144h44.1l99.9 99.9z"
              />
            </svg>
          </div>
          <div className={styles.benefitText}>
            <p>Rychlá expedice</p>
            <p className={styles.subText}>Patříme mezi nejrychlejší na trhu</p>
          </div>
        </div>
      </div>
    </section>
  );
};
