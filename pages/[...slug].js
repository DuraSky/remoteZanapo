import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
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
  //const [productCount, setProductCount] = useState(0);
  const [priceFilter, setPriceFilter] = useState(null);
  const [sortLinks, setSortLinks] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(data.active_page || 1);

  console.log(data);
  const categoryName = data.category ? data.category.slug : "";

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

      setBestProducts(best_products || []);
      setApiElements(elements || []);
      setBreadcrumbsLinks(breadcrumbs || []);
      setFilterCategories(filters || []);
      setFilteredProducts(products || []);
      // setProductCount(product_count || 0);
      setPriceFilter(price_filter || null);
      setSortLinks(sort_links || null);
      setProductsPerPage(per_page || 0);
    }
  }, [data, setTopMenu]);

  const handlePageChange = async (newPage, pagination_link) => {
    setCurrentPage(newPage);
    setFilteredProducts([]);

    const targetUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/url/content?requested_path=${pagination_link}&elements=categoryfaq`;

    router.push(pagination_link, undefined, { shallow: true });

    try {
      const response = await fetch(targetUrl);
      const newData = await response.json();

      // setFilteredProducts([]);
      // setFilteredProducts(newData.products);
      console.log("NEW PRODUCTS", newData);
      if (newData.products) setFilteredProducts(newData.products);
      if (newData.filters) setFilterCategories(newData.filters);
      if (newData.sort_links) setSortLinks(newData.sort_links);
    } catch (error) {
      console.error("Error fetching new page data:", error);
    }
  };

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
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/url/content?requested_path=${newPath}&elements=categoryfaq`
      );
      const data = await response.json();

      setFilteredProducts(data.products);
      if (data.filters) setFilterCategories(data.filters);
      if (data.sort_links) setSortLinks(data.sort_links);
    } catch (error) {
      console.error("Error fetching filtered data:", error);
    }
  };

  return (
    <>
      <TopSection
        category={data.category}
        showLongDescription={showLongDescription}
        apiElements={apiElements}
        bestProducts={bestProducts}
        toggleDescription={() => setShowLongDescription(!showLongDescription)}
        breadcrumbsLinks={breadcrumbsLinks}
      />

      <ProductListing
        filterCategories={filterCategories}
        filteredProducts={filteredProducts}
        handleCheckboxChange={handleCheckboxChange}
        // productCount={productCount}
        priceFilter={priceFilter}
        sortLinks={sortLinks}
        currentPage={currentPage}
        productsPerPage={productsPerPage}
        paginationLinks={data.pagination_links}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export async function getServerSideProps({ params, query }) {
  const { slug } = params;
  const { page = 1 } = query;

  const slugString = Array.isArray(slug) ? slug.join("/") : slug;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/url/content?requested_path=/${slugString}&page=${page}&elements=categoryfaq`,
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
