import React, { useRef, useEffect } from "react";
import Image from "next/image";
import styles from "./imageoverlay.module.scss";

export const ImageOverlay = ({
  images,
  currentIndex,
  setCurrentIndex,
  isOverlayOpen,
  closeOverlay,
}) => {
  const currentImage = images[currentIndex];
  const thumbnailRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const swipeThreshold = 50;

  useEffect(() => {
    scrollThumbnailsToCurrent();
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeOverlay();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].screenX;
    touchEndX.current = touchStartX.current;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = () => {
    const touchDelta = touchStartX.current - touchEndX.current;

    if (Math.abs(touchDelta) > swipeThreshold) {
      if (touchDelta > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
  };

  const scrollThumbnailsToCurrent = () => {
    if (thumbnailRef.current) {
      const thumbnailWidth = 110;
      const scrollPosition = currentIndex * thumbnailWidth;
      thumbnailRef.current.scrollTo({
        left: scrollPosition - thumbnailWidth * 2,
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
      {isOverlayOpen && (
        <div className={styles.overlayWrapper} onClick={handleOverlayClick}>
          <div className={styles.overlay}>
            <div
              className={styles.overlayContent}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button className={styles.closeButton} onClick={closeOverlay}>
                &times;
              </button>

              <Image
                src={`https://zanapo.cz/${currentImage.src}`}
                alt={currentImage.alt}
                width={1000}
                height={1000}
                objectFit="contain"
              />

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
                      onClick={() => setCurrentIndex(index)}
                    >
                      <Image
                        src={`https://zanapo.cz/${image.src}`}
                        alt={image.alt}
                        width={100}
                        height={100}
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
          </div>
        </div>
      )}
    </>
  );
};
