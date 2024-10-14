import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { CategoryLayout } from "../layouts/CategoryLayout";
import { ProductLayout } from "../layouts/ProductLayout";
import { ErrorLayout } from "../layouts/ErrorLayout";

const Page = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!slug) return;
    const fetchData = async () => {
      try {
        const slugString = Array.isArray(slug) ? slug.join("/") : slug;
        const { page = 1 } = router.query;

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/url/content?requested_path=/${slugString}&page=${page}&elements=categoryfaq`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );
        console.log(
          "URL",
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/url/content?requested_path=/${slugString}&page=${page}&elements=categoryfaq`
        );

        const data = await res.json();
        if (data && data.page_type) {
          setData(data);
          console.log("This the data", data);
        } else {
          setError("Page type not supported");
        }
      } catch (err) {
        setError("Failed to load data");
      } finally {
      }
    };

    fetchData();
  }, [slug, router.query]);

  if (error) return <ErrorLayout />;

  if (data) {
    switch (data.page_type) {
      case "category_detail":
        return <CategoryLayout data={data} />;
      case "product_detail":
        return <ProductLayout data={data} />;
      default:
        return <div>Page type not supported</div>;
    }
  }
};

export default Page;
