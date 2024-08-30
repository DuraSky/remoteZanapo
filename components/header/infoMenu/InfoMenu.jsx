import React, { useContext } from "react";

import styles from "./infomenu.module.scss";

import { LanguageContext } from "../../contexts/LanguageContext";

export const InfoMenu = () => {
  const { currentTranslations } = useContext(LanguageContext);

  return (
    <div className={` text-right ${styles.styledInfoMenu}`}>
      <p>
        <a href="#">{currentTranslations.infoMenu1}</a>
        <a href="#">{currentTranslations.infoMenu2}</a>
        <a href="#">{currentTranslations.infoMenu3}</a>
      </p>
    </div>
  );
};
