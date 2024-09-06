import React, { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import styles from "./topCategories.module.scss";

import Image from "next/image";

export const TopCategories = () => {
  const { elements } = useContext(DataContext);

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <section className={`container-fluid`} id={styles.topCategories}>
        {elements.identifier === "favouritecategories" && (
          <div dangerouslySetInnerHTML={{ __html: elements.content }}></div>
        )}
      </section>
    </div>
  );
};
