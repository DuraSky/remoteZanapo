import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ImageOverlay } from "./imageOverlay/ImageOverlay";
import styles from "./imageslideshow.module.scss";

export const ImageSlideShow = ({ images, initialImage }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImage, setCurrentImage] = useState(initialImage || images[0]);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Synchronize currentImage with currentIndex
  useEffect(() => {
    setCurrentImage(images[currentIndex]);
  }, [currentIndex, images]);

  // Handle swiping logic
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextImage();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      prevImage();
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
      <div
        className={styles.imageSlideShow}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Main Image */}
        <div className={styles.mainImageWrapper} onClick={openOverlay}>
          <Image
            src={`https://zanapo.cz/${currentImage.src}`}
            alt={currentImage.alt}
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>

        {/* Dots for Mobile */}
        <div className={` ${styles.dotsWrapper}`}>
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

        {/* Thumbnails for Desktop */}
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
                src={`https://zanapo.cz/${image.src}`}
                alt={image.alt}
                width={80}
                height={80}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Use ImageOverlay component for the enlarged view */}
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
