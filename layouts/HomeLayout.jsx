import React, { useContext } from "react";
import { Header } from "../components/header/Header";
import { Banner } from "../components/banner/Banner";
import { Carousel } from "../components/carousel/Carousel";
import { BlogPosts } from "../components/blogposts/BlogPosts";

import { FavCategories } from "../elements/favcategories/FavCategories";

import { DataContext } from "../components/contexts/DataContext";

import { ElementTest } from "../components/elementTest/ElementTest";
import { Footer } from "../elements/footer/Footer";
import { Benefits } from "../elements/benefits/Benefits";

import styles from "./homeLayout.module.scss";

export const HomeLayout = ({ children }) => {
  const { sections } = useContext(DataContext);

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Banner />
        <FavCategories />

        {sections.map((section, index) => (
          <Carousel key={index} section={section} />
        ))}

        <BlogPosts />

        <Benefits />
      </div>
      <Footer />

      {/* <ElementTest /> */}
    </>
  );
};
