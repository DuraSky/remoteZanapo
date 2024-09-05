import React from "react";
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
  return (
    <section className="container-fluid" id={styles.filterAndProducts}>
      <div className="row">
        <div className={`col-md-3 col-lg-2`}>
          <FilterComponent
            filterCategories={filterCategories}
            handleCheckboxChange={handleCheckboxChange} // KEEP THIS FUNCTION INTACT
            priceFilter={priceFilter}
          />
        </div>

        <div className="col-12 col-md-9 col-lg-10">
          <div className="row">
            <SortBar sortLinks={sortLinks} />
          </div>
          <div className="row">
            <Product filteredProducts={filteredProducts} />
          </div>
          <div className="row">
            <Pagination
              currentPage={currentPage}
              paginationLinks={paginationLinks}
              onPageChange={onPageChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
