import React from "react";
import styles from "./pagination.module.scss";

export const Pagination = ({ currentPage, paginationLinks, onPageChange }) => {
  return (
    <div className={styles.pagination}>
      {/* Render Previous Button */}
      <button
        onClick={() =>
          onPageChange(currentPage - 1, paginationLinks[currentPage - 2]?.url)
        }
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Render Page Buttons */}
      {paginationLinks.map((link) => (
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
        onClick={() =>
          onPageChange(currentPage + 1, paginationLinks[currentPage]?.url)
        }
        disabled={currentPage === paginationLinks.length}
      >
        Next
      </button>
    </div>
  );
};
