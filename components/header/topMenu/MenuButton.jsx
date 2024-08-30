import React, { useContext, useState, useEffect } from "react";
import { DataContext } from "../../contexts/DataContext";
import Category from "./category/Category";
import styles from "./menubutton.module.scss";

export const MenuButton = () => {
  const { topMenu } = useContext(DataContext);
  const [hoveredCategoryName, setHoveredCategoryName] = useState(null);
  const [showCategories, setShowCategories] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkViewportWidth = () => {
      setIsDesktop(window.matchMedia("(min-width: 992px)").matches);
    };

    checkViewportWidth();
    window.addEventListener("resize", checkViewportWidth);

    return () => {
      window.removeEventListener("resize", checkViewportWidth);
    };
  }, []);

  const handleHover = (name) => {
    setHoveredCategoryName(name);
  };

  const handleUnhover = () => {
    setHoveredCategoryName(null);
  };

  const handleMenuLeave = () => {
    setHoveredCategoryName(null);
  };

  const handleCloseMenu = () => {
    setShowCategories(false);
  };

  const handleOpenMenu = () => {
    setShowCategories(true);
  };

  if (!isDesktop) {
    return null;
  }

  return (
    <div className={styles.menuButton} onMouseEnter={handleOpenMenu}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
      >
        <path d="M3 18v-2h18v2zm0-5v-2h18v2zm0-5V6h18v2z"></path>
      </svg>
      <p>Kategorie produktů</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className={styles.arrow}
      >
        <path
          d="M8 10l4 4 4-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        ></path>
      </svg>
      {/* Dropdown Menu */}
      {showCategories && (
        <ul className={styles.dropdown}>
          {topMenu.map((category) => (
            <Category
              key={category.name}
              category={category}
              isHovered={hoveredCategoryName === category.name}
              onHover={() => setHoveredCategoryName(category.name)}
              onUnhover={() => setHoveredCategoryName(null)}
              onCloseMenu={handleCloseMenu}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
