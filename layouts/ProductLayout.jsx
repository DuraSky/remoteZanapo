import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import styles from "./productLayout.module.scss";

import { Header } from "../components/header/Header";
import { Footer } from "../elements/footer/Footer";
import { Benefits } from "../elements/benefits/Benefits";

import { DataContext } from "../components/contexts/DataContext";
import { BreadCrumbsNav } from "../components/category[slug]/breadcrumbsNav/BreadCrumbsNav";
import { Label } from "../components/carousel/labels/Label";
import { ProductName } from "../components/productDetail/productName/ProductName";
import { ImageSlideShow } from "../components/imageSlideShow/ImageSlideShow";

export const ProductLayout = ({ data }) => {
  const { setTopMenu } = useContext(DataContext);

  const [breadcrumbsLinks, setBreadcrumbsLinks] = useState([]);
  const [productInfo, setProductInfo] = useState({});

  useEffect(() => {
    if (data) {
      const { top_menu: topMenu, breadcrumbs, product } = data;

      if (topMenu && setTopMenu) {
        setTopMenu(topMenu.categories);
      }

      setBreadcrumbsLinks(breadcrumbs || []);
      setProductInfo(product || {});
    }
  }, [data, setTopMenu]);

  console.log("this the product", productInfo);

  return (
    <>
      <Header />
      <section className="container-fluid" id={styles.productDetail}>
        <div className="row">
          <BreadCrumbsNav breadcrumbsLinks={breadcrumbsLinks} />
        </div>

        <div className="row">
          <ProductName
            name={productInfo.name}
            ratingAvg={productInfo.rating_average}
            ratingCount={productInfo.rating_count}
          />
          <div className="col-sm-12 col-lg-6">
            <div className={styles.imagePreviewWrapper}>
              {/* <div className={styles.labelsContainer}>
                {productInfo.labels &&
                  productInfo.labels.map((label, labelIndex) => (
                    <Label
                      key={labelIndex}
                      title={label.title}
                      color={label.color}
                    />
                  ))}
              </div> */}

              {productInfo.images && (
                <ImageSlideShow
                  images={productInfo.images}
                  initialImage={{
                    src: productInfo.image,
                    alt: productInfo.name,
                  }}
                />
              )}
            </div>
          </div>

          <div className="col-sm-12 col-lg-6">
            <p style={{ color: productInfo.availability_color }}>
              {productInfo.availability_text}
            </p>
            <p style={{ color: productInfo.availability_color }}>
              {productInfo.delivery_date}
            </p>

            <p>{productInfo.price_f}</p>

            <button>Koupit</button>

            <p>{productInfo.description}</p>
          </div>
        </div>
      </section>

      <Benefits />
      <Footer />
    </>
  );
};
