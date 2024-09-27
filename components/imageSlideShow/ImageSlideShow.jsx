import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ImageOverlay } from "./imageOverlay/ImageOverlay";
import styles from "./imageslideshow.module.scss";

export const ImageSlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwipe = useRef(false);
  const swipeThreshold = 50;
  const thumbnailRef = useRef(null); // Ref for the thumbnails container

  useEffect(() => {
    centerSelectedThumbnail(); // Automatically scroll thumbnails to the current image
  }, [currentIndex]);

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

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  const openOverlay = () => {
    setIsOverlayOpen(true);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const centerSelectedThumbnail = () => {
    if (thumbnailRef.current) {
      const thumbnailWidth = 120;
      const containerWidth = thumbnailRef.current.offsetWidth;
      const totalThumbnailsWidth = thumbnailRef.current.scrollWidth;
      const maxScrollLeft = totalThumbnailsWidth - containerWidth;

      const scrollToPosition =
        currentIndex * thumbnailWidth - containerWidth / 2 + thumbnailWidth / 2;

      const scrollLeft = Math.max(0, Math.min(scrollToPosition, maxScrollLeft));

      thumbnailRef.current.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  };

  const scrollThumbnailsManually = (direction) => {
    if (thumbnailRef.current) {
      const thumbnailWidth = 110;
      const scrollAmount =
        direction === "left" ? -3 * thumbnailWidth : 3 * thumbnailWidth;

      thumbnailRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
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
            width={1000}
            height={1000}
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
              onClick={() => setCurrentIndex(index)}
            ></span>
          ))}
        </div>

        {/* Thumbnails */}
        <div className={styles.thumbnailControls}>
          <button
            className={styles.carouselButton}
            onClick={() => scrollThumbnailsManually("left")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m14 7l-5 5m0 0l5 5"
              />
            </svg>
          </button>

          <div className={styles.thumbnailsWrapper} ref={thumbnailRef}>
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

          <button
            className={styles.carouselButton}
            onClick={() => scrollThumbnailsManually("right")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m10 17l5-5m0 0l-5-5"
              />
            </svg>
          </button>
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
