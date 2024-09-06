import React, { useEffect, useState } from "react";
import styles from "./pagination.module.scss";

export const Pagination = ({
  currentPage,
  paginationLinks,
  onPageChange,
  handleScrollUp,
  showGoUpButton,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = document.documentElement.clientWidth;
      setIsMobile(viewportWidth < 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const totalPages = paginationLinks.length;
  const maxVisiblePages = () => {
    if (isMobile) {
      return 5;
    } else {
      return 10;
    }
  };

  const startPage = Math.max(
    1,
    currentPage - Math.floor(maxVisiblePages() / 2)
  );
  const endPage = Math.min(totalPages, startPage + maxVisiblePages() - 1);

  const adjustedStartPage =
    endPage - startPage < maxVisiblePages() - 1
      ? Math.max(1, endPage - maxVisiblePages() + 1)
      : startPage;

  const visiblePaginationLinks = paginationLinks.slice(
    adjustedStartPage - 1,
    endPage
  );

  return (
    paginationLinks.length > 0 && (
      <>
        {showGoUpButton && (
          <button onClick={handleScrollUp} className={styles.goUpButton}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M480-528 296-344l-56-56 240-240 240 240-56 56z" />
            </svg>
          </button>
        )}

        <div className={`col-12 ${styles.pagination}`}>
          {/* Render Previous Button */}
          <button
            className={styles.paginationControl}
            onClick={() =>
              onPageChange(
                currentPage - 1,
                paginationLinks[currentPage - 2]?.url
              )
            }
            disabled={currentPage === 1}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M560-240 320-480l240-240 56 56-184 184 184 184z" />
            </svg>
          </button>

          {/* Render visible page buttons */}
          {visiblePaginationLinks.map((link) => (
            <button
              key={link.page}
              onClick={() => onPageChange(link.page, link.url)}
              className={currentPage === link.page ? styles.activePage : ""}
            >
              {link.page}
            </button>
          ))}

          {/* Render Next Button */}
          <button
            className={styles.paginationControl}
            onClick={() =>
              onPageChange(currentPage + 1, paginationLinks[currentPage]?.url)
            }
            disabled={currentPage === paginationLinks.length}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 -960 960 960"
            >
              <path d="M504-480 320-664l56-56 240 240-240 240-56-56z" />
            </svg>
          </button>
        </div>
      </>
    )
  );
};
