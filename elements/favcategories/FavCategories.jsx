import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./favcategories.module.scss";

export const FavCategories = () => {
  return (
    <section className={"container-fluid"}>
      <div className={styles.favCategoryWrapper}>
        <div className={styles.category}>
          <div className={styles.categoryHeader}>
            <Image
              src={"https://www.zanapo.cz/files/upload/sachy-ikona.svg"}
              width={"100"}
              height={"100"}
            />
            <h3>Šachy</h3>
          </div>
          <div className={styles.subcategoryList}>
            <Link href={"/drevene-sachy"}>Dřevěné šachy</Link>
            <Link href={"/luxusni-a-dekorativni-sachy"}>Umělecké šachy</Link>

            <Link href={"/drevene-turnajove-sachy"}>Turnajové šachy</Link>

            <Link href={"/magneticke-a-cestovni-sachy"}>Magnetické šachy</Link>

            <Link href={"/sachovnice"}>Šachovnice</Link>

            <Link href={"/sachove-figurky"}>Šachové figurky</Link>

            <Link href={"/sachove-programy"}>Šachové programy</Link>

            <Link href={"/levne-sachy"}>Levné šachy</Link>
            <Link href={"/darkove-sachy"}>Dárkové šachy</Link>
          </div>
        </div>

        <div className={styles.category}>
          <div className={styles.categoryHeader}>
            <Image
              src={"https://www.zanapo.cz/files/upload/sipky-ikona.svg"}
              width={"100"}
              height={"100"}
            />
            <h3>Šipky</h3>
          </div>
          <div className={styles.subcategoryList}>
            <Link href={"/sipkove-terce"}>Terče</Link>
            <Link href={"/sipky-soft"}>Šipky soft</Link>

            <Link href={"/sipky-steel"}>Šipky steel</Link>

            <Link href={"/sipky-podle-hracu"}>Šipky podle hráčů</Link>

            <Link href={"/nasadky"}>Násadky</Link>

            <Link href={"/hroty"}>Hroty</Link>

            <Link href={"/letky-na-sipky"}>Letky</Link>

            <Link href={"/doplnky-k-sipkam"}>Doplňky</Link>
          </div>
        </div>

        <div className={styles.category}>
          <div className={styles.categoryHeader}>
            <Image
              src={"https://www.zanapo.cz/files/upload/puzzle-ikona.svg"}
              width={"100"}
              height={"100"}
            />
            <h3>Puzzle</h3>
          </div>
          <div className={styles.subcategoryList}>
            <Link href={"/puzzle-pro-deti"}>Puzzle pro děti</Link>
            <Link href={"/puzzle-pro-dospele"}>Puzzle pro dospělé</Link>

            <Link href={"/puzzle-podle-poctu-dilku"}>
              Puzzle dle počtu dílků
            </Link>

            <Link href={"/svitici-puzzle"}>Svítící puzzle</Link>

            <Link href={"/panoramaticke-puzzle"}>Panoramatické puzzle</Link>

            <Link href={"/cernobile-puzzle"}>Černobílé puzzle</Link>

            <Link href={"/prislusenstvi"}>Příslušenství</Link>
          </div>
        </div>

        <div className={styles.category}>
          <div className={styles.categoryHeader}>
            <Image
              src={"https://www.zanapo.cz/files/upload/vanoce-ikona.svg"}
              width={"100"}
              height={"100"}
            />
            <h3>Vánoce</h3>
          </div>
          <div className={styles.subcategoryList}>
            <Link href={"/umele-vanocni-stromecky"}>Umělé Vánoční stromky</Link>
            <Link href={"/vanocni-figurky-na-stromecek"}>Vánoční figurky</Link>

            <Link href={"/vanocni-vence"}>Vánoční věnce</Link>

            <Link href={"/vanocni-banky"}>Vánoční baňky</Link>

            <Link href={"/spice"}>Špice</Link>

            <Link href={"/girlandy"}>Girlandy</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
