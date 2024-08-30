import React, { useState, useEffect } from "react";
import { FilterComponent } from "./filterComponent/FilterComponent";
import { MobileFilterComponent } from "./mobileFilterComponent/MobileFilterComponent";
import { Product } from "./product/Product";
import { SortBar } from "./sortBar/SortBar";
import styles from "./productListing.module.scss";

export const ProductListing = ({
  filterCategories,
  handleCheckboxChange,
  filteredProducts,
}) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = document.documentElement.clientWidth;
      setIsMobile(viewportWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container-fluid" id={styles.filterAndProducts}>
      <div className="row">
        {isMobile ? (
          <div
            className={`${styles.mobileButton} d-flex justify-content-center`}
          >
            <MobileFilterComponent
              filterCategories={filterCategories}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        ) : (
          <div className={`col-md-2`}>
            <FilterComponent
              filterCategories={filterCategories}
              handleCheckboxChange={handleCheckboxChange}
            />
          </div>
        )}

        <div className="col-12 col-md-10">
          <div className="row">
            <SortBar />
          </div>
          <div className="row">
            <Product filteredProducts={filteredProducts} />
          </div>
        </div>
      </div>
    </section>
  );
};
