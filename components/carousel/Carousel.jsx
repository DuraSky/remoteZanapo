import React, { useState, useRef, useEffect } from "react";
import styles from "./carousel.module.scss";

import { Label } from "./labels/Label";
import { Ratings } from "./ratings/Ratings";

export const Carousel = ({ section }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const carouselRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (carouselRef.current) {
        const width = carouselRef.current.offsetWidth;
        const itemsToShow = getVisibleItems();
        setVisibleItems(itemsToShow);
        setItemWidth(width / itemsToShow);
      }
    };

    const getVisibleItems = () => {
      const width = window.innerWidth;
      if (width <= 500) return 1;
      if (width <= 750) return 2;
      if (width <= 1000) return 3;
      if (width <= 1200) return 4;
      return 5;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const next = () => {
    if (currentIndex < section.products.length - visibleItems) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className={`container-fluid ${styles.carouselContainer}`}>
      <div className={styles.carouselWrapper}>
        <h2 className={styles.carouselHeader}>{section.name}</h2>
        <div className={styles.carouselInnerWrapper}>
          {currentIndex > 0 && (
            <button
              className={`${styles.carouselButton} ${styles.prevButton}`}
              onClick={prev}
            >
              {"<"}
            </button>
          )}
          <div className={styles.carouselViewport} ref={carouselRef}>
            <div
              className={styles.carouselInner}
              style={{
                transform: `translateX(-${currentIndex * itemWidth}px)`,
                width: `${section.products.length * itemWidth}px`,
              }}
            >
              {section.products.map((product, index) => (
                <div
                  className={styles.carouselItem}
                  key={index}
                  style={{ width: `${itemWidth}px` }}
                >
                  <div className={styles.product}>
                    <img
                      src={`https://zanapo.cz/${product.image}`}
                      alt={product.name}
                    />
                    <h3>{product.name}</h3>

                    {product.rating_average && (
                      <Ratings
                        index={index}
                        ratingAverage={product.rating_average}
                        ratingCount={product.rating_count}
                      />
                    )}
                    <p className={styles.price}>{product.price_f}</p>
                    <div className={styles.labelsContainer}>
                      {product.labels &&
                        product.labels.map((label, labelIndex) => (
                          <Label
                            key={labelIndex}
                            title={label.title}
                            color={label.color}
                          />
                        ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {currentIndex < section.products.length - visibleItems && (
            <button
              className={`${styles.carouselButton} ${styles.nextButton}`}
              onClick={next}
            >
              {">"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
