import ProductDetails from "@/components/ProductDetails";
import React from "react";

const SingleItems = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:3000/api/all-products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const product = await res.json();
  console.log(product);
  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default SingleItems;
