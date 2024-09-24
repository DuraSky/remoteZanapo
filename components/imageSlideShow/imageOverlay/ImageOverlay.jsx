import React from "react";
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

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleOverlayClick = (e) => {
    console.log("Clicked target:", e.target); // This will show what exactly is being clicked
    if (e.target === e.currentTarget) {
      closeOverlay(); // This will close only when clicking on the overlay background
    }
  };

  return (
    <>
      {isOverlayOpen && (
        <div className={styles.overlay} onClick={handleOverlayClick}>
          {/* The overlayContent div shouldn't trigger the close */}
          <div className={styles.overlayContent}>
            <button className={styles.closeButton} onClick={closeOverlay}>
              &times;
            </button>

            {/* Main Image */}
            <Image
              src={`https://zanapo.cz/${currentImage.src}`}
              alt={currentImage.alt}
              width={500}
              height={500}
              objectFit="contain"
            />

            {/* Prev/Next buttons */}
            <button className={styles.prevButton} onClick={prevImage}>
              {"<"}
            </button>
            <button className={styles.nextButton} onClick={nextImage}>
              {">"}
            </button>

            {/* Thumbnails */}
            <div className={styles.thumbnailsWrapper}>
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
          </div>
        </div>
      )}
    </>
  );
};
