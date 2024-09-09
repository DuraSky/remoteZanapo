import React from "react";

import styles from "./footer.module.scss";

import Link from "next/link";

export const Footer = () => {
  return (
    <section className="container-fluid">
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
            <Link href={"/magneticke-a-cestovni-sachy"}>Magnetické šachy</Link>
            <Link href={"/umele-vanocni-stromecky"}>Umělé vánoční stromky</Link>
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
          </div>
        </div>
      </div>
    </section>
  );
};
