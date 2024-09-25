import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ImageOverlay } from "./imageOverlay/ImageOverlay";
import styles from "./imageslideshow.module.scss";

export const ImageSlideShow = ({ images, initialImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwipe = useRef(false);
  const swipeThreshold = 50;

  useEffect(() => {}, [currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    touchEndX.current = touchStartX.current;
    isSwipe.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;

    if (Math.abs(touchStartX.current - touchEndX.current) > swipeThreshold) {
      isSwipe.current = true;
    }
  };

  const handleTouchEnd = () => {
    const touchDelta = touchStartX.current - touchEndX.current;

    if (isSwipe.current) {
      if (touchDelta > swipeThreshold) {
        nextImage();
      } else if (touchDelta < -swipeThreshold) {
        prevImage();
      }
    } else {
      openOverlay();
    }
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  return (
    <>
      <div className={styles.imageSlideShow}>
        {/* Main Image */}
        <div
          className={styles.mainImageWrapper}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onClick={openOverlay}
        >
          <Image
            src={`https://zanapo.cz${images[currentIndex].src}`}
            alt={images[currentIndex].alt}
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>

        {/* Dots for Mobile */}
        <div className={styles.dotsWrapper}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                index === currentIndex ? styles.activeDot : ""
              }`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>

        <div className={styles.thumbnailsWrapper}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`${styles.thumbnail} ${
                index === currentIndex ? styles.activeThumbnail : ""
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <Image
                src={`https://zanapo.cz${image.src}`}
                alt={image.alt}
                width={80}
                height={80}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>

      <ImageOverlay
        images={images}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        isOverlayOpen={isOverlayOpen}
        closeOverlay={closeOverlay}
      />
    </>
  );
};
