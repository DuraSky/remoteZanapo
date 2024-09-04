import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router"; // Import useRouter for URL manipulation
import { DataContext } from "../components/contexts/DataContext";
import { CategoryLayout } from "../components/CategoryLayout";
import { TopSection } from "../components/category[slug]/TopSection";
import { ProductListing } from "../components/category[slug]/ProductListing";
import styles from "/styles/slug.module.scss";

const CategoryPage = ({ data }) => {
  const { setTopMenu } = useContext(DataContext);
  const router = useRouter();
  const [showLongDescription, setShowLongDescription] = useState(false);
  const [bestProducts, setBestProducts] = useState([]);
  const [apiElements, setApiElements] = useState([]);
  const [breadcrumbsLinks, setBreadcrumbsLinks] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [priceFilter, setPriceFilter] = useState(null);
  const [sortLinks, setSortLinks] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(0);

  const categoryName = data.category ? data.category.slug : "";
  console.log(data, "gettin this data");

  useEffect(() => {
    if (data) {
      const {
        category,
        top_menu: topMenu,
        best_products,
        elements,
        breadcrumbs,
        filters,
        products,
        product_count,
        price_filter,
        sort_links,
        per_page,
      } = data;

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

      if (product_count) {
        setProductCount(product_count);
      }

      if (price_filter) {
        setPriceFilter(price_filter);
      }

      if (sort_links) {
        setSortLinks(sort_links);
      }
      if (per_page) {
        setProductsPerPage(per_page);
      }
    }
    console.log(data);
  }, [data, setTopMenu]);

  const handleCheckboxChange = async (categoryIndex, itemIndex, updatedUrl) => {
    let selectedFilterUrl;

    if (categoryIndex !== null && itemIndex !== null) {
      selectedFilterUrl =
        filterCategories[categoryIndex].filter_items[itemIndex].url;
    } else if (updatedUrl) {
      selectedFilterUrl = updatedUrl;
    } else {
      console.error("No valid URL provided.");
      return;
    }

    const strippedFilterUrl = selectedFilterUrl.replace(/^\/schach/, "");

    const currentPath = router.asPath.split("?")[0];

    let newPath;
    if (router.asPath.includes(strippedFilterUrl)) {
      newPath = currentPath.replace(strippedFilterUrl, "").replace("//", "/");
    } else {
      newPath = `${currentPath}${strippedFilterUrl}`.replace("//", "/");
    }

    window.history.pushState({}, "", newPath);

    try {
      const response = await fetch(
        `http://pavel-fedora.tailcfce08.ts.net:8000/api/v1/url/content?requested_path=${newPath}&elements=categoryfaq`
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

  useEffect(() => {
    const handleUrlChange = () => {
      const currentPath = router.asPath;
      const newFilterCategories = [...filterCategories];

      filterCategories.forEach((category, catIndex) => {
        category.filter_items.forEach((item, itemIndex) => {
          if (!currentPath.includes(item.url)) {
            newFilterCategories[catIndex].filter_items[
              itemIndex
            ].is_in_filter = false;
          }
        });
      });

      setFilterCategories(newFilterCategories);
    };

    router.events.on("routeChangeComplete", handleUrlChange);

    return () => {
      router.events.off("routeChangeComplete", handleUrlChange);
    };
  }, [router, filterCategories]);

  if (!data.category) {
    return <div>Kategorie nenalezena</div>;
  }

  const toggleDescription = () => {
    setShowLongDescription((prevState) => !prevState);
  };

  return (
    <>
      <TopSection
        category={data.category}
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
        productCount={productCount}
        priceFilter={priceFilter}
        sortLinks={sortLinks}
      />
    </>
  );
};

export async function getServerSideProps({ params }) {
  const { slug } = params;

  const slugString = Array.isArray(slug) ? slug.join("/") : slug;

  const res = await fetch(
    `http://pavel-fedora.tailcfce08.ts.net:8000/api/v1/url/content?requested_path=/${slugString}&elements=categoryfaq`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

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
