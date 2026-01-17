import ProductCard from "@/components/ProductCard";
import React from "react";

const Items = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API}/api/all-products`, {
    cache: "force-cache",
    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await res.json();
  return (
    <div>
      <h2 className="text-center font-bold  text-6xl pt-40">All Products</h2>
      <div className="min-h-screen bg-[#05070A] py-10 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
