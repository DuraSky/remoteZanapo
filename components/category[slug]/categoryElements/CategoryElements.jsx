import React from "react";

import styles from "./categoryElements.module.scss";

export const CategoryElements = ({ apiElements }) => {
  return (
    <>
      {apiElements != null &&
        apiElements.map((elem) => (
          <div
            key={elem.identifier}
            className={styles.element}
            dangerouslySetInnerHTML={{ __html: elem.content }}
          ></div>
        ))}
    </>
  );
};
