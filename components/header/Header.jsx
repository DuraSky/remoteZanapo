import React, { useContext } from "react";
import Link from "next/link";

import styles from "./header.module.scss";

import { LanguageContext } from "../contexts/LanguageContext";

import { TopBar } from "./topBar/TopBar";
import { IconMenu } from "./iconMenu/IconMenu";
import { SearchBar } from "./searchBar/SearchBar";
import { InfoMenu } from "./infoMenu/InfoMenu";
import { MenuButton } from "./topMenu/MenuButton";

export const Header = () => {
  const { currentTranslations } = useContext(LanguageContext);

  return (
    <header className={`${styles.headerStyle} container-fluid`}>
      <div className="">
        <TopBar />
        <div className="row">
          <div className="col-3 col-md-6 col-lg-3 order-2 order-md-1 d-none d-md-flex">
            <Link href="/" passHref>
              <img
                src={currentTranslations.logo}
                alt="logo"
                className={`${styles.logo}`}
              />
            </Link>
          </div>
          <div
            className={`col-md-6 col-lg-6 order-1 order-md-2 align-items-end ${styles.infoMenu}`}
          >
            <InfoMenu />
          </div>
        </div>
        <div className={`row align-items-end px-0 ${styles.mobilePosition} `}>
          <div className="col-12 col-6 col-md-6 col-lg-3 order-1 order-md-3">
            <IconMenu />
          </div>
          <div className="col-12 col-md-6 col-lg-6 order-2">
            <SearchBar />
          </div>
          <div className="col-12 col-lg-3 order-3 order-md-5 order-lg-1 ">
            <MenuButton />
          </div>
        </div>
      </div>
    </header>
  );
};
