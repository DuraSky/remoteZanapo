import React from "react";

import Link from "next/link";
import Image from "next/image";

import styles from "./favcategories.module.scss";

export const FavCategories = () => {
  return (
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
    </div>
  );
};
