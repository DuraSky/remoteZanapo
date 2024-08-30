import React, { useEffect, useContext, useState } from "react";
import { DataContext } from "../components/contexts/DataContext";
import { CategoryLayout } from "../components/CategoryLayout";
import { TopSection } from "../components/category[slug]/TopSection";
import { ProductListing } from "../components/category[slug]/ProductListing";

import styles from "/styles/slug.module.scss";

const CategoryPage = ({ data }) => {
  const { setTopMenu } = useContext(DataContext);
  const [showLongDescription, setShowLongDescription] = useState(false);
  const [bestProducts, setBestProducts] = useState([]);
  const [apiElements, setApiElements] = useState([]);
  const [breadcrumbsLinks, setBreadcrumbsLinks] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log("received from api", data);

  const {
    category,
    top_menu: topMenu,
    best_products,
    elements,
    breadcrumbs,
    filters,
    products,
  } = data;

  useEffect(() => {
    if (topMenu && setTopMenu) {
      setTopMenu(topMenu.categories);
    }

    if (best_products) {
      setBestProducts(best_products);
    }

    if (elements) {
      setApiElements(elements);
    }

    if (breadcrumbs) {
      setBreadcrumbsLinks(breadcrumbs);
    }

    if (filters) {
      setFilterCategories(filters);
    }

    if (products) {
      setFilteredProducts(products);
    }
  }, [
    topMenu,
    setTopMenu,
    best_products,
    elements,
    breadcrumbs,
    filters,
    products,
  ]);

  if (!category) {
    return <div>Kategorie nenalezena</div>;
  }

  const toggleDescription = () => {
    setShowLongDescription((prevState) => !prevState);
  };

  const handleCheckboxChange = async (categoryIndex, itemIndex) => {
    const selectedFilterUrl =
      filterCategories[categoryIndex].filter_items[itemIndex].url;

    try {
      const response = await fetch(
        `https://api.test.zanapo.cz/api/v1/url/content?requested_path=${selectedFilterUrl}&elements=categoryfaq`
      );
      const data = await response.json();

      setFilteredProducts(data.products);

      if (data.filters) {
        setFilterCategories(data.filters);
      }
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <>
      <TopSection
        category={category}
        showLongDescription={showLongDescription}
        apiElements={apiElements}
        bestProducts={bestProducts}
        toggleDescription={toggleDescription}
        breadcrumbsLinks={breadcrumbsLinks}
      />

      <ProductListing
        filterCategories={filterCategories}
        filteredProducts={filteredProducts}
        handleCheckboxChange={handleCheckboxChange}
      />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const res = await fetch(
    `https://api.test.zanapo.cz/api/v1/url/content?requested_path=/${slug}&elements=categoryfaq`,
    // `http://pavel-fedora.tailcfce08.ts.net:8000/api/v1/url/content?requested_path=/${slug}&elements=categoryfaq`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  console.log("Fetching at", res);

  const data = await res.json();

  if (!data || !data.category) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}

CategoryPage.getLayout = function getLayout(page) {
  return <CategoryLayout>{page}</CategoryLayout>;
};

export default CategoryPage;
