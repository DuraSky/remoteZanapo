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
import { BuySection } from "../components/productDetail/BuySection/BuySection";

export const ProductLayout = ({ data }) => {
  const { setTopMenu } = useContext(DataContext);

  const [breadcrumbsLinks, setBreadcrumbsLinks] = useState([]);
  const [productInfo, setProductInfo] = useState({});
  const [isDesktopView, setIsDesktopView] = useState(true);

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

  const handleResize = () => {
    const mediaQuery = window.matchMedia("(min-width: 992px)");
    setIsDesktopView(mediaQuery.matches);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  console.log("this the product", productInfo);

  return (
    <>
      <Header />
      <section className="container-fluid" id={styles.productDetail}>
        <div className="row">
          <BreadCrumbsNav breadcrumbsLinks={breadcrumbsLinks} />
        </div>

        {isDesktopView ? (
          <div className="row">
            <div className="col-sm-12 col-lg-6">
              <div className={styles.imagePreviewWrapper}>
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
              <ProductName
                name={productInfo.name}
                ratingAvg={productInfo.rating_average}
                ratingCount={productInfo.rating_count}
              />

              <p>{productInfo.description_short}</p>

              <BuySection
                availability_text={productInfo.availability_text}
                availability_color={productInfo.availability_color}
                delivery_date={productInfo.delivery_date}
                price_f={productInfo.price_f}
              />
            </div>
          </div>
        ) : (
          <div className="row">
            <ProductName
              name={productInfo.name}
              ratingAvg={productInfo.rating_average}
              ratingCount={productInfo.rating_count}
            />

            <div className="col-sm-12">
              <div className={styles.imagePreviewWrapper}>
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

              <BuySection
                availability_text={productInfo.availability_text}
                availability_color={productInfo.availability_color}
                delivery_date={productInfo.delivery_date}
                price_f={productInfo.price_f}
              />
              <p>{productInfo.description_short}</p>
            </div>
          </div>
        )}
      </section>

      <Benefits />
      <Footer />
    </>
  );
};
