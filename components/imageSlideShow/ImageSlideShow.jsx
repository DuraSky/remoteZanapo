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
      const thumbnailHeight = 60;
      const containerHeight = thumbnailRef.current.offsetHeight;
      const totalThumbnailsHeight = thumbnailRef.current.scrollHeight;
      const maxScrollTop = totalThumbnailsHeight - containerHeight;

      const scrollToPosition =
        currentIndex * thumbnailHeight -
        containerHeight / 2 +
        thumbnailHeight / 2;

      const scrollTop = Math.max(0, Math.min(scrollToPosition, maxScrollTop));

      thumbnailRef.current.scrollTo({
        top: scrollTop,
        behavior: "smooth",
      });
    }
  };

  const scrollThumbnailsManually = (direction) => {
    if (thumbnailRef.current) {
      const thumbnailHeight = 110;
      const scrollAmount =
        direction === "up" ? -3 * thumbnailHeight : 3 * thumbnailHeight;

      thumbnailRef.current.scrollBy({
        top: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className={styles.imageSlideShow}>
        {/* Main Image */}

        {/* Thumbnails */}
        <div className={styles.thumbnailControls}>
          <button
            className={styles.carouselButton}
            onClick={() => scrollThumbnailsManually("up")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="m240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495L69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001"
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
            onClick={() => scrollThumbnailsManually("down")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0"
              />
            </svg>
          </button>
        </div>

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
            width={1200}
            height={1200}
            objectFit="contain"
          />

          <div className={styles.imageOverlay}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 512 512"
            >
              <path
                fill="white"
                d="m479.6 399.716l-81.084-81.084l-62.368-25.767A175 175 0 0 0 368 192c0-97.047-78.953-176-176-176S16 94.953 16 192s78.953 176 176 176a175.03 175.03 0 0 0 101.619-32.377l25.7 62.2l81.081 81.088a56 56 0 1 0 79.2-79.195M48 192c0-79.4 64.6-144 144-144s144 64.6 144 144s-64.6 144-144 144S48 271.4 48 192m408.971 264.284a24.03 24.03 0 0 1-33.942 0l-76.572-76.572l-23.894-57.835l57.837 23.894l76.573 76.572a24.03 24.03 0 0 1-.002 33.941"
              />
            </svg>
          </div>
        </div>
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
