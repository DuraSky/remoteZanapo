import React, { useRef, useState, useEffect } from "react";
import { FilterComponent } from "./filterComponent/FilterComponent";
import { Product } from "./product/Product";
import { SortBar } from "./sortBar/SortBar";
import { Pagination } from "../pagination/Pagination";
import styles from "./productListing.module.scss";

import { MobileFilterComponent } from "./mobileFilterComponent/MobileFilterComponent";

export const ProductListing = ({
  filterCategories,
  filteredProducts,
  handleCheckboxChange,
  // productCount,
  priceFilter,
  sortLinks,
  currentPage,
  productsPerPage,
  paginationLinks,
  onPageChange,
}) => {
  const sortBarRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [showGoUpButton, setShowGoUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (sortBarRef.current) {
        const sortBarTop =
          sortBarRef.current.getBoundingClientRect().top + window.scrollY;
        const currentScroll = window.scrollY;

        if (currentScroll > sortBarTop) {
          setShowGoUpButton(true);
        } else {
          setShowGoUpButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollUp = () => {
    if (sortBarRef.current) {
      sortBarRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handlePageChange = (page, url) => {
    if (sortBarRef.current) {
      sortBarRef.current.scrollIntoView({ behavior: "smooth" });
    }
    onPageChange(page, url);
  };

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
              //productCount={productCount}
              priceFilter={priceFilter}
            />
          </div>
        ) : (
          <div className={`col-md-3 col-lg-2 p-0`}>
            <FilterComponent
              filterCategories={filterCategories}
              handleCheckboxChange={handleCheckboxChange}
              priceFilter={priceFilter}
            />
          </div>
        )}

        <div className="col-12 col-md-9 col-lg-10 ">
          <div className="row">
            <SortBar
              sortLinks={sortLinks}
              handleCheckboxChange={handleCheckboxChange}
              ref={sortBarRef}
            />
          </div>
          <div className="row">
            <Product filteredProducts={filteredProducts} />
          </div>
          <div className="row">
            <Pagination
              currentPage={currentPage}
              paginationLinks={paginationLinks}
              onPageChange={handlePageChange}
              handleScrollUp={handleScrollUp}
              showGoUpButton={showGoUpButton}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
