import React from "react";
import Link from "next/link";
import styles from "./breadCrumbsNav.module.scss";

export const BreadCrumbsNav = ({ breadcrumbsLinks }) => {
  // Reverse the breadcrumbsLinks array
  const reversedBreadcrumbs = [...breadcrumbsLinks].reverse();

  return (
    <nav className={styles.breadcrumbs}>
      <ul className={styles.breadcrumbList}>
        <li className={styles.breadcrumbItem}>
          <Link href="/" className={styles.homeLink}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
            </svg>
            <span className={styles.breadcrumbSeparator}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 -960 960 960"
                className={styles.separatorIcon}
              >
                <path d="M504-480 320-664l56-56 240 240-240 240-56-56z" />
              </svg>
            </span>
          </Link>
        </li>
        {reversedBreadcrumbs.map((breadcrumb, index) => (
          <li key={index} className={styles.breadcrumbItem}>
            {index === reversedBreadcrumbs.length - 1 ? (
              <span className={`${styles.breadcrumbLink} ${styles.current}`}>
                {breadcrumb.title}
              </span>
            ) : (
              <Link href={breadcrumb.link} className={styles.breadcrumbLink}>
                {breadcrumb.title}
              </Link>
            )}
            {index < reversedBreadcrumbs.length - 1 && (
              <span className={styles.breadcrumbSeparator}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 -960 960 960"
                  className={styles.separatorIcon}
                >
                  <path d="M504-480 320-664l56-56 240 240-240 240-56-56z" />
                </svg>
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
