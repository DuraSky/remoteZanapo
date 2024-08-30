import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [topMenu, setTopMenu] = useState([]);
  const [topCategories, setTopCategories] = useState([]);
  const [sections, setSections] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [elements, setElements] = useState([]);
  const router = useRouter();

  const fetchHomepageData = async () => {
    try {
      const response = await fetch(
        // "http://pavel-fedora.tailcfce08.ts.net:8000/api/v1/homepage/content?sections=51,55&elements=toplinks,tips,favouritecategories",
        "https://api.test.zanapo.cz/api/v1/homepage/content?sections=51,55&elements=toplinks,tips,favouritecategories",
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const jsonData = await response.json();

      console.log("Fetched homepage data:", jsonData);

      if (jsonData.top_menu && jsonData.top_menu.categories) {
        setTopMenu(jsonData.top_menu.categories);
      }

      if (jsonData.top_categories) {
        setTopCategories(jsonData.top_categories);
      }

      if (jsonData.sections) {
        setSections(jsonData.sections);
      }

      if (jsonData.blog_posts) {
        setBlogPosts(jsonData.blog_posts);
      }

      if (jsonData.elements) {
        setElements(jsonData.elements);
      }
    } catch (error) {
      console.error("Error fetching homepage data:", error);
    }
  };

  useEffect(() => {
    if (router.pathname === "/") {
      fetchHomepageData();
    }
  }, [router.pathname]);

  return (
    <DataContext.Provider
      value={{
        topMenu,
        topCategories,
        sections,
        blogPosts,
        elements,
        setTopMenu,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
