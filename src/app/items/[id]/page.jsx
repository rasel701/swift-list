import ProductDetails from "@/components/ProductDetails";
import React from "react";

const SingleItems = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API}/api/all-products/${id}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  const product = await res.json();

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleItems;
