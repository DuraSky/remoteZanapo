import React from "react";

import styles from "/styles/slug.module.scss";

import { CategorySubMenu } from "./categorySubMenu/CategorySubMenu";
import { TopSellers } from "./topsellers/TopSellers";
import { CategoryElements } from "./categoryElements/CategoryElements";
import { CategoryText } from "./categoryText/CategoryText";
import { BreadCrumbsNav } from "./breadcrumbsNav/BreadCrumbsNav";

export const TopSection = ({
  category,
  showLongDescription,
  apiElements,
  bestProducts,
  toggleDescription,
  breadcrumbsLinks,
}) => {
  return (
    <div className={styles.wrapper}>
      <section className={`${styles.contentWrapperHead} container-fluid`}>
        {/* <div className="container-fluid"> */}
        <div className="row">
          <div className="col-12 pb-3">
            <BreadCrumbsNav breadcrumbsLinks={breadcrumbsLinks} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-7 align-self-start">
            <CategoryText
              category={category}
              showLongDescription={showLongDescription}
              toggleDescription={toggleDescription}
            />
            <div className="d-none d-md-flex">
              <CategoryElements apiElements={apiElements} />
            </div>
          </div>
          {bestProducts.length > 0 && (
            <TopSellers bestProducts={bestProducts} />
          )}
        </div>
        <div className="row">
          <CategorySubMenu category={category} />
        </div>
        {/* </div> */}
      </section>
    </div>
  );
};
