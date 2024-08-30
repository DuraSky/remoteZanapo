import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import { DataContext } from "../../contexts/DataContext";
import SubCategoriesMenu from "./subCategoriesMenu/SubCategoriesMenu";
import styles from "./topMenuMobile.module.scss";

const TopMenuMobile = ({ onClose }) => {
  const { topMenu } = useContext(DataContext);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isSliding, setIsSliding] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewportWidth = () => {
      setIsMobile(window.matchMedia("(max-width: 991px)").matches);
    };

    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  const handleExpandClick = (category) => {
    setIsSliding(true);
    setTimeout(() => {
      setExpandedCategory(category);
      setIsSliding(false);
    }, 300);
  };

  const handleBackToCategories = () => {
    setIsSliding(true);
    setTimeout(() => {
      setExpandedCategory(null);
      setIsSliding(false);
    }, 300);
  };

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleClose = () => {
    setIsActive(false);
    setTimeout(onClose, 300);
  };

  if (!isMobile) {
    return null;
  }

  return (
    <div className={styles.overlay}>
      <div
        className={`${styles.mobileMenuContainer} ${
          isActive ? styles.active : ""
        }`}
      >
        <div className={styles.mobileHeader}>
          {expandedCategory ? (
            <>
              <button
                className={styles.backButton}
                onClick={handleBackToCategories}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 4l-8 8 8 8" fill="none" strokeWidth="2"></path>
                </svg>
              </button>
              <p>{expandedCategory.name}</p>
            </>
          ) : (
            <p>Menu</p>
          )}
          <button className={styles.closeButton} onClick={handleClose}>
            X
          </button>
        </div>
        <div
          className={`${styles.menuContent} ${isSliding ? styles.sliding : ""}`}
        >
          {!expandedCategory ? (
            <ul>
              {topMenu.map((category) => (
                <li key={category.id}>
                  <div>
                    <Link href={`/${category.id}`} passHref>
                      <span onClick={handleClose}>
                        <img
                          src={`https://zanapo.cz/${category.image}`}
                          alt={category.name}
                          width={30}
                        />
                        {category.name}
                      </span>
                    </Link>
                    {category.subcategories &&
                    category.subcategories.length > 0 ? (
                      <button onClick={() => handleExpandClick(category)}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M8 4l8 8-8 8"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          ></path>
                        </svg>
                      </button>
                    ) : (
                      <span>&nbsp;</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <SubCategoriesMenu
              category={expandedCategory}
              onBack={handleBackToCategories}
              onClose={handleClose}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopMenuMobile;
