import React from "react";

import { Header } from "../components/header/Header";
import { Footer } from "../elements/footer/Footer";

import styles from "./errorLayout.module.scss";

export const ErrorLayout = () => {
  return (
    <>
      <Header />

      <section>
        <div className={styles.errorBlock}>
          <p>Stránka nenalezena</p>
          <p>
            Prosím kontaktujte nás na čísle <span>+420 703 694 133</span>
          </p>
          <p>
            Nebo emailem na <span>zanapo@gmail.com</span>
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
};
