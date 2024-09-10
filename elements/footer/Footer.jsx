import React from "react";

import styles from "./footer.module.scss";

import Link from "next/link";

export const Footer = () => {
  return (
    <section className="container-fluid">
      <webmex>
        <div className={styles.footerWrapper}>
          <div className={styles.footerSection}>
            <h3>Zákaznický servis</h3>
            <div className={styles.footerList}>
              <Link href={"#"}>Kontakty</Link>
              <Link href={"#"}>Registrace</Link>
              <Link href={"#"}>Doprava a Platba</Link>
              <Link href={"#"}>Obchodní podmínky</Link>
              <Link href={"#"}>Podmínky ochrany osobních údajů</Link>
              <Link href={"#"}>Reklamace zboží</Link>
              <Link href={"#"}>Odstoupení od smlouvy</Link>
              <Link href={"#"}>Nastavení Cookies</Link>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Informace</h3>
            <div className={styles.footerList}>
              <Link href={"#"}>O nás</Link>
              <Link href={"#"}>Návod k použití - vánoční stromky</Link>
              <Link href={"#"}>Návod k použití - šachy</Link>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Oblíbené kategorie</h3>
            <div className={styles.footerList}>
              <Link href={"/sachy"}>Šachy</Link>
              <Link href={"/magneticke-a-cestovni-sachy"}>
                Magnetické šachy
              </Link>
              <Link href={"/umele-vanocni-stromecky"}>
                Umělé vánoční stromky
              </Link>
              <Link href={"/elektronicke-terce-na-sipky"}>
                Elektronické šipky
              </Link>
              <Link href={"/vodni-fontany"}>Fontány</Link>
              <Link href={"/pokojove-fontany"}>Pokojové fontány</Link>
              <Link href={"/drevene-sachy"}>Dřevěné šachy</Link>
              <Link href={"/luxusni-sachy"}>Luxusní šachy</Link>{" "}
              <Link href={"/diamantove-malovani"}>Diamantové malování</Link>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h3>Kontakt</h3>
            <div className={styles.footerList}>
              <Link href={"#"}>info@zanapo.cz</Link>
              <Link href={"#"}>Umělé vánoční stromky Ostrava (Showroom)</Link>
              <div className={styles.socialLinks}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="32"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1" />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="32"
                    viewBox="0 0 448 512"
                  >
                    <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48c27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </webmex>
    </section>
  );
};
