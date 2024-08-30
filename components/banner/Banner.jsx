import React, { useState, useEffect, useRef } from "react";
import styles from "./banner.module.scss";

export const Banner = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef(null);

  const images = [
    "https://test.zanapo.cz/files/thumbs/d20d4aefaa0c290f8774b104f6a93b40/5e33752d5d546bb92d49a41e3b0e3c951a96a76679d4e064282daf7c11b66798-1456x.webp",
    "https://test.zanapo.cz/files/thumbs/21999d663177aab1c5467673a0516f18/e14a11251d09b314e0c33b0fb536beba81ce6c63e28ae7157733992eac6afab5-1456x.webp",
  ];

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      handleNextClick();
    }, 3000);
  };

  const resetAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();

    return () => clearInterval(autoplayRef.current);
  }, []);

  const handlePreviousClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    resetAutoplay();
    setSelectedIndex((prevIndex) => {
      if (prevIndex === 0) {
        setTimeout(() => {
          setIsTransitioning(false);
          setSelectedIndex(images.length - 1);
        }, 500);
        return prevIndex - 1;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return prevIndex - 1;
    });
  };

  const handleNextClick = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    resetAutoplay();
    setSelectedIndex((prevIndex) => {
      if (prevIndex === images.length - 1) {
        setTimeout(() => {
          setIsTransitioning(false);
          setSelectedIndex(0);
        }, 500);
        return prevIndex + 1;
      }
      setTimeout(() => setIsTransitioning(false), 500);
      return prevIndex + 1;
    });
  };

  const handleDotClick = (index) => {
    if (isTransitioning || index === selectedIndex) return;
    setIsTransitioning(true);
    resetAutoplay();
    setSelectedIndex(index);
    setTimeout(() => setIsTransitioning(false), 500); // Ensure the transition happens smoothly
  };

  return (
    <section id={styles.bannerWrapper} className="container-fluid">
      <div className={styles.imageContainer}>
        <div
          className={styles.slider}
          style={{
            transform: `translateX(-${(selectedIndex + 1) * 100}%)`,
            transition: isTransitioning ? "transform 0.5s ease" : "none",
          }}
        >
          <img
            src={images[images.length - 1]}
            alt={`Banner ${images.length}`}
            className={styles.bannerImage}
          />
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Banner ${index + 1}`}
              className={styles.bannerImage}
            />
          ))}
          <img
            src={images[0]}
            alt={`Banner 1`}
            className={styles.bannerImage}
          />
        </div>
      </div>
      <div className={styles.dotContainer}>
        {images.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              selectedIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};
