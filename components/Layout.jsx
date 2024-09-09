import React, { useContext } from "react";
import { Header } from "./header/Header";
import { Banner } from "./banner/Banner";
import { Carousel } from "./carousel/Carousel";
import { BlogPosts } from "./blogposts/BlogPosts";

import { FavCategories } from "../elements/favcategories/FavCategories";

import { DataContext } from "./contexts/DataContext";

import { ElementTest } from "./elementTest/ElementTest";
import { Footer } from "../elements/footer/Footer";

export const Layout = ({ children }) => {
  const { sections } = useContext(DataContext);

  return (
    <>
      <Header />
      <Banner />
      <FavCategories />

      {sections.map((section, index) => (
        <Carousel key={index} section={section} />
      ))}

      <BlogPosts />

      <Footer />

      {/* <ElementTest /> */}
    </>
  );
};
