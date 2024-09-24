import React from "react";
import { CategoryLayout } from "../layouts/CategoryLayout";
import { ProductLayout } from "../layouts/ProductLayout";

const Page = ({ data }) => {
  switch (data.page_type) {
    case "category_detail":
      return <CategoryLayout data={data} />;
    case "product_detail":
      return <ProductLayout data={data} />;

    default:
      return <div>Page type not supported</div>;
  }
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

  console.log("YOURE FETCHING THIS URL", res);

  const data = await res.json();

  if (!data || !data.page_type) {
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

export default Page;
