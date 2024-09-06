import React, { useRef } from "react";
import { FilterComponent } from "./filterComponent/FilterComponent";
import { Product } from "./product/Product";
import { SortBar } from "./sortBar/SortBar";
import { Pagination } from "../pagination/Pagination";
import styles from "./productListing.module.scss";

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
  return (
    <section className="container-fluid" id={styles.filterAndProducts}>
      <div className="row">
        <div className={`col-md-3 col-lg-2`}>
          <FilterComponent
            filterCategories={filterCategories}
            handleCheckboxChange={handleCheckboxChange}
            priceFilter={priceFilter}
          />
        </div>

        <div className="col-12 col-md-9 col-lg-10">
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
              handleScrollUp={handleScrollUp} // Passing handleScrollUp here
            />
          </div>
        </div>
      </div>
    </section>
  );
};
