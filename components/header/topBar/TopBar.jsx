import React, { useContext } from "react";
import CountryDropDown from "../languageSwitcher/CountryDropDown";
import styles from "./topbar.module.scss";

import { LanguageContext } from "../../contexts/LanguageContext";

export const TopBar = () => {
  const { currentTranslations } = useContext(LanguageContext);

  return (
    <div className={styles.topBar}>
      <p>{currentTranslations.help_text}</p>
      <CountryDropDown />
    </div>
  );
};
