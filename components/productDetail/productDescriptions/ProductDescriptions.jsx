import React from "react";

import styles from "./productdescriptions.module.scss";

export const ProductDescriptions = ({ description, features }) => {
  return (
    <div className={styles.productDescriptions}>
      <h3>Popis produktu</h3>
      <div className={`row ${styles.content}`}>
        <div className="col-9">
          <p>{description}</p>
        </div>
        {features && (
          <div className={`col-3 ${styles.propertiesWrapper}`}>
            <h4>Parametry produktu:</h4>
            {features.map((feature, index) => (
              <div key={index} className={styles.property}>
                <p className={styles.left}>- {feature.name}:</p>
                <p className={styles.right}>{feature.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
